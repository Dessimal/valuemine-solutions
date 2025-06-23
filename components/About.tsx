import React from "react";
import { Shield, Battery, Sun, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { benefits } from "@/app/constants";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Valuemine Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering Nigerian homes and businesses with sustainable, reliable
            solar energy solutions since 2023
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To revolutionize Nigeria's energy landscape by providing
              accessible, affordable solar solutions that empower communities
              and businesses while reducing dependency on unreliable power
              sources.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              A Nigeria where sustainable energy is accessible to all, powering
              growth, innovation, and prosperity while protecting our
              environment for future generations.
            </p>

            <motion.div
              className="p-6 rounded-lg border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <h4 className="font-semibold mb-2">
                Why Choose Valuemine Solutions?
              </h4>
              <motion.ul
                className="space-y-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-brand-orange font-bold">✓</span>
                  <span>
                    Quality components from industry-leading manufacturers
                  </span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-brand-orange font-bold">✓</span>
                  <span>Expert installation by certified professionals</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-brand-orange font-bold">✓</span>
                  <span>Comprehensive warranties and maintenance plans</span>
                </motion.li>
                <motion.li className="flex items-start gap-2" variants={item}>
                  <span className="text-brand-orange font-bold">✓</span>
                  <span>Tailored solutions based on your energy needs</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 gradient-bg opacity-10"></div>
              <div className="grid grid-cols-2 gap-4 p-4 h-full">
                {benefits.map(({ title, description, icon: Icon, index }) => (
                  <motion.div
                    key={title}
                    className="rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}>
                    <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4 text-white">
                      <Icon />
                    </div>
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-gray-500">{description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
