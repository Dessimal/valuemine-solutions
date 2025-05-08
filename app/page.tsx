"use client"


import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (!href) return;

        const target = document.querySelector(href);
        if (!target) return;

        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      });
    });

    // Update page title
    // document.title = "Valuemine Solutions - Solar Energy Solutions";

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", function (e) {
          // Clean up event
        });
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Navbar />
        {/* <motion.main layout> */}
          <Hero />
          <About />
          <Services />
          <Contact />
        {/* </motion.main> */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
