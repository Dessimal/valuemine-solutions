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

import Image from "next/image";
import { Check, CircleCheckBig, Copy, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import GeminiResultCard from "./GeminiResultCard";
import ShareButton from "./ShareButton";
import { Button } from "./ui/button";
import Link from "next/link";
import Spinner from "./ui/Spinner";
import { useCalculatorStore } from "@/app/store/calculator";
import Modal from "./Modal";
import { FaWhatsapp } from "react-icons/fa";

export default function RecommendedPackage({
  aiDescription,
  loading,
  getShareText,
}: {
  aiDescription: any;
  loading: boolean;
  getShareText: (result: any) => string;
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
    const phoneNumber = "2349020532639";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      getShareText
    )}`;
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

  const bodyContent =
    modalState === "form" ? (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full mb-3 p-2 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border w-full mb-3 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-500">
          <div className="w-full flex justify-center items-center gap-6">
            <FaWhatsapp size={32} />
            <span className="font-bold capitalize">
              Give me the list of packages
            </span>
          </div>
        </button>
      </form>
    ) : modalState === "submitting" ? (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 border-solid" />
        <p className="text-center text-lg text-gray-700">Submitting...</p>
      </div>
    ) : modalState === "success" ? (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <CircleCheckBig className="text-green-600" size={64} />
        <div>
          <p className="text-center text-xl font-bold uppercase">SUCCESS!</p>
          <p className="text-center text-sm">
            Thank you for sharing your contact with us. You will be redirected
            to WhatsApp in <span className="font-bold">{countdown}</span> second
            {countdown !== 1 ? "s" : ""}.
          </p>
        </div>
      </div>
    ) : (
      // Error state
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
        <XCircle className="text-red-600" size={64} />
        <p className="text-xl font-bold text-red-700">Submission Failed</p>
        <p className="text-gray-600">
          Something went wrong. Please check your network and try again.
        </p>
        <button
          onClick={() => setModalState("form")}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 animate-pulse">
          Try Again
        </button>
      </div>
    );

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
      <h2 className="font-bold text-4xl sm:text-6xl w-full text-center">
        {selectedPackage?.name
          ? `${selectedPackage.name} Inverter Package`
          : "No Package Selected"}
      </h2>
      <div className="rounded-md shadow-sm overflow-hidden mb-8 p-4 sm:p-6">
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
        <div className="w-full flex flex-col items-center m-0 justify-center ">
          <button
            onClick={() => {
              setModalState("form");
              setIsOpen(true);
            }}
            className="relative shadow-2xl z-50 my-20 px-6 py-8 w-full max-w-[800px] shadow-lg rounded-4xl bg-orange-600 hover:bg-sky-950 hover:border-2 hover:border-white transition-color linear duration-300">
            <span className="text-2xl text-white font-bold">
              Share Package With Us
            </span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={modalState === "form" ? "You're Just One Step Away!" : ""}
        subtitle={
          modalState === "form"
            ? "Kindly enter your contact details so we can easily get in touch with you."
            : ""
        }
        body={bodyContent}
      />
    </div>
  );
}
