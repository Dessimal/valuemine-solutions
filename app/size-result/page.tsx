// app/results/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const load = searchParams.get("load") || "2.5kva";

  const packages = [
    {
      name: "Basic Plan",
      price: "₦400,000",
      features: "1.5kVA + 2 Panels",
      code: "basic",
    },
    {
      name: "Pro Plan",
      price: "₦750,000",
      features: "2.5kVA + 4 Panels",
      code: "pro",
    },
    {
      name: "Premium Plan",
      price: "₦1,200,000",
      features: "3.5kVA + 6 Panels",
      code: "premium",
    },
  ];

  const shareLink = (pkg: any) =>
    `https://wa.me/234XXXXXXXXXX?text=Hello! I'm interested in the ${pkg.name} for ${load} load.`;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Recommended Packages for {load}</h1>
      {packages.map((pkg) => (
        <div key={pkg.code} className="border p-4 rounded shadow">
          <h2 className="text-xl">{pkg.name}</h2>
          <p>{pkg.features}</p>
          <p className="font-semibold">{pkg.price}</p>
          <a
            href={shareLink(pkg)}
            target="_blank"
            className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Share on WhatsApp for Discount
          </a>
        </div>
      ))}
    </div>
  );
}
