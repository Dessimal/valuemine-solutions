"use client";

import { FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import React, { useState } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

const SignInView = () => {
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const formSchema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // Only include callbackUrl if it's not "/" and is truthy
  const signUpHref =
    callbackUrl && callbackUrl !== "/"
      ? `/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`
      : "/sign-up";

  const onSubmit = async (data: FormData) => {
    try {
      await authClient.signIn.email(
        {
          email: data.email,
          password: data.password,
          callbackURL: callbackUrl,
        },
        {
          onRequest: () => {
            setLoading(true);
          },
          onSucces: () => {
            toast("Signed in successfully!");
            setLoading(false);
            router.push(callbackUrl);
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
        callbackURL: callbackUrl,
      });
    } catch (error) {
      console.error("Social sign in failed:", error);
      toast("Social sign in failed. Please try again.");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-slate-600">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-gray-500 text-sm text-center">
            Please enter your login details to sign in
          </CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                className="grid w-full gap-6"
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
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="********"
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
          <CardFooter className="grid gap-4 w-full">
            <p className="text-gray-500 text-sm text-center">
              or Continue with
            </p>
            <Button
              onClick={handleSocialSignIn}
              variant="outline"
              className="w-full">
              <span className="inline-flex items-center gap-2">
                {" "}
                <FaGoogle />
                {socialLoading ? (
                  <>
                    Signing in with Google...
                    <LoaderCircle className="animate-spin size-8" />
                  </>
                ) : (
                  "Google"
                )}
              </span>
            </Button>
            <p className="text-sm text-center text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                className="underline text-slate-900 font-bold"
                href={signUpHref}>
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignInView;
