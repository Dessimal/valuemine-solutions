import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notosans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valuemine Solutions",
  description: "Sustainable Solutions, Exceptional Value",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="2ngp53js7du0iszol3bufkogxiznlo"
        />
      </head>
      <body
        className={`${manrope.variable} ${notosans.variable} antialiased dark`}>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
