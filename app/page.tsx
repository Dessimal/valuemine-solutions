"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ProblemSolution from "@/components/ui/ProblemSolution";
import HowItWorks from "@/components/ui/HowItWorks";
import Calculator from "@/components/ui/SizeCalculator";
import Testimonials from "@/components/ui/Testimonials";

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
        className="min-h-screen bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Navbar />
        <motion.main layout>
          <Hero />
          <ProblemSolution />
          <HowItWorks />
          <Calculator />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </motion.main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
