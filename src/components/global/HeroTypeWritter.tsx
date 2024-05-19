"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function HeroTypeWritter() {
  const words = [
    {
      text: "Automate",
    },
    {
      text: "Your",
    },
    {
      text: "Work",
    },
    {
        text: "With",
      },
    {
      text: "Blem.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[4rem] ">
   
      <TypewriterEffect words={words} />
   
    </div>
  );
}
