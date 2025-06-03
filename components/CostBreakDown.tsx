import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import Spinner from "./ui/Spinner";
import GeminiResultCard from "./GeminiResultCard";
import ShareButton from "./ShareButton";

export default function CostBreakdown({
  result,
  aiDescription,
  loading,
  getShareText,
}: {
  result: any;
  aiDescription: any;
  loading: boolean;
  getShareText: (result: any) => string;
}) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 p-4 sm:p-6">
      <div className="w-full">
        <img
          src={result?.selectedPackagePicture}
          height={500}
          width={500}
          alt="solar package flyer"
          className="object-cover w-full"
        />
      </div>
      <div ref={textRef} className="relative">
        <div className="flex items-center justify-between my-6">
          <h2 className="text-xl md:text-2xl text-gray-900 font-semibold">
            Here’s the cost breakdown for our {result?.selectedPackage?.name}{" "}
            package:
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
        <p>Transportation: ₦{result?.transportationCost?.toLocaleString()}</p>
        <p className="mt-2 font-semibold">
          Total: ₦{result?.totalCost?.toLocaleString()}
        </p>
        <p>Down Payment: ₦{result?.downPayment?.toLocaleString()}</p>
        <p>Chargeable Amount: ₦{result?.chargeableAmount?.toLocaleString()}</p>
        <h3 className="mt-6 font-semibold">Repayment Options</h3>
        <ul className="list-disc ml-5">
          {result?.repayment &&
            Object.entries(result?.repayment).map(
              ([months, value]: [string, any]) => (
                <li key={months}>
                  {months}: Monthly ₦{value.monthly?.toLocaleString()} / Weekly
                  ₦{value.weekly?.toLocaleString()}
                </li>
              )
            )}
        </ul>
        <h4 className="mt-6 font-bold">
          *Detailed Breakdown of the system&apos;s capacity*
        </h4>
        <h5 className="mt-2 font-semibold">{result?.selectedPackage?.name}</h5>
        <p className="italic">_*Components:*_</p>
        <ul className="list-disc ml-5">
          <li>Inverter: {result?.selectedPackage.name}</li>
          <li>Battery: {result?.selectedPackageBattery}</li>
          <li>Solar Panel Array: {result?.selectedPackagePanelArray}</li>
        </ul>
        {loading ? (
          <div>
            Loading ...
            <Spinner />
          </div>
        ) : (
          aiDescription && (
            <div className="mt-4">
              <GeminiResultCard data={aiDescription} />
            </div>
          )
        )}
      </div>
      <div className="my-6 flex flex-col items-center justify-center">
        <ShareButton textToShare={getShareText(result)} />
      </div>
    </div>
  );
}
