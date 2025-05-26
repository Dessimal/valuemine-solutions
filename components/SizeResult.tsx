import React from "react";
import { useParams, useSearchParams } from "next/navigation";

const SizeResult = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  console.log("searchParams", searchParams);

  console.log(params.type);

  return <div>SizeResult</div>;
};

export default SizeResult;
