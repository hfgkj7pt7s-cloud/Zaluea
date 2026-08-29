const gameGrid = document.querySelector("#game-grid");
const gameCount = document.querySelector("#game-count");
const searchInput = document.querySelector("#game-search");

const safeText = (value, fallback = "") => {
  return typeof value === "string" && value.trim() ? value : fallback;
};

const encodePath = (path) => {
  if (!path || path === "#") return path;
  if (/^https?:\/\//i.test(path)) return path;
  return path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
};

const renderGames = (gameList) => {
  if (!gameGrid) return;

  gameGrid.innerHTML = "";
  const safeGames = Array.isArray(gameList) ? gameList : [];

  safeGames.forEach((game, index) => {
    const title = safeText(game?.title, "Untitled game");
    const description = safeText(game?.description, "More details coming soon.");
    const category = safeText(game?.category, "Misc");
    const image = encodePath(safeText(game?.image, ""));
    const color = ["pink", "blue", "gold", "green"].includes(game?.color) ? game.color : "blue";
    const active = Boolean(game?.active);
    const link = safeText(game?.link, "#");
    const buttonClass = active ? "" : "disabled";
    const buttonHref = active ? encodePath(link) : "#";
    const buttonLabel = active ? "Play now" : "Coming soon";
    const placeholderText = title
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 3) || "G";
    const card = document.createElement("article");
    card.className = `game-card ${color}`;
    card.style.setProperty("--delay", `${index * 75}ms`);
    card.innerHTML = `
      <div class="game-art">
        ${image
          ? `<img src="${image}" alt="${title}" loading="lazy">`
          : `<div class="game-art-placeholder">${placeholderText}</div>`}
        <b>${String(index + 1).padStart(2, "0")}</b>
      </div>
      <div class="game-info">
        <p class="category">${category}</p>
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${buttonHref}" class="game-button ${buttonClass}" ${
          active ? (buttonHref.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : "") : 'aria-disabled="true"'
        }>
          ${buttonLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>`;

    const imageElement = card.querySelector(".game-art img");
    if (imageElement) {
      imageElement.addEventListener("error", () => {
        imageElement.style.display = "none";
        const placeholder = document.createElement("div");
        placeholder.className = "game-art-placeholder";
        placeholder.textContent = placeholderText;
        imageElement.parentNode.insertBefore(placeholder, imageElement.nextSibling);
      });
    }

    gameGrid.append(card);
  });
};

const updateCount = (count) => {
  if (gameCount) {
    gameCount.textContent = `${count} game${count === 1 ? "" : "s"} online`;
  }
};

const filterGames = (query) => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return games;
  return games.filter((game) => {
    return [game.title, game.category, game.description]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });
};

const handleSearch = () => {
  if (!searchInput) return;
  const gameBlock = document.getElementById('hidden-library-block');
  if (gameBlock && gameBlock.style.display === 'none' && searchInput.value.trim() !== '') {
    gameBlock.style.display = 'block';
  }
  const filtered = filterGames(searchInput.value);
  renderGames(filtered);
  updateCount(filtered.length);
};

if (searchInput) {
  searchInput.addEventListener("input", handleSearch);
}

renderGames(games);
updateCount(games.length);

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
