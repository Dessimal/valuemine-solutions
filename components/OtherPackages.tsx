import { useState } from "react";
import { Carousel, Card } from "./Carousel";
import GeminiResultCard from "./GeminiResultCard";
import { PACKAGES } from "@/app/constants";
import { fetchPrimaryGeminiDescription } from "@/app/data/aiDescription/get-aiDescription";
import { StaticImageData } from "next/image";

type Package = {
  id: number;
  name: string;
  battery: string;
  panelArray: string;
  price: number;
  picture: StaticImageData;
  category?: string;
};

export default function OtherPackagesSection() {
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

  const carouselItems = PACKAGES.map((pkg, idx) => (
    <Card
      key={pkg.name}
      card={{
        src: pkg.picture,
        title: pkg.name,
        category: pkg.category || "Solar Package",
        content:
          selectedOtherPackage === pkg.name && loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <GeminiResultCard data={aiDescription?.[pkg.name]} />
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
