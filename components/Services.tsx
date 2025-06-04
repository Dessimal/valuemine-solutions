import React from "react";
import { Home, Building2, Factory, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Residential Solar",
      description:
        "Complete solar power systems for homes with options for grid-tied or off-grid solutions",
      features: [
        "Solar panels",
        "Inverters",
        "Battery storage",
        "Installation & maintenance",
      ],
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Commercial Solar",
      description:
        "Reduce operational costs and enhance sustainability for your business with custom solar solutions",
      features: [
        "Rooftop systems",
        "Solar carports",
        "Energy monitoring",
        "24/7 support",
      ],
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Industrial Power",
      description:
        "Large-scale solar installations for manufacturing facilities and industrial complexes",
      features: [
        "MW-scale systems",
        "Hybrid solutions",
        "Load management",
        "Energy consulting",
      ],
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Energy Consulting",
      description:
        "Expert advice on energy efficiency, system design, and financial planning for solar adoption",
      features: [
        "Energy audits",
        "ROI analysis",
        "Financing options",
        "Grant assistance",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}>
              <motion.div
                className="gradient-bg p-4 flex justify-center"
                whileHover={{
                  backgroundColor: "#FF8800",
                  transition: { duration: 0.3 },
                }}>
                <motion.div
                  className="h-16 w-16 rounded-full bg-white flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <div className="text-brand-orange">{service.icon}</div>
                </motion.div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <h4 className="text-sm font-semibold text-gray-500 mb-2">
                  INCLUDES:
                </h4>
                <motion.ul
                  className="space-y-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}>
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}>
                      <span className="text-brand-orange font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="outline"
                    className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange/10">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
