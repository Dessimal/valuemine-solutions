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

import FiveHundredWatts from "@/public/500W-65AH- 280K.png";
import OneThousandWatts from "@/public/1000W-100AH 420K.png";
import OneThousandWatts2P from "@/public/1000W-100AH-2P 470K.png";
import OneKvaFamicare from "@/public/1kva-2x200w-150ah.png";
import oneKva from "@/public/1KVA 860K .png";
import onePointFiveKva from "@/public/1.5KVA 900K.png";
import twoKva from "@/public/2kva 220ah package.png";
import twoPointFiveKva from "@/public/2.5kva 1.5m.png";
import threePointFiveKva from "@/public/3.5kva - 600wx3 - 220 x2.png";
import fourPointTwoKva from "@/public/4.2kva solar powered system.png";
import fiveKva from "@/public/5kva-600w x8 - 220ahx4.png";
import fiveKvaLithium from "@/public/5kva 10kwh 600wx8.png";
import sixPointTwoKvaTubular from "@/public/6.2kva 2.8m.png";
import sixPointTwoKvaLithium from "@/public/6.2kva lithium 3m.png";
import sevenPointFiveLithium from "@/public/7.5kva 15kwh 600wx8.png";
import tenKva from "@/public/10kva 2x15kwh 20x600w.png";

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

export const faqs = [
  {
    question: "How much will it cost to install a solar system in my house?",
    answer:
      "The cost depends on your power needs. We have a calculator that automatically recommends the right solar package for you based on your power needs. Please use our calculator and share result with us",
  },
  {
    question: "Can it power my fridge, freezer, and AC?",
    answer:
      "Yes, solar systems can power heavy appliances like fridges and air conditioners — but you have to select a system big enough to handle your load. Our solar calculator will recommend the perfect system for you.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most installations are completed in a day, but larger systems may take 2–3 days.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, installment payments are available, especially for businesses. For individuals, we also offer flexible options — just ask.",
  },
  {
    question: "Will my solar system work during the rainy season?",
    answer:
      "Yes, it will. The system stores energy in batteries during sunny hours. However, we size your batteries to handle days with less sunlight.",
  },
  {
    question: "Can I use both NEPA and solar together?",
    answer:
      "Absolutely. Our systems allow you to switch between solar, generator, and NEPA seamlessly.",
  },
  {
    question: "What happens if my battery gets bad?",
    answer:
      "We offer warranty and after-sales support. If it’s within warranty, we replace it. If not, we’ll advise on affordable replacements.",
  },
  {
    question: "Do I need to service my solar system regularly?",
    answer:
      "Minimal maintenance is required. We recommend checking the batteries and cleaning the panels once in a while — we also offer maintenance plans.",
  },
  {
    question: "Can I upgrade my solar system later?",
    answer:
      "Yes, our systems are designed to be scalable. You can always add more panels or batteries as your needs grow.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, all our components come with manufacturer warranty and our own installation guarantee.",
  },
  {
    question: "How long do the batteries last?",
    answer:
      "Most quality batteries last between 3 to 10 years, depending on the type and how well they are maintained. The two common battery types are lead-acid batteries and Lithium batteries. Lead-acid batteries often last between 3-6 years, depending on usage, while Lithium batteries last between 8-15 years, depending on usage",
  },
  {
    question: "Will I still need my generator after installing solar?",
    answer:
      "That depends on your system size. A well-sized solar and battery system can completely replace your generator for everyday use.",
  },
  {
    question: "Can you install in any part of Nigeria?",
    answer:
      "Yes, we serve all states in Nigeria. We have mobile teams ready to deploy.",
  },
  {
    question: "Do you do site inspection before installation?",
    answer:
      "Yes. We carry out physical or virtual assessments to properly size your system and avoid over/under-designing.",
  },
  {
    question: "What type of solar panels do you use?",
    answer:
      "We use high-quality monocrystalline panels that are efficient and durable, suited for Nigerian weather.",
  },
  {
    question: "What if my roof is not strong enough for solar panels?",
    answer:
      "We’ll assess your roof’s condition first. If it’s not suitable, we offer ground-mount or wall-mount options.",
  },
  {
    question: "Can I use solar for my borehole or water pump?",
    answer:
      "Yes, we can design a solar system specifically to handle your borehole or water pump reliably.",
  },
  {
    question: "What is the difference between an inverter and a solar system?",
    answer:
      "An inverter converts battery/DC power to usable AC. A full solar system includes panels, batteries, and the inverter to generate and store power.",
  },
  {
    question: "How many solar panels do I need?",
    answer:
      "It depends on your energy consumption. We’ll calculate your load and design the number of panels accordingly.",
  },
  {
    question: "Can I use prepaid meter with solar?",
    answer:
      "Yes, your solar system can work alongside a prepaid meter without issues. In fact, it reduces how much you spend on NEPA.",
  },
  {
    question: "Is solar power safe for my electronics?",
    answer:
      "Yes, it’s even safer than NEPA or generator power because it delivers stable, clean energy.",
  },
  {
    question: "Will my solar system work at night?",
    answer:
      "Yes, your battery stores solar energy generated during the day, so you can use it at night.",
  },
  {
    question: "What type of battery is best?",
    answer:
      "We recommend lithium batteries for longevity and performance, though we also offer quality tubular and AGM options based on your budget.",
  },
  {
    question: "Can I monitor my system remotely?",
    answer:
      "Yes, some of our systems support remote monitoring via mobile apps or online dashboards.",
  },
  {
    question: "What’s the minimum system I can install?",
    answer:
      "You can start small — even a 1kVA system — and upgrade later. We’ll help you plan based on your needs and budget.",
  },
  {
    question: "Do you help with load auditing?",
    answer:
      "Yes, we help you calculate and prioritize your loads so you only power what you really need.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers mainly",
  },
  {
    question: "How do I know if solar is right for me?",
    answer:
      "If you experience frequent power outages, spend heavily on fuel, or want to cut energy bills, solar is a great solution.",
  },
  {
    question: "What’s the difference between off-grid and hybrid systems?",
    answer:
      "Off-grid systems rely only on solar and batteries. Hybrid systems combine solar with NEPA or generator as backup.",
  },
  {
    question: "Can I run my entire house on solar?",
    answer:
      "Yes, if the system is properly sized. We’ve helped many clients go 100% solar without any need for NEPA or generator.",
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

//DATA FOR ALL PACKAGES
export const packageBreakdown = [
  {
    packageName: "1000W",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 400,
          unit: "W",
          type: "DC",
        },
        inverterCapacity: {
          value: 1000,
          unit: "W",
          type: "AC",
        },
        batteryStorage: {
          value: 1.2,
          unit: "kWh",
          type: "Lead-Acid/Gel",
        },
        expectedDailyGeneration: {
          min: 1.6,
          max: 2.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 60,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 10,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 0.5,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1,
          max: 1.5,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.4,
          battery_storage_kilowatt_hours: 1.2,
          comfortably_powers: {
            lighting: {
              description:
                "Very basic lighting for a few rooms or a small space.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Can run a single, energy-efficient fan for limited hours.",
              appliances: [
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for any heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description: "Not suitable for refrigerators or freezers.",
              appliances: [],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Basic entertainment and communication needs.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description:
                "Charging of mobile devices and very light laptop use.",
              appliances: [
                {
                  name: "Laptop Charger",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Phone Charger",
                  watts: 5,
                  icon: "Phone",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Very limited security devices for short periods.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 1.6,
          max_kwh: 2.0,
        },
        spring_fall: {
          min_kwh: 1.2,
          max_kwh: 1.6,
        },
        winter: {
          min_kwh: 0.96,
          max_kwh: 1.2,
        },
        backup_power: {
          min_days: 0.1,
          max_days: 0.2,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 1000W inverter system with a 400W solar array and a 100Ah battery is a very entry-level solution designed for minimal, essential power needs. It's best suited for basic lighting and charging devices during brief power outages.",
        devices: [
          "No Air Conditioner",
          "2-3 LED bulbs (10W each)",
          "1 small fan (for very limited hours)",
          "No Refrigerator or Freezer",
          "1 small TV + Decoder (for limited hours)",
          "Phone and laptop charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system cannot power any size of air conditioner.",
        },
        Freezer: {
          emoji: "❌",
          response: "No — This system is not suitable for powering freezers.",
        },
      },
    },
  },

  {
    packageName: "1kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 0.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 1.0,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 2.64,
          unit: "kWh",
          type: "Lead-Acid",
        },
        expectedDailyGeneration: {
          min: 3.2,
          max: 4.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 65,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1.5,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.8,
          battery_storage_kilowatt_hours: 2.64,
          comfortably_powers: {
            lighting: {
              description: "Very basic essential lighting for a few rooms.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Single fan usage for limited hours.",
              appliances: [
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for any heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description:
                "Not generally recommended for refrigerators or freezers due to limited capacity and backup.",
              appliances: [],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Limited entertainment and charging.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic personal computing and phone charging.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Very limited security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 3.2,
          max_kwh: 4.0,
        },
        spring_fall: {
          min_kwh: 2.4,
          max_kwh: 3.2,
        },
        winter: {
          min_kwh: 1.92,
          max_kwh: 2.4,
        },
        backup_power: {
          min_days: 0.2,
          max_days: 0.4,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 1KVA inverter system with an 800W solar array and a single 220Ah tubular battery is designed for minimal and strictly essential power needs in a very small Nigerian living space or small office. It's primarily for charging devices and providing light during short power outages.",
        devices: [
          "No Air Conditioner",
          "3-4 LED bulbs (10W each)",
          "1 fan (not heavy-duty, for limited hours)",
          "No Refrigerator or Freezer",
          "1 small TV + Decoder",
          "Laptops, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "❌",
          response: "No — This system is not suitable for powering freezers.",
        },
      },
    },
  },
  {
    packageName: "1.5kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 0.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 1.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 2.64,
          unit: "kWh",
          type: "Lead-Acid(Tubular)",
        },
        expectedDailyGeneration: {
          min: 3.2,
          max: 4.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 70,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1.5,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.8,
          battery_storage_kilowatt_hours: 2.64,
          comfortably_powers: {
            lighting: {
              description:
                "Essential lighting for a very small home or a few rooms.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Limited fan usage.",
              appliances: [
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description:
                "Can power a very small, energy-efficient refrigerator for limited hours.",
              appliances: [
                {
                  name: "Refrigerator (Small, energy-efficient)",
                  watts: 100,
                  icon: "Fridge",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Basic entertainment and communication.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic computing and charging needs.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Limited security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 3.2,
          max_kwh: 4.0,
        },
        spring_fall: {
          min_kwh: 2.4,
          max_kwh: 3.2,
        },
        winter: {
          min_kwh: 1.92,
          max_kwh: 2.4,
        },
        backup_power: {
          min_days: 0.25,
          max_days: 0.5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 1.5KVA inverter system with an 800W solar array and a single 220Ah tubular battery is designed for minimal and essential power needs in a very small Nigerian home or apartment. It's best suited for powering critical appliances during short grid outages.",
        devices: [
          "No Air Conditioner",
          "3-5 LED bulbs (10W each)",
          "1-2 fans (not heavy-duty)",
          "1 Small Refrigerator (for limited, intermittent use)",
          "1 TV + Decoder",
          "Laptops, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "❌",
          response:
            "No — This system is not suitable for powering freezers due to their continuous and high power draw.",
        },
      },
    },
  },
  {
    packageName: "2kVA hybrid",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 0.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 2.0,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 2.64,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 3.2,
          max: 4.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 75,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1.5,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.8,
          battery_storage_kilowatt_hours: 2.64,
          comfortably_powers: {
            lighting: {
              description:
                "Basic lighting for a small apartment or a few rooms.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Very limited appliances for air circulation.",
              appliances: [
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description:
                "Can power a small, energy-efficient refrigerator for limited hours.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Devices for basic entertainment and charging.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic computing and charging needs.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Limited security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 3.2,
          max_kwh: 4.0,
        },
        spring_fall: {
          min_kwh: 2.4,
          max_kwh: 3.2,
        },
        winter: {
          min_kwh: 1.92,
          max_kwh: 2.4,
        },
        backup_power: {
          min_days: 0.25,
          max_days: 0.5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 2KVA hybrid inverter system with an 800W solar array and a single 220Ah tubular battery is designed for very basic and essential power needs in a small Nigerian home or apartment. It's ideal for households looking to power critical appliances during short grid outages or to supplement power for specific devices.",
        devices: [
          "No Air Conditioner",
          "5-7 LED bulbs (10W each)",
          "2 fans (not heavy-duty)",
          "1 Small Refrigerator (run intermittently or for short periods)",
          "1 TV + Decoder",
          "Laptops, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "❌",
          response:
            "No — This system is not ideal for powering freezers due to their continuous power draw, unless it's a very small, energy-efficient model and other loads are minimized.",
        },
      },
    },
  },
  {
    packageName: "2.5kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 1.2,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 2.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 5.28,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 4.8,
          max: 6.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 80,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 1.2,
          battery_storage_kilowatt_hours: 5.28,
          comfortably_powers: {
            lighting: {
              description: "Basic lighting for a small home or apartment.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Limited appliances for air circulation.",
              appliances: [
                {
                  name: "Ceiling Fan",
                  watts: 80,
                  icon: "Fan",
                },
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description:
                "Very limited use of heating devices due to high power consumption.",
              appliances: [
                {
                  name: "Toaster",
                  watts: 800,
                  icon: "Toaster",
                },
                {
                  name: "Electric Iron",
                  watts: 1000,
                  icon: "Iron",
                },
              ],
            },
            refrigeration_and_storage: {
              description: "Appliances for basic food preservation.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Very limited use of kitchen appliances.",
              appliances: [
                {
                  name: "Blender",
                  watts: 400,
                  icon: "Blender",
                },
              ],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Devices for basic entertainment and communication.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic office and computing equipment.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description:
                "Not suitable for water pumps. Can handle water dispensers for limited use.",
              appliances: [
                {
                  name: "Water Dispenser",
                  watts: 550,
                  icon: "Dispenser",
                },
              ],
            },
            security_and_surveillance: {
              description: "Basic security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 4.8,
          max_kwh: 6.0,
        },
        spring_fall: {
          min_kwh: 3.6,
          max_kwh: 4.8,
        },
        winter: {
          min_kwh: 2.88,
          max_kwh: 3.6,
        },
        backup_power: {
          min_days: 0.5,
          max_days: 1,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 2.5KVA inverter with a 1200W solar array and 2 x 220Ah tubular batteries is designed for basic power needs in a small Nigerian home or office. It can provide essential lighting, fan operation, and power for entertainment and charging devices during grid outages. The 1200W solar panels will help to replenish the batteries during the day, extending the backup time and reducing reliance on the grid.",
        devices: [
          "No Air Conditioner",
          "5-8 LED bulbs (10W each)",
          "2-3 fans",
          "1 Small Refrigerator OR 1 small chest freezer (not simultaneously with other heavy loads)",
          "1 TV + Decoder",
          "Laptops, phone charging",
          "Blender (for very short periods)",
          "Electric iron (for very limited and intermittent periods)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "✅",
          response:
            "Yes — Can handle 1 small chest freezer, but not simultaneously with other high-power appliances.",
        },
      },
    },
  },
  {
    packageName: "3.5kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 1.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 3.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 5.28,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 7.2,
          max: 9.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 85,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 3,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 1.8,
          battery_storage_kilowatt_hours: 5.28,
          comfortably_powers: {
            lighting: {
              description:
                "Essential lighting for small to medium-sized homes or offices.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
                {
                  name: "Energy Saving Bulb",
                  watts: 20,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                {
                  name: "Ceiling Fan",
                  watts: 80,
                  icon: "Fan",
                },
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                {
                  name: "Microwave Oven",
                  watts: 1200,
                  icon: "Microwave",
                },
                {
                  name: "Toaster",
                  watts: 800,
                  icon: "Toaster",
                },
                {
                  name: "Electric Iron",
                  watts: 1000,
                  icon: "Iron",
                },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
                {
                  name: "Refrigerator (Medium)",
                  watts: 250,
                  icon: "Fridge",
                },
                {
                  name: "Chest Freezer",
                  watts: 300,
                  icon: "Freezer",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [
                {
                  name: "Blender",
                  watts: 400,
                  icon: "Blender",
                },
              ],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                {
                  name: "Washing Machine",
                  watts: 500,
                  icon: "WashingMachine",
                },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: 'LED TV (50")',
                  watts: 120,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Desktop Computer",
                  watts: 200,
                  icon: "Desktop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                {
                  name: "Water Dispenser",
                  watts: 550,
                  icon: "Dispenser",
                },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 7.2,
          max_kwh: 9.0,
        },
        spring_fall: {
          min_kwh: 5.4,
          max_kwh: 7.2,
        },
        winter: {
          min_kwh: 4.32,
          max_kwh: 5.4,
        },
        backup_power: {
          min_days: 0.5,
          max_days: 1,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 3.5KVA inverter with an 1800W solar array and 2 x 220Ah tubular batteries is suitable for essential loads in a small to medium-sized home or office. It can provide reliable power for basic appliances, especially during evening hours and grid outages. The 1800W solar array contributes significantly to daily charging and direct power during sunlight hours, reducing reliance on the grid and maximizing battery life.",
        devices: [
          "No Air Conditioner",
          "10-15 LED bulbs (10W each)",
          "3-4 fans",
          "1 Refrigerator (medium) OR 1 Chest Freezer",
          "1 TV + Decoder",
          "Laptops, phone charging",
          "Microwave (short bursts, not with other heavy loads)",
          "Blender (short bursts)",
          "Electric iron (for very limited periods)",
          "Washing machine (for very limited periods, and not with other heavy loads)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — Not recommended for continuous use of AC units. Might handle a very small, energy-efficient inverter AC (0.75HP) for very short periods, but it's not designed for regular AC use.",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle 1 medium to large chest freezer.",
        },
      },
    },
  },
  {
    packageName: "4.2kVA hybrid",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 2.4,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 4.2,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 5.28,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 9.6,
          max: 12,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 85,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 3,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 2.4,
          battery_storage_kilowatt_hours: 5.28,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
                {
                  name: "Energy Saving Bulb",
                  watts: 20,
                  icon: "Bulb",
                },
                {
                  name: "Tube Light",
                  watts: 36,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                {
                  name: "Ceiling Fan",
                  watts: 80,
                  icon: "Fan",
                },
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
                {
                  name: "Exhaust Fan",
                  watts: 40,
                  icon: "Fan",
                },
                {
                  name: "Air Conditioner (1 HP)",
                  watts: 900,
                  icon: "AC",
                },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                {
                  name: "Microwave Oven",
                  watts: 1200,
                  icon: "Microwave",
                },
                {
                  name: "Toaster",
                  watts: 800,
                  icon: "Toaster",
                },
                {
                  name: "Electric Kettle",
                  watts: 1500,
                  icon: "Kettle",
                },
                {
                  name: "Electric Iron",
                  watts: 1000,
                  icon: "Iron",
                },
                {
                  name: "Hair Dryer",
                  watts: 1200,
                  icon: "HairDryer",
                },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
                {
                  name: "Refrigerator (Medium)",
                  watts: 250,
                  icon: "Fridge",
                },
                {
                  name: "Chest Freezer",
                  watts: 300,
                  icon: "Freezer",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [
                {
                  name: "Blender",
                  watts: 400,
                  icon: "Blender",
                },
              ],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                {
                  name: "Washing Machine",
                  watts: 500,
                  icon: "WashingMachine",
                },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: 'LED TV (50")',
                  watts: 120,
                  icon: "TV",
                },
                {
                  name: "Home Theater",
                  watts: 150,
                  icon: "Speaker",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Desktop Computer",
                  watts: 200,
                  icon: "Desktop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
                {
                  name: "Laser Printer",
                  watts: 500,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                {
                  name: "Water Pump (0.5 HP)",
                  watts: 370,
                  icon: "Pump",
                },
                {
                  name: "Water Dispenser",
                  watts: 550,
                  icon: "Dispenser",
                },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 9.6,
          max_kwh: 12,
        },
        spring_fall: {
          min_kwh: 7.2,
          max_kwh: 9.6,
        },
        winter: {
          min_kwh: 5.76,
          max_kwh: 7.2,
        },
        backup_power: {
          min_days: 0.5,
          max_days: 1,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 4.2KVA hybrid system with a 2400W solar array and 2 x 220Ah tubular batteries can comfortably power a range of essential appliances in a typical Nigerian home or small office. The 4.2KVA inverter provides a good power output, while the 2400W solar panels ensure decent daily energy generation to recharge the batteries and directly power loads during the day. The tubular batteries offer a reliable storage capacity, providing backup during grid outages or at night.",
        devices: [
          "1 Air Conditioner (1 HP)",
          "15-20 LED bulbs (10W each)",
          "4-5 fans",
          "1 Refrigerator (medium) OR 1 Chest Freezer",
          "1 TV + Decoder + Home Theatre",
          "Laptops, phone charging",
          "Microwave (short bursts)",
          "Blender",
          "Electric iron (for limited periods)",
          "Washing machine (for limited periods)",
          "Water pump (0.5 HP, for short use)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response:
            "Yes — Can comfortably power 1 x 1HP AC. May run a 1.5HP AC for limited periods, but not simultaneously with other heavy loads.",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle 1 medium to large chest freezer.",
        },
      },
    },
  },
  {
    packageName: "5kVA hybrid",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 4.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 5.0,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 10.2,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 20,
          max: 25,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 4.8,
          battery_storage_kilowatt_hours: 10.2,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 24,
          max_kwh: 28,
        },
        spring_fall: {
          min_kwh: 18,
          max_kwh: 22,
        },
        winter: {
          min_kwh: 14,
          max_kwh: 18,
        },
        backup_power: {
          min_days: 3,
          max_days: 5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
          "2 Air Conditioners (1.5HP each or 1 × 2HP)",
          "30 LED bulbs (10W each)",
          "8 fans",
          "2 Refrigerators + Freezer",
          "2 TVs + Decoders + Home Theatre",
          "Laptops, printer, phone charging",
          "Microwave, blender, toaster",
          "Electric iron",
          "Water heater",
          "Washing machine or electric cooker (for short use)",
          "Borehole pump (up to 1.5HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 2 × 1.5HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
  {
    packageName: "5KVA hybrid(Lithium)",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 4.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 5.0,
          unit: "W or KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 10.2,
          unit: "kWh",
          type: "Lithium",
        },
        expectedDailyGeneration: {
          min: 20,
          max: 25,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 4.8,
          battery_storage_kilowatt_hours: 10.2,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 24,
          max_kwh: 28,
        },
        spring_fall: {
          min_kwh: 18,
          max_kwh: 22,
        },
        winter: {
          min_kwh: 14,
          max_kwh: 18,
        },
        backup_power: {
          min_days: 3,
          max_days: 5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
          "2 Air Conditioners (1.5HP each or 1 × 2HP)",
          "30 LED bulbs (10W each)",
          "8 fans",
          "2 Refrigerators + Freezer",
          "2 TVs + Decoders + Home Theatre",
          "Laptops, printer, phone charging",
          "Microwave, blender, toaster",
          "Electric iron",
          "Water heater",
          "Washing machine or electric cooker (for short use)",
          "Borehole pump (up to 1.5HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 2 × 1.5HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
  {
    packageName: "7.5kVA hybrid(Lithium)",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 6,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 7.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 15,
          unit: "kWh",
          type: "Lithium",
        },
        expectedDailyGeneration: {
          min: 22,
          max: 28,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 6,
          battery_storage_kilowatt_hours: 15,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 26,
          max_kwh: 32,
        },
        spring_fall: {
          min_kwh: 20,
          max_kwh: 25,
        },
        winter: {
          min_kwh: 16,
          max_kwh: 20,
        },
        backup_power: {
          min_days: 2,
          max_days: 4,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
          "2 Air Conditioners (1.5HP each or 1 × 2HP)",
          "30 LED bulbs (10W each)",
          "8 fans",
          "2 Refrigerators + Freezer",
          "2 TVs + Decoders + Home Theatre",
          "Laptops, printer, phone charging",
          "Microwave, blender, toaster",
          "Electric iron",
          "Water heater",
          "Washing machine or electric cooker (for short use)",
          "Borehole pump (up to 1.5HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 2 × 1.5HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
  {
    packageName: "10kVA hybrid(Lithium)",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 12,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 10,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 30,
          unit: "kWh",
          type: "Lithium",
        },
        expectedDailyGeneration: {
          min: 40,
          max: 50,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 12,
          battery_storage_kilowatt_hours: 30,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 45,
          max_kwh: 55,
        },
        spring_fall: {
          min_kwh: 35,
          max_kwh: 45,
        },
        winter: {
          min_kwh: 28,
          max_kwh: 35,
        },
        backup_power: {
          min_days: 3,
          max_days: 5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
          "3 Air Conditioners (1.5HP each)",
          "40 LED bulbs (10W each)",
          "10 fans",
          "3 Refrigerators + Freezer",
          "3 TVs + Decoders + Home Theatre",
          "Laptops, printer, phone charging",
          "Microwave, blender, toaster",
          "Electric iron",
          "Water heater",
          "Washing machine or electric cooker (for short use)",
          "Borehole pump (up to 2HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 3 × 1.5HP or 2 × 2HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
];
