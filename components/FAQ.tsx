"use client";

import { faqs } from "@/app/constants";
import { cn } from "@/lib/utils";
import { SquarePlus } from "lucide-react";
import React, { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<null>(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20">
      <h2 className="text-2xl font-bold">Frequetly Asked Questions(FAQs):</h2>
      {faqs.map(({ question, answer }, index) => (
        <div
          key={index}
          className="  rounded-sm shadow-md ring ring-gray-200 p-6 my-6">
          <div className="py-6 flex items-center justify-between">
            <h3>{question}</h3>
            <button onClick={() => handleClick(index)}>
              <SquarePlus
                className={cn(
                  openIndex === index
                    ? "rotate-[225deg] transition-all duration-300 ease-in-out"
                    : ""
                )}
              />
            </button>
          </div>
          <div
            className={cn(
              "border-t-2 border-gray-300 overflow-hidden transition-all ease-out duration-300 ",
              openIndex === index
                ? "max-h-40 opacity-100 py-6"
                : "max-h-0 opacity-0 py-0"
            )}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
