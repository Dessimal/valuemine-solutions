"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftToLine } from "lucide-react";
import { PACKAGES } from "@/app/constants";
import RecommendedPackage from "./RecommendedPackage";
import CostBreakdown from "./CostBreakDown";
import OtherPackagesSection from "./OtherPackages";
import debounce from "lodash/debounce";

export default function ResultComponent({ result }) {
  const params = useParams();
  const router = useRouter();

  const [aiDescription, setAIDescription] = useState<any>(null);
  const [primaryAIDescription, setPrimaryAIDescription] = useState(null);
  const [otherAIDescriptions, setOtherAIDescriptions] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Selected package changed:", result?.selectedPackage);
    async function fetchPrimary() {
      try {
        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            packageName: result?.selectedPackage?.name,
            packageDetails: JSON.stringify(result?.selectedPackage),
          }),
        });

        if (!res.ok) throw new Error("Failed to fetch AI description");

        const data = await res.json();
        const parsed =
          typeof data.data === "string" ? JSON.parse(data.data) : data.data;

        setPrimaryAIDescription(parsed);
      } catch (error) {
        console.error("Error fetching primary AI description:", error);
      } finally {
        setLoading(false);
      }
    }

    if (result?.selectedPackage) fetchPrimary();
  }, [result?.selectedPackage]);

  const handleSelect = useCallback(
    debounce(async (pkg) => {
      try {
        setLoading(true);
        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            packageName: pkg.name,
            packageDetails: JSON.stringify(pkg),
          }),
        });

        if (!res.ok)
          throw new Error("Failed to fetch alternate AI description");

        const data = await res.json();
        const parsed =
          typeof data.data === "string" ? JSON.parse(data.data) : data.data;

        setOtherAIDescriptions((prev) => ({
          ...prev,
          [pkg.name]: parsed,
        }));
      } catch (error) {
        console.error(
          "Error fetching AI description for selected package:",
          error
        );
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

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
  Gadgets & Materials: ₦${(
    result?.selectedPackage?.price ?? 0
  ).toLocaleString()}
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
  const otherPackages = useMemo(
    () => PACKAGES.filter((pkg) => pkg.name !== result?.selectedPackage?.name),
    [result]
  );

  return (
    <div className="min-h-screen">
      <div>
        <button
          onClick={() => router.back()}
          className="font-bold hover:text-gray-900 px-4 py-2">
          <span className="inline-flex items-center gap-2">
            <ArrowLeftToLine /> Go back
          </span>
        </button>
      </div>
      <div className="max-w-7xl px-1 sm:px-4 lg:px-8 py-12">
        {interestCalculatorEnabled ? (
          <CostBreakdown
            result={result}
            aiDescription={primaryAIDescription}
            loading={loading}
            // getShareText={getShareText}
          />
        ) : (
          <RecommendedPackage
            result={result}
            aiDescription={primaryAIDescription}
            loading={loading}
            getShareText={getShareText}
          />
        )}
        <OtherPackagesSection
          otherPackages={otherPackages}
          // handleSelect={handleSelect}
          aiDescriptions={otherAIDescriptions}
          loading={loading}
        />
      </div>
    </div>
  );
}
