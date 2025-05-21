import React from "react";
import { Shield, Battery, Sun, Clock } from "lucide-react";
import { motion } from "framer-motion";

import HeroImage from "@/app/assets/valuemine_hero_image.png";
import Logo from "@/app/assets/logo.svg";

export { HeroImage, Logo };

export const benefits = [
  {
    icon: Sun,
    title: "Clean Energy",
    description:
      "Harness the power of the sun with zero emissions and sustainable technology",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description:
      "Advanced battery solutions ensure power continues even after sunset",
  },
  {
    icon: Shield,
    title: "Reliable Systems",
    description:
      "Engineered for durability in the Nigerian climate with minimal maintenance",
  },
  {
    icon: Clock,
    title: "Long Lifespan",
    description:
      "Our solar solutions last 25+ years with industry-leading warranties",
  },
];
