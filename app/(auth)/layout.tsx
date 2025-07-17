import { ThemeProvider } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";
import { Toaster } from "sonner";
import { Inter, Mulish, Urbanist } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const layout = ({ children }: { children: React.ReactNode }) => {
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
          <main>
            <div className="bg-muted min-h-screen w-full">
              <div className=" min-h-screen w-full md:max-w-3xl mx-auto flex items-center justify-center p-2 ">
                {children}
              </div>
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default layout;
