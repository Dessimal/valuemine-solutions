import { ResultView } from "@/modules/ResultView";
import { auth } from "@/utils/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ResultPage = async ({ params, searchParams }: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const currentPath = `/result/${params.type}${
    searchParams?.data
      ? `?data=${encodeURIComponent(searchParams.data as string)}`
      : ""
  }`;

  console.log("session", session);
  if (!session) {
    redirect(`/sign-in?callbackUrl=${encodeURIComponent(currentPath)}`);
  }

  return (
    <div>
      {session && (
        <div className="flex justify-between items-center w-full gap-4">
          <div>Hello</div>
          <div>Welcome, {session?.user?.name}</div>
        </div>
      )}

      <ResultView />
    </div>
  );
};

export default ResultPage;
