"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftToLine } from "lucide-react";
import { PACKAGES } from "@/app/constants";
import RecommendedPackage from "./RecommendedPackage";
import CostBreakdown from "./CostBreakDown";
import OtherPackagesSection from "./OtherPackages";

export default function ResultComponent({ result }) {
  const params = useParams();
  const router = useRouter();

  const [aiDescription, setAIDescription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleSelect = (pkg: any) => {
    // ...your logic for selecting a package...
  };

  async function fetchAIDescription() {
    setLoading(true);
    try {
      if (!result) {
        setAIDescription("Failed to get AI description");
        return;
      }
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageName: result.selectedPackage?.name,
          packageDetails: JSON.stringify(result.selectedPackage),
        }),
      });
      const data = await res.json();
      setAIDescription(
        typeof data.data === "string" ? JSON.parse(data.data) : data.data
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (result) {
      fetchAIDescription();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  if (!result) {
    return <div>No result data found.</div>;
  }

  let sizeCalculatorEnabled;
  let interestCalculatorEnabled;
  if (params.type === "size") {
    sizeCalculatorEnabled = true;
  } else if (params.type === "interest") {
    interestCalculatorEnabled = true;
  }

  function getShareText(result: any) {
    let repaymentText = "";
    if (result?.repayment) {
      repaymentText = Object.entries(result.repayment)
        .map(
          ([months, value]: [string, any]) =>
            `${months}: Monthly ₦${value.monthly?.toLocaleString()} / Weekly ₦${value.weekly?.toLocaleString()}`
        )
        .join("\n");
    }

    let interestBlock = "";
    if (interestCalculatorEnabled) {
      interestBlock = `
  Gadgets & Materials: ₦${result?.selectedPackage?.price?.toLocaleString()}
  Workmanship: ₦${result?.workmanship?.toLocaleString()} for ${result?.building}
  Transportation: ₦${result?.transportationCost?.toLocaleString()}
  Total: ₦${result?.totalCost?.toLocaleString()}
  Down Payment: ₦${result?.downPayment?.toLocaleString()}
  Chargeable Amount: ₦${result?.chargeableAmount?.toLocaleString()}
  
  Repayment Options:
  ${repaymentText}
  `;
    }

    return `
  Hello Valuemine, Please I am interested in the solar package below:
  
  Solar Package: ${result?.selectedPackage?.name}
  Battery: ${result?.selectedPackageBattery}
  Panel Array: ${result?.selectedPackagePanelArray}
  ${interestBlock}
  ...
  `;
  }

  const otherPackages = PACKAGES.filter(
    (pkg) => pkg.name !== result?.selectedPackage?.name
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div>
        <button
          onClick={() => router.back()}
          className="font-bold text-gray-700 hover:text-gray-900 px-4 py-2">
          <span className="inline-flex items-center gap-2">
            <ArrowLeftToLine /> Go back
          </span>
        </button>
      </div>
      <div className="max-w-7xl px-1 sm:px-4 lg:px-8 py-12">
        {interestCalculatorEnabled ? (
          <CostBreakdown
            result={result}
            aiDescription={aiDescription}
            loading={loading}
            getShareText={getShareText}
          />
        ) : (
          <RecommendedPackage
            result={result}
            aiDescription={aiDescription}
            loading={loading}
            getShareText={getShareText}
          />
        )}
        <OtherPackagesSection
          otherPackages={otherPackages}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
}
