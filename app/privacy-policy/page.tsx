"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeaderLogo from "@/components/global/HeaderLogo";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";

export default function PrivacyPolicyPage() {
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
            PRIVACY POLICY
          </h1>
          <p className="text-[#0267C1]/80 font-nunito font-semibold text-sm">
            Informativa sul trattamento dei dati personali ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR). Ultimo aggiornamento: 2026.
          </p>
        </div>

        <div className="bg-[#0267C1]/5 p-6 md:p-10 rounded-3xl border border-[#0267C1]/15 space-y-6 font-nunito text-sm md:text-base leading-relaxed text-[#0267C1]/90">
          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              1. TITOLARE DEL TRATTAMENTO
            </h3>
            <p>
              Il Titolare del trattamento dei dati raccolti tramite questo sito web è <strong>Peppe Esposito</strong> (Esposito Design).
              Per qualsiasi chiarimento o esercizio dei diritti previsti dal GDPR, è possibile contattare il Titolare via email all&apos;indirizzo:{" "}
              <a href="mailto:espositodesign@outlook.it" className="underline font-bold text-[#D56108]">
                espositodesign@outlook.it
              </a>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              2. TIPOLOGIA DI DATI RACCOLTI
            </h3>
            <p>Questo sito web raccoglie e tratta le seguenti categorie di dati:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong>Dati forniti volontariamente dall&apos;utente:</strong> Nome, indirizzo Email, numero di Telefono, preferenze di servizio e dettagli del messaggio inseriti nel form di contatto.
              </li>
              <li>
                <strong>Dati di navigazione e statistici:</strong> Indirizzo IP anonimizzato, dati di navigazione, tipo di browser e dispositivo raccolti tramite <em>Google Analytics</em> solo previo consenso espresso dell&apos;utente.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              3. FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO
            </h3>
            <p>I dati forniti saranno trattati esclusivamente per le seguenti finalità:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong>Gestione delle richieste di contatto:</strong> Rispondere a richieste di informazioni, preventivi o collaborazioni inviate dall&apos;utente (Base giuridica: esecuzione di misure precontrattuali o contrattuali).
              </li>
              <li>
                <strong>Analisi statistica aggregata:</strong> Valutare e migliorare le prestazioni e la fruibilità del sito tramite Google Analytics (Base giuridica: consenso dell&apos;utente rilasciato tramite banner cookie).
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              4. MODALITÀ DI TRATTAMENTO E CONSERVAZIONE
            </h3>
            <p>
              Il trattamento viene effettuato mediante strumenti informatici e telematici con logiche strettamente correlate alle finalità indicate e con adozione di adeguate misure di sicurezza tecniche e organizzative.
              I dati del form di contatto vengono conservati per il tempo strettamente necessario a evadere la richiesta e ad adempiere a eventuali obblighi di legge.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              5. COMUNICAZIONE A TERZI
            </h3>
            <p>
              I dati dell&apos;utente non saranno ceduti a terzi né diffusi. Per la gestione dell&apos;invio delle email dal form contatti ci avvaliamo del servizio sicuro <strong>Resend</strong>. Per le analisi statistiche anonimizzate ci avvaliamo dei servizi di <strong>Google Ireland Limited</strong>.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <h3 className="font-title font-bold text-base md:text-lg text-[#0267C1]">
              6. DIRITTI DELL&apos;INTERESSATO
            </h3>
            <p>
              Ai sensi degli artt. 15-22 del Regolamento UE 2016/679, l&apos;utente ha il diritto in qualsiasi momento di:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Ottenere la conferma dell&apos;esistenza o meno di propri dati personali e la loro comunicazione in forma intelligibile.</li>
              <li>Chiedere l&apos;aggiornamento, la rettifica o la cancellazione dei dati.</li>
              <li>Chiedere la limitazione del trattamento o opporsi allo stesso.</li>
              <li>Revocare in qualsiasi momento il consenso espresso senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
            </ul>
            <p className="pt-2">
              Per esercitare tali diritti, è sufficiente inviare una comunicazione scritta a:{" "}
              <a href="mailto:espositodesign@outlook.it" className="underline font-bold text-[#D56108]">
                espositodesign@outlook.it
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
