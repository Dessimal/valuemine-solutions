import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Battery, Sun } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Unstable Electricity",
      description:
        "Constant power outages disrupting your daily life and business operations.",
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "High Generator Costs",
      description:
        "Excessive fuel consumption and maintenance costs for generators.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Constant Blackouts",
      description: "Frustrating darkness when you need power the most.",
    },
  ];

  const solutions = [
    {
      title: "Clean, Renewable Solar Power",
      description:
        "Harness the abundant sunlight in Nigeria with high-efficiency solar panels.",
    },
    {
      title: "24/7 Inverter Backup",
      description:
        "Advanced battery storage solutions ensure you have power even after sunset.",
    },
    {
      title: "Expert Installation & Support",
      description:
        "Professional setup, maintenance, and readily available customer service.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's <span className="gradient-text">Stealing</span> Your Power?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identify your energy challenges and discover how we solve them
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8">
            <h3 className="text-2xl font-semibold text-center md:text-left">
              The Problems
            </h3>

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-full bg-red-100 text-red-600">
                    {problem.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8">
            <h3 className="text-2xl font-semibold text-center md:text-left">
              Our Solutions
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
                Why Solar?
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
          </motion.div>
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
