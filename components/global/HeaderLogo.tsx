"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderLogoProps {
  className?: string;
  variant?: "beige" | "blu";
}

export default function HeaderLogo({ className = "", variant = "beige" }: HeaderLogoProps) {
  const logoSrc = variant === "blu" ? "/assets/logo-blu.svg" : "/assets/logo-beige.svg";

  return (
    <div className={`w-full pt-6 md:pt-10 px-0 sm:px-10 md:px-12 flex items-center justify-center md:justify-between z-30 relative ${className}`}>
      <Link href="/" className="inline-flex justify-center items-center group mx-auto md:mx-0 md:ml-8 lg:ml-12 text-center">
        <div className="relative pt-2">
          <Image
            src={logoSrc}
            alt="Esposito Design Logo"
            width={420}
            height={120}
            priority
            className="h-20 sm:h-24 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1 mx-auto"
          />
        </div>
      </Link>
    </div>
  );
}
