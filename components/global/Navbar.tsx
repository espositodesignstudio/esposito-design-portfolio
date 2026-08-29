"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "/", icon: Home },
  { label: "CHI SONO", href: "/chi-sono", icon: User },
  { label: "PROGETTI", href: "/lavori", icon: Briefcase },
  { label: "CONTATTI", href: "/contatti", icon: Mail },
];

const MotionLink = motion.create(Link);

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[990] w-[calc(100vw-80px)] md:w-auto max-w-xl md:max-w-[95vw] select-none no-hover-label">
      <LayoutGroup id="navbarActiveBubbleGroup">
        {/* Apple-style Liquid Glass Container */}
        <div className="bg-[#F1E3CB]/15 backdrop-blur-3xl text-[#0267C1] rounded-full p-2 flex items-center justify-between md:justify-center w-full gap-2 sm:gap-2.5 border border-white/50 shadow-[0_20px_50px_rgba(2,103,193,0.12),inset_0_1px_0_0_rgba(255,255,255,0.7)]">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const IconComponent = item.icon;

            return (
              <MotionLink
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.2 }}
                className={`relative flex-1 md:flex-none flex items-center justify-center p-3.5 sm:p-4 md:py-2.5 md:px-6 rounded-full text-sm md:text-base font-title font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-white" : "text-[#0267C1] hover:text-[#D56108]"
                }`}
              >
                {/* Horizontal Sliding Selection Pill strictly along X-axis (No Y-slide or Bounce) */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBubble"
                    layout="position"
                    initial={false}
                    className="absolute inset-0 bg-[#0267C1] rounded-full shadow-md shadow-[#0267C1]/20 z-0"
                    transition={{ type: "spring", stiffness: 480, damping: 38 }}
                  />
                )}

                {/* Desktop view: Text ONLY (NEVER icons) */}
                <span className="relative z-10 hidden md:inline-block font-title text-sm md:text-base font-extrabold tracking-wide whitespace-nowrap">
                  {item.label}
                </span>

                {/* Mobile view: Icons ONLY (NEVER text) */}
                <div className="relative z-10 flex md:hidden items-center justify-center">
                  <IconComponent className="w-6 h-6 stroke-[2.5]" />
                </div>
              </MotionLink>
            );
          })}
        </div>
      </LayoutGroup>
    </nav>
  );
}
