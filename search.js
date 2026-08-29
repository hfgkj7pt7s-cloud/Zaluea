/**
 * Max Aura Games — search
 * 1) Match a game title → go to that game's link
 * 2) Match a category or major page → go there
 */
(function () {
  const pageRoutes = [
    { keys: ["hub", "home", "main", "menu"], url: "home.html" },
    { keys: ["categories", "category", "browse", "genres", "genre"], url: "categories.html" },
    { keys: ["request", "suggest", "submit", "form"], url: "request.html" },
    { keys: ["about", "info", "help"], url: "about.html" },
    { keys: ["action"], url: "category.html?cat=Action" },
    { keys: ["puzzle", "puzzles"], url: "category.html?cat=Puzzle" },
    { keys: ["adventure", "rpg", "explore"], url: "category.html?cat=Adventure" },
    { keys: ["sports", "sport", "football", "basketball", "baseball"], url: "category.html?cat=Sports" },
    { keys: ["strategy", "strategic"], url: "category.html?cat=Strategy" },
    { keys: ["racing", "race", "racer"], url: "category.html?cat=Racing" },
    { keys: ["platformer", "platform"], url: "category.html?cat=Platformer" },
    { keys: ["survival", "survive"], url: "category.html?cat=Survival" },
    { keys: ["horror", "scary"], url: "category.html?cat=Horror" },
    { keys: ["competition", "competitive", "1v1", "versus"], url: "category.html?cat=Competition" },
    { keys: ["other", "misc"], url: "category.html?cat=Other" },
  ];

  function normalize(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s']/g, " ")
      .replace(/\s+/g, " ");
  }

  function getGames() {
    return typeof games !== "undefined" && Array.isArray(games) ? games : [];
  }

  /** Find best matching active game by title */
  function findGame(query) {
    const q = normalize(query);
    if (!q) return null;

    const list = getGames().filter((g) => g && g.active !== false && g.link);

    // 1) Exact title match
    let match = list.find((g) => normalize(g.title) === q);
    if (match) return match;

    // 2) Title starts with query
    match = list.find((g) => normalize(g.title).startsWith(q));
    if (match) return match;

    // 3) Title contains query
    match = list.find((g) => normalize(g.title).includes(q));
    if (match) return match;

    // 4) All query words appear in the title
    const words = q.split(" ").filter(Boolean);
    if (words.length > 1) {
      match = list.find((g) => {
        const t = normalize(g.title);
        return words.every((w) => t.includes(w));
      });
      if (match) return match;
    }

    return null;
  }

  function findPageRoute(query) {
    const q = normalize(query);
    if (!q) return null;
    for (const route of pageRoutes) {
      for (const key of route.keys) {
        if (q === key || q.includes(key)) return route.url;
      }
    }
    return null;
  }

  /** Encode each path segment so spaces and special characters work on servers */
  function hrefForGameLink(link) {
    if (!link) return "#";
    if (/^https?:\/\//i.test(link)) return link;
    return link
      .split("/")
      .map(function (part) {
        return encodeURIComponent(part);
      })
      .join("/");
  }

  function tryNavigate(query) {
    const game = findGame(query);
    if (game && game.link) {
      window.location.href = hrefForGameLink(game.link);
      return true;
    }

    const pageUrl = findPageRoute(query);
    if (pageUrl) {
      window.location.href = pageUrl;
      return true;
    }

    return false;
  }

  function bindSearchInputs() {
    document.querySelectorAll("#game-search, .search-box input").forEach((input) => {
      if (input.dataset.searchBound === "1") return;
      input.dataset.searchBound = "1";

      input.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        const value = input.value.trim();
        if (!value) return;

        if (!tryNavigate(value)) {
          window.location.href = "categories.html?q=" + encodeURIComponent(value);
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindSearchInputs);
  } else {
    bindSearchInputs();
  }

  window.MaxAuraSearch = { findGame, findPageRoute, tryNavigate };
})();
