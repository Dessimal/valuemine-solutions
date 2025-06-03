import PackageCard from "./packageCard";

export default function OtherPackagesSection({
  otherPackages,
  handleSelect,
}: {
  otherPackages: any[];
  handleSelect: (pkg: any) => void;
}) {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Explore other Solar Packages
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {otherPackages.map((pkg) => (
          <PackageCard
            key={pkg.name}
            name={pkg.name}
            price={pkg.price}
            battery={pkg.battery}
            panelArray={pkg.panelArray}
            picture={pkg.picture}
            description={pkg.description}
            onSelect={() => handleSelect(pkg)}
          />
        ))}
      </div>
    </div>
  );
}
