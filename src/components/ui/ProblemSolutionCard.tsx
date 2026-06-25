"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";


interface ProblemSolutionCardProps {
  slug: string;
  parentSlug: string;
  challenge: string;
  challengePoints: string[];
  solution: string;
  solutionPoints: string[];
}

// Safely resolve Lucide icons to prevent compilation or runtime issues with dependencies
const getIcon = (name: string): Lucide.LucideIcon => {
  const Icon = (Lucide as Record<string, unknown>)[name] as Lucide.LucideIcon | undefined;
  if (Icon) return Icon;

  // Robust fallbacks for older versions of lucide-react
  if (name === "CircleAlert") return Lucide.AlertCircle || Lucide.AlertTriangle;
  if (name === "TriangleAlert") return Lucide.AlertTriangle || Lucide.AlertCircle;
  if (name === "ShieldAlert") return Lucide.Shield || Lucide.AlertTriangle;
  if (name === "CheckCircle2") return Lucide.CheckCircle;
  if (name === "ShieldCheck") return Lucide.Shield || Lucide.CheckCircle;
  if (name === "BadgeCheck") return Lucide.CheckCircle;

  return Lucide.HelpCircle || Lucide.Info;
};

// Dynamically select premium Lucide icons based on subservice category
function getIconNames(slug: string, parentSlug: string) {
  const s = (slug || "").toLowerCase();
  const ps = (parentSlug || "").toLowerCase();

  // Security / Compliance
  if (s.includes("security") || s.includes("compliance") || ps.includes("security") || ps.includes("compliance")) {
    return {
      challenge: "ShieldAlert",
      solution: "ShieldCheck",
    };
  }

  // Hosting / Infrastructure / DevOps / Operations
  if (
    s.includes("hosting") ||
    s.includes("infrastructure") ||
    s.includes("devops") ||
    s.includes("database") ||
    s.includes("operations") ||
    ps.includes("hosting") ||
    ps.includes("infrastructure")
  ) {
    return {
      challenge: "TriangleAlert",
      solution: "Rocket",
    };
  }

  // Development / Software / Apps / Automation
  if (
    s.includes("software") ||
    s.includes("development") ||
    s.includes("app") ||
    s.includes("automation") ||
    s.includes("ai") ||
    s.includes("vision") ||
    s.includes("generative") ||
    ps.includes("software") ||
    ps.includes("development") ||
    ps.includes("app") ||
    ps.includes("automation")
  ) {
    return {
      challenge: "Bug",
      solution: "Sparkles",
    };
  }

  // Marketing / Customer Exp / Analytics / Insights / Default
  return {
    challenge: "CircleAlert",
    solution: "BadgeCheck",
  };
}

export default function ProblemSolutionCard({
  slug,
  parentSlug,
  challenge,
  challengePoints,
  solution,
  solutionPoints,
}: ProblemSolutionCardProps) {
  const iconNames = getIconNames(slug, parentSlug);
  const ChallengeIcon = getIcon(iconNames.challenge);
  const SolutionIcon = getIcon(iconNames.solution);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <HighlightGroup className="group w-full">
        <HighlighterItem glowColor="before:bg-blue-500" className="rounded-3xl p-px w-full">
          {/* Premium Glass Card Body */}
          <div className="relative overflow-hidden rounded-[23px] bg-white/70 dark:bg-black/90 backdrop-blur-xl p-8 md:p-12 lg:p-14 border border-slate-200/50 dark:border-slate-800/50">
            {/* Particles background */}
            <Particles
              className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
              quantity={150}
              color={"#0891b2"}
              vy={-0.15}
            />

            {/* Subtle dot grid graphics */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#0891b2 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden="true"
            />

            {/* Soft background mesh glows */}
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-cyan-200/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT: Challenge section */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 border border-red-200/70 text-red-500 shadow-sm transition-transform duration-500 group-hover:rotate-6">
                  <ChallengeIcon size={20} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                  The Challenge
                </span>
              </div>

              <h3 className="font-display font-semibold text-[#0F172A] text-xl mb-4 leading-tight">
                Identifying the hurdles
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm mb-8 line-clamp-2" title={challenge}>
                {challenge}
              </p>
            </div>

            <ul className="space-y-3.5 mt-auto">
              {challengePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE: Divider */}
          <div className="flex flex-col items-center justify-center self-stretch py-4 lg:py-0 pointer-events-none">
            {/* Desktop vertical divider */}
            <div className="hidden lg:block w-px h-full bg-gradient-to-b from-cyan-100/10 via-cyan-200/80 to-cyan-100/10 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-cyan-100/80 flex items-center justify-center shadow-[0_8px_24px_rgba(8,145,178,0.08)]">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              </div>
            </div>
            
            {/* Mobile horizontal divider */}
            <div className="lg:hidden w-full h-px bg-gradient-to-r from-cyan-100/10 via-cyan-200/80 to-cyan-100/10 my-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-cyan-100/80 flex items-center justify-center shadow-[0_8px_24px_rgba(8,145,178,0.08)]">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT: Solution section */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200/70 text-blue-500 shadow-sm transition-transform duration-500 group-hover:-rotate-6">
                  <SolutionIcon size={18} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                  How We Solve It
                </span>
              </div>

              <h3 className="font-display font-semibold text-[#0F172A] text-xl mb-4 leading-tight">
                Our approach & solution
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm mb-8 line-clamp-2" title={solution}>
                {solution}
              </p>
            </div>

            <ul className="space-y-3.5 mt-auto">
              {solutionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0891b2]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

            </div>
          </div>
        </HighlighterItem>
      </HighlightGroup>
    </motion.div>
  );
}
