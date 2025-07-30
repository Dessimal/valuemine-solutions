"use client";

import React, { useState } from "react";
import { motion } from "@/lib/framerMotion";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Battery,
  Sun,
  CircleX,
  DoorClosedLocked,
  SquarePlus,
} from "lucide-react";
import Image from "next/image";
import {
  fuelQueue,
  nationalGrid,
  generator,
  TiredMan,
  TiredManTwo,
  DoodleArrowDown,
  DoodleArrowUp,
} from "@/app/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/app/lib/utils";

export const ProblemSolution = () => {
  const isMobile = useIsMobile();

  const [openIndex, setOpenIndex] = useState<null>(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const problems = [
    {
      image: nationalGrid,
      title: "PHCN Wahala",
      description: [
        "Tired of 'NEPA taking light' when you need it the most?",
        "You plug your phone, they take it. You’re ironing — boom! Darkness",
        " It’s like playing emotional roulette every day",
        "You pay bills, but power supply is still worse than before",
      ],
    },
    {
      image: fuelQueue,
      title: "Fuel Scarcity",
      description: [
        "You're up by 5am just to queue for fuel, yet the station hoards it.",
        "Prices change daily, and you're always guessing if N10,000 will even last 2 days",
        "Fuel scarcity now feels like a monthly festival of stress",
        "You've even started calculating which room in your house deserves power",
      ],
    },
    {
      image: generator,
      title: "Generator Noise",
      description: [
        "Sleep is now a luxury. The gen beside your window has stolen your peace.",
        "You can't even take calls or pray in peace — the gen is louder than your thoughts",
        "Plus, neighbours complain, but you're all stuck in the same noisy boat",
        "And the worst? Your gen works today, breaks down tomorrow.",
      ],
    },
    {
      image: TiredManTwo,
      title: "Blown Electronics",
      description: [
        "TV, fridge, fan, blender — all damaged thanks to crazy voltage spikes.",
        "You're replacing gadgets like you're paying school fees.",
        "Stabilizer help sometimes, buty they not reliable.",
        "Every time NEPA brings light, your heart skips. Not out of joy — but fear",
      ],
    },
  ];

  // const solutions = [
  //   {
  //     title: "Protects Your Appliances",
  //     description: "Say goodbye to blown TVs, fridges & fans.",
  //   },
  //   {
  //     title: "Pays for itself",
  //     description:
  //       "Solar/Inverter systems come with zero maintainance, zero refuelling and zero servicing. They save you a lot of money",
  //   },
  //   {
  //     title: "Switch to Solar",
  //     description:
  //       "Harness the abundant sunlight in Nigeria with high-efficiency solar panels, powerful batteries as backup for the night",
  //   },
  // ];

  return (
    <section className="py-36 relative overflow-x-hidden">
      <div className="container mx-auto px-4  gap-h8">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <h2 className="section-heading">
                Tired of NEPA Stress and{" "}
                <span className="gradient-text">Generator Troubles?</span>
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
              <div className="flex flex-col gap-1 overflow-hidden w-full h-full flex-1/3 relative">
                {" "}
                <Image
                  className="hidden md:block object-contain"
                  src={DoodleArrowUp}
                  alt="picture of a powerful inverter system"
                />
                <Image
                  className="object-cover rounded-lg shadow-md"
                  src={TiredMan}
                  alt="picture of a powerful inverter system"
                />
                <Image
                  className="hidden md:block object-contain"
                  src={DoodleArrowDown}
                  alt="picture of a powerful inverter system"
                />
              </div>
              <div className="group flex-2/3 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {problems.map((problem, index) => (
                  <div
                    onClick={() => handleClick(index)}
                    key={problem.title}
                    className="flex flex-col gap-3 rounded-md shadow-lg ring ring-ring p-6">
                    <div className="w-full h-[280px] rounded-lg shadow-md relative overflow-hidden">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        className={`${
                          isMobile
                            ? "object-cover"
                            : "object-cover h-full w-full"
                        }`}
                        fill
                      />
                    </div>
                    <div className=" flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <h3 className="tracking-tight text-xl max-w-32 mb-3">
                          {problem.title}
                        </h3>
                        <button>
                          <SquarePlus
                            className={cn(
                              openIndex === index
                                ? "rotate-[225deg] transition-all duration-300 ease-out"
                                : ""
                            )}
                          />
                        </button>
                      </div>
                      <ul
                        className={cn(
                          "max-h-64 transiton-all ease-out duration-300 overflow-y-auto faq list-none space-y-2",
                          openIndex === index
                            ? "max-h-64 opacity-100"
                            : "max-h-0 opacity-0"
                        )}>
                        {problem.description.map((desc, index) => (
                          <li key={index}>
                            <span className="text-sm">
                              <CircleX
                                className="inline-block mr-2"
                                color="red"
                                size={18}
                              />
                              {desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-orange/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};
