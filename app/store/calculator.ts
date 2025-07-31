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
        let customPackageName = "";

        // Normalize all device names once for checks
        const deviceNames = devices.map((d) =>
          d.name.toLowerCase().replace(/\s+/g, " ")
        );

        // === Comprehensive Device Categories ===
        const nonInverterACs = [
          "air conditioner (1 hp)",
          "air conditioner (1.5 hp)",
          "air conditioner (2 hp)",
        ];
        const inverterACs = [
          "inverter ac (1 hp)",
          "inverter ac (1.5 hp)",
          "inverter ac (2 hp)",
        ];
        const heavyLoadDevices = [
          // High wattage or high surge
          "microwave oven",
          "electric kettle",
          "electric cooker",
          "induction cooker",
          "chest freezer (large)",
          "freezer", // Generic term
          "deep freezer",
          "clothes dryer",
          "electric iron",
          "water heater",
          "hair dryer",
          "water pump (1 hp)",
          "submersible pump (1 hp)",
        ];
        const mediumLoadDevices = [
          "standing fan (large)",
          "chandelier (large)",
          "food processor",
          "coffee maker",
          "refrigerator (large)", // Now placed here as it's a significant load
          "chest freezer (small)",
          "washing machine",
          "home theater (large)",
          "laser printer",
          "small server",
          "water dispenser",
          "water pump (0.5 hp)",
        ];
        const lightLoadDevices = [
          "ceiling fan",
          "standing fan (small)",
          "standing fan (medium)",
          "exhaust fan",
          "standing ac fan",
          "led bulb (5w)",
          "led bulb (10w)",
          "led bulb (15w)",
          "energy saving bulb",
          "tube light (4ft)",
          "chandelier (small)",
          "toaster",
          "electric cooker (single hob)",
          "blender (small)",
          "blender (large)",
          "refrigerator (small)",
          "refrigerator (medium)",
          'led tv (32")',
          'led tv (50")',
          'led tv (65")',
          "plasma tv",
          "home theater (small)",
          "laptop",
          "desktop computer",
          "computer monitor",
          "inkjet printer",
          "wifi router",
          "projector",
          "flatbed scanner",
          "cctv camera",
          "custom device",
        ];

        const matchesAny = (keywords) =>
          deviceNames.some((name) =>
            keywords.some((keyword) => name.includes(keyword))
          );

        // Determine customPackageName based on device categories (heaviest to lightest)
        // Check for non-inverter ACs first due to high surge
        if (matchesAny(nonInverterACs)) {
          if (deviceNames.some((name) => name.includes("2 hp"))) {
            customPackageName = "7.5kVA hybrid (Lithium)"; // For 2 HP non-inverter AC, a large system is needed
          } else if (deviceNames.some((name) => name.includes("1.5 hp"))) {
            customPackageName = "5kVA hybrid"; // For 1.5 HP non-inverter AC
          } else if (deviceNames.some((name) => name.includes("1 hp"))) {
            customPackageName = "5kVA hybrid"; // For 1 HP non-inverter AC
          }
        }

        // Then check for Inverter ACs
        else if (matchesAny(inverterACs)) {
          if (deviceNames.some((name) => name.includes("2 hp"))) {
            customPackageName = "5kVA hybrid"; // For 2 HP Inverter AC, a 5kVA is a safer bet
          } else if (deviceNames.some((name) => name.includes("1.5 hp"))) {
            customPackageName = "3.5kVA"; // For 1.5 HP Inverter AC
          } else if (deviceNames.some((name) => name.includes("1 hp"))) {
            customPackageName = "2.5kVA"; // For 1 HP Inverter AC
          }
        }

        // Then check for other heavy load devices
        else if (matchesAny(heavyLoadDevices)) {
          customPackageName = "3.5kVA"; // A default for other high-wattage/surge devices
        }

        // Then check for medium load devices
        else if (matchesAny(mediumLoadDevices) && totalWatts < 3500) {
          customPackageName = "2.5kVA";
        }

        // Then check for light load devices
        else if (matchesAny(lightLoadDevices) && totalWatts < 1000) {
          customPackageName = "1kVA";
        }

        // Fallback logic for uncategorized or complex load combinations
        else {
          if (totalWatts <= 800) {
            customPackageName = "1000W";
          } else if (totalkVA > 1 && totalkVA <= 1.5) {
            customPackageName = "1.5kVA";
          } else if (totalkVA > 1.5 && totalkVA <= 2) {
            customPackageName = "2kVA hybrid";
          } else if (totalkVA > 2 && totalkVA <= 2.5) {
            customPackageName = "2.5kVA";
          } else if (totalkVA > 2.5 && totalkVA <= 3.5) {
            customPackageName = "3.5kVA";
          } else if (totalkVA > 3.5 && totalkVA <= 4.2) {
            customPackageName = "4.2kVA hybrid";
          } else if (totalkVA > 4.2 && totalkVA <= 5) {
            customPackageName = "5kVA hybrid";
          } else if (totalkVA > 5 && totalkVA <= 7.5) {
            customPackageName = "7.5kVA hybrid(Lithium)";
          } else if (totalkVA > 7.5 && totalkVA <= 10) {
            customPackageName = "10kVA hybrid(Lithium)";
          }
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
          totalWatts,
          totalkVA,
          approximateLoad,
          customPackageName,
          load,
          selectedPackage,
          selectedPackageBattery,
          selectedPackagePanelArray,
          selectedPackagePicture,
          packagePrice,
        });
      },

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
