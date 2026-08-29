"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  const whatsappUrl = "https://wa.me/393276943832?text=Ciao%20Peppe,%20vorrei%20informazioni%20per%20un%20progetto!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-36 md:bottom-8 right-6 md:right-8 z-[990] w-16 h-16 md:w-20 md:h-20 bg-[#0267C1] hover:bg-[#014d91] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/30"
      aria-label="Contattami su WhatsApp"
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-white stroke-[#0267C1]" />
    </a>
  );
}
