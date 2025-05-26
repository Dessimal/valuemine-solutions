"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { Serializer } from "v8";
import { cn } from "@/lib/utils";
import { PACKAGES } from "@/app/constants";

const applianceOptions = [
  {
    icon: <Fan className="h-5 w-5" />,
    name: "Fans",
    watts: 80,
  },
  {
    icon: <Refrigerator className="h-5 w-5" />,
    name: "Fridge",
    watts: 150,
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    name: "Lights",
    watts: 10,
  },
];

const extraApplianceOptions = [
  {
    icon: <Laptop className="h-5 w-5" />,
    name: "Laptop",
    watts: 60,
  },
  {
    icon: <Tv className="h-5 w-5" />,
    name: "TV",
    watts: 100,
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    name: "Monitor",
    watts: 100,
  },
];

const allApplianceOptions = [...applianceOptions, ...extraApplianceOptions];

const SizeCalculator = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [customWattage, setCustomWattage] = useState(0);
  const [devices, setDevices] = useState([
    ...applianceOptions,
    ...extraApplianceOptions,
  ]);

  const [load, setLoad] = useState("");

  const totalWatts = devices.reduce(
    (sum, device) => sum + Number(device.watts),
    0
  );
  const loadInWatts = Math.ceil(totalWatts).toString();

  const totalVA = (totalWatts / 0.8).toFixed(2);
  const totalkVA = (totalVA / 1000).toFixed(2);

  useEffect(() => {
    setLoad(Math.ceil(totalkVA).toString());
  }, [totalkVA]);

  const handleAddDevice = () => {
    if (selectedAppliance && quantity > 0) {
      const totalWatts = customWattage * quantity;
      const newDevice = {
        icon: selectedAppliance.icon,
        name: `${selectedAppliance.name} x ${quantity}`,
        watts: totalWatts,
      };
      setDevices([...devices, newDevice]);
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
    const updatedDevices = [...devices];
    updatedDevices.splice(index, 1);
    setDevices(updatedDevices);
  };

  // const packageExists = PACKAGES.find(
  //   (p) =>
  //     p.name === `${load}kva` ||
  //     `${load}kva(a)` ||
  //     `${load}kva(b)` ||
  //     `${loadInWatts}W` ||
  //     `${loadInWatts}W(a)` ||
  //     `${loadInWatts}W(b)`
  // );

  const possibleNames = [
    `${load}kva`,
    `${load}kva(a)`,
    `${load}kva(b)`,
    `${loadInWatts}W`,
    `${loadInWatts}W(a)`,
    `${loadInWatts}W(b)`,
  ];

  const packageExists = PACKAGES.find((p) => possibleNames.includes(p.name));

  if (!packageExists) {
    return <h3>We don&apos;t have a package that can serve you for now</h3>;
  }

  const selectedPackageBattery = packageExists?.battery;
  const selectedPackagePanelArray = packageExists?.panelArray;
  const selectedPackagePicture = packageExists?.picture;
  // Get transportation cost for the selected location

  // Calculate total cost and chargeable amount
  const packagePrice = packageExists.price;
  const selectedPackage = packageExists;

  // Prepare result object to pass to results page
  const result = {
    load,
    selectedPackage,
    packagePrice,
    selectedPackageBattery,
    selectedPackagePanelArray,
    selectedPackagePicture,
  };

  return (
    <div className="grid items-center">
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
            Calculate Your System Size
          </h3>
          <div
            className={cn(
              "grid gap-4 mb-8 items-center justify-center",
              devices.length === 0 ? "grid-cols-1" : "grid-cols-2"
            )}>
            <AnimatePresence>
              {devices.map((device, index) => (
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
                  <p className="text-gray-400 font-medium">
                    {devices.length === 0 ? "Add Devices" : "+ Add More"}
                  </p>
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
                      onChange={(e) => setCustomWattage(Number(e.target.value))}
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
            <span className="font-semibold text-gray-900">{totalWatts}W</span>
          </div>
          <div className="text-center text-sm text-gray-600 mb-4">
            Equivalent kVA rating:{" "}
            <span className="font-semibold text-gray-900">{totalkVA} kVA</span>
          </div>
          <Button asChild className="w-full gradient-bg">
            <Link
              href={`/result/size?data=${encodeURIComponent(
                JSON.stringify(result)
              )}`}>
              Get My System Quote
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SizeCalculator;
