/*
  Max Aura Games — game data
  Links match the exact folder names inside /games
*/

const games = [
  {
    title: "2048",
    description: "Slide tiles, combine powers, and reach the 2048 tile.",
    category: "Puzzle",
    image: "Images/2048.png",
    color: "gold",
    link: "games/2048/index.html",
    active: true
  },
  {
    title: "EagleCraft MC",
    description: "A creative sandbox world ready for your next build.",
    category: "Adventure",
    image: "Images/EagleCraft.png",
    color: "green",
    link: "games/EagleCraft MC/eaglercraft-site/index.html",
    active: true
  },
  {
    title: "BTD4",
    description: "Play Bloons TD 4 with Ruffle in your browser.",
    category: "Strategy",
    image: "Images/BTD4.png",
    color: "orange",
    link: "games/BTD4/index.html",
    active: true
  },
  {
    title: "Retro Bowl",
    description: "Lead your team to the championship in this fast-paced football sim.",
    category: "Sports",
    image: "Images/Retro Bowl.png",
    color: "green",
    link: "games/Retro Bowl/index.html",
    active: true
  },
  {
    title: "Retro Bowl College",
    description: "Lead your college team to the championship in this fast-paced football sim.",
    category: "Sports",
    image: "Images/Retro Bowl College.png",
    color: "lightblue",
    link: "games/Retro Bowl College/index.html",
    active: true
  },
  {
    title: "BasketBros",
    description: "A fast-paced basketball game where you can play with friends or against the AI.",
    category: "Sports",
    image: "Images/BasketBros.png",
    color: "orange",
    link: "games/BasketBros/index.html",
    active: true
  },
  {
    title: "Ragdoll Archers",
    description: "A slow-paced archery game where you can play with friends or against the AI.",
    category: "Action",
    image: "Images/Ragdoll Archers.png",
    color: "silver",
    link: "games/Ragdoll Archers/index.html",
    active: true
  },
  {
    title: "Volley Random",
    description: "A random volleyball game where you can play with friends or against the AI.",
    category: "Sports",
    image: "Images/Volley Random.png",
    color: "green",
    link: "games/Volley Random/index.html",
    active: true
  },
  {
    title: "Pokemon Fire Red",
    description: "Play the classic Pokemon game in your browser.",
    category: "Adventure",
    image: "Images/Pokemon Fire Red.png",
    color: "red",
    link: "games/Pokemon Fire Red/index.html",
    active: true
  },
  {
    title: "Pokemon Leaf Green",
    description: "Play the classic Pokemon game in your browser.",
    category: "Adventure",
    image: "Images/Pokemon Leaf Green.png",
    color: "green",
    link: "games/Pokemon Leaf Green/index.html",
    active: true
  },
  {
    title: "Legend of Zelda, the - Link's Awakening",
    description: "Play one of the classic Zelda games in your browser.",
    category: "Adventure",
    image: "Images/Legend of Zelda, the - Link's Awakening.png",
    color: "blue",
    link: "games/Legend of Zelda, the - Link's Awakening/index.html",
    active: true
  },
  {
    title: "Legend of Zelda, the - Oracle of Seasons",
    description: "Play one of the classic Zelda games in your browser.",
    category: "Adventure",
    image: "Images/Legend of Zelda, the - Oracle of Seasons.png",
    color: "purple",
    link: "games/Legend of Zelda, the - Oracle of Seasons/index.html",
    active: true
  },
  {
    title: "Lego Star-Wars",
    description: "Play as your favorite Star Wars characters in this lego-themed game.",
    category: "Action",
    image: "Images/Lego Star-Wars.png",
    color: "yellow",
    link: "games/Lego Star-Wars/index.html",
    active: true
  },
  {
    title: "Lego Star-Wars 2",
    description: "Play again as your favorite Star Wars characters in this lego-themed game.",
    category: "Action",
    image: "Images/Lego Star-Wars 2.png",
    color: "yellow",
    link: "games/Lego Star-Wars 2/index.html",
    active: true
  },
  {
    title: "Tetris",
    description: "A classic puzzle game where you arrange falling blocks to complete lines.",
    category: "Puzzle",
    image: "Images/Tetris.png",
    color: "blue",
    link: "games/Tetris/index.html",
    active: true
  },
  {
    title: "Backyard Baseball 10'",
    description: "A classic baseball game where you can play with your favorite backyard characters.",
    category: "Sports",
    image: "Images/Backyard Baseball 10'.png",
    color: "blue",
    link: "games/Backyard Baseball 10'/index.html",
    active: true
  },
  {
    title: "Poly Track",
    description: "A racing game where you can race against your friends or the AI on various tracks.",
    category: "Racing",
    image: "Images/Poly Track.png",
    color: "blue",
    link: "games/Poly Track/index.html",
    active: true
  },
  {
    title: "10 Minutes Till Dawn",
    description: "You must survive against waves of enemies for 10 minutes.",
    category: "Survival",
    image: "Images/10 Minutes Till Dawn.png",
    color: "blue",
    link: "games/10 Minutes Till Dawn/index.html",
    active: true
  },
  {
    title: "Null Kev 10 103",
    description: "An elite Special Response agent explores a crashed, monster-infested orbital research facility.",
    category: "Horror",
    image: "Images/10-103 Null Kevin.png",
    color: "blue",
    link: "games/Null Kev 10 103/index.html",
    active: true
  },
  {
    title: "12 Mini Battles",
    description: "A specialized 1v1 set of mini-battles for 2 competitive players.",
    category: "Competition",
    image: "Images/12 Mini Battles.jpeg",
    color: "orange",
    link: "games/12 Mini Battles/index.html",
    active: true
  },
  {
    title: "1v1 Lol",
    description: "A 1v1 build battle third-person shooter.",
    category: "Competition",
    image: "Images/1v1 Lol.jpeg",
    color: "blue",
    link: "games/1v1 Lol/index.html",
    active: true
  },
  {
    title: "2,3,4 Player Games",
    description: "A collection of games that can be played with 2, 3, or 4 players.",
    category: "Competition",
    image: "Images/234 Player Games.jpeg",
    color: "orange",
    link: "games/234 Player Games/index.html",
    active: true
  },
  {
    title: "20 Small Mazes",
    description: "Navigate through a series of mazes, each with its own challenge.",
    category: "Puzzle",
    image: "Images/20 Small Mazes.jpeg",
    color: "orange",
    link: "games/20 Small Mazes/index.html",
    active: true
  },
  {
    title: "2 Doom",
    description: "A 2D side-scrolling shooter where you fight hordes of enemies.",
    category: "Action",
    image: "Images/2Doom.jpeg",
    color: "green",
    link: "games/2 Doom/index.html",
    active: true
  },
  {
    title: "2D Shooting",
    description: "A multiplayer 2D shooting game where you can play with friends or against AI.",
    category: "Action",
    image: "Images/2D Shooting Online.jpeg",
    color: "blue",
    link: "games/2D Shooting/index.html",
    active: true
  },
  {
    title: "3 Dash",
    description: "Like Geometry Dash, with challenging levels.",
    category: "Platformer",
    image: "Images/3 Dash.jpeg",
    color: "purple",
    link: "games/3 Dash/index.html",
    active: true
  },
  {
    title: "500 Caliber Contracz",
    description: "An assassin 3D platformer mixing movement and targets.",
    category: "Platformer",
    image: "Images/500 Caliber Contractz.jpeg",
    color: "blue",
    link: "games/500 Caliber Contracz/index.html",
    active: true
  },
  {
    title: "8 Ball Classic",
    description: "A classic 8-ball pool game against friends or the AI.",
    category: "Sports",
    image: "Images/8 Ball Classic.jpeg",
    color: "blue",
    link: "games/8 Ball Classic/index.html",
    active: true
  },
  {
    title: "99 Balls",
    description: "Shoot balls to break more balls and clear the screen.",
    category: "Puzzle",
    image: "Images/99 Balls.jpeg",
    color: "blue",
    link: "games/99 Balls/index.html",
    active: true
  },
  {
    title: "99 Nights in the Forrest",
    description: "Survive nights in a dark forest filled with dangers.",
    category: "Survival",
    image: "Images/99 Nights in the Forrest.jpeg",
    color: "green",
    link: "games/99 Nights in the Forrest/index.html",
    active: true
  },
  {
    title: "Lego Marvel Superheroes",
    description: "A Lego Marvel exploration and action game.",
    category: "Action",
    image: "Images/Lego Marvel Superheroes.jpeg",
    color: "red",
    link: "games/Lego Marvel Superheroes/index.html",
    active: true
  },
  {
    title: "Super Mario Bros",
    description: "The original Super Mario Bros game. Now playable in your browser!",
    category: "Adventure",
    image: "Images/Supermariobros.jpeg",
    color: "red",
    link: "games/Super Mario Bros/index.html",
    active: true
  },
];
