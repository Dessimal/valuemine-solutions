"use client";

import { videoLinks } from "@/app/constants";

import React from "react";
import { motion } from "@/lib/framerMotion";
import { VideoPlayer } from "./VideoPlayer";

export const VideoTestimonials = () => {
  const fadeInAnimationVariantY = {
    initial: {
      opacity: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      transition: {
        delay: 0.2 * index,
        ease: "easeInOut",
        duration: 1.8,
      },
    }),
  };

  return (
    <section className="space-y-6 py-6">
      <div className="container mx-auto">
        <h2 className="section-heading">
          What People are saying about Valuemine
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 place-items-center py-10 gap-12 ">
        {videoLinks.map((link, index) => (
          <motion.div
            className="w-full grid place-items-center"
            key={index}
            variants={fadeInAnimationVariantY}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}>
            <VideoPlayer src={link} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
