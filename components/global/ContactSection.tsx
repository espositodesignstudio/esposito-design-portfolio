"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import TextReveal from "./TextReveal";

const INTEREST_TAGS = [
  "BRANDING",
  "UX/UI DESIGN",
  "STAMPA 3D",
];

export default function ContactSection() {
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
    <section id="contatti" className="w-full my-[80px] md:my-[150px] px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Centered Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <TextReveal>
            <h2 className="text-[#0267C1] [text-wrap:balance]">
              INIZIA IL TUO PROGETTO
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-[#0267C1]/90 max-w-xl mx-auto [text-wrap:balance]">
              Hai un&apos;idea, un&apos;esigenza di branding, UI/UX o un prodotto da realizzare in stampa 3D? Raccontamelo.
            </p>
          </TextReveal>
        </div>

        {/* Contact Form Centered */}
        <div className="max-w-2xl mx-auto w-full">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-6 py-12"
            >
              <CheckCircle className="w-16 h-16 text-[#0267C1] mx-auto animate-bounce" />
              <h3 className="text-[#0267C1]">
                MESSAGGIO INVIATO!
              </h3>
              <p className="text-[#0267C1]/90 max-w-md mx-auto">
                Grazie {name}! Ho ricevuto la tua richiesta e ti risponderò entro 24 ore.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="pill-btn pill-btn-primary mt-4"
              >
                INVIA UN ALTRO MESSAGGIO
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-center md:text-left">
              {/* 1. Nome */}
              <div className="space-y-2 text-center md:text-left">
                <label className="text-xs font-title uppercase tracking-widest text-[#D56108] block text-center md:text-left">
                  IL TUO NOME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="es. Mario Rossi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0267C1]/5 p-4 rounded-2xl text-xl md:text-2xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none focus:ring-2 focus:ring-[#0267C1]/30 text-center md:text-left"
                />
              </div>

              {/* 2. Email */}
              <div className="space-y-2 text-center md:text-left">
                <label className="text-xs font-title uppercase tracking-widest text-[#D56108] block text-center md:text-left">
                  LA TUA EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="es. mario@azienda.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0267C1]/5 p-4 rounded-2xl text-xl md:text-2xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none focus:ring-2 focus:ring-[#0267C1]/30 text-center md:text-left"
                />
              </div>

              {/* 3. Telefono */}
              <div className="space-y-2 text-center md:text-left">
                <label className="text-xs font-title uppercase tracking-widest text-[#D56108] block text-center md:text-left">
                  TELEFONO (OPZIONALE)
                </label>
                <input
                  type="tel"
                  placeholder="es. +39 333 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0267C1]/5 p-4 rounded-2xl text-xl md:text-2xl font-title text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none focus:ring-2 focus:ring-[#0267C1]/30 text-center md:text-left"
                />
              </div>

              {/* 4. Interesse Chips */}
              <div className="space-y-2 pt-2 text-center md:text-left">
                <label className="text-xs font-title uppercase tracking-widest text-[#D56108] block text-center md:text-left">
                  A COSA SEI INTERESSATO?
                </label>
                <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                  {INTEREST_TAGS.map((tag) => {
                    const selected = selectedInterests.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={`px-4 py-2.5 rounded-full font-title text-xs transition-all duration-200 uppercase ${selected
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

              {/* 5. Messaggio */}
              <div className="space-y-2 pt-2 text-center md:text-left">
                <label className="text-xs font-title uppercase tracking-widest text-[#D56108] block text-center md:text-left">
                  DETTAGLI DEL PROGETTO / MESSAGGIO *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Raccontami la tua idea, tempistiche o requisiti..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0267C1]/5 p-4 rounded-2xl text-lg md:text-xl font-nunito text-[#0267C1] placeholder:text-[#0267C1]/30 focus:outline-none focus:ring-2 focus:ring-[#0267C1]/30 resize-none text-center md:text-left"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-700 font-bold text-xs text-center">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button Centered */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="pill-btn pill-btn-primary text-base px-8 py-4 w-full sm:w-auto flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      <span>INVIO IN CORSO...</span>
                    </>
                  ) : (
                    <span>INVIA MESSAGGIO</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
