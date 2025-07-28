// import { benefits, familyRelaxing } from "@/app/constants";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { motion } from "@/lib/framerMotion";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti";
// import { useInView } from "react-intersection-observer";

// export const Solution = () => {
//   const isMobile = useIsMobile();

//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger when 50% of the section is in view
//     triggerOnce: true,
//   });

//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setShowConfetti(true);

//       const timer = setTimeout(() => setShowConfetti(false), 5000);

//       return () => clearTimeout(timer);
//     }
//   }, [inView]);

//   return (
//     <section ref={ref}>
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}>
//           <h3 className="section-heading">
//             Welcome to the{" "}
//             <span className="gradient-text">end of your power struggles!</span>
//           </h3>
//         </motion.div>
//         <div className=" container mx-auto flex flex-col md:flex-row md:flex-row-reverse items-center gap-8">
//           <div className="md:flex-1/2 space-y-8">
//             <p>
//               Whether you&apos;re a parent, business owner, landlord, or just
//               tired of suffering, our solar/inverter packages will give you
//               peace of mind day and night.
//             </p>
//             <motion.div
//               className=" mb-16 flex flex-col md:flex-row gap-8 md:gap-32"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}>
//               <div className="w-full h-[320px] md:h-[640px] relative rounded-lg shadow-lg overflow-hidden mb-4">
//                 <Image
//                   className={`${
//                     isMobile ? "object-cover" : "object-contain"
//                   } z-50`}
//                   src={familyRelaxing}
//                   fill
//                   alt="picture of a powerful inverter system"
//                 />
//                 {/* <div className="border border-4 border-dashed border-amber-500  z-0 size-full rounded-full animate-spin duration-1800" /> */}
//               </div>
//             </motion.div>
//           </div>
//           <div className="container mx-auto md:flex-1/2">
//             {/* Left Column - Problems */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="space-y-8">
//               <div className="w-full">
//                 <h2 className="mt-2 text-xl max-w-96">
//                   Why Nigerians Are Switching to Solar:
//                 </h2>
//               </div>
//               <div className="container mx-auto grid md:grid-cols-1 gap-8">
//                 {benefits.map(({ title, icon: Icon, description }, index) => (
//                   <motion.div
//                     key={index}
//                     className="section-card"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}>
//                     <div className="flex items-start gap-4">
//                       <div className="mt-1 p-3 text-yellow-500 rounded-full">
//                         <Icon className="h-8 w-8" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-lg mb-2">{title}</h4>
//                         <p className="">{description}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {showConfetti && <Confetti />}
//     </section>
//   );
// };

import { benefits, familyRelaxing } from "@/app/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "@/lib/framerMotion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useInView } from "react-intersection-observer";

export const Solution = () => {
  const isMobile = useIsMobile();

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is in view
    // triggerOnce: true,
  });

  const [showConfetti, setShowConfetti] = useState(false);
  // State to store window dimensions
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Update window dimensions on resize
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      setShowConfetti(true);

      const timer = setTimeout(() => setShowConfetti(false), 10000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20">
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
              <div className="w-full h-[320px] md:h-[640px] relative overflow-hidden mb-4">
                <Image
                  className={`${
                    isMobile ? "object-cover" : "object-contain"
                  } z-50`}
                  src={familyRelaxing}
                  fill
                  alt="picture of a powerful inverter system"
                />
                {/* <div className="border border-4 border-dashed border-amber-500  z-0 size-full rounded-full animate-spin duration-1800" /> */}
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

      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
        />
      )}
    </section>
  );
};
