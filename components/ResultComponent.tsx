"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";
import { ArrowLeftToLine, Check, Copy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Spinner from "./ui/Spinner";
import ShareButton from "./ShareButton";

export default function ResultComponent({ result }) {
  const params = useParams();

  const router = useRouter();

  const [aiDescription, setAIDescription] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

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

      setAIDescription(data.text);
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

  const textRef = useRef<HTMLDivElement>(null);

  function getShareText(result) {
    return `
  Hello Valuemine, Please I am interested in the solar package below:
  
  Solar Package: ${result?.selectedPackage?.name}
  Battery: ${result?.selectedPackageBattery}
  Panel Array: ${result?.selectedPackagePanelArray}
  Gadgets & Materials: ₦${result?.selectedPackage?.price?.toLocaleString()}
  Workmanship: ₦${result?.workmanship?.toLocaleString()} for ${result?.building}
  Transportation: ₦${result?.transportationCost?.toLocaleString()}
  Total: ₦${result?.totalCost?.toLocaleString()}
  ${result?.chargeableAmount?.toLocaleString()}
  ...
  `;
  }

  // Then in your JSX:
  <ShareButton textToShare={getShareText(result)} />;

  const handleCopy = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

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
      <div className="max-w-7xl border-2 px-1 sm:px-4 lg:px-8 py-12">
        {interestCalculatorEnabled ? (
          <div className="w-full border-2 text-sm md:text-base leading-relaxed">
            {result?.building && result?.downPayment && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 p-4 sm:p-6">
                <div className="w-full">
                  <Image
                    src={result?.selectedPackagePicture}
                    height={500}
                    width={500}
                    alt="solar package flyer"
                    className="object-cover w-full "
                  />
                </div>
                <div ref={textRef} className="relative">
                  <div className="flex items-center justify-between my-6">
                    <h2 className="text-xl md:text-2xl text-gray-900 font-semibold">
                      Here’s the cost breakdown for our{" "}
                      {result?.selectedPackage?.name} package:
                    </h2>
                    <button onClick={handleCopy} className=" cursor-pointer">
                      {copied ? (
                        <span className="ml-2 text-green-600 inline-flex gap-1 items-center">
                          <Check className="inline-block" />
                          Copied!
                        </span>
                      ) : (
                        <span className="ml-2 text-gray-600 inline-flex gap-1 items-center">
                          <Copy className="inline-block" />
                          Copy
                        </span>
                      )}
                    </button>
                  </div>
                  <p>
                    Gadgets & Materials: ₦
                    {result?.selectedPackage?.price?.toLocaleString()}
                  </p>
                  <p>
                    Workmanship: ₦{result?.workmanship?.toLocaleString()} for{" "}
                    {result?.building}
                  </p>
                  <p>
                    Transportation: ₦
                    {result?.transportationCost?.toLocaleString()}
                  </p>
                  <p className="mt-2 font-semibold">
                    Total: ₦{result?.totalCost?.toLocaleString()}
                  </p>
                  <p>Down Payment: ₦{result?.downPayment?.toLocaleString()}</p>
                  <p>
                    Chargeable Amount: ₦
                    {result?.chargeableAmount?.toLocaleString()}
                  </p>
                  <h3 className="mt-6 font-semibold">Repayment Options</h3>
                  <ul className="list-disc ml-5">
                    {result?.repayment &&
                      Object.entries(result?.repayment).map(
                        ([months, value]: [string, any]) => (
                          <li key={months}>
                            {months}: Monthly ₦{value.monthly?.toLocaleString()}{" "}
                            / Weekly ₦{value.weekly?.toLocaleString()}
                          </li>
                        )
                      )}
                  </ul>
                  <h4 className="mt-6 font-bold">
                    *Detailed Breakdown of the system&apos;s capacity*
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
                  {loading ? (
                    <div>
                      Loading ...
                      <Spinner />
                    </div>
                  ) : (
                    aiDescription && (
                      <div className="mt-4" style={{ whiteSpace: "pre-line" }}>
                        <ReactMarkdown>
                          {stripCodeFences(aiDescription)}
                        </ReactMarkdown>
                      </div>
                    )
                  )}
                </div>
                <div className="my-6 flex flex-col items-center justify-center">
                  <ShareButton textToShare={getShareText(result)} />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className=" font-bold text-center text-gray-500 mb-12">
              Your Recommended Solar Package
            </p>
            <h2 className="text-gray-900 font-bold text-4xl sm:text-6xl w-full text-center">
              {result?.selectedPackage.name} Inverter Package
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 p-4 sm:p-6">
              <div className="w-full">
                <Image
                  src={result?.selectedPackagePicture}
                  height={1080}
                  width={1080}
                  alt="solar package flyer"
                  className="object-cover w-full"
                />
              </div>
              <div ref={textRef} className="">
                <div className="flex items-center mb-6 ">
                  <div>
                    <div>
                      <div className="flex items-center justify-between my-6">
                        <h2 className="text-xl md:text-2xl text-gray-900 font-semibold">
                          Detailed Breakdown of the system&apos;s capacity
                        </h2>
                        <button
                          onClick={handleCopy}
                          className=" cursor-pointer">
                          {copied ? (
                            <span className="ml-2 text-green-600 inline-flex gap-1 items-center">
                              <Check className="inline-block" />
                              Copied!
                            </span>
                          ) : (
                            <span className="ml-2 text-gray-600 inline-flex gap-1 items-center">
                              <Copy className="inline-block" />
                              Copy
                            </span>
                          )}
                        </button>
                      </div>
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

                      <div>
                        {loading ? (
                          <Spinner />
                        ) : (
                          aiDescription && (
                            <div
                              className="mt-4"
                              style={{ whiteSpace: "pre-line" }}>
                              <ReactMarkdown>
                                {stripCodeFences(aiDescription)}
                              </ReactMarkdown>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShareButton textToShare={getShareText(result)} />
                  <Button
                    asChild
                    variant="ghost"
                    className="text-blue-500 hover:text-blue-600 px-8 py-3 rounded-md font-semibold">
                    <Link className="capitalize" href="/Interest-calculator">
                      pay small-small for this package
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
