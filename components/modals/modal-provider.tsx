"use client";

import React, { useEffect, useState } from "react";
import QuitQuizModal from "./quit-quiz-modal";
import ResultModal from "./result-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <QuitQuizModal />
      <ResultModal />
    </>
  );
};

export default ModalProvider;
