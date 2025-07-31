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
    battery: "150ah",
    panelArray: "800w",
    price: 595000,
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
    price: 980000,
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
    details: ["info@valuemine.com.ng", "support@valuemine.com.ng"],
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
    packageName: "10kva",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 12.0,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 10.0,
          unit: "kW",
          type: "AC",
        },
        batteryStorage: {
          value: 30.0,
          unit: "kWh",
          type: "LiFePO₄",
        },
        expectedDailyGeneration: {
          min: 50,
          max: 60,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 95,
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
              min: 2,
              max: 3,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 3,
          max: 5,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 12.0,
          battery_storage_kilowatt_hours: 30.0,
          comfortably_powers: {
            lighting: {
              description: "Lighting for large homes or offices.",
              appliances: [{ name: "LED Bulb", watts: 10, icon: "Bulb" }],
            },
            cooling_and_ventilation: {
              description: "Cooling devices for multiple rooms.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                {
                  name: "Air Conditioner (1.5 HP, Inverter)",
                  watts: 1200,
                  icon: "AC",
                },
              ],
            },
            heating_appliances: {
              description: "Heating and high‑power kitchen appliances.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
              ],
            },
            refrigeration_and_storage: {
              description: "Cold storage for food and beverages.",
              appliances: [
                {
                  name: "Refrigerator or Freezer (up to 500L)",
                  watts: 300,
                  icon: "Freezer",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Basic kitchen appliances.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            entertainment_and_communication: {
              description: "Audio and video devices.",
              appliances: [
                { name: "TV + Decoder", watts: 100, icon: "TV" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
                { name: "Sound System", watts: 150, icon: "Speaker" },
              ],
            },
            office_and_computing: {
              description: "Devices for work‑from‑home or office productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
              ],
            },
            water_management: {
              description: "Pumping water for household or office use.",
              appliances: [
                { name: "Water Pump (1HP)", watts: 750, icon: "Pump" },
              ],
            },
            security_and_surveillance: {
              description: "Home or office security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 52,
          max_kwh: 60,
        },
        spring_fall: {
          min_kwh: 45,
          max_kwh: 52,
        },
        winter: {
          min_kwh: 35,
          max_kwh: 45,
        },
        backup_power: {
          min_days: 1,
          max_days: 2,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
          "2 Air Conditioners (1.5HP each, inverter-type)",
          "25–30 LED bulbs (10W each)",
          "6–10 ceiling or standing fans",
          "2 Refrigerators or Freezers (up to 500L each)",
          "3–5 TVs + Decoders + Sound System",
          "4 Laptops or Desktop PCs",
          "Microwave oven, pressing iron, blender",
          "Water pump (1HP)",
          "Wi‑Fi router, CCTV, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Can handle 1–2 inverter-type ACs up to 1.5HP",
        },
        Freezer: {
          emoji: "✅",
          response:
            "Yes — Supports multiple freezers or refrigerators up to 500L",
        },
      },
    },
  },
];
