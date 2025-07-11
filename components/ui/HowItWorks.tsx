import React from "react";
import { motion } from "@/lib/framerMotion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Home or Use our Calculator",
      description:
        "We help assess your appliances and power needs to determine the right system size.",
    },
    {
      number: "02",
      title: "Get a Custom System Design",
      description:
        "You'll receive a full system breakdown, options, and a clear cost estimate.",
    },
    {
      number: "03",
      title: "We Install & You Relax",
      description:
        "Our engineers handle the professional installation while you prepare for uninterrupted power.",
    },
  ];

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.2 },
      },
    },
  };

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
            How <span className="gradient-text">Valuemine</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process to bring reliable power to your home
            or business
          </p>
        </motion.div>

        <div className="relative">
          {/* SVG path connecting the steps */}
          <svg
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 h-full hidden md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: -1 }}>
            <motion.path
              d="M10,10 Q50,50 90,20 T10,90"
              stroke="#FFD700"
              strokeWidth="0.5"
              fill="transparent"
              strokeDasharray="1,1"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </svg>

          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className=" p-8 rounded-xl shadow-md border border-gray-100 relative z-10 md:w-[30%] h-auto flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className=" mb-6 flex-grow">{step.description}</p>
                <div>
                  <motion.div
                    className="flex items-center text-brand-orange font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>Simple & Efficient</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}>
            <Button asChild className="gradient-bg text-lg py-6 px-8">
              <a href="#calculator-section">Start Assessment</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
