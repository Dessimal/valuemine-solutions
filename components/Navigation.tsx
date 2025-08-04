"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { cn } from "@/app/lib/utils";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/pageLinks";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ className, toggleOpen }) => (
  <motion.ul className={cn("space-y-5", className)} variants={variants}>
    {navLinks.map(({ icon, name, path }) => (
      <MenuItem
        icon={icon}
        key={name}
        name={name}
        path={path}
        toggleOpen={toggleOpen}
      />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
