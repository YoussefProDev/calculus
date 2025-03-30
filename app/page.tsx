import React from "react";

import { ContactUsSection } from "@/components/contactUs";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/heroSection";
import AppInfo from "@/components/appInfo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Calculus - Enhance Your Mathematical Calculations",
  description:
    "Calculus is the ultimate app for simplifying and enhancing your mathematical calculations with advanced and intuitive tools.",
  keywords:
    "calculator, mathematics, calculations, algebra, analysis, math tools",
  openGraph: {
    title: "Calculus - Enhance Your Mathematical Calculations",
    description:
      "Simplify your calculations with advanced and intuitive tools.",
    images: ["/og-image.jpg"],
    url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculus - Enhance Your Mathematical Calculations",
    description:
      "Simplify your calculations with advanced and intuitive tools.",
    images: ["/og-image.jpg"],
  },
};
export default function CalculusLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <main className="px-10 flex flex-col items-center ">
        {/* Hero Section */}
        <HeroSection />

        {/* App Info Section */}
        <AppInfo />

        {/* Features Section */}
        <FeaturesSection />

        {/* Contact Us Section */}
        <ContactUsSection />
      </main>
    </div>
  );
}
