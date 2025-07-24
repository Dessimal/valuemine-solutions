"use client";

import { FaGoogle } from "react-icons/fa";
import { Logo } from "@/app/constants";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useSearchParams, useRouter } from "next/navigation";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { EmailTemplate } from "@/components/EmailTemplate";
import { useCalculatorStore } from "@/app/store/calculator";
import Image from "next/image";

export const SignInView = () => {
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const [hasSentData, setHasSentData] = useState(false);
  const [showPhonePrompt, setShowPhonePrompt] = useState(false);
  const { email, setEmail } = useCalculatorStore();

  const formSchema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  const callbackUrl = useCalculatorStore((state) => state.callbackUrl);

  // Only include callbackUrl if it's not "/" and is truthy
  // const signUpHref =
  //   callbackUrl && callbackUrl !== "/"
  //     ? `/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`
  //     : "/sign-up";

  const onSubmit = async (data: FormData) => {
    try {
      await authClient.emailOtp.sendVerificationOtp(
        {
          email: data.email,
          type: "sign-in",
        },
        {
          onRequest: () => {
            setLoading(true);
            setEmail(data.email);
          },
          onSuccess: () => {
            toast("verification email sent!");
            setLoading(false);
            router.push("/verify-user");
          },
          onError: () => {
            toast("Something went wrong, please try again");
            setLoading(false);
          },
        }
      );
    } catch (error) {
      console.error("Sign in failed:", error);
      toast("Sign in failed. Please check your credentials and try again.", {
        variant: "destructive",
      });
    }
  };

  const handleSocialSignIn = async () => {
    setSocialLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/callback",
      });
    } catch (error) {
      console.error("Social sign in failed:", error);
      toast("Social sign in failed. Please try again.");
    }
  };

  return (
    <div>
      <Card className="space-y-2">
        <CardHeader>
          <CardTitle className="text-center text-2xl"><div><div className="flex items-center justify-center mb-8"> <Link href="/" className="flex items-center gap-2">
              <Image
                height={32}
                width={32}
                src={Logo}
                alt="Logo"
                className="logo-shadow"
              />
              <span className={cn("font-bold text-xl")}>Valuemine</span>
            </Link></div><span>Welcome Back!</span></div></CardTitle>
          <CardDescription className=" text-sm text-center">
            Please sign in to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className="grid w-full gap-1"
              onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                type="submit"
                className="gradient-bg mt-10">
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin size-8" />
                    Loading...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="grid gap-6 w-full">
          <div className="w-full text-center relative after:absolute after:w-full after:top-1/2 after:flex after-items-center after:border-border after:border-t after:z-0">
            <span className=" relative text-muted-foreground text-uppercase bg-card px-2 text-sm z-10">
              OR
            </span>
          </div>
          <Button
            onClick={handleSocialSignIn}
            variant="outline"
            className="w-full">
            <span className="inline-flex items-center gap-2">
              {" "}
              {socialLoading ? (
                <>
                  Signing in with Google...
                  <LoaderCircle className="animate-spin size-8" />
                </>
              ) : (
                <>
                  Sign in with Google
                    <span><Image src="/google.png" height= {20} width={20} alt="google logo"
              
                    /></span>
                </>
              )}
            </span>
          </Button>
          {/* <p className="text-sm text-center text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                className="underline text-slate-900 font-bold"
                href={signUpHref}>
                Sign Up
              </Link>
            </p> */}
        </CardFooter>
      </Card>
    </div>
  );
};

// "use client";

// import React, { useState, useEffect } from "react";
// import { FaGoogle } from "react-icons/fa";
// import { useRouter, useSearchParams } from "next/navigation";
// import { LoaderCircle } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// import { authClient } from "@/app/lib/auth-client";

// export const SignInView = () => {
//   const [socialLoading, setSocialLoading] = useState(false);
//   const [hasSentData, setHasSentData] = useState(false);

//   const { data: session } = authClient.useSession();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/";

//   const handleSocialSignIn = async () => {
//     setSocialLoading(true);
//     try {
//       await authClient.signIn.social({
//         provider: "google",
//         callbackURL: callbackUrl,
//       });
//     } catch (error) {
//       console.error("Social sign in failed:", error);
//       toast("Social sign in failed. Please try again.");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <Button
//         onClick={handleSocialSignIn}
//         variant="outline"
//         className="w-full"
//         disabled={socialLoading}>
//         <span className="inline-flex items-center gap-2">
//           <FaGoogle />
//           {socialLoading ? (
//             <>
//               Signing in...
//               <LoaderCircle className="animate-spin size-5" />
//             </>
//           ) : (
//             "Sign in with Google"
//           )}
//         </span>
//       </Button>

//     </div>
//   );
// };
