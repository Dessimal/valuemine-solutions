"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");

  const result = useMemo(() => {
    if (!dataParam) return null;
    try {
      return JSON.parse(decodeURIComponent(dataParam));
    } catch (error) {
      console.error("Error parsing dataParam:", error);
      return null;
    }
  }, [dataParam]);

  const [aiDescription, setAIDescription] = useState<string | null>(null);

  async function fetchAIDescription() {
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

    setAIDescription(data.text);
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

  //Extract values from result
  const {
    selectedPackage,
    selectedPackageBattery,
    selectedPackagePanelArray,
    building,
    downPayment,
    transportationCost,
    workmanship,
    totalCost,
    chargeableAmount,
    repayment,
  } = result;

  function stripCodeFences(data: string) {
    // Remove ```jsx and ```
    return data.replace(/^```[a-z]*\n?/i, "").replace(/```$/, "");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-sm md:text-base leading-relaxed">
      <h2 className="text-xl font-semibold mb-4">
        Here’s the cost breakdown for the {selectedPackage?.name}:
      </h2>
      <p>Gadgets & Materials: ₦{selectedPackage?.price?.toLocaleString()}</p>
      <p>
        Workmanship: ₦{workmanship?.toLocaleString()} for {building}
      </p>
      <p>Transportation: ₦{transportationCost?.toLocaleString()}</p>
      <p className="mt-2 font-semibold">
        Total: ₦{totalCost?.toLocaleString()}
      </p>
      <p>Down Payment: ₦{downPayment?.toLocaleString()}</p>
      <p>Chargeable Amount: ₦{chargeableAmount?.toLocaleString()}</p>
      <h3 className="mt-6 font-semibold">Repayment Options</h3>
      <ul className="list-disc ml-5">
        {repayment &&
          Object.entries(repayment).map(([months, value]: [string, any]) => (
            <li key={months}>
              {months}: Monthly ₦{value.monthly?.toLocaleString()} / Weekly ₦
              {value.weekly?.toLocaleString()}
            </li>
          ))}
      </ul>
      <h4 className="mt-6 font-bold">
        _*Detailed Breakdown of the system&apos;s capacity*_
      </h4>
      <h5 className="mt-2 font-semibold">{selectedPackage?.name}</h5>
      <p className="italic">_*Components:*_</p>
      <ul className="list-disc ml-5">
        <li>Inverter: {selectedPackage.name}</li>
        <li>Battery: {selectedPackageBattery}</li>
        <li>Solar Panel Array: {selectedPackagePanelArray}</li>
      </ul>
      {aiDescription && (
        <div className="mt-4" style={{ whiteSpace: "pre-line" }}>
          <ReactMarkdown>{stripCodeFences(aiDescription)}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
