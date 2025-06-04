// import PackageCard from "./packageCard";

// export default function OtherPackagesSection({
//   otherPackages,
//   handleSelect,
// }: {
//   otherPackages: any[];
//   handleSelect: (pkg: any) => void;
// }) {
//   return (
//     <div className="mt-16">
//       <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         Explore other Solar Packages
//       </h3>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {otherPackages.map((pkg) => (
//           <PackageCard
//             key={pkg.name}
//             name={pkg.name}
//             price={pkg.price}
//             battery={pkg.battery}
//             panelArray={pkg.panelArray}
//             picture={pkg.picture}
//             description={pkg.description}
//             onSelect={() => handleSelect(pkg)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import { Carousel, Card } from "./Carousel";

import { useEffect, useState } from "react";
import GeminiResultCard from "./GeminiResultCard";

export default function OtherPackagesSection({
  otherPackages,
  // handleSelect,
  aiDescriptions,
}) {
  const carouselItems = otherPackages.map((pkg, idx) => (
    <Card
      key={pkg.name}
      card={{
        src: pkg.picture,
        title: pkg.name,
        category: pkg.category || "Solar Package",
        content: <GeminiResultCard data={aiDescriptions[pkg.name]} />,
      }}
      index={idx}
      // onSelect={handleSelect(pkg)}
    />
  ));

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Explore other Solar/Inverter Packages
      </h3>
      <Carousel items={carouselItems} />
    </div>
  );
}
