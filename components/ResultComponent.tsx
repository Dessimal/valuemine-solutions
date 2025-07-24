"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftToLine } from "lucide-react";
import { PACKAGES } from "@/app/constants";
import { RecommendedPackage } from "./RecommendedPackage";
import CostBreakdown from "./CostBreakDown";
import { OtherPackagesSection } from "./OtherPackages";
import debounce from "lodash/debounce";
import { useCalculatorStore } from "@/app/store/calculator";
import { fetchPrimaryGeminiDescription } from "@/app/data/aiDescription/get-aiDescription";
import { FAQ } from "./FAQ";
import { VideoTestimonials } from "./VideoTestimonials";

export function ResultComponent() {
  const params = useParams();
  const router = useRouter();

  // Get values from Zustand store
  const {
    selectedPackage,
    selectedPackageBattery,
    selectedPackagePanelArray,
    packagePrice,
    repayment,
    workmanship,
    building,
    transportationCost,
    totalCost,
    downPayment,
    chargeableAmount,
  } = useCalculatorStore();

  const [aiDescription, setAIDescription] = useState<any>(null);
  const [primaryAIDescription, setPrimaryAIDescription] = useState(null);
  const [otherAIDescriptions, setOtherAIDescriptions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Selected package changed:", selectedPackage);
    async function fetchPrimary() {
      try {
        const parsed = await fetchPrimaryGeminiDescription(selectedPackage);

        setPrimaryAIDescription(parsed);
      } catch (error) {
        console.error("Error fetching primary AI description:", error);
      } finally {
        setLoading(false);
      }
    }

    if (selectedPackage) fetchPrimary();
  }, [selectedPackage]);

  let sizeCalculatorEnabled;
  let interestCalculatorEnabled;
  if (params.type === "size") {
    sizeCalculatorEnabled = true;
  } else if (params.type === "interest") {
    interestCalculatorEnabled = true;
  }

  function getShareText() {
    let repaymentText = "";
    if (repayment) {
      repaymentText = Object.entries(repayment)
        .map(
          ([months, value]: [string, any]) =>
            `${months}: Monthly ₦${value.monthly?.toLocaleString()} / Weekly ₦${value.weekly?.toLocaleString()}`
        )
        .join("\n");
    }

    let interestBlock = "";
    if (interestCalculatorEnabled) {
      interestBlock = `
  Gadgets & Materials: ₦${(packagePrice ?? 0).toLocaleString()}
  Workmanship: ₦${workmanship?.toLocaleString()} for ${building}
  Transportation: ₦${transportationCost?.toLocaleString()}
  Total: ₦${totalCost?.toLocaleString()}
  Down Payment: ₦${downPayment?.toLocaleString()}
  Chargeable Amount: ₦${chargeableAmount?.toLocaleString()}
  
  Repayment Options:
  ${repaymentText}
  `;
    }

    return `
  Hello Valuemine, Please I am interested in the solar package below:
  
  Solar Package: ${selectedPackage?.name}
  Battery: ${selectedPackageBattery}
  Panel Array: ${selectedPackagePanelArray}
  Price: ${packagePrice}
  ${interestBlock}
  ...
  `;
  }

  const otherPackages = useMemo(
    () => PACKAGES.filter((pkg) => pkg.name !== selectedPackage?.name),
    [selectedPackage]
  );

  return (
    <div className="container  mx-auto w-full py-20">
      <div className="mx-auto max-w-7xl px-1 sm:px-4 lg:px-8 py-12">
        {interestCalculatorEnabled ? (
          <CostBreakdown
            aiDescription={primaryAIDescription}
            loading={loading}
            // getShareText={getShareText}
          />
        ) : (
          <RecommendedPackage
            aiDescription={primaryAIDescription}
            loading={loading}
            getShareText={getShareText}
          />
        )}
        <OtherPackagesSection />
        <VideoTestimonials />
        <FAQ />
      </div>
    </div>
  );
}
