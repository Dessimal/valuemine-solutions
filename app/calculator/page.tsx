import SizeCalculator from "@/components/ui/SizeCalculator";
import React from "react";

const page = () => {
  return (
    <main className="justify-center pt-16 sm:pt-20 p-4 sm:px-10 sm:px-14 min-h-screen bg-gradient-to-bl from-yellow-600 to-orange-400">
      <div className="w-full bg-white shadow-lg rounded-lg p-4 sm:p-8 mx-auto grid items-center justify-center">
        <SizeCalculator />
      </div>
    </main>
  );
};

export default page;
