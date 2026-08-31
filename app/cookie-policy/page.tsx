"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, Check } from "lucide-react";
import HeaderLogo from "@/components/global/HeaderLogo";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";

export default function CookiePolicyPage() {
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetConsent = () => {
    localStorage.removeItem("esposito_cookie_consent");
    setResetSuccess(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#F1E3CB] text-[#0267C1] relative select-none">
      {/* Header Navigation */}
      <div className="w-full flex flex-col items-center md:items-start px-6 md:px-12 pt-8 pb-4 gap-6 text-center md:text-left">
        <HeaderLogo variant="blu" className="!px-0 !pt-0 w-full flex justify-center md:justify-start" />
        <Link
          href="/"
          className="whitespace-nowrap inline-flex items-center gap-2 font-title font-bold text-xs uppercase bg-[#0267C1]/10 px-5 py-2.5 rounded-full hover:bg-[#0267C1] hover:text-white transition-colors shadow-sm mx-auto md:mx-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>TORNA ALLA HOME</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-10 space-y-8 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-[#0267C1] [text-wrap:balance]">
            COOKIE POLICY
          </h1>
          <p className="text-[#0267C1]/80 font-nunito font-semibold text-sm">
            Informativa sull&apos;uso dei cookie ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del Regolamento UE 2016/679 (GDPR).
          </p>
        </div>

        <div className="bg-[#0267C1]/5 p-6 md:p-10 rounded-3xl border border-[#0267C1]/15 space-y-6 font-nunito text-sm md:text-base leading-relaxed text-[#0267C1]/90">
          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              1. COSA SONO I COOKIE
            </h3>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente (browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie permettono al sito di funzionare in modo efficiente e di migliorare le sue prestazioni.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              2. COOKIE UTILIZZATI DA QUESTO SITO
            </h3>
            <p>Questo sito utilizza le seguenti categorie di cookie e strumenti di tracciamento:</p>

            <div className="space-y-4 pt-2">
              {/* Technical Cookies */}
              <div className="p-4 rounded-2xl bg-[#0267C1]/10 space-y-1">
                <h4 className="font-title font-bold text-sm text-[#0267C1] uppercase">
                  A) Cookie Tecnici e di Sessione (Strettamente Necessari)
                </h4>
                <p className="text-xs sm:text-sm">
                  Sono indispensabili per il corretto funzionamento del sito e per memorizzare le tue preferenze sul consenso ai cookie (es. la scelta effettuata nel banner GDPR). Non richiedono consenso preventivo e non possono essere disattivati.
                </p>
              </div>

              {/* Analytical Cookies */}
              <div className="p-4 rounded-2xl bg-[#0267C1]/10 space-y-1">
                <h4 className="font-title font-bold text-sm text-[#0267C1] uppercase">
                  B) Cookie Analitici di Terze Parti (Google Analytics GA4)
                </h4>
                <p className="text-xs sm:text-sm">
                  Utilizziamo <strong>Google Analytics</strong> (ID di misurazione: <code>G-8CZNNZNHGT</code>) per raccogliere dati statistici aggregati e anonimizzati sulle visite del sito (pagine viste, durata sessione, provenienza).
                  <br />
                  <strong className="text-[#D56108]">Nota importante:</strong> Questi cookie vengono caricati ed attivati <em>ESCLUSIVAMENTE</em> se clicchi su &quot;ACCETTA&quot; nel banner cookie. Se scegli &quot;SOLO NECESSARI&quot; o chiudi il banner, Google Analytics non viene caricato né traccia la tua sessione.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              3. COME GESTIRE O REVOCARE IL TUO CONSENSO
            </h3>
            <p>
              Puoi modificare o revocare la tua scelta sul consenso ai cookie in qualsiasi momento cliccando sul pulsante sottostante. Questo cancellerà la preferenza memorizzata e ti reindirizzerà alla Home per mostrare nuovamente il banner.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleResetConsent}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0267C1] text-white hover:bg-[#D56108] font-title font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>RIPRISTINA PREFERENZE COOKIE</span>
              </button>

              {resetSuccess && (
                <span className="font-bold text-xs text-green-700 flex items-center gap-1.5 animate-pulse">
                  <Check className="w-4 h-4" /> Preferenze ripristinate! Reindirizzamento in corso...
                </span>
              )}
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 pt-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              4. DISABILITAZIONE DEI COOKIE DAL BROWSER
            </h3>
            <p>
              Puoi inoltre disabilitare del tutto i cookie modificando le impostazioni del tuo browser web:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D56108]">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D56108]">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D56108]">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-41f3-5700-74d3d632589d" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D56108]">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
