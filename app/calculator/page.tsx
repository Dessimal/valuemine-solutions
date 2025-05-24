// app/calculator/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CalculatorPage() {
  const router = useRouter();
  const [load, setLoad] = useState("");

  const handleCalculate = () => {
    // You can do a proper calculation logic here
    const estimatedLoad = load || "2.5kva";
    router.push(`/auth?load=${estimatedLoad}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Solar Load Calculator</h1>
      <input
        type="text"
        placeholder="Enter your load in kVA"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleCalculate}
        className="bg-green-600 text-white px-4 py-2 rounded">
        See Quote
      </button>
    </div>
  );
}
