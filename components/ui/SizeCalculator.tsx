"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator, Pencil, RotateCcw, Trash2 } from "lucide-react";
import { appliances } from "@/app/constants";

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
import { cn } from "@/lib/utils";
import { PACKAGES } from "@/app/constants";
import Appliance from "../Appliance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const defaultDevices = [{ icon: "Bulb", name: "LED Bulb (10W)", watts: 10 }];

const SizeCalculator = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [customWattage, setCustomWattage] = useState(0);
  const [devices, setDevices] = useState(defaultDevices);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [noPackage, setNoPackage] = useState(false);

  const [load, setLoad] = useState("");

  const router = useRouter();

  const totalWatts = devices.reduce(
    (sum, device) => sum + Number(device.watts),
    0
  );
  const loadInWatts = Math.ceil(totalWatts).toString();

  const totalVA = (totalWatts / 0.8).toFixed(2);
  const totalkVA = (totalVA / 1000).toFixed(2);

  // Custom package selection logic
  let customPackageName = "";

  if (totalWatts < 500) {
    customPackageName = "500W";
  } else if (totalVA > 1000 && totalVA <= 1500) {
    customPackageName = "1.5kva";
  } else if (totalVA == 2500) {
    customPackageName = "2.5kva";
  } else if (totalVA > 2500 && totalVA <= 3500) {
    customPackageName = "3.5kva";
  } else if (totalVA > 3500 && totalVA <= 4200) {
    customPackageName = "4.2kva";
  } else if (totalVA > 4500 && totalVA <= 6200) {
    customPackageName = "6.2kva";
  }

  // Use customPackageName if set, otherwise use your existing logic
  const possibleNames = customPackageName
    ? [customPackageName]
    : [
        `${load}kva`,
        `${load}kva(a)`,
        `${load}kva(b)`,
        `${loadInWatts}W`,
        `${loadInWatts}W(a)`,
        `${loadInWatts}W(b)`,
      ];

  console.log(possibleNames);

  const selectedPackage = PACKAGES.find((p) => possibleNames.includes(p.name));

  const selectedPackageBattery = selectedPackage?.battery;
  const selectedPackagePanelArray = selectedPackage?.panelArray;
  const selectedPackagePicture = selectedPackage?.picture;
  const packagePrice = selectedPackage?.price;

  console.log(PACKAGES.find(() => possibleNames.includes("500watts")));
  console.log("Selected Package:", selectedPackage);

  useEffect(() => {
    setLoad(Math.ceil(totalkVA).toString());
  }, [totalkVA]);

  const handleAddDevice = () => {
    if (selectedAppliance && quantity > 0) {
      const deviceName = selectedAppliance.name;
      const icon = selectedAppliance.icon;
      const alreadyExists = devices.some(
        (d) => d.icon === icon && d.name.split(" x ")[0] === deviceName
      );

      if (alreadyExists && editIndex === null) {
        toast(
          `You've already added "${deviceName}", to edit the quantity please click on the pencil icon.`
        );
        return;
      }

      const totalWatts = customWattage * quantity;
      const newDevice = {
        icon: selectedAppliance.icon,
        name: `${selectedAppliance.name} x ${quantity}`,
        watts: totalWatts,
      };
      if (editIndex !== null) {
        // Edit existing
        const updatedDevices = [...devices];
        updatedDevices[editIndex] = newDevice;
        setDevices(updatedDevices);
        setEditIndex(null);
      } else {
        // Add new
        setDevices([...devices, newDevice]);
      }
      setIsDialogOpen(false);
      setNoPackage(false);
    }
  };

  const handleSelectChange = (value) => {
    const found = appliances.find((item) => item.name === value);
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

  const result = {
    load,
    selectedPackage,
    packagePrice,
    selectedPackageBattery,
    selectedPackagePanelArray,
    selectedPackagePicture,
  };

  const handleGetQuote = () => {
    if (!selectedPackage) {
      setNoPackage(true);
      return;
    }
    // proceed to result page
    router.push(
      `/result/size?data=${encodeURIComponent(JSON.stringify(result))}`
    );
  };

  return (
    <div className="grid items-center w-full max-w-4xl mx-auto sm:px-6 lg:px-8 py-12">
      {noPackage && (
        <h3 className="text-center text-red-500 mb-4">
          Please reach out to us on WhatsApp 09020532639 to get a quote for your
          system.
        </h3>
      )}

      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md">
          <div className="absolute -top-12 -right-12 w-24 h-24 gradient-bg rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <Calculator className="h-10 w-10 text-white" />
            </motion.div>
          </div>
          <h3 className="text-xl font-semibold mb-8 text-center">
            Calculate Your Solar System Size
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
                  className="w-32 h-32 overflow-hidden border border-gray-200 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-brand-orange relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditIndex(index);
                    setSelectedAppliance(
                      appliances.find(
                        (a) =>
                          a.icon === device.icon &&
                          a.name === device.name.split(" x ")[0]
                      )
                    );
                    setQuantity(Number(device.name.split(" x ")[1]) || 1);
                    setCustomWattage(
                      device.watts / (Number(device.name.split(" x ")[1]) || 1)
                    );
                    setIsDialogOpen(true);
                  }}>
                  <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-orange">
                    <Appliance icon={device.icon} />
                  </div>
                  <div>
                    <p className="font-medium">{device.name}</p>
                    <p className="text-xs text-gray-500">{device.watts}W</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveDevice(index);
                    }}
                    className="absolute top-1 right-1 p-1 rounded hover:bg-gray-100"
                    title="Remove">
                    <Trash2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditIndex(index);
                      setSelectedAppliance(
                        appliances.find(
                          (a) =>
                            a.icon === device.icon &&
                            a.name === device.name.split(" x ")[0]
                        )
                      );

                      setQuantity(Number(device.name.split(" x ")[1]) || 1);
                      setCustomWattage(
                        device.watts /
                          (Number(device.name.split(" x ")[1]) || 1)
                      );
                      setIsDialogOpen(true);
                    }}
                    className="absolute bottom-1 right-1 p-1 rounded hover:bg-gray-100"
                    title="Edit">
                    <Pencil className="w-4 h-4 text-gray-400" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>

            <Dialog
              open={isDialogOpen}
              onOpenChange={(open) => {
                setIsDialogOpen(open);
                if (!open) {
                  setSelectedAppliance(null);
                  setQuantity(1);
                  setCustomWattage(0);
                  setEditIndex(null);
                }
              }}>
              <DialogTrigger asChild>
                <motion.div
                  className={cn(
                    "min-h-32 bg-white border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center h-full cursor-pointer hover:border-brand-orange",
                    devices.length === 0 ? "w-full" : "w-32 h-32"
                  )}
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
                    <Label className="mb-2">Appliance</Label>
                    <Select
                      key={isDialogOpen ? "open" : "closed"}
                      value={selectedAppliance?.name || ""}
                      onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Appliance" />
                      </SelectTrigger>
                      <SelectContent>
                        {appliances.map((item, i) => (
                          <SelectItem key={i} value={item.name}>
                            <div className="flex items-center gap-2">
                              <span>{item.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-2">Quantity</Label>
                    <Input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label className="mb-2">Wattage</Label>
                    <Input
                      type="number"
                      value={customWattage}
                      onChange={(e) => setCustomWattage(Number(e.target.value))}
                    />
                  </div>
                  <Button className="w-full mt-6" onClick={handleAddDevice}>
                    Add
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid">
            <Button
              variant="ghost"
              className="mb-4 justify-self-end"
              onClick={() => {
                setDevices([]);
                setNoPackage(false);
              }}>
              <RotateCcw className="w-4 h-4 text-gray-400 " />
            </Button>
          </div>
          <div className="text-center text-sm text-gray-600 mb-1">
            Estimated total consumption:{" "}
            <span className="font-semibold text-gray-900">{totalWatts}W</span>
          </div>
          <div className="text-center text-sm text-gray-600 mb-4">
            Equivalent kVA rating:{" "}
            <span className="font-semibold text-gray-900">{totalkVA} kVA</span>
          </div>
          <Button onClick={handleGetQuote} className="w-full gradient-bg">
            Get My System Quote
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SizeCalculator;
