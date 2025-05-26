// app/results/page.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SystemRecommendation = () => {
  const searchParams = useSearchParams();
  const load = searchParams.get("load") || "2.5kva";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className=" font-bold text-center text-gray-500 mb-12">
        Your Recommended Solar System
      </p>
      <h2 className="text-gray-900 font-bold text-4xl sm:text-6xl">
        {load}kVA Inverter Package
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
            <h2 className="text-2xl font-bold text-gray-900">
              What Can This System Power?
            </h2>
          </div>

          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              This system is expertly designed to power a medium-sized home with
              an average daily energy consumption of{" "}
              <span className="font-semibold">20 kWh</span>. It features a
              robust <span className="font-semibold">5kW inverter</span>, a
              high-capacity <span className="font-semibold">10kWh battery</span>
              , and an efficient{" "}
              <span className="font-semibold">6kW solar panel array</span>.
            </p>

            <p>
              With this setup, you can comfortably run essential household
              appliances such as refrigerators, comprehensive lighting, and
              various entertainment systems. It's also capable of handling some
              heavier loads, like air conditioning units, for several hours each
              day. The integrated battery storage ensures a continuous power
              supply throughout the night and during overcast days, providing
              you with a reliable and uninterrupted energy source.
            </p>

            <p>
              Furthermore, this solar system is designed with scalability in
              mind. You can easily expand its capacity by adding more solar
              panels or batteries in the future, should your energy requirements
              grow.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Key Benefits:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <span className="font-semibold">Energy Independence:</span>{" "}
                  Reduce reliance on the grid and fluctuating energy prices.
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <span className="font-semibold">Cost Savings:</span> Lower
                  your electricity bills significantly over time.
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <span className="font-semibold">Eco-Friendly:</span> Power
                  your home with clean, renewable energy.
                </span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <span className="font-semibold">Reliable Power:</span> Enjoy
                  uninterrupted power even during outages.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold">
              Get a Detailed Quote
            </Button>
            <Button
              variant="ghost"
              className="text-blue-500 hover:text-blue-600 px-8 py-3 rounded-md font-semibold">
              Learn more about solar systems
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemRecommendation;
