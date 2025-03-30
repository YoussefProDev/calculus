import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { features } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="container bg-white dark:bg-gray-900 py-16 md:py-24 p-10 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold tracking-tight">Features</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        Discover the powerful tools that make Calculus the ultimate calculator
        app.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {features.map(
          ({ icon, title, description, content, className }, index) => (
            <Card
              className={cn(
                "border-blue-100 dark:border-blue-900/50",
                className
              )}
              key={index}
            >
              <CardHeader>
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center mb-2">
                  {icon}
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>{content}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
