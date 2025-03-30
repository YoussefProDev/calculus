import React from "react";

import { ContactUsSection } from "@/components/contactUs";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/heroSection";
import AppInfo from "@/components/appInfo";

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
