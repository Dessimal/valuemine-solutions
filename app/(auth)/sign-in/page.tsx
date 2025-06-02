import SignInView from "@/modules/auth/SignInView";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <SignInView />
      </Suspense>
    </div>
  );
};

export default page;
