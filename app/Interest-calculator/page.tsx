"use client";

import { CalculatorForm } from "@/components/ui/CalculatorForm";
import { ArrowLeftToLine } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const InterestCalculatorPage = () => {
  const router = useRouter();

  return (
    <main className="bg-gray-50 min-h-screen">
      <div>
        <button
          onClick={() => router.back()}
          className="p-4 text-gray-600 hover:text-gray-900">
          <ArrowLeftToLine className="w-6 h-6" />
          <span className="sr-only">Go back</span>
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CalculatorForm />
      </div>
    </main>
  );
};
