import Questions from "@/components/questions";
import { categoryOptions, difficultyOptions } from "@/constants";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    category: string;
    difficulty: string;
    limit: string;
  };
};

async function getData(category: string, difficulty: string, limit: string) {
  const res = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&type=multiple&difficulty=${difficulty}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const QuestionsPage = async ({ searchParams }: Props) => {
  const category = searchParams.category as string;
  const difficulty = searchParams.difficulty;
  const limit = searchParams.limit;

  const validateCategory = (category: string) => {
    const validCategories = categoryOptions.map((option) => option.value);
    return validCategories.includes(category);
  };

  const validateDifficulty = (difficulty: string) => {
    const validDifficulties = difficultyOptions.map((option) => option.value);
    return validDifficulties.includes(difficulty);
  };

  const validateLimit = (limit: string) => {
    const parsedLimit = parseInt(limit, 10);
    return !isNaN(parsedLimit) && parsedLimit >= 5 && parsedLimit <= 50;
  };

  if (
    !validateCategory(category) ||
    !validateDifficulty(difficulty) ||
    !validateLimit(limit)
  ) {
    return redirect("/");
  }

  const response = await getData(category, difficulty, limit);

  return (
    <Questions
      questions={response}
      limit={parseInt(limit, 10)}
      category={category}
    />
  );
};

export default QuestionsPage;
