import React from "react";
import Logo from "./Logo";
import { appName } from "@/lib/constants";

const AppInfo = () => {
  return (
    <section id="info" className="container py-16 md:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">App Info</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Calculus is a comprehensive mathematics application designed to
            solve complex equations and provide detailed solutions with
            step-by-step explanations.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Whether you&apos;re a student struggling with calculations, a
            teacher creating lesson materials, or a professional who needs quick
            mathematical solutions, Calculus offers the tools you need to
            succeed.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            <span className="font-medium text-primary">Coming soon:</span>{" "}
            Calculus will soon be expanded with differential calculus, integral
            calculus, and matrix operations capabilities to support even more
            advanced mathematical needs.
          </p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-950/50 dark:to-indigo-950/50 border border-gray-200 dark:border-gray-800">
          <div className="h-[400px] w-full rounded-lg bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              {/* <Image
                src="/app-preview.webp"
                alt="App Preview"
                width={300}
                height={400}
              /> */}
              {/* <Calculator className="h-16 w-16 mx-auto text-primary" /> */}
              <p className="text-sm text-gray-500">{appName}</p>
              <Logo size={250} />
              {/* <p className="text-sm text-gray-500">App preview image</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
