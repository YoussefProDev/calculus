import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Calculator, ChevronUp, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { footerLinks, navbarLinks } from "@/lib/links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:border-gray-800 px-5 flex justify-center">
            <div className="container flex h-16 items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">Calculus</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="ml-auto hidden md:flex items-center space-x-6 text-sm font-medium">
                {navbarLinks.map(({ name, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="transition-colors hover:text-blue-600"
                  >
                    {name}
                  </Link>
                ))}
                <Button>Download App</Button>
              </nav>

              {/* Mobile Navigation */}
              <Sheet>
                <SheetTrigger className="ml-auto md:hidden">
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="p-4">
                    <SheetTitle asChild>
                      <Link
                        href="/"
                        className="flex items-center space-x-2 mb-6"
                      >
                        <Calculator className="h-6 w-6 text-blue-600" />
                        <span className="text-xl font-bold">Calculus</span>
                      </Link>
                    </SheetTitle>
                    <nav className="flex flex-col space-y-4">
                      {navbarLinks.map(({ name, href }) => (
                        <SheetClose asChild key={href}>
                          <Link
                            // key={href}
                            href={href}
                            className="text-lg font-medium text-gray-700 dark:text-gray-300"
                          >
                            {name}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <Button className="mt-6 w-full">Download App</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="border-t bg-gray-50 dark:bg-gray-950 dark:border-gray-800 px-5 flex justify-center">
            <div className="container py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Calculus App. All rights
                  reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  {footerLinks.map(({ name, href }) => (
                    <Link
                      href={href}
                      key={href}
                      className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Back to top button */}
        <a
          href="#"
          className="fixed bottom-6 right-6 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          <ChevronUp className="h-5 w-5" />
        </a>
      </body>
    </html>
  );
}
