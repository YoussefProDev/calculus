import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { appName, lastUpdated, supportEmail } from "@/lib/constants";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service - Calculus",
  description:
    "Read the terms of service for using the Calculus app. Understand the rules and guidelines that govern your use of the app.",
  keywords: "terms of service, user agreement, app usage, legal terms",
  openGraph: {
    title: "Terms of Service - Calculus",
    description:
      "Read the terms of service for using the Calculus app. Understand the rules and guidelines that govern your use of the app.",
    images: ["/og-image.jpg"],
    url: `${process.env.VERCEL_URL}/terms-of-service`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Calculus",
    description:
      "Read the terms of service for using the Calculus app. Understand the rules and guidelines that govern your use of the app.",
    images: ["/og-image.jpg"],
  },
};
export default function TermsOfService() {
  return (
    <Container className="py-10">
      <Card>
        <CardContent className="space-y-6 p-6">
          <h1 className="text-2xl font-bold">Terms of Service</h1>
          <p>Last updated: {lastUpdated}</p>
          <p>
            Welcome to <strong>{appName}</strong>. By using the App, you agree
            to the following Terms of Service.
          </p>

          <h2 className="text-xl font-semibold">1. Use of the App</h2>
          <p>
            The App is provided &ldquo;as is&ldquo; without any warranties.
            Users assume responsibility for their use of the App.
          </p>

          <h2 className="text-xl font-semibold">2. Third-Party Services</h2>
          <p>
            The App utilizes a third-party API to provide updated exchange
            rates. We are not responsible for any errors, inaccuracies, or
            malfunctions resulting from these services.
          </p>

          <h2 className="text-xl font-semibold">3. Limitation of Liability</h2>
          <p>
            We are not liable for any direct, indirect, or consequential damages
            resulting from the use or inability to use the App.
          </p>

          <h2 className="text-xl font-semibold">4. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the App after such changes constitutes acceptance of the new
            Terms.
          </p>

          <p>For any questions or support, contact us at {supportEmail}.</p>
        </CardContent>
      </Card>
    </Container>
  );
}
