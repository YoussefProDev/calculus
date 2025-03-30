import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { appName, lastUpdated, supportEmail } from "@/lib/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Calculus",
  description:
    "Learn about our cookie policy and how we use cookies to enhance your experience with the Calculus app.",
  keywords: "cookie policy, cookies, privacy, app cookies",
  openGraph: {
    title: "Cookie Policy - Calculus",
    description:
      "Learn about our cookie policy and how we use cookies to enhance your experience with the Calculus app.",
    images: ["/og-image.jpg"],
    url: `${process.env.VERCEL_URL}/cookie-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - Calculus",
    description:
      "Learn about our cookie policy and how we use cookies to enhance your experience with the Calculus app.",
    images: ["/og-image.jpg"],
  },
};

export default function CookiePolicy() {
  return (
    <Container className="py-10">
      <Card>
        <CardContent className="space-y-6 p-6">
          <h1 className="text-2xl font-bold">Cookie Policy</h1>
          <p>Last updated: {lastUpdated}</p>
          <p>
            <strong>{appName}</strong> does not use cookies to track users or
            store personal data. However, third-party services used within the
            App may use cookies according to their own policies.
          </p>

          <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
          <p>
            Cookies are small files stored on your device that help websites
            improve user experience. As <strong>Calculus</strong> does not use
            cookies directly, any data collected by third-party APIs falls under
            their respective policies.
          </p>

          <h2 className="text-xl font-semibold">2. Managing Cookies</h2>
          <p>
            As the App does not store cookies, no management is needed. However,
            you can configure your browser settings to block third-party cookies
            if desired.
          </p>

          <p>For any questions, contact us at {supportEmail}.</p>
        </CardContent>
      </Card>
    </Container>
  );
}
