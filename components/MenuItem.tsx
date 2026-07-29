// "use client";

// import * as React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { navLinks } from "@/app/constants";
// import { usePathname } from "next/navigation";
// import { cn } from "@/app/lib/utils";

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

// export const MenuItem = ({ name, icon: Icon, path }) => {
//   const pathname = usePathname();
//   console.log(pathname);

//   return (
//     <motion.li
//       className="flex items-center space-x-2"
//       variants={variants}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}>
//       <div className="rounded-full bg-transparent size[40px] mr-[20px]">
//         <Icon stroke={pathname === path ? "orange" : "white"} />
//       </div>
//       <Link
//         href={path}
//         className={cn(
//           " text-sm md:text-lg hover:text-black",
//           pathname === path
//             ? "gradient-text font-bold"
//             : "text-white hover:gradient-text font-normal"
//         )}>
//         {name}
//       </Link>
//     </motion.li>
//   );
// };

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

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

export const MenuItem = ({ name, icon: Icon, path, toggleOpen }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(path); // Navigate to the route
    setTimeout(() => {
      toggleOpen(0); // Close the sidebar *after* a short delay
    }, 150); // 100–200ms is usually enough
  };

  return (
    <motion.li
      className="flex cursor-pointer items-center space-x-3 rounded-2xl px-3 py-2.5 transition hover:bg-white/10"
      variants={variants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
        <Icon stroke={pathname === path ? "#f59e0b" : "white"} />
      </div>
      <span
        className={cn(
          "text-base font-medium",
          pathname === path ? "font-semibold text-amber-400" : "text-white",
        )}>
        {name}
      </span>
    </motion.li>
  );
};
