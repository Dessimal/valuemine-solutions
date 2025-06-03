import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { appliances, PACKAGES } from "@/app/constants";
import { toast } from "sonner";
import { authClient } from "@/app/lib/auth-client";

const defaultDevices = [{ icon: "Bulb", name: "LED Bulb (10W)", watts: 10 }];

export function useSizeCalculator() {
  const [loading, setLoading] = useState(false);
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
  const totalkVA = (totalWatts / 800).toFixed(2);
  const approximateLoad = Math.ceil(Number(totalkVA));

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

  const selectedPackage = PACKAGES.find((p) => possibleNames.includes(p.name));
  const selectedPackageBattery = selectedPackage?.battery;
  const selectedPackagePanelArray = selectedPackage?.panelArray;
  const selectedPackagePicture = selectedPackage?.picture;
  const packagePrice = selectedPackage?.price;

  useEffect(() => {
    setLoad(Math.ceil(Number(totalkVA)).toString());
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

  const result = {
    load,
    selectedPackage,
    packagePrice,
    selectedPackageBattery,
    selectedPackagePanelArray,
    selectedPackagePicture,
  };

  const { data: session } = authClient.useSession();

  const handleGetQuote = () => {
    if (!selectedPackage) {
      setNoPackage(true);
      return;
    }
    setLoading(true);

    const callbackUrl = `/result/size?data=${encodeURIComponent(
      JSON.stringify(result)
    )}`;

    if (session) {
      // User is logged in, go straight to result
      router.push(callbackUrl);
    } else {
      // User is not logged in, go to sign-in with callback
      router.push(`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
    setLoading(false);
  };

  return {
    appliances,
    customPackageName,
    loading,
    setLoading,
    isDialogOpen,
    setIsDialogOpen,
    selectedAppliance,
    setSelectedAppliance,
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
    load,
    totalWatts,
    totalkVA,
    approximateLoad,
    selectedPackage,
    selectedPackageBattery,
    selectedPackagePanelArray,
    selectedPackagePicture,
    packagePrice,
    handleAddDevice,
    handleSelectChange,
    handleRemoveDevice,
    handleGetQuote,
  };
}
