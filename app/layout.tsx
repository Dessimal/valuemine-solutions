import type { Metadata } from "next";
import { Inter, Mulish, Urbanist } from "next/font/google";
import "./globals.css";
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
  metadataBase: new URL('https://www.valueminesolutions.com.ng'),
  title: {
    default: 'Valuemine Solar Solutions | Solar & Inverter Installation Ibadan & Lagos',
    template: '%s | Valuemine Solar Solutions',
  },
  description:
    'Top-rated solar engineering firm in Ibadan & Lagos. Certified hybrid solar installation, lithium battery upgrades, & inverter repairs in Ologuneru, Bodija, Dugbe, & Lekki.',
  keywords: [
    'Solar installation Ologuneru',
    'Best solar company in Ibadan',
    'Inverter Sales Ibadan',
    'Inverter Installation Ibadan',
    'Solar system cost Nigeria',
    'Lithium battery upgrade Ibadan',
    'Commercial solar power Oyo State',
  ],
  authors: [{ name: 'Valuemine Solar Solutions' }],
  creator: 'Valuemine Solar Solutions',
  publisher: 'Valuemine Solar Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.valueminesolutions.com.ng',
  },
  openGraph: {
    title: 'Valuemine Solar Solutions | Solar & Inverter Installation Ibadan',
    description:
      'Eliminate grid blackouts and fuel costs with high-efficiency hybrid solar systems in Ibadan & Lagos.',
    url: 'https://www.valueminesolutions.com.ng',
    siteName: 'Valuemine Solar Solutions',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Valuemine Solar Solutions Ibadan',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
