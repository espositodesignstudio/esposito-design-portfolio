"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const displayTitle = project.cardTitle || project.title;

  return (
    <Link href={`/lavori/${project.slug}`} data-hover-label={displayTitle} className="block w-full">
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="group relative block w-full rounded-[28px] md:rounded-[36px] overflow-hidden bg-[#0267C1]/5 border-2 border-[#0267C1]/15 group-hover:border-[#0267C1] transition-colors duration-300 shadow-md hover:shadow-xl"
      >
        {/* Cover Media Container - Clean without Category Badge */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0267C1]/10">
          <Image
            src={project.coverImage}
            alt={displayTitle}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Info Content Below Image */}
        <div className="p-6 md:p-7 min-h-[110px] md:min-h-[120px] flex flex-col justify-start">
          <div className="space-y-1.5">
            <h3 className="text-[#0267C1] group-hover:text-[#D56108] transition-colors font-bold">
              {displayTitle}
            </h3>
            <p className="text-sm md:text-base font-normal text-[#0267C1]/80 line-clamp-2 leading-snug">
              {project.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
