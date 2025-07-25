import "../globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto">{children}</div>
    </>
  );
}
