"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import WhatsappButton from "@/components/global/WhatsappButton";
import TextReveal from "@/components/global/TextReveal";
import HeaderLogo from "@/components/global/HeaderLogo";
import ContactSection from "@/components/global/ContactSection";
import { PROJECTS, MediaItem } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SingleProjectPage({ params }: PageProps) {
  const resolvedParams = use(params);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === resolvedParams.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  // Construct normalized media items list
  const allMediaItems: MediaItem[] = project.mediaItems && project.mediaItems.length > 0
    ? project.mediaItems
    : [
      ...(project.coverVideo ? [{ type: "video" as const, src: project.coverVideo, alt: `${project.title} Cover Video` }] : []),
      { type: "image" as const, src: project.coverImage, alt: `${project.title} Cover Image` },
      ...project.gallery.map((src, i) => ({ type: "image" as const, src, alt: `${project.title} detail ${i + 1}` }))
    ];

  // Cover media item (first item in the list)
  const coverMedia = allMediaItems[0];
  // Remaining gallery items after the cover media
  const galleryItems = allMediaItems.slice(1);

  return (
    <main className="min-h-screen bg-[#F1E3CB] text-[#0267C1] relative max-w-full overflow-x-hidden">
      {/* Header with Logo Left & Back Button */}
      <div className="w-full flex flex-col items-center md:items-start px-6 md:px-12 pt-8 pb-4 gap-6 text-center md:text-left">
        <HeaderLogo variant="blu" className="!px-0 !pt-0 w-full flex justify-center md:justify-start" />
        <Link
          href="/lavori"
          className="whitespace-nowrap inline-flex items-center gap-2 font-title font-bold text-xs uppercase bg-[#0267C1]/10 px-5 py-2.5 rounded-full hover:bg-[#0267C1] hover:text-white transition-colors shadow-sm mx-auto md:mx-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="whitespace-nowrap">TUTTI I PROGETTI</span>
        </Link>
      </div>

      {/* Hero Opening Title & Subtitle */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-10 text-center space-y-4">
        <TextReveal>
          <h1 className="text-[#0267C1] break-words">
            {project.title}
          </h1>
        </TextReveal>
        <TextReveal delay={0.1}>
          <p className="text-[#0267C1]/90 max-w-2xl mx-auto [text-wrap:pretty]">
            {project.subtitle}
          </p>
        </TextReveal>
      </section>

      {/* Opening Cover Media - Video or Image */}
      {coverMedia && (
        <section className="relative w-full max-w-7xl mx-auto px-10 md:px-12 py-8">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#0267C1]/10 border border-[#0267C1]/10 shadow-lg">
            {coverMedia.type === "video" ? (
              <video
                src={coverMedia.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={coverMedia.src}
                alt={coverMedia.alt || project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
              />
            )}
          </div>
        </section>
      )}

      {/* Project Details & Strategy Section */}
      <section className="max-w-5xl mx-auto px-10 md:px-12 py-6 space-y-8">
        <TextReveal>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-8 py-4 text-center text-sm md:text-base text-[#0267C1] max-w-full">
            <div className="flex items-center gap-2">
              <span className="font-title text-xs uppercase tracking-widest text-[#D56108]">ANNO</span>
              <span className="font-bold">{project.year}</span>
            </div>
            <span className="opacity-30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="font-title text-xs uppercase tracking-widest text-[#D56108]">CATEGORIA</span>
              <span className="font-bold">{project.subCategory}</span>
            </div>
            <span className="opacity-30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2 flex-wrap justify-center text-center">
              <span className="font-title text-xs uppercase tracking-widest text-[#D56108]">SCOPE</span>
              <span className="font-bold break-words">{project.scope.join(" · ")}</span>
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="space-y-4 text-center pt-2">
            <h2 className="text-[#0267C1] [text-wrap:balance]">
              {project.strategyTitle || "IL PROGETTO & LA STRATEGIA"}
            </h2>
            <p className="text-[#0267C1]/90 max-w-3xl mx-auto [text-wrap:pretty]">
              {project.strategyDescription || project.description}
            </p>
          </div>
        </TextReveal>
      </section>

      {/* Dynamic Full-Width Media Gallery */}
      {galleryItems.length > 0 && (
        <section className="max-w-6xl mx-auto px-10 md:px-12 py-12 space-y-12">
          {/* Item 1 - Full Width Horizontal */}
          {galleryItems[0] && (
            <TextReveal>
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#0267C1]/10 border border-[#0267C1]/10 shadow-md">
                {galleryItems[0].type === "video" ? (
                  <video
                    src={galleryItems[0].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={galleryItems[0].src}
                    alt={galleryItems[0].alt || `${project.title} detail 1`}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-cover"
                  />
                )}
              </div>
            </TextReveal>
          )}

          {/* Visual Direction Narrative Paragraph */}
          <TextReveal delay={0.1}>
            <div className="max-w-4xl mx-auto py-6 space-y-4 text-center">
              <h2 className="text-[#0267C1] [text-wrap:balance]">
                {project.visualDirectionTitle || "DIREZIONE VISIVA & SVILUPPO CONCETTUALE"}
              </h2>
              <p className="text-[#0267C1]/90 [text-wrap:pretty]">
                {project.visualDirectionDescription ||
                  "Il processo di sviluppo si è focalizzato sulla creazione di un linguaggio visivo organico capace di unire l'impatto tipografico essenziale alla praticità dell'esperienza utente."}
              </p>
            </div>
          </TextReveal>

          {/* All Remaining Gallery Items - Stacked Vertically, All Horizontal aspect-[16/9] */}
          {galleryItems.slice(1).map((item, idx) => (
            <TextReveal key={idx}>
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#0267C1]/10 border border-[#0267C1]/10 shadow-md">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt || `${project.title} detail ${idx + 2}`}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-cover"
                  />
                )}
              </div>
            </TextReveal>
          ))}
        </section>
      )}

      {/* Clean Next Project Section */}
      <section className="w-full py-16 px-10 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-title text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#D56108]">
            PROSSIMO PROGETTO
          </p>
          <Link
            href={`/lavori/${nextProject.slug}`}
            className="group block space-y-3"
          >
            <h2 className="text-[#0267C1] group-hover:text-[#D56108] opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-all duration-300 font-extrabold">
              {nextProject.cardTitle || nextProject.title}
            </h2>
            <div className="pt-2 md:hidden">
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0267C1] text-white text-xs font-title font-bold uppercase tracking-wider group-hover:bg-[#D56108] transition-colors shadow-md">
                SCOPRI IL PROGETTO <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <Navbar />
      <WhatsappButton />
    </main>
  );
}
