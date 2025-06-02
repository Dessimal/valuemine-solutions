"use client";

import React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ResultComponent from "@/components/ResultComponent";
import { Button } from "@/components/ui/button";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";

export const ResultView = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const router = useRouter();

  console.log("searchParams", searchParams);

  console.log(params.type);

  if (!params.type) {
    return <div>No type specified in URL.</div>;
  }

  const dataString = searchParams.get("data");
  const dataObject = JSON.parse(decodeURIComponent(dataString));

  // const result = useMemo(() => {
  //   if (!dataString) return null;
  //   try {
  //     if (params.type === "interest") {
  //       const interestResult = dataObject;
  //       return interestResult;
  //     } else if (params.type === "size") {
  //       const sizeResult = dataObject;
  //       return sizeResult;
  //     }
  //   } catch (error) {
  //     console.error("Error parsing dataParam:", error);
  //     return null;
  //   }
  // }, [dataString, params]);

  const result = dataObject;

  console.log(dataString);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          toast("You just signed out"); // redirect to login page
        },
      },
    });
  };

  return (
    <main className="space-y-6">
      <div className="w-full">
        <Button onClick={handleSignOut}>Log out</Button>
      </div>
      <ResultComponent result={result} />
    </main>
  );
};
