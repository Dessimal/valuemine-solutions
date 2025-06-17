import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Battery, Sun } from "lucide-react";
import Image from "next/image";
import { TiredMan } from "@/app/constants";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Zero Blackouts",
      description: "Sleep, work, and enjoy your life without interruption.",
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "No more Fuel Queues",
      description: "Your generator is now a backup to the backup.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Silent Power",
      description: "No noise, no fumes — just clean, quiet electricity.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Protects Your Appliances",
      description: "Say goodbye to blown TVs, fridges & fans.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Pays for itself",
      description: "Save more over time than you'll ever spend on fuel.",
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
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Tired of NEPA Stress?{" "}
            <span className="gradient-text italic">Fuel Don Finish Again?</span>
          </h2>
          <h3 className="text-lg max-w-2xl mx-auto">
            Discover power solutions that boost your productivity, save you
            money and give you peace of mind.
          </h3>

          <div className="w-full h-64 relative rounded-md shadow-md ring ring-gray-800 overflow-hidden mb-4">
            <Image
              className="object-cover"
              src={TiredMan}
              fill
              alt="picture of a powerful inverter system"
            />
          </div>

          <p>
            Say goodbye to blackouts, noisy generators, and fuel wahala. At
            Valuemine Solutions, we help Nigerians like you enjoy 24/7 power
            without touching a drop of fuel — and without ever hearing &quot;Up
            NEPA!&quot; again.
          </p>
        </motion.div>

        <div className="container mx-auto">
          {/* Left Column - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8">
            <h3 className="text-2xl font-semibold text-center md:text-left">
              Finally...Reliable Power That works for YOU!
            </h3>
            <p>
              Whether you&apos;re a parent, business owner, landlord, or just
              tired of suffering, our custom solar/inverter systems give you
              peace of mind day and night.
            </p>

            <div className="w-full">
              <h2 className="mt-4 font-bold text-3xl text-center">
                Why Nigerians Are Switching to Valuemine:
              </h2>
            </div>
            <div className="container mx-auto grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="section-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 text-yellow-500 rounded-full">
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        {problem.title}
                      </h4>
                      <p className="">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Solutions */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8">
            <h3 className="text-2xl font-semibold text-center md:text-left">
              The Solution
            </h3>

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-lg shadow-md border border-gray-100 border-l-4 border-l-brand-orange"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}>
                <h4 className="font-semibold text-lg mb-2">{solution.title}</h4>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}

            <motion.div
              className="mt-8 flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}>
              <Button className="gradient-bg">
                Go Solar Now
                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </motion.div>
          </motion.div> */}
        </div>
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
