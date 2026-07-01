"use client";

import React from "react";
import {
  ContainerScroll,
  ContainerSticky,
  ContainerAnimated,
  ContainerInset,
  HeroVideo,
  HeroButton,
} from "@/components/blocks/animated-video-on-scroll";
import CapabilityShowcase from "@/components/sections/CapabilityShowcase";

export default function AIAutomationHero() {
  const handleScrollToShowcase = () => {
    const el = document.getElementById("ai-showcases");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      id="ai-section" 
      className="relative w-full overflow-hidden text-slate-900 border-t border-b border-slate-200/50"
      style={{
        background: "linear-gradient(180deg, #F8FEFF 0%, #F5FAFB 100%)",
      }}
    >
      {/* Background Radial Gradient & Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(60% 60% at 50% 25%, rgba(8, 145, 178, 0.09) 0%, rgba(8, 145, 178, 0.02) 60%, transparent 100%)",
        }}
      />

      {/* 1. Scroll-pinned Video Hero */}
      <ContainerScroll className="relative h-[115vh] w-full bg-transparent">
        <ContainerSticky className="z-10 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center gap-8 md:gap-10 relative">
            
            {/* Header Text Area */}
            <ContainerAnimated className="text-center flex flex-col items-center pt-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0891B2] mb-4">
                AI & Automation
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-thin tracking-tighter text-[#0F172A] max-w-4xl leading-[1.1] mb-6">
                Intelligent Systems for the Work That Matters
              </h1>
              <p className="text-stone-600 font-sans text-[16px] sm:text-lg max-w-[48ch] leading-relaxed mb-6">
                A focused suite of AI and automation services — designed for businesses that want practical, production-ready intelligent systems.
              </p>
              <HeroButton 
                onClick={handleScrollToShowcase}
                className="px-6 py-3 text-sm font-semibold"
              >
                See our AI services
              </HeroButton>
            </ContainerAnimated>

            {/* Video Mockup Area */}
            <div className="w-full flex justify-center items-center relative mt-6 md:mt-8">
              <ContainerInset className="w-full aspect-video overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl shadow-slate-900/10">
                <HeroVideo 
                  src="/videos/ai-hero.mp4#t=3" 
                  startTime={3}
                  scrollControlled={true}
                  className="w-full h-full object-cover"
                />
              </ContainerInset>
            </div>

          </div>
        </ContainerSticky>
      </ContainerScroll>

      {/* 2. Capabilities & Showcases (Replaced with the new interactive 3D showcase component) */}
      <CapabilityShowcase />
    </div>
  );
}
