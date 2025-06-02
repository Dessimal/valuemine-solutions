import SignUpView from "@/modules/auth/SignUpView";
import React, { Suspense } from "react";

const SignUpPage = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpView />
      </Suspense>
    </div>
  );
};

export default SignUpPage;
