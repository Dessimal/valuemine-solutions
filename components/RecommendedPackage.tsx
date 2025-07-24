// import Image from "next/image";
// import { Check, Copy } from "lucide-react";
// import { useRef, useState } from "react";
// import GeminiResultCard from "./GeminiResultCard";
// import ShareButton from "./ShareButton";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import Spinner from "./ui/Spinner";

// export default function RecommendedPackage({
//   aiDescription,
//   loading,
//   getShareText,
// }: {
//   aiDescription: any;
//   loading: boolean;
//   getShareText: (result: any) => string;
// }) {
//   const [copied, setCopied] = useState(false);
//   const textRef = useRef<HTMLDivElement>(null);

//   const handleCopy = () => {
//     if (textRef.current) {
//       navigator.clipboard.writeText(textRef.current.innerText);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   return (
//     <div>
//       <p className=" font-bold text-center mb-12">
//         Here's the Minimum Recommended Solar Package for your Load:
//       </p>
//       <h2 className=" font-bold text-4xl sm:text-6xl w-full text-center">
//         {result?.selectedPackage.name} Inverter Package
//       </h2>
//       <div className="rounded-2xl shadow-lg overflow-hidden mb-8 p-4 sm:p-6">
//         <div className="w-full">
//           <Image
//             src={result?.selectedPackagePicture}
//             height={1080}
//             width={1080}
//             alt="solar package flyer"
//             className="object-cover w-full"
//           />
//         </div>
//         <div ref={textRef} className="">
//           <div className="flex items-center justify-between my-6">
//             <h2 className="text-xl md:text-2xl font-semibold">
//               Detailed Breakdown of the system&apos;s capacity
//             </h2>
//             <button onClick={handleCopy} className=" cursor-pointer">
//               {copied ? (
//                 <span className="ml-2 text-green-600 inline-flex gap-1 items-center">
//                   <Check className="inline-block" />
//                   Copied!
//                 </span>
//               ) : (
//                 <span className="ml-2 inline-flex gap-1 items-center">
//                   <Copy className="inline-block" />
//                   Copy
//                 </span>
//               )}
//             </button>
//           </div>
//           {/* <h5 className="mt-2 font-semibold">
//             {result?.selectedPackage?.name}
//           </h5>
//           <p className="italic">_*Components:*_</p>
//           <ul className="list-disc ml-5">
//             <li>Inverter: {result?.selectedPackage.name}</li>
//             <li>Battery: {result?.selectedPackageBattery}</li>
//             <li>Solar Panel Array: {result?.selectedPackagePanelArray}</li>
//           </ul> */}
//           <div>
//             {loading ? (
//               <Spinner />
//             ) : (
//               aiDescription && (
//                 <div className="mt-4">
//                   <GeminiResultCard data={aiDescription} />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-between">
//           <ShareButton textToShare={getShareText(result)} />
//           <Button
//             asChild
//             variant="outline"
//             className="text-blue-500 hover:text-blue-600 px-8 py-3 rounded-md font-semibold">
//             <Link className="capitalize" href="/Interest-calculator">
//               pay small-small for this package
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Check, CircleCheckBig, Copy, Send, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "@/lib/framerMotion";
import GeminiResultCard from "./GeminiResultCard";
import ShareButton from "./ShareButton";
import { Button } from "./ui/button";
import Link from "next/link";
import { Spinner } from "./ui/Spinner";
import { useCalculatorStore } from "@/app/store/calculator";
import { Modal } from "./Modal";
import { FaWhatsapp } from "react-icons/fa";
import OpenModalButton from "./OpenModalButton";

export function RecommendedPackage({
  aiDescription,
  loading,
  getShareText,
}: {
  aiDescription: any;
  loading: boolean;
  getShareText: () => string;
}) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modalState, setModalState] = useState<
    "form" | "submitting" | "success" | "error"
  >("form");
  const [countdown, setCountdown] = useState(3);

  // Get calculator state directly from Zustand
  const {
    selectedPackage,
    selectedPackageBattery,
    selectedPackagePanelArray,
    selectedPackagePicture,
    // Add more if needed
  } = useCalculatorStore();

  const handleShare = () => {
    console.log("handleShare function called!");
    const phoneNumber = "2349020532639";
    const shareText = getShareText();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      shareText
    )}`;
    console.log("This is the shared text", shareText);
    window.open(url, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading spinner
    setModalState("submitting");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby2eVwPtRxDwwcIHJqbfgQJ-7MOl70YcFpfC-hLsZhUtiHDbCYp6oY5HJy5W6k-8SCJ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Response:", response); // Log the entire response object

      // Change modal body to success state
      setModalState("success");

      // Start countdown
      let seconds = 3;
      setCountdown(seconds);
      const interval = setInterval(() => {
        seconds -= 1;
        setCountdown(seconds);

        if (seconds <= 0) {
          clearInterval(interval);
          handleShare();
        }
      }, 1000);
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

 
  const handleCopy = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Compose a result object for getShareText if needed
  const result = {
    selectedPackage,
    selectedPackageBattery,
    selectedPackagePanelArray,
    selectedPackagePicture,
  };

  return (
    <div>
      <p className="font-bold text-center mb-12">
        Here&apos;s the Minimum Recommended Solar Package for your Load:
      </p>
      <h2 className="font-bold text-2xl md:text-5xl mb-10 w-full text-center">
        {selectedPackage?.name
          ? `${selectedPackage.name} Inverter Package`
          : "No Package Selected"}
      </h2>
      <div className="rounded-md shadow-sm overflow-hidden mb-8 p-4 md:p-10 sm:p-6">
        <div className="w-full">
          {selectedPackagePicture && (
            <Image
              src={selectedPackagePicture}
              height={1080}
              width={1080}
              alt="solar package flyer"
              className="object-cover w-full"
            />
          )}
        </div>
        <div ref={textRef} className="">
          <div className="flex items-center justify-between my-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              Detailed Breakdown of the system&apos;s capacity
            </h2>
            <button onClick={handleCopy} className="cursor-pointer">
              {copied ? (
                <span className="ml-2 text-green-600 inline-flex gap-1 items-center">
                  <Check className="inline-block" />
                  Copied!
                </span>
              ) : (
                <span className="ml-2 inline-flex gap-1 items-center">
                  <Copy className="inline-block" />
                  Copy
                </span>
              )}
            </button>
          </div>
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
        <div className="w-full flex flex-col gap-10 items-center my-20 justify-center ">
          <button
            onClick={handleShare} // Direct user click to open WhatsApp
            className="w-full mt-4 bg-green-600 text-white p-4 rounded flex items-center justify-center gap-2 mx-auto">
            <FaWhatsapp size={24} /> Share with us on WhatsApp
          </button>
        </div>
      </div>

      
    </div>
  );
}
