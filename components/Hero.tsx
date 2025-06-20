import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MainHeroImage } from "@/app/constants";
import { HeroImage } from "../app/constants";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-screen min-h-screen ">
      <div className="container md:py-16 py-32 px-4 flex flex-col md:flex-row md:items-center justify-center gap-12 h-full mx-auto hero-container">
        <div className="flex flex-1/2 flex-col gap-8 border-blue-800">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-1/2 flex-col gap-1">
            <h1 className="text-5xl md:text-9xl font-extrabold tracking-tight">
              Say Goodbye to Nepa Wahala
            </h1>
            <p className="max-w-2xs ">
              {" "}
              Discover sustainable, reliable power solutions for your home and
              business. Join the solar revolution today!
            </p>
          </motion.div>
          <div className="flex-1/2">
            <Button
              className="gradient-bg"
              onClick={() => router.push("/calculator")}>
              Try Solar Calculator
              <ArrowRight />
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1/2 p-6 rounded-md">
          <div className="relative h-80 w-80 md:size-[960px]  ring ring-gray-800 rounded-lg overflow-hidden shadow-lg ">
            <Image
              src={MainHeroImage}
              className="object-cover       
              "
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
