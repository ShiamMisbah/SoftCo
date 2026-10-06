import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


const manrope = Manrope({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftCo | Custom Software, AI, CRM, ERP & Web Development",
  description:
    "SoftCo builds custom software, AI solutions, CRM, ERP, HRMS, web apps, mobile apps, and EdTech platforms for businesses in Bangladesh and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        manrope.variable,
      )}
    >
      <body className="">
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
