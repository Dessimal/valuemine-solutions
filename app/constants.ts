// constants.ts
import Logo from "@/public/logo.svg";
import HeroImage from "@/public/family-hero-image.webp";
import MainHeroImage from "@/public/main-family-hero-image.webp";
import TiredMan from "@/public/manTired.webp";
import TiredManTwo from "@/public/frustratedNigerian.webp";
import familyRelaxing from "@/public/website-family3.webp";
import generator from "@/public/gen.webp";
import nationalGrid from "@/public/national-grid.webp";
import fuelQueue from "@/public/fuel-queues.webp";
import DoodleArrowUp from "@/public/Frame 5.svg";
import DoodleArrowDown from "@/public/Frame 6.svg";
import {
  Sun,
  Battery,
  Zap,
  ArrowBigDown,
  ArrowBigLeft,
  PencilRuler,
  Cable,
  Workflow,
  FireExtinguisher,
  AirVent,
  Cctv,
} from "lucide-react";

import OneThousandWatts2P from "@/public/1000W-100AH-2P 470K.webp";
import OneKvaFamicare from "@/public/1kva-2x200w-150ah.webp";
import oneKva from "@/public/1KVA 860K .webp";
import onePointFiveKva from "@/public/1.5KVA 900K.webp";
import twoKva from "@/public/2kva 220ah package.webp";
import twoPointFiveKva from "@/public/2.5kva 1.5m.webp";
import threePointFiveKva from "@/public/3.5kva - 600wx3 - 220 x2.webp";
import fourPointTwoKva from "@/public/4.2kva solar powered system.webp";
import fiveKva from "@/public/5kva-600w x8 - 220ahx4.webp";
import fiveKvaLithium from "@/public/5kva 10kwh 600wx8.webp";
import sixPointTwoKvaTubular from "@/public/6.2kva 2.8m.webp";
import sixPointTwoKvaLithium from "@/public/6.2kva lithium 3m.webp";
import sevenPointFiveLithium from "@/public/7.5kva 15kwh 600wx8.webp";
import tenKva from "@/public/10kva 2x15kwh 20x600w.webp";

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
    id: 3,
    name: "1000W",
    battery: "100ah",
    panelArray: "400w",
    price: 470000,
    picture: OneThousandWatts2P,
  },
  {
    id: 4,
    name: "1kVA",
    battery: "150ah",
    panelArray: "600w",
    price: 595000,
    picture: OneKvaFamicare,
  },
  {
    id: 5,
    name: "1kVA(b)",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 860000,
    picture: oneKva,
  },
  {
    id: 6,
    name: "1.5kVA",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 900000,
    picture: onePointFiveKva,
  },
  {
    id: 7,
    name: "2kVA hybrid",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 980000,
    picture: twoKva,
  },
  {
    id: 8,
    name: "2.5kVA",
    battery: "Tubular 2 x 220ah",
    panelArray: "1200w",
    price: 1500000,
    picture: twoPointFiveKva,
  },
  {
    id: 9,
    name: "3.5kVA",
    battery: "Tubular 2 x 220ah",
    panelArray: "1800w",
    price: 1800000,
    picture: threePointFiveKva,
  },
  {
    id: 10,
    name: "4.2kVA hybrid",
    battery: "Tubular 2 x 220ah",
    panelArray: "2400w",
    price: 1900000,
    picture: fourPointTwoKva,
  },
  {
    id: 11,
    name: "6.2kVA hybrid(a)",
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
  {
    id: 13,
    name: "5kVA hybrid",
    battery: "Tubular 4 x 220ah",
    panelArray: "4800w",
    price: 3900000,
    picture: fiveKva,
  },
  {
    id: 14,
    name: "5kVA hybrid(Lithium)",
    battery: "Lithium 10kwh",
    panelArray: "4800w",
    price: 4900000,
    picture: fiveKvaLithium,
  },
  {
    id: 15,
    name: "7.5kVA hybrid(Lithium)",
    battery: "Lithium 15kwh",
    panelArray: "6000w",
    price: 6200000,
    picture: sevenPointFiveLithium,
  },
  {
    id: 16,
    name: "10kVA hybrid(Lithium)",
    battery: "Lithium 2 x 15kwh",
    panelArray: "12000w",
    price: 11500000,
    picture: tenKva,
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

// export const appliances = [
//   // Fans
//   { icon: "Fan", name: "Ceiling Fan", watts: 80 },
//   { icon: "Fan", name: "Standing Fan", watts: 100 },
//   { icon: "Fan", name: "Table Fan", watts: 50 },
//   { icon: "Fan", name: "Exhaust Fan", watts: 40 },

//   // Lighting
//   { icon: "Bulb", name: "LED Bulb (10W)", watts: 10 },
//   { icon: "Bulb", name: "Energy Saving Bulb", watts: 20 },
//   { icon: "Bulb", name: "Tube Light", watts: 36 },
//   { icon: "Bulb", name: "Chandelier", watts: 150 },

//   // Kitchen Appliances
//   { icon: "Microwave", name: "Microwave Oven", watts: 1200 },
//   { icon: "Toaster", name: "Toaster", watts: 800 },
//   { icon: "Kettle", name: "Electric Kettle", watts: 1500 },
//   { icon: "Cooker", name: "Electric Cooker", watts: 2000 },
//   { icon: "Cooker", name: "Induction Cooker", watts: 1800 },
//   { icon: "Blender", name: "Blender", watts: 400 },
//   { icon: "Fridge", name: "Refrigerator (Small)", watts: 150 },
//   { icon: "Fridge", name: "Refrigerator (Medium)", watts: 250 },
//   { icon: "Fridge", name: "Refrigerator (Large)", watts: 400 },
//   { icon: "Freezer", name: "Chest Freezer", watts: 300 },

//   // Laundry
//   { icon: "WashingMachine", name: "Washing Machine", watts: 500 },
//   { icon: "Iron", name: "Electric Iron", watts: 1000 },
//   { icon: "Dryer", name: "Clothes Dryer", watts: 3000 },

//   // Living Room
//   { icon: "TV", name: 'LED TV (32")', watts: 60 },
//   { icon: "TV", name: 'LED TV (50")', watts: 120 },
//   { icon: "TV", name: "Plasma TV", watts: 250 },
//   { icon: "Speaker", name: "Home Theater", watts: 150 },
//   { icon: "AC", name: "Air Conditioner (1 HP)", watts: 900 },
//   { icon: "AC", name: "Air Conditioner (1.5 HP)", watts: 1200 },
//   { icon: "AC", name: "Air Conditioner (2 HP)", watts: 1500 },

//   // Office
//   { icon: "Laptop", name: "Laptop", watts: 65 },
//   { icon: "Desktop", name: "Desktop Computer", watts: 200 },
//   { icon: "Monitor", name: "Computer Monitor", watts: 50 },
//   { icon: "Printer", name: "Inkjet Printer", watts: 30 },
//   { icon: "Printer", name: "Laser Printer", watts: 500 },
//   { icon: "Router", name: "WiFi Router", watts: 10 },
//   { icon: "Projector", name: "Projector", watts: 300 },
//   { icon: "Scanner", name: "Flatbed Scanner", watts: 50 },
//   { icon: "Server", name: "Small Server", watts: 600 },

//   // Miscellaneous
//   { icon: "Pump", name: "Water Pump (0.5 HP)", watts: 370 },
//   { icon: "Pump", name: "Water Pump (1 HP)", watts: 750 },
//   { icon: "Camera", name: "CCTV Camera", watts: 15 },
//   { icon: "Fan", name: "Standing AC Fan", watts: 120 },
//   { icon: "Heater", name: "Water Heater", watts: 3000 },
//   { icon: "Dispenser", name: "Water Dispenser", watts: 550 },
//   { icon: "HairDryer", name: "Hair Dryer", watts: 1200 },

//   //Custom
//   { icon: "Plus", name: "Custom Device", watts: 0 },
// ];

// app/constants.ts

export const appliances = [
  // Fans (Expanded with more wattage options)
  { icon: "Fan", name: "Ceiling Fan", watts: 80 },
  { icon: "Fan", name: "Standing Fan (Small)", watts: 45 },
  { icon: "Fan", name: "Standing Fan (Medium)", watts: 75 },
  { icon: "Fan", name: "Standing Fan (Large)", watts: 100 },
  { icon: "Fan", name: "Exhaust Fan", watts: 40 },

  // Lighting (Expanded with more wattage options)
  { icon: "Bulb", name: "LED Bulb (5W)", watts: 5 },
  { icon: "Bulb", name: "LED Bulb (10W)", watts: 10 },
  { icon: "Bulb", name: "LED Bulb (15W)", watts: 15 },
  { icon: "Bulb", name: "Energy Saving Bulb", watts: 20 },
  { icon: "Bulb", name: "Tube Light (4ft)", watts: 36 },
  { icon: "Bulb", name: "Chandelier (Small)", watts: 100 },
  { icon: "Bulb", name: "Chandelier (Large)", watts: 200 },

  // Kitchen Appliances
  { icon: "Microwave", name: "Microwave Oven", watts: 1200 },
  { icon: "Toaster", name: "Toaster", watts: 800 },
  { icon: "Kettle", name: "Electric Kettle", watts: 1500 },
  { icon: "Cooker", name: "Electric Cooker (Single Hob)", watts: 1000 },
  { icon: "Cooker", name: "Electric Cooker (Double Hob)", watts: 2000 },
  { icon: "Cooker", name: "Induction Cooker", watts: 1800 },
  { icon: "Blender", name: "Blender (Small)", watts: 300 },
  { icon: "Blender", name: "Blender (Large)", watts: 600 },
  { icon: "Fridge", name: "Refrigerator (Small)", watts: 150 },
  { icon: "Fridge", name: "Refrigerator (Medium)", watts: 250 },
  { icon: "Fridge", name: "Refrigerator (Large)", watts: 400 },
  { icon: "Freezer", name: "Chest Freezer (Small)", watts: 250 },
  { icon: "Freezer", name: "Chest Freezer (Large)", watts: 450 },
  { icon: "Blender", name: "Food Processor", watts: 500 },
  { icon: "Coffee", name: "Coffee Maker", watts: 900 },

  // Laundry
  { icon: "WashingMachine", name: "Washing Machine", watts: 500 },
  { icon: "Iron", name: "Electric Iron", watts: 1000 },
  { icon: "Dryer", name: "Clothes Dryer", watts: 3000 },

  // Living Room (Expanded)
  { icon: "TV", name: 'LED TV (32")', watts: 60 },
  { icon: "TV", name: 'LED TV (50")', watts: 120 },
  { icon: "TV", name: 'LED TV (65")', watts: 180 },
  { icon: "TV", name: "Plasma TV", watts: 250 },
  { icon: "Speaker", name: "Home Theater (Small)", watts: 150 },
  { icon: "Speaker", name: "Home Theater (Large)", watts: 300 },

  // Air Conditioners (Expanded and more specific)
  // Note: Non-inverter ACs have a high surge, while inverter ACs are more stable.
  { icon: "AC", name: "Air Conditioner (1 HP)", watts: 900 },
  { icon: "AC", name: "Air Conditioner (1.5 HP)", watts: 1200 },
  { icon: "AC", name: "Air Conditioner (2 HP)", watts: 1500 },
  { icon: "AC", name: "Inverter AC (1 HP)", watts: 700 },
  { icon: "AC", name: "Inverter AC (1.5 HP)", watts: 1000 },
  { icon: "AC", name: "Inverter AC (2 HP)", watts: 1300 },

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
  { icon: "Pump", name: "Submersible Pump (1 HP)", watts: 750 },

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
