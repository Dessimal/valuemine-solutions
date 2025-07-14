// constants.ts
import Logo from "@/app/assets/logo.svg";
import HeroImage from "@/app/assets/family-hero-image.jpg";
import MainHeroImage from "@/app/assets/main-family-hero-image.png";
import TiredMan from "@/app/assets/manTired.jpg";
import TiredManTwo from "@/app/assets/frustratedNigerian.jpg";
import familyRelaxing from "@/app/assets/website-family3.png";
import generator from "@/app/assets/gen.png";
import nationalGrid from "@/app/assets/national-grid.jpeg";
import fuelQueue from "@/app/assets/fuel-queues.jpeg";
import DoodleArrowUp from "@/app/assets/Frame 5.svg";
import DoodleArrowDown from "@/app/assets/Frame 6.svg";
import {
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

import FiveHundredWatts from "@/public/500W-65AH- 280K.png";
import OneThousandWatts from "@/public/1000W-100AH 420K.png";
import OneThousandWatts2P from "@/public/1000W-100AH-2P 470K.png";
import OneKvaFamicare from "@/public/1KVA 705K .png";
import oneKva from "@/public/1KVA 860K .png";
import onePointFiveKva from "@/public/1.5KVA 900K.png";
import twoKva from "@/public/2KVA 960K.png";
import twoPointFiveKva from "@/public/2.5kva 1.5m.png";
import threePointFiveKva from "@/public/3.5kva 1.8m.png";
import fourPointTwoKva from "@/public/4.2kva 1.9m.png";
import sixPointTwoKvaTubular from "@/public/6.2kva 2.8m.png";
import sixPointTwoKvaLithium from "@/public/6.2kva lithium 3m.png";

export {
  Logo,
  HeroImage,
  MainHeroImage,
  TiredMan,
  TiredManTwo,
  familyRelaxing,
  generator,
  nationalGrid,
  fuelQueue,
  DoodleArrowUp,
  DoodleArrowDown,
};

// export const benefits = [
//   {
//     icon: Sun,
//     title: "Clean Energy",
//     description:
//       "Harness the power of the sun with zero emissions and sustainable technology",
//   },
//   {
//     icon: Battery,
//     title: "Energy Storage",
//     description:
//       "Advanced battery solutions ensure power continues even after sunset",
//   },
//   {
//     icon: Shield,
//     title: "Reliable Systems",
//     description:
//       "Engineered for durability in the Nigerian climate with minimal maintenance",
//   },
//   {
//     icon: Clock,
//     title: "Long Lifespan",
//     description:
//       "Our solar solutions last 25+ years with industry-leading warranties",
//   },
// ];

// export const services = [
//   {
//     icon: Home,
//     title: "Residential Solar",
//     description:
//       "Complete solar power systems for homes with options for grid-tied or off-grid solutions",
//     features: [
//       "Solar panels",
//       "Inverters",
//       "Battery storage",
//       "Installation & maintenance",
//     ],
//   },
//   {
//     icon: Building2,
//     title: "Commercial Solar",
//     description:
//       "Reduce operational costs and enhance sustainability for your business with custom solar solutions",
//     features: [
//       "Rooftop systems",
//       "Solar carports",
//       "Energy monitoring",
//       "24/7 support",
//     ],
//   },
//   {
//     icon: Factory,
//     title: "Industrial Power",
//     description:
//       "Large-scale solar installations for manufacturing facilities and industrial complexes",
//     features: [
//       "MW-scale systems",
//       "Hybrid solutions",
//       "Load management",
//       "Energy consulting",
//     ],
//   },
//   {
//     icon: Lightbulb,
//     title: "Energy Consulting",
//     description:
//       "Expert advice on energy efficiency, system design, and financial planning for solar adoption",
//     features: [
//       "Energy audits",
//       "ROI analysis",
//       "Financing options",
//       "Grant assistance",
//     ],
//   },
// ];
export const PACKAGES = [
  {
    id: 1,
    name: "500W",
    battery: "65ah",
    panelArray: "200w",
    price: 280000,
    picture: FiveHundredWatts,
  },
  {
    id: 2,
    name: "1000W(a)",
    battery: "100ah",
    panelArray: "200w",
    price: 420000,
    picture: OneThousandWatts,
  },
  {
    id: 3,
    name: "1000W(b)",
    battery: "100ah",
    panelArray: "400w",
    price: 470000,
    picture: OneThousandWatts2P,
  },
  {
    id: 4,
    name: "1kva(a)",
    battery: "100ah",
    panelArray: "800w",
    price: 705000,
    picture: OneKvaFamicare,
  },
  {
    id: 5,
    name: "1kva(b)",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 860000,
    picture: oneKva,
  },
  {
    id: 6,
    name: "1.5kva",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 900000,
    picture: onePointFiveKva,
  },
  {
    id: 7,
    name: "2kva hybrid",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 960000,
    picture: twoKva,
  },
  {
    id: 8,
    name: "2.5kva",
    battery: "Tubular 2 x 220ah",
    panelArray: "1200w",
    price: 1500000,
    picture: twoPointFiveKva,
  },
  {
    id: 9,
    name: "3.5kva",
    battery: "Tubular 2 x 220ah",
    panelArray: "1800w",
    price: 1800000,
    picture: threePointFiveKva,
  },
  {
    id: 10,
    name: "4.2kva hybrid",
    battery: "Tubular 2 x 220ah",
    panelArray: "2400w",
    price: 1900000,
    picture: fourPointTwoKva,
  },
  {
    id: 11,
    name: "6.2kva hybrid(a)",
    battery: "Tubular 4 x 220ah",
    panelArray: "3000w",
    price: 2800000,
    picture: sixPointTwoKvaTubular,
  },
  {
    id: 12,
    name: "6.2kva hybrid(b)",
    battery: "Lithium 5kwh",
    panelArray: "3000w",
    price: 3000000,
    picture: sixPointTwoKvaLithium,
  },
];

export const TRANSPORT_COST = [
  { location: "Ibadan", cost: 30000 },
  { location: "Ogun state", cost: 60000 },
];

export const WORKMANSHIP = [
  { building: "bungalow", package: "1kVA", cost: 60000 },
  { building: "storey", package: "1kVA", cost: 100000 },
  { building: "bungalow", package: "1.5kVA", cost: 80000 },
  { building: "storey", package: "1.5kVA", cost: 120000 },
  { building: "bungalow", package: "2kVA", cost: 90000 },
  { building: "storey", package: "2kVA", cost: 130000 },
];

export const appliances = [
  // Fans
  { icon: "Fan", name: "Ceiling Fan", watts: 80 },
  { icon: "Fan", name: "Standing Fan", watts: 100 },
  { icon: "Fan", name: "Table Fan", watts: 50 },
  { icon: "Fan", name: "Exhaust Fan", watts: 40 },

  // Lighting
  { icon: "Bulb", name: "LED Bulb (10W)", watts: 10 },
  { icon: "Bulb", name: "Energy Saving Bulb", watts: 20 },
  { icon: "Bulb", name: "Tube Light", watts: 36 },
  { icon: "Bulb", name: "Chandelier", watts: 150 },

  // Kitchen Appliances
  { icon: "Microwave", name: "Microwave Oven", watts: 1200 },
  { icon: "Toaster", name: "Toaster", watts: 800 },
  { icon: "Kettle", name: "Electric Kettle", watts: 1500 },
  { icon: "Cooker", name: "Electric Cooker", watts: 2000 },
  { icon: "Cooker", name: "Induction Cooker", watts: 1800 },
  { icon: "Blender", name: "Blender", watts: 400 },
  { icon: "Fridge", name: "Refrigerator (Small)", watts: 150 },
  { icon: "Fridge", name: "Refrigerator (Medium)", watts: 250 },
  { icon: "Fridge", name: "Refrigerator (Large)", watts: 400 },
  { icon: "Freezer", name: "Chest Freezer", watts: 300 },

  // Laundry
  { icon: "WashingMachine", name: "Washing Machine", watts: 500 },
  { icon: "Iron", name: "Electric Iron", watts: 1000 },
  { icon: "Dryer", name: "Clothes Dryer", watts: 3000 },

  // Living Room
  { icon: "TV", name: 'LED TV (32")', watts: 60 },
  { icon: "TV", name: 'LED TV (50")', watts: 120 },
  { icon: "TV", name: "Plasma TV", watts: 250 },
  { icon: "Speaker", name: "Home Theater", watts: 150 },
  { icon: "AC", name: "Air Conditioner (1 HP)", watts: 900 },
  { icon: "AC", name: "Air Conditioner (1.5 HP)", watts: 1200 },
  { icon: "AC", name: "Air Conditioner (2 HP)", watts: 1500 },

  // Office
  { icon: "Laptop", name: "Laptop", watts: 65 },
  { icon: "Desktop", name: "Desktop Computer", watts: 200 },
  { icon: "Monitor", name: "Computer Monitor", watts: 50 },
  { icon: "Printer", name: "Inkjet Printer", watts: 30 },
  { icon: "Printer", name: "Laser Printer", watts: 500 },
  { icon: "Router", name: "WiFi Router", watts: 10 },
  { icon: "Projector", name: "Projector", watts: 300 },
  { icon: "Scanner", name: "Flatbed Scanner", watts: 50 },
  { icon: "Server", name: "Small Server", watts: 600 },

  // Miscellaneous
  { icon: "Pump", name: "Water Pump (0.5 HP)", watts: 370 },
  { icon: "Pump", name: "Water Pump (1 HP)", watts: 750 },
  { icon: "Camera", name: "CCTV Camera", watts: 15 },
  { icon: "Fan", name: "Standing AC Fan", watts: 120 },
  { icon: "Heater", name: "Water Heater", watts: 3000 },
  { icon: "Dispenser", name: "Water Dispenser", watts: 550 },
  { icon: "HairDryer", name: "Hair Dryer", watts: 1200 },

  //Custom
  { icon: "Plus", name: "Custom Device", watts: 0 },
];

export const benefits = [
  {
    icon: Zap,
    title: "Zero Blackouts",
    description: "Sleep, work, and enjoy your life without interruption.",
  },
  {
    icon: Battery,
    title: "No more Fuel Queues",
    description: "Your generator is now a backup to the backup.",
  },
  {
    icon: Sun,
    title: "Silent Power",
    description: "No noise, no fumes — just clean, quiet electricity.",
  },
  {
    icon: ArrowBigDown,
    title: "Protects Your Appliances",
    description: "Say goodbye to blown TVs, fridges & fans.",
  },
  {
    icon: ArrowBigLeft,
    title: "Pays for itself",
    description: "Save more over time than you'll ever spend on fuel.",
  },
];

export const videoLinks = [
  "https://res.cloudinary.com/druwmu39g/video/upload/v1745409377/avwwz26bqagorah2d5be.mp4",
  "https://res.cloudinary.com/druwmu39g/video/upload/v1745811611/2Nd-Biodun_Alonge_1_d7xskq.mp4",
  "https://res.cloudinary.com/druwmu39g/video/upload/v1746011976/0430_mrst13.mp4",
];

export const services = [
  {
    id: "solar",
    icon: PencilRuler,
    iconSize: 32,
    text: "Design, procurement, and installation of solar and inverter systems.",
  },
  {
    id: "wiring",
    icon: Cable,
    iconSize: 32,

    text: "Residential, commercial, and industrial electrical wiring and installations.",
  },
  {
    id: "cctv",
    icon: Cctv,
    iconSize: 32,

    text: "Procurement and installation of CCTV surveilplance and security systems.",
  },
  {
    id: "automation",
    icon: Workflow,
    iconSize: 32,

    text: "Development and deployment of home and building automation solutions.",
  },
  {
    id: "fire-alarm",
    icon: FireExtinguisher,
    iconSize: 32,

    text: "Installation and maintenance of fire alarm and detection systems.",
  },
  {
    id: "electronics",
    icon: AirVent,
    iconSize: 32,

    text: "General procurement, supply, and installation of electrical and electronic equipment.",
  },
];

export const footerLinks = [
  { name: "About", link: "/about" },
  { name: "Contact", link: "/about" },
  { name: "Our Projects", link: "/projects" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "FAQs", link: "/faqs" },
];

export const faqs = [
  {
    question: "Can I pay for your packages in installments?",
    answer:
      "Yes, you can pay in instalments. However, this is only applicable to businesses, for now.",
  },
  {
    question: "How many days does installation take?",
    answer: "Typically one day, all things being equal",
  },
  {
    question: "Can I pay for your packages in installments?",
    answer:
      "Yes, you can pay in instalme,nts. However, this is only applicable to businesses, for now.",
  },
  {
    question: "Can I pay for your packages in installments?",
    answer:
      "Yes, you can pay in instalments. However, this is only applicable to businesses, for now.",
  },
  {
    question: "Can I pay for your packages in installments?",
    answer:
      "Yes, you can pay in instalments. However, this is only applicable to businesses, for now.",
  },
];

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
    details: ["info@valuemine.com.ng", "support@valuemine.com.ng"],
  },
  {
    icon: Clock1,
    title: "Working Hours",
    details: ["Mon-Fri: 8AM - 6PM", "Saturday: 9AM - 1PM"],
  },
];

export const quickLinks = [
  { href: "#solar", link: "Solar Energy" },
  { href: "#wiring", link: "Electrical Wiring" },
  { href: "#cctv", link: "CCTV" },
  { href: "#automation", link: "Home Automation" },
  { href: "#fire-alarm", link: "Fire Alarm System" },
  { href: "#electronics", link: "Installation of Home Appliances" },
];
