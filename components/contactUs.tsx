import { Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supportEmail } from "@/lib/constants";

export function ContactUsSection() {
  return (
    <section id="contact" className="container py-12  ">
      <Card className="shadow-lg border border-gray-200 dark:border-gray-800  mx-auto ">
        <CardContent className="space-y-8 p-6 sm:p-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Have any questions or need assistance? We&apos;re here to help!
            Contact us via email, and we&apos;ll get back to you as soon as
            possible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Email Section */}
            <div className="flex flex-col items-center space-y-3">
              <Mail className="h-10 w-10 text-primary dark:text-blue-400" />
              <a
                href="mailto:support@calculus.com"
                className="text-lg font-medium text-primary dark:text-blue-400 hover:underline"
              >
                {supportEmail}
              </a>
            </div>

            {/* Support Hours Section */}
            <div className="flex flex-col items-center space-y-3">
              <Clock className="h-10 w-10 text-gray-500 dark:text-gray-400" />
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Mon - Fri: 9 AM - 6 PM (UTC)
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            We typically respond within 24-48 hours.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
