"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ResultComponent({ result }) {
  const params = useParams();

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

  function stripCodeFences(data: string) {
    // Remove ```jsx and ```
    return data.replace(/^```[a-z]*\n?/i, "").replace(/```$/, "");
  }

  let sizeCalculatorEnabled;
  let interestCalculatorEnabled;
  if (params.type === "size") {
    sizeCalculatorEnabled = true;
  } else if (params.type === "interest") {
    interestCalculatorEnabled = true;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {interestCalculatorEnabled ? (
        <div className="max-w-3xl mx-auto p-6 text-sm md:text-base leading-relaxed">
          {result?.building && result?.downPayment && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Here’s the cost breakdown for the{" "}
                {result?.selectedPackage?.name}:
              </h2>
              <p>
                Gadgets & Materials: ₦
                {result?.selectedPackage?.price?.toLocaleString()}
              </p>
              <p>
                Workmanship: ₦{result?.workmanship?.toLocaleString()} for{" "}
                {result?.building}
              </p>
              <p>
                Transportation: ₦{result?.transportationCost?.toLocaleString()}
              </p>
              <p className="mt-2 font-semibold">
                Total: ₦{result?.totalCost?.toLocaleString()}
              </p>
              <p>Down Payment: ₦{result?.downPayment?.toLocaleString()}</p>
              <p>
                Chargeable Amount: ₦{result?.chargeableAmount?.toLocaleString()}
              </p>
              <h3 className="mt-6 font-semibold">Repayment Options</h3>
              <ul className="list-disc ml-5">
                {result?.repayment &&
                  Object.entries(result?.repayment).map(
                    ([months, value]: [string, any]) => (
                      <li key={months}>
                        {months}: Monthly ₦{value.monthly?.toLocaleString()} /
                        Weekly ₦{value.weekly?.toLocaleString()}
                      </li>
                    )
                  )}
              </ul>
            </div>
          )}
          <h4 className="mt-6 font-bold">
            _*Detailed Breakdown of the system&apos;s capacity*_
          </h4>
          <h5 className="mt-2 font-semibold">
            {result?.selectedPackage?.name}
          </h5>
          <p className="italic">_*Components:*_</p>
          <ul className="list-disc ml-5">
            <li>Inverter: {result?.selectedPackage.name}</li>
            <li>Battery: {result?.selectedPackageBattery}</li>
            <li>Solar Panel Array: {result?.selectedPackagePanelArray}</li>
          </ul>
          {aiDescription && (
            <div className="mt-4" style={{ whiteSpace: "pre-line" }}>
              <ReactMarkdown>{stripCodeFences(aiDescription)}</ReactMarkdown>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p className=" font-bold text-center text-gray-500 mb-12">
            Your Recommended Solar System
          </p>
          <h2 className="text-gray-900 font-bold text-4xl sm:text-6xl">
            {result?.load}kVA Inverter Package
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <img
              src="/lovable-uploads/5809875a-fd6e-4ea6-b229-2c82eb67a362.png"
              alt="Solar system setup with inverter, battery and solar panel"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 border-2 border-gray-600 rounded-full"></div>
                </div>
                <div>
                  <div>
                    <h4 className="mt-6 font-bold">
                      _*Detailed Breakdown of the system&apos;s capacity*_
                    </h4>
                    <h5 className="mt-2 font-semibold">
                      {result?.selectedPackage?.name}
                    </h5>
                    <p className="italic">_*Components:*_</p>
                    <ul className="list-disc ml-5">
                      <li>Inverter: {result?.selectedPackage.name}</li>
                      <li>Battery: {result?.selectedPackageBattery}</li>
                      <li>
                        Solar Panel Array: {result?.selectedPackagePanelArray}
                      </li>
                    </ul>
                    {aiDescription && (
                      <div className="mt-4" style={{ whiteSpace: "pre-line" }}>
                        <ReactMarkdown>
                          {stripCodeFences(aiDescription)}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold">
                  Share with us to get a Discount
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="text-blue-500 hover:text-blue-600 px-8 py-3 rounded-md font-semibold">
                  <Link className="capitalize" href="/interest-calculator">
                    pay small-small for this package
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
