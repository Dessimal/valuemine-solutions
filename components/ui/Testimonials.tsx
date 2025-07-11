import React, { useRef } from "react";
import { motion } from "@/lib/framerMotion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Chuka O.",
      position: "Homeowner, Lagos",
      text: "Valuemine changed the way my family lives. No more noise from generators, no more outages. We've been able to save significantly on fuel costs too.",
      rating: 5,
    },
    {
      name: "Amina B.",
      position: "Business Owner, Abuja",
      text: "Their team is professional and responsive. The installation was quick, clean, and the system has been working flawlessly. Great value for money!",
      rating: 5,
    },
    {
      name: "Emmanuel K.",
      position: "Hospital Director, Port Harcourt",
      text: "Our medical facility requires constant power. Valuemine designed a system that has never failed us. The reliable power supply has literally saved lives.",
      rating: 5,
    },
    {
      name: "Ngozi F.",
      position: "School Principal, Enugu",
      text: "Since installing solar panels with Valuemine, our school has dramatically reduced operational costs while providing a comfortable learning environment for students.",
      rating: 4,
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Approximate width of a card + margin

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Happy <span className="gradient-text">Customers</span>, Powered
            Lives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos; just take our word for it. Here&apos;s what our clients
            have to say about their Valuemine experience.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-end gap-2 mb-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll("left")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll("right")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-xl shadow-md border border-gray-100 min-w-[300px] max-w-[350px] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>

                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="bg-gradient-bg text-white p-6 rounded-xl shadow-md min-w-[300px] max-w-[350px] flex-shrink-0 flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonials.length * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}>
              <h3 className="text-xl font-semibold mb-4">
                Join Our Satisfied Customers
              </h3>
              <p className="mb-6">
                Experience the Valuemine difference and never worry about power
                again.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-orange">
                See More Installations
              </Button>
            </motion.div>
          </div>
        </div>

        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </section>
  );
};
