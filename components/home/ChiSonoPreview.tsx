"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "../global/TextReveal";

export default function ChiSonoPreview() {
  return (
    <section className="w-full my-[80px] md:my-[150px] px-10 md:px-12 bg-[#F1E3CB] text-[#0267C1]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Avatar Profile Image */}
          <div className="md:col-span-5 relative">
            <TextReveal>
              <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-[#0267C1]/10 border border-[#0267C1]/15">
                <Image
                  src="/sito/chi-sono.jpg"
                  alt="Peppe Esposito Avatar"
                  fill
                  className="object-cover object-top w-full h-full"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </TextReveal>
          </div>

          {/* Text Content - Clean without outer box container */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <TextReveal>
              <h2 className="text-[#0267C1] mb-4 [text-wrap:balance]">
                VISIONE E DETTAGLIO.
              </h2>
            </TextReveal>

            <TextReveal delay={0.1}>
              <p className="text-[#0267C1]/90 [text-wrap:balance]">
                Sono Peppe Esposito, Graphic & UX/UI Designer. Costruisco identità visive distintive, interfacce digitali orientate all&apos;utente e, quando serve, oggetti fisici realizzati su misura in stampa 3D.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="pt-4 flex justify-center md:justify-start">
                <Link
                  href="/chi-sono"
                  className="pill-btn pill-btn-primary px-8 py-3.5"
                  data-hover-label="Scopri di più su Peppe"
                >
                  SCOPRI DI PIÙ SU DI ME
                </Link>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
