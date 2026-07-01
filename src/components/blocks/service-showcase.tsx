import React, { type ReactNode } from "react";
import { type LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface ShowcaseTag {
  icon: LucideIcon;
  label: string;
}

export interface ServiceShowcaseProps {
  title: string;
  tags: ShowcaseTag[];
  headline: string;
  description: string;
  mockup: ReactNode;
  href: string;
  reverse?: boolean;
  dark?: boolean;
}

export default function ServiceShowcase({
  title,
  tags,
  headline,
  description,
  mockup,
  href,
  reverse = false,
  dark = false,
}: ServiceShowcaseProps) {
  return (
    <div className={`rounded-3xl overflow-hidden relative min-h-[400px] flex items-center w-full transition-colors duration-300 ${
      dark 
        ? "bg-slate-900/95 border border-slate-800/85 shadow-[0_12px_40px_rgba(15,23,42,0.18)]" 
        : "bg-white border border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.02)]"
    }`}>
      {/* Dotted Background Pool */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: dark 
            ? "radial-gradient(circle, rgba(34, 211, 238, 0.08) 1.2px, transparent 1.2px)" 
            : "radial-gradient(circle, rgba(8, 145, 178, 0.15) 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          maskImage: `radial-gradient(ellipse at ${reverse ? "25%" : "75%"} 40%, black 40%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(ellipse at ${reverse ? "25%" : "75%"} 40%, black 40%, transparent 75%)`,
        }}
      />

      {/* Main Grid Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 items-center relative z-10">
        
        {/* Text Column */}
        <div className={`space-y-4 md:space-y-5 ${reverse ? "order-1 md:order-2" : "order-1"}`}>
          {/* Eyebrow Service Name as a prominent tech badge */}
          <div className="mb-2">
            <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] border shadow-sm ${
              dark 
                ? "border-cyan-500/30 bg-cyan-500/10 text-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.12)]" 
                : "border-cyan-200 bg-cyan-50 text-[#0891B2]"
            }`}>
              {title}
            </span>
          </div>

          <h2 className={`text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight ${
            dark ? "text-slate-100" : "text-ink"
          }`}>
            {headline}
          </h2>

          <p className={`text-sm md:text-base leading-relaxed ${
            dark ? "text-slate-400" : "text-stone-600"
          }`}>
            {description}
          </p>
          
          {/* Tags Pills Row */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag, idx) => {
              const Icon = tag.icon;
              return (
                <div 
                  key={idx} 
                  className={`rounded-full px-3 py-1 flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 ${
                    dark 
                      ? "border border-slate-800 bg-slate-900/60 text-slate-300" 
                      : "border border-cyan-100/70 bg-[#ECFEFF]/60 text-[#0E7490]"
                  }`}
                >
                  <Icon size={13} aria-hidden="true" className={`${dark ? "text-[#22d3ee]" : "text-[#0891B2]"} shrink-0`} />
                  <span>{tag.label}</span>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Link 
              href={href} 
              className={`inline-flex items-center gap-1 text-sm font-semibold group transition-colors ${
                dark ? "text-[#22d3ee] hover:text-cyan-300" : "text-[#0891B2] hover:text-[#0e7490]"
              }`}
            >
              <span>Learn more</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 ml-1" />
            </Link>
          </div>
        </div>

        {/* Mockup Column */}
        <div className={`flex justify-center items-center min-h-[280px] w-full relative ${reverse ? "order-2 md:order-1" : "order-2"}`}>
          {mockup}
        </div>

      </div>
    </div>
  );
}
