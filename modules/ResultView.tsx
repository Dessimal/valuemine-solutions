"use client";

import React, { useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ResultComponent from "@/components/ResultComponent";
import { Button } from "@/components/ui/button";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";
import { useCalculatorStore } from "@/app/store/calculator";

export const ResultView = () => {
  const [loggingout, setLoggingout] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  // Get values from Zustand store
  // const {
  //   load,
  //   selectedPackage,
  //   packagePrice,
  //   selectedPackageBattery,
  //   selectedPackagePanelArray,
  //   selectedPackagePicture,
  // } = useCalculatorStore();

  // const result = useMemo(
  //   () => ({
  //     load,
  //     selectedPackage,
  //     packagePrice,
  //     selectedPackageBattery,
  //     selectedPackagePanelArray,
  //     selectedPackagePicture,
  //   }),
  //   [
  //     load,
  //     selectedPackage,
  //     packagePrice,
  //     selectedPackageBattery,
  //     selectedPackagePanelArray,
  //     selectedPackagePicture,
  //   ]
  // );

  // console.log(result);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          setLoggingout(true); // redirect to login page
        },
        onSuccess: () => {
          startTransition(() => {
            router.push("/sign-in");
            toast("You just signed out");
            setLoggingout(false);
          });
        },
      },
    });
  };

  return (
    <main className="space-y-6 w-screen">
      <div className="w-full">
        <Button onClick={handleSignOut}>
          {isPending ? "signing out..." : "Log out"}
        </Button>
      </div>
      <div className="mx-auto max-w-7xl">
        <ResultComponent />
      </div>
    </main>
  );
};
