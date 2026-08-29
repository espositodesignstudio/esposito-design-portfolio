"use client";

import React from "react";
import Image from "next/image";
import TextReveal from "../global/TextReveal";
import HeaderLogo from "../global/HeaderLogo";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden mb-[80px] md:mb-[150px]">
      {/* Full-width Background Image Without Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sito/hero-home4.png"
          alt="Esposito Design Studio Showcase Background"
          fill
          priority
          unoptimized
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
        {/* Subtle dark gradient scrim over entire image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />
      </div>

      {/* Top Header Logo Overlaid */}
      <div className="relative z-10">
        <HeaderLogo />
      </div>

      {/* 100% Dead-Centered Main Hero Statement with organic dark radial gradient backdrop matching text shape */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 md:px-12 pointer-events-none">
        <div className="relative max-w-4xl w-full text-center text-white pointer-events-auto py-8 px-6 sm:px-12">
          {/* Organic Dark Radial Gradient Backdrop shaped to the text block */}
          <div className="absolute inset-0 -z-10 bg-radial from-black/90 via-black/60 to-transparent blur-3xl scale-125 rounded-full pointer-events-none" />

          <TextReveal>
            <h1 className="text-white drop-shadow-2xl text-center max-w-4xl mx-auto [text-wrap:balance]">
              <span className="font-pally-regular">IL TUO BRAND,</span> <br />
              PENSATO. PROGETTATO. <br />
              STAMPATO.
            </h1>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
