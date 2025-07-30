import "../globals.css";
import { Inter, Mulish, Urbanist } from "next/font/google";

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

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` ${urbanist.variable} antialiased`}>
      <Navbar />
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
}
