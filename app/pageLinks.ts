// constants.ts
import Logo from "@/app/assets/logo.svg";
import HeroImage from "@/app/assets/family-hero-image.webp";
import MainHeroImage from "@/app/assets/main-family-hero-image.webp";
import TiredMan from "@/app/assets/manTired.webp";
import TiredManTwo from "@/app/assets/frustratedNigerian.webp";
import familyRelaxing from "@/app/assets/website-family3.webp";
import generator from "@/app/assets/gen.webp";
import nationalGrid from "@/app/assets/national-grid.webp";
import fuelQueue from "@/app/assets/fuel-queues.webp";
import DoodleArrowUp from "@/app/assets/Frame 5.svg";
import DoodleArrowDown from "@/app/assets/Frame 6.svg";
import {
  House,
  Info,
  Sun,
  Battery,
  Shield,
  Clock,
  Home,
  Building2,
  Factory,
  Lightbulb,
  Zap,
  ArrowBigDown,
  ArrowBigLeft,
  PencilRuler,
  Cable,
  Workflow,
  FireExtinguisher,
  AirVent,
  Cctv,
  MapPin,
  Phone,
  Mail,
  Clock1,
} from "lucide-react";

export const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["No 1, Idi-Osan, Ologuneru", "Ibadan, Nigeria"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 902 053 2639", "+234 813 681 2541"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@valueminesolutions.com.ng",
      "support@valueminesolutions.com.ng",
    ],
  },
  {
    icon: Clock1,
    title: "Working Hours",
    details: ["Mon-Fri: 8AM - 6PM", "Saturday: 9AM - 1PM"],
  },
];

export const quickLinks = [
  { href: "#solar", name: "Solar Energy" },
  { href: "#wiring", name: "Electrical Wiring" },
  { href: "#cctv", name: "CCTV" },
  { href: "#automation", name: "Home Automation" },
  { href: "#fire-alarm", name: "Fire Alarm System" },
  { href: "#electronics", name: "Installation of Home Appliances" },
];

export const navLinks = [
  { icon: House, name: "Home", path: "/" },
  { icon: Info, name: "About", path: "/about" },
  { icon: Phone, name: "Contact", path: "/contact" },
];
