// constants.ts
import Logo from "@/app/assets/logo.svg";
import {Sun, Battery, Shield, Clock, Home, Building2, Factory, Lightbulb} from "lucide-react"



export {Logo}

export const benefits = [
    {
      icon: Sun,
      title: 'Clean Energy',
      description: 'Harness the power of the sun with zero emissions and sustainable technology'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery solutions ensure power continues even after sunset'
    },
    {
      icon: Shield,
      title: 'Reliable Systems',
      description: 'Engineered for durability in the Nigerian climate with minimal maintenance'
    },
    {
      icon: Clock,
      title: 'Long Lifespan',
      description: 'Our solar solutions last 25+ years with industry-leading warranties'
    }
  ];

export 
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar power systems for homes with options for grid-tied or off-grid solutions',
      features: ['Solar panels', 'Inverters', 'Battery storage', 'Installation & maintenance']
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Reduce operational costs and enhance sustainability for your business with custom solar solutions',
      features: ['Rooftop systems', 'Solar carports', 'Energy monitoring', '24/7 support']
    },
    {
      icon: Factory,
      title: 'Industrial Power',
      description: 'Large-scale solar installations for manufacturing facilities and industrial complexes',
      features: ['MW-scale systems', 'Hybrid solutions', 'Load management', 'Energy consulting']
    },
    {
      icon: Lightbulb,
      title: 'Energy Consulting',
      description: 'Expert advice on energy efficiency, system design, and financial planning for solar adoption',
      features: ['Energy audits', 'ROI analysis', 'Financing options', 'Grant assistance']
    }
  ];


export const PACKAGES = [
  { name: "1kVA", price: 700000 },
  { name: "1.5kVA", price: 900000 },
  { name: "2.5kVA", price: 1100000 },
  { name: "3.5kVA", price: 1100000 },
  { name: "4.2kVA", price: 1100000 },
  { name: "5kVA", price: 1100000 },
  { name: "6.2kVA", price: 1100000 },
  { name: "7kVA", price: 1100000 },
  { name: "8kVA", price: 1100000 },
];

export const TRANSPORT_COST = [
  { location: "Ibadan", cost: 50000 },
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
