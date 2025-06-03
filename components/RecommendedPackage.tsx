import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import GeminiResultCard from "./GeminiResultCard";
import ShareButton from "./ShareButton";
import { Button } from "./ui/button";
import Link from "next/link";
import Spinner from "./ui/Spinner";

export default function RecommendedPackage({
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
          <div className="flex items-center justify-between my-6">
            <h2 className="text-xl md:text-2xl text-gray-900 font-semibold">
              Detailed Breakdown of the system&apos;s capacity
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
          <h5 className="mt-2 font-semibold">
            {result?.selectedPackage?.name}
          </h5>
          <p className="italic">_*Components:*_</p>
          <ul className="list-disc ml-5">
            <li>Inverter: {result?.selectedPackage.name}</li>
            <li>Battery: {result?.selectedPackageBattery}</li>
            <li>Solar Panel Array: {result?.selectedPackagePanelArray}</li>
          </ul>
          <div>
            {loading ? (
              <Spinner />
            ) : (
              aiDescription && (
                <div className="mt-4">
                  <GeminiResultCard data={aiDescription} />
                </div>
              )
            )}
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
  );
}
