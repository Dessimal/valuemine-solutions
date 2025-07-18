"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navLinks } from "@/app/constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul
    className="absolute top-[100px] w-[230px] p-[25px]"
    variants={variants}>
    {navLinks.map(({ icon, name, path }) => (
      <MenuItem icon={icon} key={name} name={name} path={path} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
