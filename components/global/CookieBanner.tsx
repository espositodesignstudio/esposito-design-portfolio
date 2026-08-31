"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

interface CookieBannerProps {
  isVisible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieBanner({
  isVisible,
  onAccept,
  onDecline,
}: CookieBannerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[995] w-[calc(100vw-32px)] max-w-2xl bg-[#F1E3CB]/95 backdrop-blur-2xl text-[#0267C1] p-5 sm:p-6 rounded-3xl border-2 border-[#0267C1]/20 shadow-[0_20px_50px_rgba(2,103,193,0.18)] select-none"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 text-left flex-1">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#D56108] shrink-0" />
                <h4 className="font-title text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0267C1]">
                  INFORMATIVA COOKIE & PRIVACY
                </h4>
              </div>
              <p className="font-nunito text-xs sm:text-sm text-[#0267C1]/90 leading-relaxed">
                Questo sito utilizza cookie per migliorare l&apos;esperienza di navigazione e analizzare le visite tramite Google Analytics.{" "}
                <Link
                  href="/cookie-policy"
                  className="underline underline-offset-2 font-bold text-[#D56108] hover:text-[#0267C1] transition-colors"
                >
                  Leggi la Cookie Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
              <button
                type="button"
                onClick={onDecline}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-[#0267C1]/10 text-[#0267C1] hover:bg-[#0267C1]/20 font-title text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer text-center"
              >
                SOLO NECESSARI
              </button>
              <button
                type="button"
                onClick={onAccept}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#0267C1] text-white hover:bg-[#014d91] font-title text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer text-center"
              >
                ACCETTA
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
