// constants.ts
import Logo from "@/app/assets/logo.svg";
import HeroImage from "@/app/assets/valuemine_hero_image.png";
import TiredMan from "@/app/assets/tired-man.jpg";
import {
  Sun,
  Battery,
  Shield,
  Clock,
  Home,
  Building2,
  Factory,
  Lightbulb,
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

export { Logo, HeroImage, TiredMan };

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

export const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Complete solar power systems for homes with options for grid-tied or off-grid solutions",
    features: [
      "Solar panels",
      "Inverters",
      "Battery storage",
      "Installation & maintenance",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Reduce operational costs and enhance sustainability for your business with custom solar solutions",
    features: [
      "Rooftop systems",
      "Solar carports",
      "Energy monitoring",
      "24/7 support",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Power",
    description:
      "Large-scale solar installations for manufacturing facilities and industrial complexes",
    features: [
      "MW-scale systems",
      "Hybrid solutions",
      "Load management",
      "Energy consulting",
    ],
  },
  {
    icon: Lightbulb,
    title: "Energy Consulting",
    description:
      "Expert advice on energy efficiency, system design, and financial planning for solar adoption",
    features: [
      "Energy audits",
      "ROI analysis",
      "Financing options",
      "Grant assistance",
    ],
  },
];
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
