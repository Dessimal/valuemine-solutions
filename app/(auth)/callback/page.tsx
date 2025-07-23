"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { authClient } from "@/app/lib/auth-client";

export default function AuthCallbackPage() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const [phone, setPhone] = useState("");
  const [hasSentData, setHasSentData] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const callbackUrl = useCalculatorStore((state) => state.callbackUrl);

  useEffect(() => {
    if (!session || hasSentData) return;

    const name = session.user?.name;
    const phoneFromSession = session.user?.phone;

    if (name && phoneFromSession) {
      // send directly
      sendData(name, phoneFromSession);
    } else {
      setShowPrompt(true);
    }
  }, [session]);

  const sendData = async (name: string, phone: string) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby2eVwPtRxDwwcIHJqbfgQJ-7MOl70YcFpfC-hLsZhUtiHDbCYp6oY5HJy5W6k-8SCJ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      toast("Thanks! Your contact was saved.");
      setHasSentData(true);
      router.push(callbackUrl); // continue to final destination
    } catch (err) {
      console.error("Error saving contact:", err);
      toast.error("Failed to save contact.");
    }
  };

  if (isPending) return <p>Loading session...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {showPrompt && session?.user?.name && (
        <>
          <p className="text-muted-foreground text-sm">
            Welcome, {session.user.name.split(" ")[0]}! 👋 Please enter your
            phone number so we can save your contact.
          </p>
          <Input
            type="tel"
            placeholder="e.g. 08012345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            className="w-full"
            onClick={() => {
              if (!phone.trim()) {
                toast.error("Phone number is required.");
                return;
              }
              sendData(session.user.name, phone);
            }}>
            Continue
          </Button>
        </>
      )}
    </div>
  );
}
