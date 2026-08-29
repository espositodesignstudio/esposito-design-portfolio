"use client";

import React from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";
import ContactSection from "@/components/global/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ChiSonoPreview from "@/components/home/ChiSonoPreview";
import ProjectGrid from "@/components/home/ProjectGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F1E3CB] text-[#0267C1] relative">
      <HeroSection />
      <ChiSonoPreview />
      <ProjectGrid />
      <ContactSection />
      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
