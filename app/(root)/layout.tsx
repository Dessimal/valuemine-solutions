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
      <main>{children}</main>
      <Footer />
    </>
  );
}
