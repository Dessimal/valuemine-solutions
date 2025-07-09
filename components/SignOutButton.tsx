import { authClient } from "@/app/lib/auth-client";
import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Span } from "next/dist/trace";

const SignOutButton = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const handleSignOut = () => {
    startTransition(async () => {
      try {
        console.log("Signing out...");
        await authClient.signOut();
        toast("Signed out successfully");
        router.push("/sign-in");
      } catch (err) {
        toast("Sign out failed");
        console.error("Sign out error:", err);
      }
    });
  };

  return (
    <Button
      className="hover:opacity-80 z-50"
      disabled={isPending}
      onClick={handleSignOut}>
      {isPending ? <span>Signing out...</span> : <span>Sign out</span>}
    </Button>
  );
};

export default SignOutButton;
