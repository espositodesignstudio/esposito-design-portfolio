"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextReveal from "@/components/global/TextReveal";

interface ToolSticker {
  id: string;
  name: string;
  category: string;
  iconPath: string;
  baseRotate: number;
  floatDuration: number;
  floatDelay: number;
  badgeTag: string;
}

const TOOLS: ToolSticker[] = [
  {
    id: "illustrator",
    name: "Illustrator",
    category: "Vector & Branding",
    iconPath: "/assets/illustrator.svg",
    baseRotate: -6,
    floatDuration: 2.8,
    floatDelay: 0,
    badgeTag: "Vector",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    category: "Photo & Edit",
    iconPath: "/assets/photoshop.svg",
    baseRotate: 5,
    floatDuration: 3.2,
    floatDelay: 0.3,
    badgeTag: "Editing",
  },
  {
    id: "after-effects",
    name: "After Effects",
    category: "Motion & FX",
    iconPath: "/assets/after-effects.svg",
    baseRotate: -5,
    floatDuration: 2.9,
    floatDelay: 0.6,
    badgeTag: "Motion",
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "Video Editing",
    iconPath: "/assets/capcut.svg",
    baseRotate: 6,
    floatDuration: 3.1,
    floatDelay: 0.2,
    badgeTag: "Reels",
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX & Systems",
    iconPath: "/assets/figma.svg",
    baseRotate: -4,
    floatDuration: 2.7,
    floatDelay: 0.5,
    badgeTag: "UI/UX",
  },
  {
    id: "premiere",
    name: "Premiere Pro",
    category: "Video Production",
    iconPath: "/assets/premiere-pro.svg",
    baseRotate: 7,
    floatDuration: 3.0,
    floatDelay: 0.4,
    badgeTag: "Video",
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "AI & Prompting",
    iconPath: "/assets/claude.svg",
    baseRotate: -6,
    floatDuration: 2.8,
    floatDelay: 0.7,
    badgeTag: "AI Core",
  },
  {
    id: "higgsfield",
    name: "Higgsfield",
    category: "AI Video Gen",
    iconPath: "/assets/higgsfield.svg",
    baseRotate: 4,
    floatDuration: 3.3,
    floatDelay: 0.1,
    badgeTag: "AI Motion",
  },
];

export default function SkillsStickerBoard() {
  return (
    <section className="relative w-full my-[80px] md:my-[150px] px-4 sm:px-6 md:px-12 bg-[#F1E3CB] select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <TextReveal>
            <h2 className="text-[#0267C1]">
              LE MIE SKILLS
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="max-w-2xl mx-auto">
              Software standard del settore, combinati con strumenti IA di ultima generazione.
            </p>
          </TextReveal>
        </div>

        {/* Stickers Area */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 items-center justify-center pt-6">
          {TOOLS.map((tool) => {
            return (
              <motion.div
                key={tool.id}
                initial={{ rotate: tool.baseRotate }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [tool.baseRotate, tool.baseRotate + 2.5, tool.baseRotate],
                }}
                transition={{
                  duration: tool.floatDuration,
                  delay: tool.floatDelay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.15,
                  y: 0,
                  rotate: 0,
                  zIndex: 40,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="relative flex flex-col items-center justify-center cursor-pointer group select-none"
              >
                {/* Individual Die-Cut Sticker Container */}
                <div className="relative p-3.5 md:p-4 rounded-3xl bg-white border-[3.5px] border-white shadow-[0_8px_20px_rgba(2,103,193,0.12)] group-hover:shadow-[0_20px_35px_rgba(2,103,193,0.25)] transition-all duration-300 flex flex-col items-center">
                  <div className="absolute inset-0 rounded-[22px] border border-black/5 pointer-events-none" />

                  {/* Software Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center">
                    <Image
                      src={tool.iconPath}
                      alt={`${tool.name} Logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Tool Name Tag */}
                  <div className="mt-3 text-center">
                    <span className="font-nunito block text-xs md:text-sm font-extrabold text-[#0267C1] tracking-tight leading-none group-hover:text-[#D56108] transition-colors">
                      {tool.name}
                    </span>
                    <span className="font-nunito block text-[10px] text-[#0267C1]/60 font-semibold tracking-wider uppercase mt-1">
                      {tool.badgeTag}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
