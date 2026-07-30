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
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
}
