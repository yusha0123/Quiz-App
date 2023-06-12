"use client";
import { redirect, useRouter } from "next/navigation";
import { useContext } from "react";
import AppContext from "@/context/AppContext";
import { Button } from "primereact/button";

export const metadata = {
  title: "Quizy || Results",
};

const Results = () => {
  const { limit, score, showResultScreen } = useContext(AppContext);
  const router = useRouter();
  if (!showResultScreen) {
    redirect("/");
  }
  return (
    <div className="wrapper">
      <div className="bg-white px-4 shadow-md w-[90%] md:w-[70%] lg:w-[50%] max-w-3xl rounded-md">
        <h1 className="heading">Quizy</h1>
        <div className="divider" />
        <div className="flex flex-col justify-center items-center gap-4 h-[50vh]">
          <h2 className="text-3xl font-semibold tracking-wide">
            You Scored {score}/{limit}
          </h2>
          <Button
            label="Play Again"
            severity="success"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
