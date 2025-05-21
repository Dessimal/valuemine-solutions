// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Sun, Zap } from "lucide-react";
// import { motion } from "framer-motion";
// // import {HeroImage } from "@/app/constants"
// import HeroImage from "@/app/assets/valuemine_hero_image.png"
// import Image from "next/image"

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/20 to-brand-orange/20 overflow-hidden">
//         {/* <motion.div
//           className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         /> */}
//         <motion.div
//           className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//       </div>

//       <div className="container relative mx-auto px-4 pt-32 pb-16 flex flex-col lg:flex-row items-center">
//         <motion.div
//           className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}>
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}>
//             Finally! <br/> <span className="gradient-text">Pay Small-Small</span> <br/> for a Professional Solar Installation
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.4 }}>
//             Sustainable, reliable power solutions for homes and businesses
//             across Nigeria. Join the solar revolution today.
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.6 }}>
//             <Button className="gradient-bg text-lg py-6">
//               Get Started
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               className="text-lg border-brand-orange text-brand-orange py-6">
//               Learn More
//             </Button>
//           </motion.div>

//           <motion.div
//             className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.8 }}>
//             <motion.div
//               className="flex items-center gap-3"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}>
//               <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
//                 <Sun className="h-5 w-5 text-white" />
//               </div>
//               <div className="text-left">
//                 <p className="font-medium">100% Clean</p>
//                 <p className="text-sm text-gray-500">Renewable Energy</p>
//               </div>
//             </motion.div>
//             <motion.div
//               className="flex items-center gap-3"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}>
//               <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
//                 <Zap className="h-5 w-5 text-white" />
//               </div>
//               <div className="text-left">
//                 <p className="font-medium">24/7 Power</p>
//                 <p className="text-sm text-gray-500">Reliable Solutions</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="lg:w-1/2 flex justify-center items-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}>
//           <motion.div
//             className="relative w-72 h-72 md:w-96 md:h-96"
//             animate={{
//               y: [0, -15, 0],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}>
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-yellow to-brand-orange opacity-20 blur-2xl"></div>
//             <Image
//               src={HeroImage}
//               height={500}
//               width={500}
//               alt="Valuemine Solutions Professional"
//               className="w-full h-full object-contain relative z-10"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Fan, Refrigerator } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/20 to-brand-orange/20 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 pt-32 pb-16 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            Live <span className="gradient-text">Powerfully</span> With Solar
            Energy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}>
            Say goodbye to blackouts. Discover smarter energy with Valuemine's
            custom solar and inverter solutions built for your home or business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}>
            <Button className="gradient-bg text-lg py-6">
              Get a Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-lg border-brand-orange text-brand-orange py-6">
              Watch How It Works
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}>
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
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
                <Fan className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium">No Noise</p>
                <p className="text-xs text-gray-500">Quiet Energy</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-yellow to-brand-orange opacity-20 blur-2xl"></div>
            <img
              src="/lovable-uploads/a248f2f1-f6ce-43a8-8d3b-f651fa300333.png"
              alt="Valuemine Solutions Professional"
              className="w-full h-full object-contain relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Guide Animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 2, repeat: Infinity },
        }}>
        <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
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
