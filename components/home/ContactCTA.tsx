"use client";

import React from "react";
import TextReveal from "../global/TextReveal";

interface ContactCTAProps {
  onOpenContactModal?: () => void;
}

export default function ContactCTA({ onOpenContactModal }: ContactCTAProps) {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F1E3CB] text-[#0267C1]">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <TextReveal>
          <p className="font-title text-sm uppercase tracking-[0.2em] text-[#D56108]">
            INIZIAMO UN NUOVO PROGETTO
          </p>
        </TextReveal>

        {/* High impact sentence - ONLY TEXT, NO IMAGE THUMBNAIL [Point 4] */}
        <TextReveal delay={0.1}>
          <h2 className="max-w-5xl mx-auto">
            LET&apos;S WORK TOGETHER.
          </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="max-w-2xl mx-auto text-[#0267C1]/80">
            Work with us if average isn&apos;t your thing. Drop it, we&apos;ll build it!
          </p>
        </TextReveal>

        <TextReveal delay={0.3}>
          <div className="pt-4">
            <button
              onClick={onOpenContactModal}
              className="pill-btn pill-btn-orange text-base px-10 py-4 shadow-xl hover:scale-105"
            >
              LET&apos;S TALK!
            </button>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
