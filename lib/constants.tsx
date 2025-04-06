import { Calculator } from "lucide-react";
import { JSX } from "react";

export const lastUpdated = "30 March 2024";
export const appName = "Calculus - Ultimate Math Tool";
export const appDescription =
  "Transform everyday calculations with Calculus! From basic math to currency exchange in one tap. Beautiful themes, stunning design, and powerful features.";
export const appVersion = "1.0.0";
export const appAuthor = "Shark Teams";
export const supportEmail = "contact.sharkteams@gmail.com";
export const logoPath = "/light-icon.webp";
interface feature {
  icon: JSX.Element;
  title: string;
  description: string;
  content: JSX.Element;
  className?: string;
}

export const features: feature[] = [
  {
    icon: <Calculator className="h-6 w-6 text-primary" />,
    title: "Standard Calculator",
    description: "Basic operations for everyday calculations",
    content: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Perform addition, subtraction, multiplication, division, and other basic
        mathematical operations with a clean, intuitive interface.,
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <polyline points="15 5 22 12 15 19"></polyline>
      </svg>
    ),
    title: "Advanced Calculator",
    description: "Scientific functions for complex problems",
    content: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Access trigonometric functions, logarithms, exponentials, and other
        advanced mathematical operations needed for scientific and engineering
        calculations.,
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <line x1="12" y1="2" x2="12" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: "Currency Converter",
    description: "Real-time exchange rates",
    content: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Convert between different currencies with up-to-date exchange rates.
        Support for all major global currencies and frequent updates.,
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M3 6h18"></path>
        <path d="M7 12h10"></path>
        <path d="M10 18h4"></path>
      </svg>
    ),
    title: "Unit Converter",
    description: "  Convert between measurement systems",
    content: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Easily convert between metric and imperial units for length, weight,
        volume, temperature, and more with precision and accuracy.,
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
        <path d="M12 12h.01"></path>
        <path d="M17 12h.01"></path>
        <path d="M7 12h.01"></path>
      </svg>
    ),
    title: "Percentage Calculator",
    description: "Quick percentage operations",
    content: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Calculate percentages, percentage changes, discounts, tips, taxes, and
        other percentage-based calculations with ease.
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Coming Soon",
    description: "Advanced mathematical capabilities",

    content: (
      <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <li className="flex items-center">
          <div className="mr-2 h-2 w-2 rounded-full text-secondary"></div>
          Differential Calculus
        </li>
        <li className="flex items-center">
          <div className="mr-2 h-2 w-2 rounded-full text-secondary"></div>
          Integral Calculus
        </li>
        <li className="flex items-center">
          <div className="mr-2 h-2 w-2 rounded-full text-secondary"></div>
          Matrix Operations
        </li>
      </ul>
    ),
    className: "bg-blue-50/50 dark:bg-blue-950/50",
  },
];
