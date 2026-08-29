"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/global/TextReveal";

// Official Tool SVGs
const IllustratorIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#200D00" />
    <rect x="3" y="3" width="94" height="94" rx="19" stroke="#FF9A00" strokeWidth="4" />
    <path
      d="M38.5 68L35.2 57.5H23.8L20.5 68H12L24.5 32H34.5L47 68H38.5ZM29.5 39.2L25.8 50.8H33.2L29.5 39.2Z"
      fill="#FF9A00"
    />
    <path
      d="M52 38.5C52 36.3 53.6 34.8 56.2 34.8C58.8 34.8 60.4 36.3 60.4 38.5C60.4 40.7 58.8 42.2 56.2 42.2C53.6 42.2 52 40.7 52 38.5ZM52.2 68V46H60.2V68H52.2Z"
      fill="#FF9A00"
    />
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#001E36" />
    <rect x="3" y="3" width="94" height="94" rx="19" stroke="#31A8FF" strokeWidth="4" />
    <path
      d="M17 68V32H30.5C37.2 32 41.5 35.4 41.5 41.2C41.5 47 37 50.5 30.5 50.5H25.5V68H17ZM25.5 43.5H29.5C32.8 43.5 34.2 42.4 34.2 41.2C34.2 40 32.8 39 29.5 39H25.5V43.5Z"
      fill="#31A8FF"
    />
    <path
      d="M62.5 54.8C58.2 53.8 54.8 52.8 54.8 49.8C54.8 47.5 57 46 60.2 46C63.2 46 66.2 47.5 68 49L72 42.8C69.2 40.5 64.8 39 59.8 39C51.5 39 46.5 43.8 46.5 50.5C46.5 59.5 54.5 60.5 60.8 61.8C65.2 62.8 67.2 64.2 67.2 66.8C67.2 69.5 64.2 71.2 60.2 71.2C55.5 71.2 51.5 68.8 49.2 66.5L45 73C48.5 76.2 54 78 60 78C69.8 78 75.8 73.2 75.8 66.2C75.8 58.2 68.8 56.2 62.5 54.8Z"
      fill="#31A8FF"
    />
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#120A2A" />
    <rect x="3" y="3" width="94" height="94" rx="19" stroke="#9999FF" strokeWidth="4" />
    <path
      d="M38.5 68L35.2 57.5H23.8L20.5 68H12L24.5 32H34.5L47 68H38.5ZM29.5 39.2L25.8 50.8H33.2L29.5 39.2Z"
      fill="#9999FF"
    />
    <path
      d="M72.5 54.5H53.5C53.8 58.5 56.8 61.2 61 61.2C64.2 61.2 66.8 60 68.8 58.5L72.8 64.2C69.8 66.8 65.5 68 60.5 68C50.5 68 45 61.5 45 53.5C45 45.2 51 39 60 39C69 39 73 45.5 73 53.5V54.5H72.5ZM53.5 49.2H65C64.5 46.2 62.2 44.5 59.5 44.5C56.5 44.5 54.2 46.2 53.5 49.2Z"
      fill="#9999FF"
    />
  </svg>
);

const PremiereIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#220033" />
    <rect x="3" y="3" width="94" height="94" rx="19" stroke="#EA77FF" strokeWidth="4" />
    <path
      d="M17 68V32H30.5C37.2 32 41.5 35.4 41.5 41.2C41.5 47 37 50.5 30.5 50.5H25.5V68H17ZM25.5 43.5H29.5C32.8 43.5 34.2 42.4 34.2 41.2C34.2 40 32.8 39 29.5 39H25.5V43.5Z"
      fill="#EA77FF"
    />
    <path
      d="M48 68V46H55.5V49.2C57.2 46.8 60.2 45.5 63.5 45.5C65.2 45.5 66.5 45.8 67.5 46.2V54C66.2 53.5 64.8 53.2 63.2 53.2C58.8 53.2 56 56 56 61.5V68H48Z"
      fill="#EA77FF"
    />
  </svg>
);

const CapCutIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#0A0A0C" />
    <path
      d="M26 30L48 44L26 58V30Z"
      fill="#FFFFFF"
    />
    <path
      d="M74 70L52 56L74 42V70Z"
      fill="#FFFFFF"
    />
    <path
      d="M26 58L74 42"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M26 42L74 58"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#1E1E1E" />
    <path d="M34 25C29.0294 25 25 29.0294 25 34C25 38.9706 29.0294 43 34 43H43V25H34Z" fill="#F24E1E" />
    <path d="M43 25H52C56.9706 25 61 29.0294 61 34C61 38.9706 56.9706 43 52 43H43V25Z" fill="#FF7262" />
    <path d="M61 52C61 47.0294 56.9706 43 52 43H43V61H52C56.9706 61 61 56.9706 61 52Z" fill="#1ABCFE" />
    <path d="M34 43C29.0294 43 25 47.0294 25 52C25 56.9706 29.0294 61 34 61H43V43H34Z" fill="#A259FF" />
    <path d="M34 61C29.0294 61 25 65.0294 25 70C25 74.9706 29.0294 79 34 79C38.9706 79 43 74.9706 43 70V61H34Z" fill="#0ACF83" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#D97757" />
    <g transform="translate(50, 50)">
      <path
        d="M0 -26 C2 -12 12 -2 26 0 C12 2 2 12 0 26 C-2 12 -12 2 -26 0 C-12 -2 -2 -12 0 -26 Z"
        fill="#FDFBF7"
      />
      <path
        d="M-18 -18 C-8 -8 -8 -8 0 0 C-8 -8 -8 -8 -18 -18 Z"
        stroke="#FDFBF7"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 -18 C8 -8 8 -8 0 0 C8 -8 8 -8 18 -18 Z"
        stroke="#FDFBF7"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M-18 18 C-8 8 -8 8 0 0 C-8 8 -8 8 -18 18 Z"
        stroke="#FDFBF7"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 18 C8 8 8 8 0 0 C8 8 8 8 18 18 Z"
        stroke="#FDFBF7"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const HiggsfieldIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16" fill="none">
    <rect width="100" height="100" rx="22" fill="#0D111A" />
    <rect x="3" y="3" width="94" height="94" rx="19" stroke="#00F0FF" strokeWidth="2.5" strokeOpacity="0.4" />
    <path
      d="M30 26V74M70 26V74M30 50H70"
      stroke="url(#higgsGradient)"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="7" fill="#00F0FF" />
    <defs>
      <linearGradient id="higgsGradient" x1="30" y1="26" x2="70" y2="74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF" />
        <stop offset="0.5" stopColor="#7000FF" />
        <stop offset="1" stopColor="#FF007A" />
      </linearGradient>
    </defs>
  </svg>
);

interface ToolSticker {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType;
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
    icon: IllustratorIcon,
    baseRotate: -6,
    floatDuration: 2.8,
    floatDelay: 0,
    badgeTag: "Vector",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    category: "Photo & Edit",
    icon: PhotoshopIcon,
    baseRotate: 5,
    floatDuration: 3.2,
    floatDelay: 0.3,
    badgeTag: "Editing",
  },
  {
    id: "after-effects",
    name: "After Effects",
    category: "Motion & FX",
    icon: AfterEffectsIcon,
    baseRotate: -5,
    floatDuration: 2.9,
    floatDelay: 0.6,
    badgeTag: "Motion",
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "Video Editing",
    icon: CapCutIcon,
    baseRotate: 6,
    floatDuration: 3.1,
    floatDelay: 0.2,
    badgeTag: "Reels",
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX & Systems",
    icon: FigmaIcon,
    baseRotate: -4,
    floatDuration: 2.7,
    floatDelay: 0.5,
    badgeTag: "UI/UX",
  },
  {
    id: "premiere",
    name: "Premiere Pro",
    category: "Video Production",
    icon: PremiereIcon,
    baseRotate: 7,
    floatDuration: 3.0,
    floatDelay: 0.4,
    badgeTag: "Video",
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "AI & Prompting",
    icon: ClaudeIcon,
    baseRotate: -6,
    floatDuration: 2.8,
    floatDelay: 0.7,
    badgeTag: "AI Core",
  },
  {
    id: "higgsfield",
    name: "Higgsfield",
    category: "AI Video Gen",
    icon: HiggsfieldIcon,
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
              HARDWARE & SOFTWARE STACK
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="max-w-2xl mx-auto">
              I miei ferri del mestiere: una combinazione di software standard del settore e strumenti IA di ultima generazione.
            </p>
          </TextReveal>
        </div>

        {/* Stickers Area */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 items-center justify-center pt-6">
          {TOOLS.map((tool) => {
            const IconComponent = tool.icon;

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
                  <IconComponent />

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
