"use client";

import React from "react";
import Image from "next/image";

export default function WhatsappButton() {
  const whatsappUrl = "https://wa.me/393276943832?text=Ciao%20Peppe,%20vorrei%20informazioni%20per%20un%20progetto!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed md:bottom-12 md:right-12 z-[990] w-20 h-20 bg-white text-[#0267C1] rounded-full items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 border-2 border-[#0267C1]/20"
      aria-label="Contattami su WhatsApp"
    >
      <Image
        src="/assets/whatsapp.svg"
        alt="WhatsApp"
        width={40}
        height={40}
        className="w-9 h-9 md:w-11 md:h-11 object-contain"
      />
    </a>
  );
}
