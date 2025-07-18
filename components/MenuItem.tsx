"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/app/constants";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ name, icon: Icon, path }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="rounded-full bg-white size[40px] mr-[20px]">
        <Icon />
      </div>
      <Link
        href={path}
        className="font-bold text-sm md:text-lg hover:gradient-bg hover:text-black">
        {name}
      </Link>
    </motion.li>
  );
};
