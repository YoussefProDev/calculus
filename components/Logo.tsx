import { appName, logoPath } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 50, className }: LogoProps) => {
  return (
    <Image
      className={cn(className)}
      src={logoPath}
      height={size}
      width={size}
      alt={`${appName} Logo`}
    />
  );
};

export default Logo;
