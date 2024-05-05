"use client";

import { Progress } from "@/components/ui/progress";
import { alphabeticNumeral, showCategory } from "@/constants";
import useModalStore from "@/hooks/useModalStore";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type Props = {
  questions: {
    category: string;
    id: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    question: string;
    tags: string[];
    type: string;
    difficulty: string;
    regions: [];
    isNiche: boolean;
  }[];
  limit: number;
  category: string;
};

const Questions = ({ questions, limit, category }: Props) => {
  const [curr, setCurr] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [progressValue, setProgressValue] = useState(0);
  const [score, setScore] = useState(0);
  const { onOpen } = useModalStore();

  const handleShuffle = (correctAnswer: string, incorrectAnswers: string[]) => {
    const shuffledAnswers = [...incorrectAnswers];

    shuffledAnswers.sort(() => Math.random() - 0.5);
    const randomIndex = Math.floor(
      Math.random() * (shuffledAnswers.length + 1)
    );
    shuffledAnswers.splice(randomIndex, 0, correctAnswer);

    return shuffledAnswers;
  };

  const handleCheck = (answer: string) => {
    setSelected(answer);
    if (answer === questions[curr].correctAnswer) setScore(score + 1);
  };

  const handleSelect = (i: string) => {
    if (selected === i && selected === questions[curr].correctAnswer)
      return "correct";
    else if (selected === i && selected !== questions[curr].correctAnswer)
      return "incorrect";
    else if (i === questions[curr].correctAnswer) return "correct";
  };

  const handleNext = () => {
    setCurr((curr) => curr + 1);
    setSelected("");
  };

  const handleQuit = () => {
    onOpen("quitQuiz");
  };

  const handleShowResult = () => {
    onOpen("showResults", {
      score,
      limit,
    });
  };

  useEffect(() => {
    if (questions?.length >= 5) {
      setAnswers(
        handleShuffle(
          questions[curr].correctAnswer,
          questions[curr].incorrectAnswers
        )
      );
    }
    setProgressValue((100 / limit) * (curr + 1));
  }, [curr, questions]);

  return (
    <div className="wrapper">
      <div className="bg-white p-4 shadow-md w-full md:w-[80%] lg:w-[70%] max-w-5xl rounded-md">
        <h1 className="heading">Quizy</h1>
        <Separator className="mb-3" />
        <Progress value={progressValue} />
        <div className="flex justify-between py-5 px-2 font-bold text-md">
          <p>Category: {showCategory(category)}</p>
          <p>Score: {score}</p>
        </div>
        <div className="flex flex-col min-h-[70vh] py-10 px-3 md:px-5 gap-4 w-full">
          {questions.length > 0 && (
            <>
              <h2 className="text-2xl text-center font-medium">{`Q${
                curr + 1
              }. ${questions[curr]?.question}`}</h2>

              {answers?.map((answer, i) => (
                <button
                  key={i}
                  className={`option ${selected && handleSelect(answer)}`}
                  disabled={!!selected}
                  onClick={() => handleCheck(answer)}
                >
                  {alphabeticNumeral(i)}
                  {answer}
                </button>
              ))}
              <Separator />
              <div className="flex mt-5 md:justify-between md:flex-row flex-col gap-4 md:gap-0 mx-auto max-w-xs w-full">
                <Button
                  disabled={!selected}
                  onClick={() =>
                    questions.length === curr + 1
                      ? handleShowResult()
                      : handleNext()
                  }
                >
                  {questions.length - 1 != curr
                    ? "Next Question"
                    : "Show Results"}
                </Button>
                <Button variant={"destructive"} onClick={handleQuit}>
                  Quit Quiz
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
