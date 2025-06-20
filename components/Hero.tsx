import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MainHeroImage } from "@/app/constants";
import { HeroImage } from "../app/constants";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-screen min-h-screen ">
      <div className="container md:py-16 py-32 px-4 flex flex-col md:flex-row md:items-center justify-center gap-12 border-2 border-red h-full mx-auto hero-container">
        <div className="flex flex-1/2 flex-col gap-8 border-blue-800">
          <div className="flex flex-1/2 flex-col gap-1">
            <h1 className="text-5xl md:text-9xl font-extrabold tracking-tight">
              Say Goodbye to Nepa Wahala
            </h1>
            <p className="max-w-2xs ">
              {" "}
              Discover sustainable, reliable power solutions for your home and
              business. Join the solar revolution today!
            </p>
          </div>
          <div className="flex-1/2">
            <Button
              className="gradient-bg"
              onClick={() => router.push("/calculator")}>
              Try Solar Calculator
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="relative flex-1/2 h-full min-h-[560px] min-w-[400px] w-full p-7 border-2 border-green-500 overflow-hidden rounded-md">
          <div className="relative h-full w-full rounded-md shadow-lg ">
            <Image
              src={MainHeroImage}
              className="object-cover"
              fill
              alt="happy family using solar"
            />
          </div>
          {/* <Image
            src={HeroImage}
            height={200}
            width={200}
            className="rounded-full ring ring-yellow-500 shadow-md absolute -top-6 -left-6"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
