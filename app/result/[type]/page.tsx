import { ResultView } from "@/modules/ResultView";
import { auth } from "@/utils/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  params: { type: string };
};

const ResultPage = async ({ params }: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const currentPath = `/result/${params.type}`;
  console.log("session", session);
  if (!session) {
    redirect(`/sign-in?callbackUrl=${encodeURIComponent(currentPath)}`);
  }

  return (
    <div>
      {session && (
        <div className="flex justify-between items-center max-w-3xs gap-4">
          <div>Hello</div>
          <div>Welcome, {session?.user?.name}</div>
        </div>
      )}

      <ResultView />
    </div>
  );
};

export default ResultPage;
