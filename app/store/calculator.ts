// import { create } from "zustand";
// import { appliances, PACKAGES } from "@/app/constants";
// import { toast } from "sonner";

// import { persist } from "zustand/middleware";

// const defaultDevices = [{ icon: "Bulb", name: "LED Bulb (10W)", watts: 10 }];

// export const useCalculatorStore = create(
//   persist((set, get) => ({
//     // State
//     appliances,
//     customPackageName: "",
//     loading: false,
//     isDialogOpen: false,
//     selectedAppliance: null,
//     quantity: 1,
//     customWattage: 0,
//     devices: defaultDevices,
//     editIndex: null,
//     noPackage: false,
//     load: "",
//     totalWatts: 0,
//     totalkVA: "0",
//     approximateLoad: 0,
//     selectedPackage: null,
//     selectedPackageBattery: null,
//     selectedPackagePanelArray: null,
//     selectedPackagePicture: null,
//     packagePrice: null,

//     // Actions
//     setLoading: (loading) => set({ loading }),
//     setIsDialogOpen: (isDialogOpen) => set({ isDialogOpen }),
//     setSelectedAppliance: (selectedAppliance) => set({ selectedAppliance }),
//     setQuantity: (quantity) => set({ quantity }),
//     setCustomWattage: (customWattage) => set({ customWattage }),
//     setDevices: (devices) => set({ devices }),
//     setEditIndex: (editIndex) => set({ editIndex }),
//     setNoPackage: (noPackage) => set({ noPackage }),
//     setLoad: (load) => set({ load }),

//     // Logic
//     handleAddDevice: () => {
//       const {
//         selectedAppliance,
//         quantity,
//         customWattage,
//         devices,
//         editIndex,
//         setDevices,
//         setEditIndex,
//         setIsDialogOpen,
//         setNoPackage,
//       } = get();
//       if (selectedAppliance && quantity > 0) {
//         const deviceName = selectedAppliance.name;
//         const icon = selectedAppliance.icon;
//         const alreadyExists = devices.some(
//           (d) => d.icon === icon && d.name.split(" x ")[0] === deviceName
//         );

//         if (alreadyExists && editIndex === null) {
//           toast(
//             `You've already added "${deviceName}", to edit the quantity please click on the pencil icon.`
//           );
//           return;
//         }

//         const totalWatts = customWattage * quantity;
//         const newDevice = {
//           icon: selectedAppliance.icon,
//           name: `${selectedAppliance.name} x ${quantity}`,
//           watts: totalWatts,
//         };
//         if (editIndex !== null) {
//           const updatedDevices = [...devices];
//           updatedDevices[editIndex] = newDevice;
//           setDevices(updatedDevices);
//           setEditIndex(null);
//         } else {
//           setDevices([...devices, newDevice]);
//         }
//         setIsDialogOpen(false);
//         setNoPackage(false);
//       }
//     },

//     handleSelectChange: (value) => {
//       const found = appliances.find((item) => item.name === value);
//       if (found) {
//         set({ selectedAppliance: found, customWattage: found.watts });
//       }
//     },

//     handleRemoveDevice: (index) => {
//       const devices = [...get().devices];
//       devices.splice(index, 1);
//       set({ devices });
//     },

//     recalculate: () => {
//       const { devices } = get();
//       const totalWatts = devices.reduce(
//         (sum, device) => sum + Number(device.watts),
//         0
//       );
//       const totalkVA = Number((totalWatts / 800).toFixed(2));
//       const approximateLoad = Math.ceil(Number(totalkVA));
//       set({ totalWatts, totalkVA, approximateLoad });

//       // --- Package selection logic ---
//       let customPackageName = "";

//       // Check if freezer or fridge is selected
//       const hasFreezerOrFridge = devices.some((device) => {
//         const normalizedName = device.name.toLowerCase().replace(/\s+/g, " ");
//         return /\b(freezer|deep freezer|fridge|refrigerator|mini fridge|chest freezer|upright freezer)\b/.test(
//           normalizedName
//         );
//       });

//       if (totalWatts <= 800) {
//         if (!hasFreezerOrFridge) {
//           if (totalWatts < 500) {
//             customPackageName = "500W";
//           }
//           if (totalWatts >= 500 && totalWatts <= 700) {
//             customPackageName = "1000W(a)";
//           } else if (totalWatts >= 700 && totalWatts <= 800) {
//             customPackageName = "1000W(b)";
//           }
//         } else {
//           customPackageName = "1kva(a)";
//         }
//       } else if (totalkVA > 1 && totalkVA <= 1.5) {
//         customPackageName = "1.5kva";
//       } else if (totalkVA > 1.5 && totalkVA <= 2) {
//         customPackageName = "2kva hybrid";
//       } else if (totalkVA > 2 && totalkVA <= 2.5) {
//         customPackageName = "2.5kva";
//       } else if (totalkVA > 2.5 && totalkVA <= 3.5) {
//         customPackageName = "3.5kva";
//       } else if (totalkVA > 3.5 && totalkVA <= 4.2) {
//         customPackageName = "4.2kva";
//       } else if (totalkVA > 4.2 && totalkVA <= 6.2) {
//         customPackageName = "6.2kva";
//       }

//       const load = Math.ceil(Number(totalkVA)).toString();

//       const possibleNames = customPackageName
//         ? [customPackageName]
//         : [
//             `${load}kva`,
//             `${load}kva(a)`,
//             `${load}kva(b)`,
//             `${totalWatts}W`,
//             `${totalWatts}W(a)`,
//             `${totalWatts}W(b)`,
//           ];

//       const selectedPackage = PACKAGES.find((p) =>
//         possibleNames.includes(p.name)
//       );
//       const selectedPackageBattery = selectedPackage?.battery;
//       const selectedPackagePanelArray = selectedPackage?.panelArray;
//       const selectedPackagePicture = selectedPackage?.picture;
//       const packagePrice = selectedPackage?.price;

//       set({
//         customPackageName,
//         load,
//         selectedPackage,
//         selectedPackageBattery,
//         selectedPackagePanelArray,
//         selectedPackagePicture,
//         packagePrice,
//       });
//     },

//     // Result getter

//     result: () => {
//       const {
//         load,
//         selectedPackage,
//         packagePrice,
//         selectedPackageBattery,
//         selectedPackagePanelArray,
//         selectedPackagePicture,
//       } = get();
//       return {
//         load,
//         selectedPackage,
//         packagePrice,
//         selectedPackageBattery,
//         selectedPackagePanelArray,
//         selectedPackagePicture,
//       };
//     },
//   }))
// );

import { create } from "zustand";
import { appliances, PACKAGES } from "@/app/constants";
import { toast } from "sonner";
import { persist } from "zustand/middleware";

const defaultDevices = [{ icon: "Bulb", name: "LED Bulb (10W)", watts: 10 }];

export const useCalculatorStore = create(
  persist(
    (set, get) => ({
      // State
      appliances,
      customPackageName: "",
      loading: false,
      isDialogOpen: false,
      selectedAppliance: null,
      quantity: 1,
      customWattage: 0,
      devices: defaultDevices,
      editIndex: null,
      noPackage: false,
      load: "",
      totalWatts: 0,
      totalkVA: "0",
      approximateLoad: 0,
      selectedPackage: null,
      selectedPackageBattery: null,
      selectedPackagePanelArray: null,
      selectedPackagePicture: null,
      packagePrice: null,
      callbackUrl: "",

      // Actions
      setLoading: (loading) => set({ loading }),
      setIsDialogOpen: (isDialogOpen) => set({ isDialogOpen }),
      setSelectedAppliance: (selectedAppliance) => set({ selectedAppliance }),
      setQuantity: (quantity) => set({ quantity }),
      setCustomWattage: (customWattage) => set({ customWattage }),
      setDevices: (devices) => set({ devices }),
      setEditIndex: (editIndex) => set({ editIndex }),
      setNoPackage: (noPackage) => set({ noPackage }),
      setLoad: (load) => set({ load }),
      setCallbackUrl: (url: string) => set({ callbackUrl: url }),
      setEmail: (email) => set({ email }),

      // Logic
      handleAddDevice: () => {
        const {
          selectedAppliance,
          quantity,
          customWattage,
          devices,
          editIndex,
          setDevices,
          setEditIndex,
          setIsDialogOpen,
          setNoPackage,
        } = get();
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
            const updatedDevices = [...devices];
            updatedDevices[editIndex] = newDevice;
            setDevices(updatedDevices);
            setEditIndex(null);
          } else {
            setDevices([...devices, newDevice]);
          }
          setIsDialogOpen(false);
          setNoPackage(false);
        }
      },

      handleSelectChange: (value) => {
        const found = appliances.find((item) => item.name === value);
        if (found) {
          set({ selectedAppliance: found, customWattage: found.watts });
        }
      },

      handleRemoveDevice: (index) => {
        const devices = [...get().devices];
        devices.splice(index, 1);
        set({ devices });
      },

      recalculate: () => {
        const { devices } = get();
        const totalWatts = devices.reduce(
          (sum, device) => sum + Number(device.watts),
          0
        );
        const totalkVA = Number((totalWatts / 800).toFixed(2));
        const approximateLoad = Math.ceil(Number(totalkVA));
        set({ totalWatts, totalkVA, approximateLoad });

        // --- Package selection logic ---
        let customPackageName = "";

        // Check if freezer or fridge is selected
        const hasFreezerOrFridge = devices.some((device) => {
          const normalizedName = device.name.toLowerCase().replace(/\s+/g, " ");
          return /\b(freezer|deep freezer|fridge|refrigerator|mini fridge|chest freezer|upright freezer)\b/.test(
            normalizedName
          );
        });

        if (totalWatts <= 800) {
          if (!hasFreezerOrFridge) {
            if (totalWatts < 500) {
              customPackageName = "500W";
            }
            if (totalWatts >= 500 && totalWatts <= 700) {
              customPackageName = "1000W(a)";
            } else if (totalWatts >= 700 && totalWatts <= 800) {
              customPackageName = "1000W(b)";
            }
          } else {
            customPackageName = "1kva(a)";
          }
        } else if (totalkVA > 1 && totalkVA <= 1.5) {
          customPackageName = "1.5kva";
        } else if (totalkVA > 1.5 && totalkVA <= 2) {
          customPackageName = "2kva hybrid";
        } else if (totalkVA > 2 && totalkVA <= 2.5) {
          customPackageName = "2.5kva";
        } else if (totalkVA > 2.5 && totalkVA <= 3.5) {
          customPackageName = "3.5kva";
        } else if (totalkVA > 3.5 && totalkVA <= 4.2) {
          customPackageName = "4.2kva";
        } else if (totalkVA > 4.2 && totalkVA <= 6.2) {
          customPackageName = "6.2kva";
        }

        const load = Math.ceil(Number(totalkVA)).toString();

        const possibleNames = customPackageName
          ? [customPackageName]
          : [
              `${load}kva`,
              `${load}kva(a)`,
              `${load}kva(b)`,
              `${totalWatts}W`,
              `${totalWatts}W(a)`,
              `${totalWatts}W(b)`,
            ];

        const selectedPackage = PACKAGES.find((p) =>
          possibleNames.includes(p.name)
        );
        const selectedPackageBattery = selectedPackage?.battery;
        const selectedPackagePanelArray = selectedPackage?.panelArray;
        const selectedPackagePicture = selectedPackage?.picture;
        const packagePrice = selectedPackage?.price;

        set({
          customPackageName,
          load,
          selectedPackage,
          selectedPackageBattery,
          selectedPackagePanelArray,
          selectedPackagePicture,
          packagePrice,
        });
      },

      // Result getter
      result: () => {
        const {
          load,
          selectedPackage,
          packagePrice,
          selectedPackageBattery,
          selectedPackagePanelArray,
          selectedPackagePicture,
        } = get();
        return {
          load,
          selectedPackage,
          packagePrice,
          selectedPackageBattery,
          selectedPackagePanelArray,
          selectedPackagePicture,
        };
      },
    }),
    {
      name: "calculator-storage", // <-- This enables persistence!
    }
  )
);
