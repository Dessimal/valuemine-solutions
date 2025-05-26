import React from "react";
import SizeCalculator from "./ui/SizeCalculator";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator as CalcIcon } from "lucide-react";

const CalculatorSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              Build <span className="gradient-text">Your System</span>{" "}
              Calculator
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}>
              We've made it easy to build your ideal solar system. Just tell us
              what gadgets and appliances you use — our smart calculator does
              the rest.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}>
              <Button className="gradient-bg text-lg py-6 px-8 mb-8">
                <CalcIcon className="mr-2 h-5 w-5" />
                Try the Solar Calculator
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold gradient-text">40%</div>
                <div className="text-sm text-gray-400">Saved on Bills</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Power Access</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold gradient-text">5yr</div>
                <div className="text-sm text-gray-400">Full Warranty</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <SizeCalculator />
      </div>
    </section>
  );
};

export default CalculatorSection;
