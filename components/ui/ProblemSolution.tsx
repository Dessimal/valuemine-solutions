import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Battery, Sun } from "lucide-react";
import Image from "next/image";
import { TiredMan, TiredManTwo } from "@/app/constants";

const ProblemSolution = () => {
  const problems = [
    {
      image: TiredManTwo,
      title: "PHCN Wahala",
      description: [
        "Tired of NEPA taking light when you need it the most?",
        "You plug your phone, they take it. You’re ironing — boom! Darkness",
        " It’s like playing emotional roulette every day",
        "You pay bills, but power supply is still worse than before",
      ],
    },
    {
      image: TiredManTwo,
      title: "Fuel Scarcity",
      description: [
        "You're up by 5am just to queue for fuel, yet the station hoards it.",
        "Prices change daily, and you're always guessing if N10,000 will even last 2 days",
        "Fuel scarcity now feels like a monthly festival of stress",
        "You've even started calculating which room in your house deserves power",
      ],
    },
    {
      image: TiredManTwo,
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
    <section className="py-36 relative overflow-hidden">
      <div className="container mx-auto px-4  gap-8">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <div>
            <h2 className="section-heading">
              Tired of NEPA Stress and{" "}
              <span className="gradient-text">Generator Troubles?</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
              <div className="rounded-lg shadow-lg overflow-hidden w-full h-full flex-1/3 relative">
                {" "}
                <Image
                  className="object-cover"
                  src={TiredMan}
                  alt="picture of a powerful inverter system"
                />
              </div>
              <div className="flex-2/3 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="rounded-md shadow-lg ring ring-gray-800 p-6">
                    <div>image here</div>
                    <h3 className="tracking-tight text-xl max-w-32 mb-3">
                      {problem.title}
                    </h3>
                    <ul>
                      {problem.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default ProblemSolution;
