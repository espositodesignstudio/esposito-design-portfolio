"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import TextReveal from "../global/TextReveal";
import { PROJECTS } from "@/data/projects";

export default function ProjectGrid() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="progetti-selezionati" className="w-full my-[80px] md:my-[150px] px-10 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Centered Title Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-[#0267C1]">
              PROGETTI IN EVIDENZA
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-[#0267C1]/90">
              Una selezione curata dei miei progetti di Branding e UX/UI Design.
            </p>
          </TextReveal>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {featuredProjects.map((project, idx) => (
            <TextReveal key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </TextReveal>
          ))}
        </div>

        {/* CTA link to all projects */}
        <div className="text-center pt-8">
          <TextReveal>
            <Link
              href="/lavori"
              className="pill-btn pill-btn-primary px-10 py-4"
              data-hover-label="Vedi tutti i progetti"
            >
              VEDI TUTTI I PROGETTI
            </Link>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
