"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";
import TextReveal from "@/components/global/TextReveal";
import HeaderLogo from "@/components/global/HeaderLogo";
import ContactSection from "@/components/global/ContactSection";
import ProjectCard from "@/components/home/ProjectCard";
import { PROJECTS } from "@/data/projects";

type CategoryFilter = "Branding & UX/UI" | "Stampa 3D";

export default function LavoriPage() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("Branding & UX/UI");

  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F1E3CB] text-[#0267C1] relative">
      {/* Fullscreen Full-width Hero Media Section */}
      <section className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden mb-[80px] md:mb-[150px]">
        {/* Full-width Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/sito/hero-progetti.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Top Header Logo Overlaid */}
        <div className="relative z-10">
          <HeaderLogo />
        </div>
      </section>

      {/* Hero Text Block - Placed immediately after media block in primary color */}
      <section className="max-w-4xl mx-auto space-y-6 text-center px-6 mb-[80px] md:mb-[150px] text-[#0267C1]">
        <TextReveal>
          <h1 className="text-[#0267C1]">
            I MIEI LAVORI
          </h1>
        </TextReveal>

        <TextReveal delay={0.15}>
          <p className="text-[#0267C1]/90 max-w-3xl mx-auto text-base md:text-lg [text-wrap:pretty]">
            Ogni progetto è il risultato di una profonda ricerca visiva, cura per i dettagli e passione per il design, sia digitale che tangibile. Esplora identità visive e progetti UX/UI, e scopri come do forma alle idee.
          </p>
        </TextReveal>
      </section>

      {/* Category Toggle Bar (*Branding & UX/UI* ↔ *Stampa 3D*) */}
      <section className="max-w-6xl mx-auto px-6 my-[80px] md:my-[150px]">
        <TextReveal delay={0.2}>
          <div className="flex justify-center">
            <div className="bg-[#0267C1]/10 p-1.5 rounded-full inline-flex border border-[#0267C1]/20 gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("Branding & UX/UI")}
                className={`px-6 py-3 rounded-full text-xs md:text-sm font-title font-bold transition-all duration-300 uppercase tracking-wider ${activeTab === "Branding & UX/UI"
                  ? "bg-[#0267C1] text-white shadow-lg scale-105"
                  : "text-[#0267C1] hover:bg-[#0267C1]/10"
                  }`}
              >
                BRANDING & UX/UI
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("Stampa 3D")}
                className={`px-6 py-3 rounded-full text-xs md:text-sm font-title font-bold transition-all duration-300 uppercase tracking-wider ${activeTab === "Stampa 3D"
                  ? "bg-[#D56108] text-white shadow-lg scale-105"
                  : "text-[#0267C1] hover:bg-[#0267C1]/10"
                  }`}
              >
                STAMPA 3D
              </button>
            </div>
          </div>
        </TextReveal>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 my-[80px] md:my-[150px]">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project, idx) => (
              <TextReveal key={project.id} delay={idx * 0.05}>
                <ProjectCard project={project} />
              </TextReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <p className="text-lg md:text-xl font-title font-bold text-[#0267C1]/70 uppercase tracking-wider">
              Nuovi progetti di Stampa 3D in arrivo a breve.
            </p>
          </div>
        )}
      </section>

      <ContactSection />
      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
