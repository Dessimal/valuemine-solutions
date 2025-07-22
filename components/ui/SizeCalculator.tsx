// "use client";
// import React, { useEffect, useState, useTransition } from "react";
// import { motion, AnimatePresence } from "@/lib/framerMotion";

// import { Button } from "@/components/ui/button";
// import { Calculator, Loader2, Pencil, RotateCcw, Trash2 } from "lucide-react";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { cn } from "@/lib/utils";
// import Appliance from "../Appliance";
// import { useCalculatorStore } from "@/app/store/calculator";
// import { useRouter } from "next/navigation";
// import { authClient } from "@/app/lib/auth-client";

// export const SizeCalculator = () => {
//   const [isPending, startTransition] = useTransition();

//   const router = useRouter();

//   const {
//     appliances,
//     customPackageName,
//     loading,
//     setLoading,
//     isDialogOpen,
//     setIsDialogOpen,
//     selectedAppliance,
//     setSelectedAppliance,
//     setCallbackUrl,
//     quantity,
//     setQuantity,
//     customWattage,
//     setCustomWattage,
//     devices,
//     setDevices,
//     editIndex,
//     setEditIndex,
//     noPackage,
//     setNoPackage,
//     load,
//     totalWatts,
//     totalkVA,
//     approximateLoad,
//     selectedPackage,
//     selectedPackageBattery,
//     selectedPackagePanelArray,
//     selectedPackagePicture,
//     packagePrice,
//     handleAddDevice,
//     handleSelectChange,
//     handleRemoveDevice,
//     recalculate,
//     result,
//   } = useCalculatorStore();

//   useEffect(() => {
//     console.log("selectedPackage changed:", selectedPackage);
//   }, [selectedPackage]);

//   useEffect(() => {
//     recalculate();
//   }, [devices, customWattage, quantity, selectedAppliance, recalculate]);

//   const { data: session } = authClient.useSession();

//   const handleGetQuote = () => {
//     setLoading(true);
//     startTransition(() => {
//       if (!selectedPackage) {
//         setNoPackage(true);
//         return;
//       }
//       const callbackUrl = `/result/size`;
//       setCallbackUrl(callbackUrl);
//       if (session) {
//         router.push(callbackUrl);
//       } else {
//         router.push(`/sign-in`);
//       }
//       setLoading(false);
//     });
//   };

//   return (
//     <div className="grid items-center w-full max-w-4xl mx-auto py-12">
//       {noPackage && (
//         <h3 className="text-center text-red-500 mb-4">
//           Please reach out to us on WhatsApp 09020532639 to get a quote for your
//           system.
//         </h3>
//       )}

//       <motion.div
//         className="relative flex justify-center"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.2 }}>
//         <div className="relative p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md">
//           <div className="absolute -top-12 -right-12 w-24 h-24 gradient-bg rounded-full flex items-center justify-center">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}>
//               <Calculator className="h-10 w-10 text-white" />
//             </motion.div>
//           </div>
//           <h3 className="text-xl font-semibold mb-8 text-center">
//             Calculate Your Solar System Size
//           </h3>
//           <div
//             className={cn(
//               "grid gap-4 mb-8 items-center justify-center",
//               devices.length === 0 ? "grid-cols-1" : "grid-cols-2"
//             )}>
//             <AnimatePresence>
//               {devices.map((device, index) => (
//                 <motion.div
//                   key={`custom-${index}`}
//                   className="w-32 h-32 overflow-hidden border border-gray-200 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-brand-orange relative"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ duration: 0.3 }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setEditIndex(index);
//                     setSelectedAppliance(
//                       appliances.find(
//                         (a) =>
//                           a.icon === device.icon &&
//                           a.name === device.name.split(" x ")[0]
//                       )
//                     );
//                     setQuantity(Number(device.name.split(" x ")[1]) || 1);
//                     setCustomWattage(
//                       device.watts / (Number(device.name.split(" x ")[1]) || 1)
//                     );
//                     setIsDialogOpen(true);
//                   }}>
//                   <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-orange">
//                     <Appliance icon={device.icon} />
//                   </div>
//                   <div>
//                     <p className="font-medium">{device.name}</p>
//                     <p className="text-xs text-gray-500">{device.watts}W</p>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleRemoveDevice(index);
//                     }}
//                     className="absolute top-1 right-1 p-1 rounded hover:bg-gray-100"
//                     title="Remove">
//                     <Trash2 className="w-4 h-4 text-gray-400" />
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setEditIndex(index);
//                       setSelectedAppliance(
//                         appliances.find(
//                           (a) =>
//                             a.icon === device.icon &&
//                             a.name === device.name.split(" x ")[0]
//                         )
//                       );

//                       setQuantity(Number(device.name.split(" x ")[1]) || 1);
//                       setCustomWattage(
//                         device.watts /
//                           (Number(device.name.split(" x ")[1]) || 1)
//                       );
//                       setIsDialogOpen(true);
//                     }}
//                     className="absolute bottom-1 right-1 p-1 rounded hover:bg-gray-100"
//                     title="Edit">
//                     <Pencil className="w-4 h-4 text-gray-400" />
//                   </button>
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             <Dialog
//               open={isDialogOpen}
//               onOpenChange={(open) => {
//                 setIsDialogOpen(open);
//                 if (!open) {
//                   setSelectedAppliance(null);
//                   setQuantity(1);
//                   setCustomWattage(0);
//                   setEditIndex(null);
//                 }
//               }}>
//               <DialogTrigger asChild>
//                 <motion.div
//                   className={cn(
//                     "min-h-32 border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center h-full cursor-pointer hover:border-brand-orange",
//                     devices.length === 0 ? "w-full" : "w-32 h-32"
//                   )}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 400,
//                     damping: 10,
//                   }}>
//                   <p className="text-gray-400 font-medium">
//                     {devices.length === 0 ? "Add Devices" : "+ Add More"}
//                   </p>
//                 </motion.div>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-md">
//                 <DialogHeader>
//                   <DialogTitle>Add Appliance</DialogTitle>
//                 </DialogHeader>
//                 <div className="space-y-4">
//                   <div>
//                     <Label className="mb-2">Appliance</Label>
//                     <Select
//                       key={isDialogOpen ? "open" : "closed"}
//                       value={selectedAppliance?.name || ""}
//                       onValueChange={handleSelectChange}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Appliance" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {appliances.map((item, i) => (
//                           <SelectItem key={i} value={item.name}>
//                             <div className="flex items-center gap-2">
//                               <span>{item.name}</span>
//                             </div>
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <Label className="mb-2">Quantity</Label>
//                     <Input
//                       type="number"
//                       min={1}
//                       value={quantity}
//                       onChange={(e) => setQuantity(Number(e.target.value))}
//                     />
//                   </div>
//                   <div>
//                     <Label className="mb-2">Wattage</Label>
//                     <Input
//                       type="number"
//                       value={customWattage}
//                       onChange={(e) => setCustomWattage(Number(e.target.value))}
//                     />
//                   </div>
//                   <Button className="w-full mt-6" onClick={handleAddDevice}>
//                     Add
//                   </Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//           <div className="grid">
//             <Button
//               variant="ghost"
//               className="mb-4 justify-self-end"
//               onClick={() => {
//                 setDevices([]);
//                 setNoPackage(false);
//               }}>
//               <RotateCcw className="w-4 h-4 text-gray-400 " />
//             </Button>
//           </div>
//           <div className="text-center text-sm text-gray-600 mb-1">
//             Estimated total consumption:{" "}
//             <span className="font-semibold text-gray-900">{totalWatts}W</span>
//           </div>
//           <div className="text-center text-sm text-gray-600 mb-4">
//             Equivalent kVA rating:{" "}
//             <span className="font-semibold text-gray-900">{totalkVA} kVA</span>
//           </div>
//           <div className="text-center text-sm text-gray-600 mb-4">
//             Appox kVA rating:{" "}
//             <span className="font-semibold text-gray-900">
//               {approximateLoad} kVA
//             </span>
//           </div>
//           <div className="text-center text-sm text-gray-600 mb-4">
//             Appox kVA rating:{" "}
//             <span className="font-semibold text-gray-900">
//               {customPackageName}
//             </span>
//           </div>
//           <Button
//             onClick={handleGetQuote}
//             disabled={loading || isPending}
//             className="w-full gradient-bg">
//             {loading || isPending ? (
//               <span className="flex items-center gap-2">
//                 <Loader2 className="animate-spin w-4 h-4" />
//                 Loading...
//               </span>
//             ) : (
//               "Get My System Quote"
//             )}
//           </Button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

"use client";
import React, { useEffect, useState, useTransition } from "react";
import { motion, AnimatePresence } from "@/lib/framerMotion"; // Assuming this path is correct

import { Button } from "@/components/ui/button";
import { Calculator, Loader2, Pencil, RotateCcw, Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter, // Added for wizard navigation
  DialogDescription, // Added for wizard step descriptions
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
import { cn } from "@/lib/utils"; // Assuming this utility is correct
import Appliance from "../Appliance"; // Assuming this component exists and path is correct
import { useCalculatorStore } from "@/app/store/calculator"; // Assuming this store exists and path is correct
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client"; // Assuming this client exists and path is correct

interface SizeCalculatorProps {
  enableTour?: boolean;
}

export const SizeCalculator = ({ enableTour = false }: SizeCalculatorProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Calculator store states and actions
  const {
    appliances,
    customPackageName,
    loading,
    setLoading,
    isDialogOpen,
    setIsDialogOpen,
    selectedAppliance,
    setSelectedAppliance,
    setCallbackUrl,
    quantity,
    setQuantity,
    customWattage,
    setCustomWattage,
    devices,
    setDevices,
    editIndex,
    setEditIndex,
    noPackage,
    setNoPackage,
    recalculate,
    // result, // Not used in the provided snippet, commented out
    // load, // Not used in the provided snippet, commented out
    totalWatts,
    totalkVA,
    approximateLoad,
    selectedPackage,
    // selectedPackageBattery, // Not used in the provided snippet, commented out
    // selectedPackagePanelArray, // Not used in the provided snippet, commented out
    // selectedPackagePicture, // Not used in the provided snippet, commented out
    // packagePrice, // Not used in the provided snippet, commented out
    handleAddDevice,
    handleSelectChange,
    handleRemoveDevice,
  } = useCalculatorStore();

  const [runTour, setRunTour] = useState(false);

  const tourSteps: Step[] = [
    {
      target: ".tour-title",
      content: "This is where you start calculating your solar system size.",
    },
    {
      target: ".tour-add-device",
      content: "Click here to add appliances you want to power.",
    },
    {
      target: ".tour-device-grid",
      content:
        "You’ll see your selected devices here. Click to edit or remove.",
    },
    {
      target: ".tour-estimate",
      content: "Here you can view total wattage and kVA estimates.",
    },
    {
      target: ".tour-quote-button",
      content: "Click here to get a recommended solar system quote.",
    },
  ];

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setRunTour(true);
      localStorage.setItem("hasSeenTour", "true");
    }
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finished = [STATUS.FINISHED, STATUS.SKIPPED].includes(status);
    if (finished) {
      setRunTour(false);
    }
  };

  // Recalculate effect (existing logic)
  useEffect(() => {
    recalculate();
  }, [devices, customWattage, quantity, selectedAppliance, recalculate]);

  // Session data (existing logic)
  const { data: session } = authClient.useSession();

  // Handle Get Quote (existing logic)
  const handleGetQuote = () => {
    setLoading(true);
    startTransition(() => {
      if (!selectedPackage) {
        setNoPackage(true);
        setLoading(false); // Ensure loading is reset if no package
        return;
      }
      const callbackUrl = `/result/size`;
      setCallbackUrl(callbackUrl);
      if (session) {
        router.push(callbackUrl);
      } else {
        router.push(`/sign-in`);
      }
      setLoading(false);
    });
  };

  return (
    <>
      {enableTour && <div>tour set</div>}
      <div className="grid items-center w-full max-w-4xl mx-auto py-12">
        {noPackage && (
          <h3 className="text-center text-red-500 mb-4">
            Please reach out to us on WhatsApp 09020532639 to get a quote for
            your system.
          </h3>
        )}
        {/* Main Calculator UI */}
        <motion.div
          className="relative flex justify-center card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="relative p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md">
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
                "tour-device-grid grid gap-4 mb-8 items-center justify-center",
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
                        device.watts /
                          (Number(device.name.split(" x ")[1]) || 1)
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
              {/* Appliance Add/Edit Dialog */}
              <Dialog
                className="bg-card"
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
                      "tour-add-device min-h-32 border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center h-full cursor-pointer hover:border-brand-orange",
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
                <DialogContent className="sm:max-w-md bg-card">
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
                        onChange={(e) =>
                          setCustomWattage(Number(e.target.value))
                        }
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
            <div className="text-center text-sm font-light mb-4 flex flex-col space-y-2 tour-estimate">
              <span className=" ">
                {" "}
                Estimated total consumption: {totalWatts}W
              </span>
              <span className=" "> Equivalent kVA rating: {totalkVA} kVA</span>
              <span className=" ">
                {" "}
                Approx kVA rating: {approximateLoad} kVA
              </span>
              <span className=" ">
                {" "}
                Recommended Inverter Package: {customPackageName}
              </span>
            </div>

            <Button
              onClick={handleGetQuote}
              disabled={loading || isPending}
              className="w-full gradient-bg tour-quote-button">
              {loading || isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  Loading...
                </span>
              ) : (
                "Get My System Quote"
              )}
            </Button>
          </div>
        </motion.div>
        {/* First-Time User Wizard Dialog */}
      </div>
    </>
  );
};
