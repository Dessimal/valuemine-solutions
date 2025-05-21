"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calculator as CalcIcon,
  Lightbulb,
  Fan,
  Refrigerator,
  Monitor,
  Tv,
  Laptop,
  Trash2,
  Plus,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const applianceOptions = [
  {
    icon: <Fan className="h-5 w-5" />,
    name: "Fans",
    watts: "50-80W",
  },
  {
    icon: <Refrigerator className="h-5 w-5" />,
    name: "Fridge",
    watts: "100-150W",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    name: "Lights",
    watts: "5-10W each",
  },
];

const extraApplianceOptions = [
  {
    icon: <Laptop className="h-5 w-5" />,
    name: "Laptop",
    watts: "45-90W",
  },
  {
    icon: <Tv className="h-5 w-5" />,
    name: "TV",
    watts: "60-100W",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    name: "Monitor",
    watts: "30-50W",
  },
];

const allApplianceOptions = [...applianceOptions, ...extraApplianceOptions];

const Calculator = () => {
  const [customDevices, setCustomDevices] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [customWattage, setCustomWattage] = useState(0);

  const handleAddDevice = () => {
    if (selectedAppliance && quantity > 0) {
      const totalWatts = customWattage * quantity;
      const newDevice = {
        icon: selectedAppliance.icon,
        name: `${selectedAppliance.name} x${quantity}`,
        watts: totalWatts,
      };
      setCustomDevices([...customDevices, newDevice]);
      setIsDialogOpen(false);
    }
  };

  const handleSelectChange = (value) => {
    const found = allApplianceOptions.find((item) => item.name === value);
    if (found) {
      setSelectedAppliance(found);
      setCustomWattage(found.watts);
    }
  };

  const handleRemoveDevice = (index: number) => {
    const updatedDevices = [...customDevices];
    updatedDevices.splice(index, 1);
    setCustomDevices(updatedDevices);
  };

  const totalWatts = [...applianceOptions, ...customDevices].reduce(
    (sum, device) => sum + device.watts,
    0
  );

  const totalVA = (totalWatts / 0.8).toFixed(2);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              Build <span className="gradient-text">Your System</span>{" "}
              Calculator
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}>
              We've made it easy to build your ideal solar system. Just tell us
              what gadgets and appliances you use — our smart calculator does
              the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}>
              <Button className="gradient-bg text-lg py-6 px-8 mb-8">
                <CalcIcon className="mr-2 h-5 w-5" />
                Try the Solar Calculator
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold gradient-text">40%</div>
                <div className="text-sm text-gray-400">Saved on Bills</div>
              </div>

              <div className="h-12 w-px bg-gray-700"></div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Power Access</div>
              </div>

              <div className="h-12 w-px bg-gray-700"></div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold gradient-text">5yr</div>
                <div className="text-sm text-gray-400">Full Warranty</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-md">
              <div className="absolute -top-12 -right-12 w-24 h-24 gradient-bg rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <CalcIcon className="h-10 w-10 text-white" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-8 text-center">
                Select Your Appliances
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {applianceOptions.map((appliance, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-brand-orange"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}>
                    <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-orange">
                      {appliance.icon}
                    </div>
                    <div>
                      <p className="font-medium">{appliance.name}</p>
                      <p className="text-xs text-gray-500">
                        {appliance.watts}W
                      </p>
                    </div>
                  </motion.div>
                ))}

                <AnimatePresence>
                  {customDevices.map((device, index) => (
                    <motion.div
                      key={`custom-${index}`}
                      className="border border-gray-200 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-brand-orange relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}>
                      <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-orange">
                        {device.icon}
                      </div>
                      <div>
                        <p className="font-medium">{device.name}</p>
                        <p className="text-xs text-gray-500">{device.watts}W</p>
                      </div>
                      <button
                        onClick={() => handleRemoveDevice(index)}
                        className="absolute top-1 right-1 p-1 rounded hover:bg-gray-100">
                        <Trash2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <motion.div
                      className="bg-white border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center h-full cursor-pointer hover:border-brand-orange"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}>
                      <p className="text-gray-400 font-medium">+ Add More</p>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Appliance</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Appliance</Label>
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Appliance" />
                          </SelectTrigger>
                          <SelectContent>
                            {allApplianceOptions.map((item, i) => (
                              <SelectItem key={i} value={item.name}>
                                <div className="flex items-center gap-2">
                                  {item.icon}
                                  <span>{item.name}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          min={1}
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label>Wattage</Label>
                        <Input
                          type="number"
                          value={customWattage}
                          onChange={(e) =>
                            setCustomWattage(Number(e.target.value))
                          }
                        />
                      </div>
                      <Button className="w-full" onClick={handleAddDevice}>
                        Add
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="text-center text-sm text-gray-600 mb-1">
                Estimated total consumption:{" "}
                <span className="font-semibold text-gray-900">
                  {totalWatts}W
                </span>
              </div>
              <div className="text-center text-sm text-gray-600 mb-4">
                Equivalent VA rating:{" "}
                <span className="font-semibold text-gray-900">
                  {totalVA} VA
                </span>
              </div>
              <Button className="w-full gradient-bg">
                Get My System Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
