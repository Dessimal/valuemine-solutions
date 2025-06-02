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
import Spinner from "@/components/ui/Spinner";
import { LoaderCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const SignInView = () => {
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const formSchema = z
    .object({
      name: z.string().min(1, "Name is required"),
      email: z
        .string()
        .email("Invalid email address")
        .min(1, "Email is required"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z
        .string()
        .min(6, "Confirm Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (data: FormData) => {
    try {
      await authClient.signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          callbackURL: callbackUrl,
        },
        {
          onRequest: () => {
            //show loading
            setLoading(true);
          },
          onSuccess: () => {
            //redirect to the dashboard or sign in page
            toast("Sign Up Successful!");
            setLoading(false);
          },
          onError: () => {
            // display the error message
            toast("Something went wrong");
            setLoading(false);
          },
        }
      );
    } catch (error) {
      console.error("Sign up failed:", error);
      toast("Sign up failed. Please check your credentials and try again.", {
        variant: "destructive",
      });
    }
  };

  const handleSocialSignIn = async () => {
    setSocialLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (error) {
      console.error("Social sign in failed:", error);
      toast("Social sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-slate-600">
            Let&apos;s Get Started!
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm text-center">
            Please enter your login details to sign in
          </CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                className="grid w-full gap-6"
                onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="John Doe"
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                          disabled={loading}
                          placeholder="johndoe@gmail.com"
                        />
                      </FormControl>
                      <FormMessage />
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
                          disabled={loading}
                          placeholder="********"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="********"
                        />
                      </FormControl>
                      <FormMessage />
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
                    "Sign Up"
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
              Already have an account?{" "}
              <Link
                className="underline text-slate-900 font-bold"
                href="/sign-in">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignInView;
