import React, { useTransition, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MainHeroImage } from "@/app/constants";
import { HeroImage } from "../app/constants";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "@/lib/framerMotion";

const Hero = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadCalculator = () => {
    setIsLoading(true);
    router.push("/calculator");
  };
  return (
    <section className="w-full">
      <div className="container max-w-5xl py-16  flex flex-col md:flex-row  justify-center gap-12 h-full mx-auto hero-container">
        <div className="flex justify-center flex-1/2 flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-1">
            <h1 className="text-5xl lg:text-9xl font-extrabold tracking-tight max-w-2/3">
              Say Goodbye to NEPA Wahala
            </h1>
            <p className="max-w-2xs ">
              {" "}
              Discover sustainable, reliable power solutions for your home and
              business. Join the solar revolution today!
            </p>
          </motion.div>

          {/* CTA BUTTON */}
          <div className="">
            <Button
              disabled={isLoading}
              className="gradient-bg"
              onClick={handleLoadCalculator}>
              {isLoading ? (
                <>Loading Calculator...</>
              ) : (
                <>Try Solar Calculator</>
              )}
              <ArrowRight />
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex-col lg-flex-row flex-wrap   gap-4 text-sm">
            <span className="mr-4 flex items-center gap-2">
              <CheckCircle color="orange" size={18} />
              <span>Zero Blackouts</span>
            </span>
            <span className="mr-4 flex items-center gap-2">
              <CheckCircle color="orange" size={18} />
              <span>No more Fuel Queues</span>
            </span>
            <span className="mr-4 flex items-center gap-2">
              <CheckCircle color="orange" size={18} />
              <span>Silent, Clean Power</span>
            </span>
          </div>
        </div>

        <div className="flex-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1/2 rounded-md">
            <div className="relative h-[480px]  w-full  lg:w-[560px]  ring ring-gray-800 rounded-lg overflow-hidden shadow-lg ">
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
      </div>
    </section>
  );
};

export default Hero;
