"use client";

import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import ResultComponent from "@/components/ResultComponent";

const Result = () => {
  const params = useParams();
  const searchParams = useSearchParams();

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

  return (
    <div>
      <ResultComponent result={result} />
    </div>
  );
};

export default Result;
