let Programming_Language = [
    "music",
    "basketball",
    "football",
    "youtube",
    "fire",
    "mid",
    "goat",
    "vibes",
    "adhd",
    "drip",
    "batman",
    "avengers",
    "spiderman",
    "wolverine",
    "moneyheist",
    "narcos",
    "strangerthings",
    "software",
    "coding",
    "graduation",
  ];
  
  function randomWord() {
    return Programming_Language[
      Math.floor(Math.random() * Programming_Language.length)
    ];
  }
  
  export { randomWord };