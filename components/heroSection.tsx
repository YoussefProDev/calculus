import React from "react";

import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary dark:bg-muted dark:text-blue-400">
          Powerful Mathematics at Your Fingertips
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary">Calculus</span>
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          The ultimate mathematics application for students, teachers and
          professionals. Solve complex equations, visualize functions, and more.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
          {/* Store Badges */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="https://apps.apple.com/us/app/calculus-ultimate-math-tool/id6744274154"
              aria-label="Download on the App Store"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-12 w-auto transition-opacity hover:opacity-90"
                priority
              />
            </Link>
            <Link href="#" aria-label="Get it on Google Play">
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={140}
                height={50}
                className="h-12 w-auto transition-opacity hover:opacity-90"
                priority
              />
            </Link>
          </div>

          {/* Secondary CTA */}
          {/* <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="#features">Explore Features</Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
