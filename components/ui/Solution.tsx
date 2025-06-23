import { benefits, familyRelaxing } from "@/app/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Solution = () => {
  const isMobile = useIsMobile();

  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h3 className="section-heading">
            Welcome to the{" "}
            <span className="gradient-text">end of your power struggles!</span>
          </h3>
        </motion.div>
        <div className=" container mx-auto flex flex-col md:flex-row md:flex-row-reverse items-center gap-8">
          <div className="md:flex-1/2 space-y-8">
            <p>
              Whether you&apos;re a parent, business owner, landlord, or just
              tired of suffering, our solar/inverter packages will give you
              peace of mind day and night.
            </p>
            <motion.div
              className=" mb-16 flex flex-col md:flex-row gap-8 md:gap-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="w-full h-[320px] md:h-[640px] relative rounded-lg shadow-lg overflow-hidden mb-4">
                <Image
                  className={`${isMobile ? "object-cover" : "object-contain"}`}
                  src={familyRelaxing}
                  fill
                  alt="picture of a powerful inverter system"
                />
              </div>
            </motion.div>
          </div>
          <div className="container mx-auto md:flex-1/2">
            {/* Left Column - Problems */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8">
              <div className="w-full">
                <h2 className="mt-2 text-xl max-w-96">
                  Why Nigerians Are Switching to Solar:
                </h2>
              </div>
              <div className="container mx-auto grid md:grid-cols-1 gap-8">
                {benefits.map(({ title, icon: Icon, description }, index) => (
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
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{title}</h4>
                        <p className="">{description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
