"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";
import TextReveal from "@/components/global/TextReveal";
import HeaderLogo from "@/components/global/HeaderLogo";
import ContactSection from "@/components/global/ContactSection";
import SkillsStickerBoard from "@/components/chi-sono/SkillsStickerBoard";

const SKILLS_LIST = [
  { category: "BRANDING", items: ["Brand Strategy", "Logo Design", "Visual Identity Systems", "Packaging Design", "Brand Guidelines"] },
  { category: "UX/UI DESIGN", items: ["User Research", "Wireframing & Prototyping", "Design Systems", "Web & App Interfaces", "Webflow / Next.js Dev"] },
  { category: "STAMPA 3D & MAKER", items: ["Modellazione Parametrica", "FDM & SLA Printing", "Material Selection (PLA/PETG)", "Prototipazione Rapida", "Post-Processing & Finitura"] },
];

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-[#F1E3CB] text-[#0267C1] relative">
      {/* Top Header Logo */}
      <HeaderLogo variant="blu" />

      {/* Hero Media Section - Natural Aspect Ratio (Zero Crop / Fully Visible) */}
      <section className="w-full px-4 md:px-12 mt-4 md:mt-6 mb-[40px] md:mb-[80px]">
        <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-[#0267C1]/15 shadow-xl bg-[#0267C1]/5">
          <video
            src="/sito/hero-chisono.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block object-contain"
          />
        </div>
      </section>

      {/* Main Text Intro Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 my-[60px] md:my-[100px] text-center space-y-6">
        <TextReveal>
          <h1 className="text-[#0267C1] max-w-4xl mx-auto">
            DAL PIXEL ALL&apos;OGGETTO. STESSA CURA.
          </h1>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="space-y-6 text-[#0267C1]/90 pt-4 max-w-3xl mx-auto text-center">
            <p>
              Ciao! Sono Peppe Esposito, un designer multidisciplinare appassionato di estetica, funzionalità e produzione fisica.
            </p>
            <p>
              Ho fondato Esposito Design per unire due mondi apparentemente distanti ma fortemente complementari: la progettazione visiva/digitale (Branding e UX/UI Design) e la fabbricazione digitale tramite Stampa 3D di oggetti su misura.
            </p>
            <p>
              Ogni progetto nasce da una cura maniacale per i dettagli, da un approccio handmade e organico e da una ricerca costante di solida utilità.
            </p>
          </div>
        </TextReveal>
      </section>

      {/* Vision Section */}
      <section className="w-full my-[80px] md:my-[150px] px-6 md:px-12 bg-[#F1E3CB]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 items-center">
          {/* Portrait Image */}
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 1, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#0267C1]/10"
            >
              <Image
                src="/sito/hero-chi-sono.jpg"
                alt="Peppe Esposito Portrait"
                fill
                className="object-cover object-top w-full h-full"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
          </div>

          {/* Vision Paragraphs */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <TextReveal>
              <h2 className="text-[#0267C1]">
                IDEE CHE PRENDONO FORMA.
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p className="text-[#0267C1]/90">
                Che si tratti di sviluppare l&apos;identità di una startup innovativa, disegnare un&apos;interfaccia ad alta conversione o modellare in 3D un oggetto dalla geometria parametrica, l&apos;obiettivo rimane lo stesso: creare un legame autentico e memorabile con chi lo vive.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Skills Sticker Board Section */}
      <SkillsStickerBoard />

      {/* Creative Skills Categories Grid - Static Card Boxes (Same Style as Contact Cards) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 my-[80px] md:my-[150px] space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <TextReveal>
            <h4 className="text-[#0267C1] uppercase">
              BRANDING, UX/UI DESIGN, STAMPA 3D E MAKER
            </h4>
          </TextReveal>
        </div>

        {/* Static Card Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_LIST.map((group, idx) => (
            <TextReveal key={group.category} delay={idx * 0.1}>
              <div className="p-5 md:p-8 rounded-3xl bg-[#0267C1]/5 border border-[#0267C1]/15 h-full space-y-5 select-none">
                <h6 className="text-[#D56108] border-b border-[#0267C1]/10 pb-3">
                  {group.category}
                </h6>
                <ul className="space-y-3 font-normal text-[#0267C1]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0267C1] shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
