export const categoryOptions = [
  {
    value: "general_knowledge",
    option: "General Knowledge",
  },
  {
    value: "arts_and_literature",
    option: "Arts & Literature",
  },
  {
    value: "film_and_tv",
    option: "Film & TV",
  },
  {
    value: "food_and_drink",
    option: "Food & Drink",
  },
  {
    value: "society_and_culture",
    option: "Society & Culture",
  },
  {
    value: "geography",
    option: "Geography",
  },
  {
    value: "history",
    option: "History",
  },
  {
    value: "music",
    option: "Music",
  },
  {
    value: "sport_and_leisure",
    option: "Sport & Leisure",
  },
  {
    value: "science",
    option: "Science",
  },
];

export const difficultyOptions = [
  {
    value: "easy",
    option: "Easy",
  },
  {
    value: "medium",
    option: "Medium",
  },
  {
    value: "hard",
    option: "Hard",
  },
];

export const alphabeticNumeral = (index: number) => {
  const asciiCode = index + 65;
  const letter = String.fromCharCode(asciiCode);
  return letter + ". ";
};

export const showCategory = (category: string) => {
  if (category === "general_knowledge") return "General Knowledge";
  else if (category === "science") return "Science";
  else if (category === "sport_and_leisure") return "Sports & Leisure";
  else if (category === "music") return "Music";
  else if (category === "history") return "History";
  else if (category === "geography") return "Geography";
  else if (category === "society_and_culture") return "Society & Culture";
  else if (category === "arts_and_literature") return "Arts & Literture";
  else if (category === "film_and_tv") return "Film & TV";
  else if (category === "food_and_drink") return "Food & Drink";
};
