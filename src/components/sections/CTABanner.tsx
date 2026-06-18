"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 px-6">

      {/* Ambient glow blobs — subtle gradient-shift via @keyframes glow-pulse */}
      <div
        className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.7) 0%, transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[440px] h-[440px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.6) 0%, transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatedSection>

          {/* Gold eyebrow label */}
          <span
            className="inline-flex items-center gap-1.5 text-label font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#B8860B" }}
          >
            <span aria-hidden="true">✦</span>
            Start Today
          </span>

          {/* Gradient headline */}
          <h2
            className="font-display font-bold text-white text-balance"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build Something{" "}
            <span className="gradient-text">Remarkable?</span>
          </h2>

          {/* Sub-headline */}
          <p
            className="mt-5 max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}
          >
            We partner with ambitious companies to turn ideas into impactful
            digital products — on time and built to last.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-ghost-dark">
              View Services
            </Link>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
