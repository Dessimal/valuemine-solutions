import React, { useRef, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Fan, Refrigerator } from "lucide-react";
import { motion } from "framer-motion";
import { HeroImage } from "@/app/constants";
import { TiredMan } from "@/app/constants";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const isMobile = useIsMobile();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRefs = useRef([]);
  const textContainerRef = useRef(null);

  // Refs for the two distinct H1 elements (now full phrases)
  const dynamicTextSpan1Ref = useRef(null); // For "Tired of Frequent Blackouts?"
  const dynamicTextSpan2Ref = useRef(null); // For "Tired of the stress, noise, headaches from Generator wahala?"

  // New refs for the expanding clip-path div and the welcome text
  const expandingDivRef = useRef(null);
  const welcomeTextRef = useRef(null);

  // useLayoutEffect is used for DOM manipulations that need to happen
  // before the browser paints, like SplitText, to prevent flashes of unstyled content.
  useLayoutEffect(() => {
    // Create a GSAP Context for automatic cleanup of all animations and SplitText instances
    // within this scope when the component unmounts or the effect re-runs.
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Ensure all necessary dynamic text refs and new animation element refs exist in the DOM.
      if (!dynamicTextSpan1Ref.current || !dynamicTextSpan2Ref.current || !expandingDivRef.current || !welcomeTextRef.current) {
        console.warn("One or more dynamic text refs or new animation refs are null, skipping GSAP animations.");
        return;
      }

      // Create SplitText instances for both full phrases upfront.
      let split1 = SplitText.create(dynamicTextSpan1Ref.current, {
        type: "chars",
        charsClass: "gsap-char-phrase1-++",
        smartWrap: true, // Crucial for preventing words from breaking
      });

      let split2 = SplitText.create(dynamicTextSpan2Ref.current, {
        type: "chars",
        charsClass: "gsap-char-phrase2-++",
        smartWrap: true, // Crucial for preventing words from breaking
      });

      // --- Initial State Setup for new elements ---
      // Initially hide the characters of the second phrase, ready for reveal.
      gsap.set(split2.chars, { opacity: 0, yPercent: 100 });
      // Initially hide the welcome text.
      gsap.set(welcomeTextRef.current, { opacity: 0, y: 50 });
      // The expandingDivRef's initial opacity will be set to 1 by the first fromTo.


      // --- Animation Sequence ---

      // 1. Animate the characters of the first phrase to reveal them
      t1.from(split1.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        duration: 0.8,
      });

      // 2. Animate the sliding overlay elements and image fade-out
      t1.to(leftRef.current, { xPercent: 0, duration: 1 }, "<0.2")
        .to(rightRef.current, { xPercent: 0, duration: 1 }, "<")
        .to(imageRefs.current, { opacity: 0, duration: 0.5 }, "<0.2");

      // 3. Animate the first phrase characters to collapse (move up and fade out)
      t1.to(split1.chars, {
        yPercent: -100,
        opacity: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: "power1.in",
      }, "+=2"); // Delayed by 2 seconds after previous animations

      // 4. Animate the second phrase characters to reveal them (come in from bottom and fade in)
      t1.to(split2.chars, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: "power2.out"
      }, "<0.2"); // Starts slightly before first text collapses

      // 5. New Animation: Horizontal line traversal, then central polygon expansion, then Welcome Text
      // This segment starts concurrently with the second phrase text being visible.

      // Phase 1: Thin horizontal line appears on the left and moves across to the right (1 second)
      // This creates the effect of a line "cutting through" the screen.
      // Starts 0.4 seconds BEFORE the `split2.chars` reveal finishes.
      t1.fromTo(expandingDivRef.current,
        {
          opacity: 1, // Line is fully visible from the start of this phase
          // Start as a thin horizontal line (2px height) on the far left.
          clipPath: 'inset(calc(50% - 1px) 100% calc(50% - 1px) 0%)'
        },
        {
          // Animate to a thin horizontal line across the entire screen.
          clipPath: 'inset(calc(50% - 1px) 0% calc(50% - 1px) 0%)',
          duration: 1, // "cuts through" in 1 second
          ease: "power2.inOut",
        }, "<0.4");

      // Phase 2: Instantaneously set clipPath to a tiny point in the center using polygon().
      // The '>' ensures this `set` happens immediately after Phase 1.
      t1.set(expandingDivRef.current, {
        // Defines a polygon that collapses to a single point at the center (50% 50%)
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
      }, ">");

      // Phase 3: Expand from the center point to fill the entire screen using polygon().
      // Starts immediately after the set() call.
      t1.to(expandingDivRef.current, {
        // Defines a polygon that expands to cover the entire viewport
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.7, // Shorter duration for expansion
        ease: "power3.inOut",
      }, ">");

      // Animate the welcome text to fade in and slide up concurrently with the clip-path expansion.
      t1.to(welcomeTextRef.current, {
        opacity: 1,
        y: 0, // Animate to its natural position
        duration: 0.8,
        ease: "power2.out"
      }, ">-0.5"); // Start 0.5 seconds before the expandingDivRef expansion animation finishes

    }, textContainerRef); // Associate this GSAP context with textContainerRef for scope management.

    // Cleanup function: This is crucial. It will automatically revert all animations
    // and SplitText instances created within this context when the component unmounts.
    return () => ctx.revert();
  }, []); // Empty dependency array means this effect runs only once after the initial render.

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient for overall page, initially visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/20 to-brand-orange/20 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Container for initial images and sliding overlays */}
      <div
        className={`
          absolute top-0 left-0 h-screen w-screen
          ${isMobile ? "flex flex-col justify-center items-center" : ""}
        `}
      >
        {/* Images with z-index 0, so they are behind the text and overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            fill
            src={HeroImage}
            alt="Valuemine Solutions Professional"
            priority // Prioritize loading for hero image
            ref={(el) => (imageRefs.current[0] = el)} // Assign ref to the first image
          />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            fill
            src={TiredMan}
            alt="Man staring tiredly"
            priority // Prioritize loading for hero image
            ref={(el) => (imageRefs.current[1] = el)} // Assign ref to the second image
          />
        </div>

        {/* Text container for the H1 elements */}
        {/* 'flex flex-col justify-center items-center' centers the content vertically and horizontally */}
        {/* 'overflow-hidden' on this container is for the character animations */}
        <div
          ref={textContainerRef}
          className="absolute top-0 left-0 h-screen w-full bg-transparent flex flex-col justify-center items-center overflow-hidden z-20"
        >
          {/* Wrapper for the overlapping H1s. This div manages the max-width and internal text centering. */}
          {/* 'relative' is crucial for 'absolute' positioning of children. */}
          {/* 'max-w-3xl' limits the text width, 'w-full' ensures it takes available width up to max. */}
          {/* 'text-center' centers the text within this wrapper. */}
          <div className="relative max-w-3xl w-full text-center">
            {/* First H1 element with the initial phrase */}
            {/* 'overflow-hidden' needed for SplitText character animation. */}
            <h1 ref={dynamicTextSpan1Ref} className="text-3xl md:text-5xl font-bold uppercase text-white overflow-hidden">
              Tired of Frequent Blackouts?
            </h1>
            {/* Second H1 element with the replacement phrase */}
            {/* 'absolute top-0 left-0 w-full' makes it perfectly overlap the first H1. */}
            {/* 'overflow-hidden' also needed for SplitText character animation. */}
            {/* GSAP will handle its initial invisibility and subsequent reveal. */}
            <h1 ref={dynamicTextSpan2Ref} className="absolute top-0 left-0 w-full text-3xl md:text-5xl font-bold uppercase text-white overflow-hidden">
              Tired of the stress, noise, headaches from Generator wahala?
            </h1>
          </div>
        </div>

        {/* Gradient overlay for text readability, placed above images but below text/panels */}
        <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-t from-gray-950/70 to-transparent z-10" />

        {/* Sliding overlay panels with z-index 30 to slide over the text and images */}
        {/* Initial transform classes position them off-screen */}
        <div
          ref={leftRef}
          className="absolute top-0 left-0 h-screen w-1/2 bg-yellow-500 z-30 transform -translate-x-full"
        />
        <div
          ref={rightRef}
          className="absolute top-0 right-0 h-screen w-1/2 bg-yellow-500 z-30 transform translate-x-full"
        />
      </div>

      {/* New Expanding Clip-Path Div */}
      {/* This div will be hidden initially by opacity and then animated to expand */}
      {/* z-index 40 ensures it covers the previous content when it expands */}
      <div
        ref={expandingDivRef}
        className="absolute inset-0 gradient-bg flex items-center justify-center z-40"
      >
        {/* New Welcome Text */}
        {/* z-index 50 ensures it's above the expanding div */}
        <h2
          ref={welcomeTextRef}
          className="text-black max-w-[700px] text-4xl md:text-6xl font-bold text-center px-4"
        >
          Welcome to the end of your power struggles
        </h2>
      </div>

      {/* Scroll Guide Animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-60" // Adjusted z-index to be highest
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 2, repeat: Infinity },
        }}
      >
        <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M12 5L12 19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
