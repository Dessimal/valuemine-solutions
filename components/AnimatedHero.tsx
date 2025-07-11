import React, { useRef, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Fan, Refrigerator } from "lucide-react";
import { motion } from "@/lib/framerMotion";
import { HeroImage, TiredMan, TiredManTwo } from "@/app/constants"; // Assuming this is your second image (larger, main one)
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

// Register GSAP plugins
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const AnimatedHero = () => {
  const isMobile = useIsMobile();
  // Refs for the sliding overlay panels (not used in this sequence, kept for potential future use)
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const redOverlayRef = useRef(null);
  const grayOverlayRef = useRef(null);

  // Refs for the background images and animated elements
  const imageRefs = useRef([]); // imageRefs.current[0] for HeroImage, imageRefs.current[1] for TiredMan
  const textContainerRef = useRef(null); // Container for the overlapping H1 texts

  // Refs for the two distinct H1 elements (full phrases)
  const dynamicTextSpan1Ref = useRef(null); // "Tired of Frequent Blackouts?"
  const dynamicTextSpan2Ref = useRef(null); // "Tired of the stress, noise, headaches from Generator wahala?"

  // Refs for the small yellow ball, the welcome text, and the final hero section
  const ballRef = useRef(null); // The yellow ball that will roll in, expand, and collapse
  const welcomeTextRef = useRef(null); // The "Welcome to..." text
  const heroSectionRef = useRef(null); // The actual main hero section content that appears at the very end

  // useLayoutEffect is used for DOM manipulations that need to happen
  // before the browser paints, like SplitText, to prevent flashes of unstyled content.
  useLayoutEffect(() => {
    // Create a GSAP Context for automatic cleanup of all animations and SplitText instances
    // within this scope when the component unmounts or the effect re-runs.
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({ defaults: { ease: "power2.out" } });

      // --- Safety Check for Refs ---
      // Ensure all necessary elements are mounted before trying to animate them.
      if (
        !dynamicTextSpan1Ref.current ||
        !dynamicTextSpan2Ref.current ||
        !ballRef.current ||
        !welcomeTextRef.current ||
        !heroSectionRef.current
      ) {
        console.warn(
          "One or more animation element refs are null. Skipping GSAP animations."
        );
        return; // Exit if any crucial ref is missing
      }

      // --- Create SplitText Instances ---
      // SplitText for the first phrase.
      let split1 = SplitText.create(dynamicTextSpan1Ref.current, {
        type: "chars", // Animate by characters
        charsClass: "gsap-char-phrase1-++",
        smartWrap: true, // Prevents words from breaking onto multiple lines
      });

      // SplitText for the second phrase.
      let split2 = SplitText.create(dynamicTextSpan2Ref.current, {
        type: "chars", // Animate by characters
        charsClass: "gsap-char-phrase2-++",
        smartWrap: true, // Prevents words from breaking onto multiple lines
      });

      // SplitText for the welcome text.
      let splitWelcomeText = SplitText.create(welcomeTextRef.current, {
        type: "chars", // Animate by characters
        charsClass: "gsap-welcome-char-++",
        smartWrap: true, // Prevents words from breaking onto multiple lines
      });

      // --- Calculate dynamic values for realistic ball animation ---
      // Ball diameter in pixels (w-10 is 2.5rem, assuming 1rem = 16px, so 40px)
      const ballDiameter = 40;
      // Horizontal distance to roll: from -90vw to 0vw, so 90vw
      const distanceToRollVW = 90;
      const viewportWidth = window.innerWidth;
      const distanceInPixels = (distanceToRollVW / 100) * viewportWidth;
      // Circumference of the ball
      const ballCircumference = Math.PI * ballDiameter;
      // Number of revolutions needed for a realistic roll
      const revolutions = distanceInPixels / ballCircumference;
      // Final rotation value in degrees
      const finalRotationDegrees = revolutions * 360;

      // Calculate scale needed for ball to fill the screen
      // Ball's initial size is 40px. Scale factor = (max_viewport_dimension / ball_diameter)
      const targetScale =
        Math.max(window.innerWidth, window.innerHeight) / ballDiameter;

      // --- Initial GSAP Setups (Hide elements that appear later in the sequence) ---
      // Hide the characters of the second phrase, ready for its reveal animation.
      gsap.set(split2.chars, { opacity: 0, yPercent: 100 });
      // Hide the welcome text characters, ready for their reveal animation.
      gsap.set(splitWelcomeText.chars, { opacity: 0, yPercent: 100 });
      // Hide the small yellow ball, ready for its roll-in animation and initial scale.
      gsap.set(ballRef.current, {
        opacity: 0,
        scale: 0.1,
        y: 0,
        xPercent: -50,
      });
      // Hide the final hero section, ready for its reveal at the very end.
      gsap.set(heroSectionRef.current, { opacity: 0 });
      // Ensure the initial background image (TiredMan) is visible.
      // Its parent div has no initial opacity-0 in JSX, so it's visible by default.
      gsap.set(imageRefs.current[1], { opacity: 1 });
      // Ensure the second background image (HeroImage) is initially hidden.
      gsap.set(imageRefs.current[0], { opacity: 0 });
      gsap.set(grayOverlayRef.current, { opacity: 1 });
      gsap.set(redOverlayRef.current, { opacity: 0 });

      // --- GSAP Timeline Definition (The Core Animation Sequence) ---

      // Sequence Step 1: First Text & Initial Background Image Reveal
      // "Tired of Frequent blackouts should fade in with a stagger"
      t1.from(split1.chars, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        duration: 1,
      });
      // (The first background image (TiredMan) is already visible by default due to JSX initial state)

      // Sequence Step 2: First Text/Image Out, Second Text/Image In, Ball Roll-in
      // "The about text should fade out with a stagger, along with the background image and
      // the next text and background image should fade in almost immediately.
      // A small yellow ball should roll into the center of the screen just below the texts concurrently as well"
      t1.to(
        split1.chars,
        {
          yPercent: -100, // Move up
          opacity: 0, // Fade out
          stagger: 0.05,
          duration: 1,
          ease: "power1.in",
        },
        "+=2.5"
      ); // Starts 1s after the first text reveal finishes

      t1.to(
        imageRefs.current[1],
        {
          opacity: 0, // TiredMan fades out
          duration: 0.5,
        },
        "<"
      ); // Starts at the same time as split1.chars fade out

      t1.to(
        split2.chars,
        {
          opacity: 1, // Second text fades in
          yPercent: 0, // Moves to natural position
          stagger: 0.05,
          duration: 1.5,
          ease: "power2.out",
        },
        "<"
      ); // Starts at the same time as TiredMan fades out

      t1.to(
        imageRefs.current[0],
        {
          opacity: 1, // HeroImage fades in
          duration: 1.5, // Reduced duration for smoother transition
        },
        "<"
      ); // Starts at the same time as second text fades in

      //  // Ball rolls in very slowly and subtly from left to center
      //  t1.to(ballRef.current, {
      //   opacity: 0.8, // Make ball visible but subtle
      //   x: "0vw", // Roll to horizontal center (0vw relative to parent's center)
      //   rotationZ: finalRotationDegrees * 0.3, // Reduced rotation for subtlety
      //   duration: 8, // Much longer duration for very slow movement
      //   ease: "none", // Linear movement for consistent, unnoticeable speed
      // }, "<"); // Starts with the text transition

      // Sequence Step 3: Ball Expansion & Welcome Text Reveal
      // Add a pause before ball expansion
      t1.to({}, { duration: 4.5 }); // 2 second pause

      // t1.to(split2.chars, {
      //   opacity: 0, // Second text fades in
      //   yPercent: 100, // Moves to natural position
      //   stagger: 0.05,
      //   duration: 0.2,
      //   ease: "power2.out",
      // }); // Starts at the same time as TiredMan fades out

      // FIX: Ball expands from the top and fills the screen, centering itself vertically.
      t1.to(ballRef.current, {
        opacity: 1, // Make ball visible
        scale: targetScale * 2, // Scale up to cover the screen
        // y: "50vh", // Move its top edge to 50% of viewport height
        xPercent: -50, // Keep it horizontally centered (important with `left: 50%`)
        duration: 1.5,
        ease: "power2.inOut",
      }); // Starts at the same time as split2.chars fade out

      // Welcome text appears while ball is expanded
      t1.to(
        splitWelcomeText.chars,
        {
          opacity: 1,
          yPercent: 0, // Animate to natural position
          stagger: 0.02, // Stagger characters for welcome text
          duration: 1,
          ease: "power2.out",
        },
        "<0.5"
      ); // Starts 0.5s after ball expansion begins

      t1.to(
        imageRefs.current[0],
        {
          opacity: 0, // HeroImage fades out
          duration: 0.5, // Reduced duration for smoother transition
        },
        "<"
      );

      t1.to(
        split2.chars,
        {
          opacity: 0, // Second text fades in
          scale: 0, // Moves to natural position
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      t1.to(
        grayOverlayRef.current,
        {
          opacity: 0,
        },
        "<"
      );

      t1.to(
        redOverlayRef.current,
        {
          opacity: 1,
        },
        "<"
      );

      // Sequence Step 4: Expanded Ball Collapse & Final Hero Section Reveal
      // Add pause to let welcome text be visible
      t1.to({}, { duration: 2 }); // 2 second pause to read welcome text

      // Ball collapses (scales down) and fades out to reveal the hero section.
      t1.to(ballRef.current, {
        scale: 0, // Collapse to nothing
        opacity: 0, // Fade out the ball
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Hide welcome text as ball collapses
      t1.to(
        splitWelcomeText.chars,
        {
          scale: 0,
          // yPercent: -100,
          // stagger: 0.05,
          duration: 0.5,
          ease: "power2.in",
        },
        "<"
      ); // Starts with ball collapse

      t1.to(
        redOverlayRef.current,
        {
          opacity: 0,
        },
        "<"
      );

      // Reveal the actual main Hero section.
      t1.to(
        heroSectionRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<0.5"
      ); // Starts slightly before ball fully collapses
    }, textContainerRef); // Associate this GSAP context with textContainerRef for scope management.

    // Cleanup function: Revert all animations and SplitText instances when component unmounts.
    return () => ctx.revert();
  }, []); // Empty dependency array ensures this effect runs only once after initial render.

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient for overall page (always visible, z-0) */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/20 to-brand-orange/20 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Container for initial background images (TiredMan, HeroImage) */}
      <div
        className={`
          absolute top-0 left-0 h-screen w-screen
          ${isMobile ? "flex flex-col justify-center items-center" : ""}
          z-10
        `}>
        {/* TiredMan Image (initial background) */}
        <div className="absolute inset-0">
          <Image
            className="object-cover"
            fill
            src={TiredMan}
            alt="Man staring tiredly"
            priority
            ref={(el) => (imageRefs.current[1] = el)}
          />
        </div>
        {/* HeroImage (second background) */}
        <div className="absolute inset-0">
          <Image
            className="object-cover"
            fill
            src={TiredManTwo}
            alt="frustrated man"
            priority
            ref={(el) => (imageRefs.current[0] = el)}
          />
        </div>
      </div>

      {/* Text container for the H1 elements (overlapping texts) */}
      <div
        ref={textContainerRef}
        className="absolute top-0 left-0 h-screen w-full bg-transparent flex flex-col justify-center items-center overflow-hidden z-20">
        <div className="relative max-w-3xl w-full text-center">
          {/* First H1 element (initial phrase) */}
          <h1
            ref={dynamicTextSpan1Ref}
            className="text-5xl md:text-7xl font-bold uppercase text-white overflow-hidden z-150">
            Tired of NEPA WAHALA?
          </h1>
          {/* Second H1 element (replacement phrase) - absolute positioned to overlap first H1 */}
          <h1
            ref={dynamicTextSpan2Ref}
            className="absolute top-0 left-0 w-full text-3xl md:text-5xl font-bold uppercase text-white overflow-hidden">
            Tired of generator expenses, noise and stress?{" "}
          </h1>
        </div>
      </div>

      <div
        ref={grayOverlayRef}
        className="absolute top-0 left-0 w-screen h-screen left-screen bg-gradient-to-t from-gray-950 z-80"
      />

      <div
        ref={redOverlayRef}
        className="absolute top-0 left-0 w-screen h-screen left-screen bg-gradient-to-t from-red-900 z-80"
      />

      {/* Small Yellow Ball / Expanding Full-Screen Circle */}
      <div
        ref={ballRef}
        className="absolute w-10 h-10 gradient-bg rounded-full z-30"
        style={{
          top: "0",
          left: "50%",
          transformOrigin: "center center",
        }}
      />

      {/* Welcome Text */}
      {/* Higher z-index (100) to ensure it appears over the expanded ball */}
      <div className="absolute inset-0 flex items-center justify-center z-100 pointer-events-none">
        <h2
          ref={welcomeTextRef}
          className="text-white text-4xl md:text-6xl font-bold text-center px-4 uppercase max-w-4xl leading-tight"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          Welcome to the end of your power struggles
        </h2>
      </div>

      {/* Actual Hero Section (The final content of the page) */}
      <div
        ref={heroSectionRef}
        className="container mx-auto absolute inset-0 flex flex-col md:flex-row items-center md:justify-between md:gap-10 gap:6 z-50 opacity-0 p-4">
        <div className="flex-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold  mb-1">
            SAY GOODBYE TO NEPA WAHALA
          </h1>
          <p className="text-xl max-w-2xl mb-2">
            Your Light, Your Peace - <span className="italic">Delivered!</span>
          </p>
          <p className="text-lg  max-w-2xs">
            Discover sustainable, reliable power solutions for your home and
            business. Join the solar revolution today!
          </p>
          <div className="w-full mt-8">
            <Button asChild className="gradient-bg text-lg py-6 ">
              <span>
                <Link href="/calculator">Try Solar Calculaltor</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
          {/* <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium">Solar Panels</p>
                <p className="text-xs text-gray-500">High Efficiency</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium">Solar Panels</p>
                <p className="text-xs text-gray-500">High Efficiency</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
                <Refrigerator className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium">24/7 Power</p>
                <p className="text-xs text-gray-500">No Blackouts</p>
              </div>
            </motion.div>
          </div> */}
        </div>

        <div className="ring ring-gray-800/5 rounded-lg shadow-lg h-fit w-full relative overflow-hidden flex-1/2">
          <Image
            className="object-cover"
            src={HeroImage}
            height={1000}
            width={1000}
            alt="picture of a Nigerian fiamily"
          />
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
