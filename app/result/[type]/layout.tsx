import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { VideoTestimonial } from "@/components/VideoTestimonials";
import React from "react";

const layout = () => {
  return (
    <html lang="en">
      <body className={` ${urbanist.variable} antialiased dark`}>
        <main>{children}</main>
        <VideoTestimonials />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
};

export default layout;
