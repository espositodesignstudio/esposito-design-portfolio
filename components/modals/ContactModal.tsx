"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send, Loader2 } from "lucide-react";
import Image from "next/image";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INTEREST_TAGS = [
  "BRANDING",
  "UX/UI DESIGN",
  "STAMPA 3D",
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["BRANDING"]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleInterest = (tag: string) => {
    setSelectedInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          interests: selectedInterests,
          message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Qualcosa è andato storto. Riprova più tardi.");
      }
    } catch {
      setErrorMsg("Errore di connessione. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#F1E3CB]/95 backdrop-blur-xl overflow-y-auto px-6 py-12 flex items-center justify-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-8 right-8 z-[10000] p-3 rounded-full bg-[#0267C1] text-white hover:bg-[#D56108] transition-colors shadow-lg flex items-center gap-2 font-bold text-xs uppercase"
            data-hover-label="Chiudi Overlay"
          >
            <span>CHIUDI</span>
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-4xl w-full mx-auto text-[#0267C1] py-8">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-6 py-16"
              >
                <CheckCircle className="w-20 h-20 text-[#0267C1] mx-auto animate-bounce" />
                <h2 className="text-[#0267C1]">
                  MESSAGGIO INVIATO!
                </h2>
                <p className="max-w-md mx-auto text-[#0267C1]/80">
                  Grazie {name}! Ho ricevuto la tua richiesta e ti risponderò al più presto.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="pill-btn pill-btn-primary mt-6"
                >
                  TORNA AL SITO
                </button>
              </motion.div>
            ) : (
              <div className="space-y-10">
                {/* Header Title with Avatar [IMG 19] */}
                <div className="flex flex-wrap items-baseline gap-4">
                  <h1 className="text-[#0267C1]">
                    LET&apos;S WORK TOGETHER
                  </h1>
                  <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-[#0267C1] inline-block align-middle">
                    <Image
                      src="/assets/Blu.png"
                      alt="Peppe Esposito Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-[#0267C1]/80 max-w-2xl">
                  Hai un nuovo progetto, bisogno di branding, design UX/UI o prodotti custom stampati in 3D? Compila il form qui sotto!
                </p>

                <form onSubmit={handleSubmit} className="space-y-8 pt-4">
                  {/* Name field */}
                  <div className="space-y-2 border-b border-[#0267C1]/30 pb-4">
                    <label className="text-xs uppercase tracking-widest text-[#D56108] font-bold block">
                      01. IL TUO NOME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="es. Mario Rossi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent text-2xl md:text-4xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 border-b border-[#0267C1]/30 pb-4">
                    <label className="text-xs uppercase tracking-widest text-[#D56108] font-bold block">
                      02. LA TUA EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="es. mario@azienda.it"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-2xl md:text-4xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2 border-b border-[#0267C1]/30 pb-4">
                    <label className="text-xs uppercase tracking-widest text-[#D56108] font-bold block">
                      03. TELEFONO (OPZIONALE)
                    </label>
                    <input
                      type="tel"
                      placeholder="es. +39 333 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent text-2xl md:text-4xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none"
                    />
                  </div>

                  {/* Interest Chips */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs uppercase tracking-widest text-[#D56108] font-bold block">
                      04. A COSA SEI INTERESSATO?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {INTEREST_TAGS.map((tag) => {
                        const selected = selectedInterests.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleInterest(tag)}
                            className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 uppercase ${
                              selected
                                ? "bg-[#0267C1] text-white shadow-md scale-105"
                                : "bg-[#0267C1]/10 text-[#0267C1] hover:bg-[#0267C1]/20"
                            }`}
                          >
                            {selected ? `✓ ${tag}` : tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2 border-b border-[#0267C1]/30 pb-4 pt-4">
                    <label className="text-xs uppercase tracking-widest text-[#D56108] font-bold block">
                      05. DETTAGLI DEL PROGETTO / MESSAGGIO *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Raccontami la tua idea, tempistiche o requisiti..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent text-xl md:text-3xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-100 border border-red-300 text-red-700 font-bold text-sm">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-6 flex justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="pill-btn pill-btn-primary text-base md:text-lg px-8 py-4 w-full md:w-auto flex items-center justify-center gap-3"
                      data-hover-label="Invia Richiesta"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>INVIO IN CORSO...</span>
                        </>
                      ) : (
                        <>
                          <span>INVIA MESSAGGIO</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
