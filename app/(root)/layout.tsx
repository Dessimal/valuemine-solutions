import "../globals.css";
import { Poppins, Inter, Mulish, Urbanist } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Added weights here
  variable: "--font-poppins",
});

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` ${poppins.variable} font-sans antialiased`}>
      <Navbar />
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
}
