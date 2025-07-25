"use client";

import { useState } from "react";
import { Carousel, Card } from "./Carousel";
import GeminiResultCard from "./GeminiResultCard";
import { PACKAGES } from "@/app/constants";
import { fetchPrimaryGeminiDescription } from "@/app/data/aiDescription/get-aiDescription";
import { StaticImageData } from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Battery } from "lucide-react";

type Package = {
  id: number;
  name: string;
  battery: string;
  panelArray: string;
  price: number;
  picture: StaticImageData;
  category?: string;
};

export function OtherPackagesSection() {
  const [loading, setLoading] = useState(false);
  const [selectedOtherPackage, setSelectedOtherPackage] = useState<string>("");
  const [aiDescription, setAIDescription] = useState<Record<string, any>>({});

  const handleSelect = async (pkg: Package) => {
    setSelectedOtherPackage(pkg.name);
    setLoading(true);
    try {
      const desc = await fetchPrimaryGeminiDescription(pkg);
      setAIDescription((prev) => ({
        ...prev,
        [pkg.name]: desc,
      }));
    } catch (error) {
      console.error("Error fetching AI description:", error);
    } finally {
      setLoading(false);
    }
  };

  function getShareText(name, battery, panelArray, price) {
    return `
  Hello Valuemine, Please I am interested in the solar package below:
  
  Solar Package: ${name}
  Battery: ${battery}
  Panel Array: ${panelArray}
  Price: ${price}
  ...
  `;
  }

  const handleShare = (name, battery, panelArray, price) => {
    console.log("handleShare function called!");
    const phoneNumber = "2349020532639";
    const shareText = getShareText(name, battery, panelArray, price);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      shareText
    )}`;
    console.log("This is the shared text", shareText);
    window.open(url, "_blank");
  };

  const carouselItems = PACKAGES.map((pkg, idx) => (
    <Card
      key={pkg.name}
      card={{
        src: pkg.picture,
        title: pkg.name,
        category: "Solar Package",
        content:
          selectedOtherPackage === pkg.name && loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <>
              <GeminiResultCard data={aiDescription?.[pkg.name]} />
              <button
                onClick={() =>
                  handleShare(pkg.name, pkg.battery, pkg.panelArray, pkg.price)
                } // Direct user click to open WhatsApp
                className="mx-auto w-full mt-4 bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 mx-auto">
                <FaWhatsapp size={24} /> Share with us on WhatsApp
              </button>
            </>
          ),
      }}
      index={idx}
      onSelect={() => handleSelect(pkg)}
    />
  ));

  return (
    <section className="mt-16">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-5xl font-bold mb-6 text-center">
          Explore other Solar/Inverter Packages
        </h3>
        <Carousel items={carouselItems} />
      </div>
    </section>
  );
}
