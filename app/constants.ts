// constants.ts
import Logo from "@/app/assets/logo.svg";
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

export { Logo };

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
  { id: 1, name: "500W", battery: "65ah", panelArray: "200w", price: 280000 },
  {
    id: 2,
    name: "1000W(a)",
    battery: "100ah",
    panelArray: "200w",
    price: 420000,
  },
  {
    id: 3,
    name: "1000W(b)",
    battery: "100ah",
    panelArray: "400w",
    price: 470000,
  },
  {
    id: 4,
    name: "1kva(a)",
    battery: "100ah",
    panelArray: "800w",
    price: 705000,
  },
  {
    id: 5,
    name: "1kva(b)",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 860000,
  },
  {
    id: 6,
    name: "1.5kva",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 900000,
  },
  {
    id: 7,
    name: "2kva hybrid",
    battery: "Tubular 220ah",
    panelArray: "800w",
    price: 960000,
  },
  {
    id: 8,
    name: "2.5kva",
    battery: "Tubular 2 x 220ah",
    panelArray: "1200w",
    price: 1500000,
  },
  {
    id: 9,
    name: "3.5kva",
    battery: "Tubular 2 x 220ah",
    panelArray: "1800w",
    price: 1800000,
  },
  {
    id: 10,
    name: "4.2kva hybrid",
    battery: "Tubular 2 x 220ah",
    panelArray: "2400w",
    price: 1900000,
  },
  {
    id: 11,
    name: "6.2kva hybrid(a)",
    battery: "Tubular 4 x 220ah",
    panelArray: "3000w",
    price: 2800000,
  },
  {
    id: 12,
    name: "6.2kva hybrid(b)",
    battery: "Lithium 5kwh",
    panelArray: "3000w",
    price: 3000000,
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
