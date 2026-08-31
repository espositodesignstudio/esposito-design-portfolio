"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";
import TextReveal from "@/components/global/TextReveal";
import HeaderLogo from "@/components/global/HeaderLogo";
import ContactSection from "@/components/global/ContactSection";

const InstagramIcon = ({ className = "w-7 h-7 stroke-white" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className = "w-7 h-7 stroke-white" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const STATIC_CONTACTS = [
  {
    icon: Mail,
    title: "EMAIL DIRECT",
    value: "espositodesign@outlook.it",
    href: "mailto:espositodesign@outlook.it",
    sub: "Risposta garantita entro 24 ore",
    isOnline: false,
  },
  {
    icon: Phone,
    title: "TELEFONO & WHATSAPP",
    value: "+39 327 694 3832",
    href: "https://wa.me/393276943832",
    sub: "Disponibile ora",
    isOnline: true,
  },
  {
    icon: MapPin,
    title: "CITTÀ",
    value: "Nocera Inferiore, Campania",
    href: "#",
    sub: "Disponibile per progetti in remoto & in sede",
    isOnline: false,
  },
];

const SOCIAL_CONTACTS = [
  {
    icon: InstagramIcon,
    title: "INSTAGRAM",
    value: "@esposito__design",
    href: "https://instagram.com/esposito__design",
    sub: "Lavori quotidiani & dietro le quinte",
    isOnline: false,
  },
  {
    icon: InstagramIcon,
    title: "INSTAGRAM 3D",
    value: "@esposito__design3d",
    href: "https://instagram.com/esposito__design3d",
    sub: "Lavori quotidiani & dietro le quinte",
    isOnline: false,
  },
  {
    icon: LinkedinIcon,
    title: "LINKEDIN",
    value: "Giuseppe Esposito",
    href: "https://linkedin.com",
    sub: "Rete professionale & collaborazioni",
    isOnline: false,
  },
];

export default function ContattiPage() {
  const allCards = [...STATIC_CONTACTS, ...SOCIAL_CONTACTS];

  return (
    <main className="min-h-screen bg-[#F1E3CB] text-[#0267C1] relative">
      {/* Top Header Logo */}
      <HeaderLogo variant="blu" />

      {/* Main Title + Hero Intro Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 my-[80px] md:my-[150px] text-center space-y-6">
        <TextReveal>
          <h1 className="text-[#0267C1] font-pally-bold [text-wrap:balance]">
            I MIEI CONTATTI
          </h1>
        </TextReveal>

        <TextReveal delay={0.1}>
          <p className="text-[#0267C1]/90 max-w-2xl mx-auto">
            Vuoi discutere un progetto, informazioni sulla stampa 3D o parlare di design? Trovi qui tutti i recapiti.
          </p>
        </TextReveal>
      </section>

      {/* Contact & Social Cards Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 my-[60px] md:my-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch">
          {allCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <TextReveal key={item.title} delay={idx * 0.05}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-6 rounded-3xl bg-[#0267C1]/5 border border-[#0267C1]/15 hover:bg-[#0267C1]/10 hover:border-[#0267C1]/30 transition-all duration-300 cursor-pointer select-none h-full space-y-4 relative"
                >
                  <div className="relative w-full flex items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#0267C1]/10 group-hover:bg-[#0267C1] text-[#0267C1] group-hover:text-white transition-all duration-300 group-hover:scale-105 flex items-center justify-center shrink-0 shadow-sm mx-auto">
                      <Icon className="w-6 h-6 stroke-current" />
                    </div>
                    <ArrowUpRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D56108] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                  </div>

                  <div className="space-y-1 w-full text-center">
                    <span className="font-title text-xs uppercase tracking-widest text-[#D56108] font-bold block text-center">
                      {item.title}
                    </span>
                    <span className="font-nunito font-extrabold text-lg md:text-xl text-[#0267C1] group-hover:text-[#D56108] transition-colors block break-words text-center">
                      {item.value}
                    </span>
                  </div>

                  {item.sub && (
                    <p className="font-nunito text-xs text-[#0267C1]/70 font-semibold pt-1 border-t border-[#0267C1]/10 flex items-center justify-center gap-2 w-full text-center">
                      {item.isOnline && (
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                      )}
                      <span>{item.sub}</span>
                    </p>
                  )}
                </a>
              </TextReveal>
            );
          })}
        </div>
      </section>

      {/* Fixed Inline Contact Section (Form before Footer) */}
      <ContactSection />

      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
