"use client";
import { useState } from "react";
import AppContext from "./AppContext";
export function ContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [showQuestionScreen, setShowQuestionScreen] = useState(false);
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [difficulty, setdifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(10);

  const resetValues = () => {
    setScore(0);
    setShowQuestionScreen(false);
    setCategory("");
    setdifficulty("");
    setLimit(10);
    setShowResultScreen(false);
  };

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        showQuestionScreen,
        setShowQuestionScreen,
        showResultScreen,
        setShowResultScreen,
        difficulty,
        setdifficulty,
        category,
        setCategory,
        limit,
        setLimit,
        resetValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
