import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"; // Add this import

// ...existing code...

const PackageCard: React.FC<PackageCardProps> = ({
  name,
  price,
  battery,
  panelArray,
  picture,
  description,
  onSelect,
  result,
}) => {
  const [showResult, setShowResult] = useState(false);
  const router = useRouter(); // Add this line

  const handleViewPackage = () => {
    // Prepare query params
    const query = new URLSearchParams({
      name,
      price: price.toString(),
      battery,
      panelArray,
      picture: picture || "",
      description: description || "",
    }).toString();

    router.push(`/result?${query}`);
  };

  return (
    <Card className="w-full max-w-sm shadow-lg">
      {picture && (
        <div className="w-full h-40 relative">
          <Image
            src={picture}
            alt={name}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </CardHeader>
      <CardContent>
        <ul className="text-sm space-y-1">
          <li>
            <span className="font-semibold">Price:</span> ₦
            {price.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">Battery:</span> {battery}
          </li>
          <li>
            <span className="font-semibold">Panel Array:</span> {panelArray}
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          className="w-full"
          variant="outline"
          onClick={handleViewPackage}>
          View Package
        </Button>
        <Button className="w-full" onClick={onSelect}>
          Select Package
        </Button>
      </CardFooter>
      {showResult && result && (
        <div className="p-4 border-t text-sm space-y-1">
          <div>
            <span className="font-semibold">Load:</span> {String(result.load)}
          </div>
          <div>
            <span className="font-semibold">Selected Package:</span>{" "}
            {String(result.selectedPackage)}
          </div>
          <div>
            <span className="font-semibold">Package Price:</span>{" "}
            {String(result.packagePrice)}
          </div>
          <div>
            <span className="font-semibold">Battery:</span>{" "}
            {String(result.selectedPackageBattery)}
          </div>
          <div>
            <span className="font-semibold">Panel Array:</span>{" "}
            {String(result.selectedPackagePanelArray)}
          </div>
          <div>
            <span className="font-semibold">Picture:</span>{" "}
            {String(result.selectedPackagePicture)}
          </div>
        </div>
      )}
    </Card>
  );
};

export default PackageCard;
