import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          Powerful Mathematics at Your Fingertips
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600">Calculus</span>
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          The ultimate mathematics application for students, teachers and
          professionals. Solve complex equations, visualize functions, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Download Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
