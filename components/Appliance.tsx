import React from "react";

import {
  Lightbulb,
  Refrigerator,
  Monitor,
  Tv,
  Laptop,
  Trash2,
  Plus,
  Fan,
  Printer,
  Coffee,
  AirVent,
  Speaker,
  Router,
  Microwave,
  WashingMachine,
  BatteryCharging,
  Power,
  Server,
  Phone,
  Lamp,
  Thermometer,
  Cpu,
  Projector,
} from "lucide-react";

const iconMap = {
  Lightbulb,
  Refrigerator,
  Monitor,
  Tv,
  Laptop,
  Trash2,
  Plus,
  Fan,
  Printer,
  Coffee,
  AirVent,
  Speaker,
  Router,
  Microwave,
  WashingMachine,
  BatteryCharging,
  Power,
  Server,
  Phone,
  Lamp,
  Thermometer,
  Cpu,
  Projector,
};

const Appliance = ({ icon, ...props }) => {
  const IconComponent = iconMap[icon] || Lightbulb; // Default to Lightbulb if icon not found
  return <IconComponent className="h-5 w-5" {...props} />;
};

export default Appliance;
