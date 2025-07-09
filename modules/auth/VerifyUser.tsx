"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/app/lib/auth-client";

import { useCalculatorStore } from "@/app/store/calculator";
import { toast } from "sonner";

// You may want to make this a Client Component, not an async function
export function VerifyUser() {
  const callbackUrl = useCalculatorStore((state) => state.callbackUrl);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const email = useCalculatorStore((state) => state.email);

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await authClient.signIn.emailOtp(
        {
          email, // Replace with actual user email
          otp,
        },
        {
          onRequest: () => {
            setLoading(true);
          },
          onSuccess: () => {
            toast("OTP verified!");
            setLoading(false);
            setSuccess(true);
            router.push(callbackUrl || "/");
          },
          onError: () => {
            toast("Something went wrong, please try again");
            setLoading(false);
          },
        }
      );
    } catch (err: unknown) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="w-full spacey-4">
        <h1 className="text-2xl text-center dark:text-white">Verify Email</h1>
        <p>Please enter the verification code sent to your email.</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={otp}
          onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <button
        type="submit"
        disabled={otp.length !== 6 || loading}
        className="mt-4 px-4 py-2 hover:opacity-70 gradient-bg rounded-md mt-10 w-full">
        {loading ? "Verifying..." : "Verify"}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-600 mt-2">OTP Verified!</div>}
    </form>
  );
}
