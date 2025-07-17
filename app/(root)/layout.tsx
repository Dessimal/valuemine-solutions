import type { Metadata } from "next";
import { Inter, Mulish, Urbanist } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Valuemine Solutions",
  description: "Sustainable Solutions, Exceptional Value",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth.api.getSession({
  //   headers: await headers(), // you need to pass the headers object.
  // });

  // if (!session) {
  //   return (
  //     <html lang="en">
  //       <head>
  //         <meta
  //           name="facebook-domain-verification"
  //           content="2ngp53js7du0iszol3bufkogxiznlo"
  //         />
  //       </head>
  //       <body className={` ${urbanist.variable} antialiased dark`}>
  //         <Navbar />
  //         <main>{children}</main>
  //         <Footer />
  //         <Toaster />
  //       </body>
  //     </html>
  //   );
  // }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="facebook-domain-verification"
          content="2ngp53js7du0iszol3bufkogxiznlo"
        />
      </head>
      <body className={` ${urbanist.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>

          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
