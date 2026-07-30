import "../globals.css";
import { Poppins } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.variable} font-sans antialiased`}>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
