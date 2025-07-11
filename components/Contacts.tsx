"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "@/lib/framerMotion";

import ContactForm from "./ContactForm";
import { contactDetails } from "@/app/constants";

export const Contact = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Form submission logic would go here
  //   console.log("Form submitted");
  // };

  const staggerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to discuss your solar energy needs and get a free
            consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions about our solar solutions? Fill out the form and
              one of our experts will get back to you within 24 hours.
            </p>

            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              variants={staggerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>
              {contactDetails.map(({ icon: Icon, title, details }, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemAnimation}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                  <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white shrink-0">
                    {<Icon className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    {details.map((detail, i) => (
                      <p key={i} className="text-gray-500 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="p-8 rounded-lg border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="text-2xl font-semibold mb-6">Send Us A Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// <form onSubmit={handleSubmit} className="space-y-6">
//   <motion.div
//     className="grid gap-4 sm:grid-cols-2"
//     variants={staggerAnimation}
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true }}>
//     <motion.div className="space-y-2" variants={itemAnimation}>
//       <label htmlFor="name" className="block text-sm font-medium">
//         Name
//       </label>
//       <Input id="name" placeholder="Your name" required />
//     </motion.div>
//     <motion.div className="space-y-2" variants={itemAnimation}>
//       <label htmlFor="email" className="block text-sm font-medium">
//         Email
//       </label>
//       <Input id="email" type="email" placeholder="Your email" required />
//     </motion.div>
//   </motion.div>

//   <motion.div
//     className="space-y-2"
//     variants={itemAnimation}
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay: 0.2 }}>
//     <label htmlFor="phone" className="block text-sm font-medium">
//       Phone Number
//     </label>
//     <Input id="phone" placeholder="Your phone number" required />
//   </motion.div>

//   <motion.div
//     className="space-y-2"
//     variants={itemAnimation}
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay: 0.3 }}>
//     <label htmlFor="subject" className="block text-sm font-medium">
//       Subject
//     </label>
//     <Input id="subject" placeholder="How can we help you?" required />
//   </motion.div>

//   <motion.div
//     className="space-y-2"
//     variants={itemAnimation}
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay: 0.4 }}>
//     <label htmlFor="message" className="block text-sm font-medium">
//       Message
//     </label>
//     <Textarea id="message" placeholder="Your message" rows={4} required />
//   </motion.div>

//   <motion.div
//     whileHover={{ scale: 1.03 }}
//     whileTap={{ scale: 0.97 }}
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay: 0.5 }}>
//     <Button type="submit" className="w-full gradient-bg">
//       Send Message
//     </Button>
//   </motion.div>
// </form>;
