"use client";

import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contacts";

import { motion, AnimatePresence } from "framer-motion";
import { ProblemSolution } from "@/components/ui/ProblemSolution";
import { HowItWorks } from "@/components/ui/HowItWorks";
import { Testimonials } from "@/components/ui/Testimonials";
import { CalculatorSection } from "@/components/CalculatorSection";
import { Solution } from "@/components/ui/Solution";

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
    // Clean up event listeners on component unmount
    // This is important to avoid memory leaks
    // and ensure that the event listeners are not duplicated
    // if the component is mounted multiple times
    // or if the page is navigated away from and back to
    // using a client-side router
    // (like Next.js does)
    // This is a simple cleanup function that removes the event listeners
    // when the component is unmounted
    // or when the dependencies change

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
        <motion.main layout>
          <Hero />
          <ProblemSolution />
          <Solution />
          <HowItWorks />
          <CalculatorSection />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;
