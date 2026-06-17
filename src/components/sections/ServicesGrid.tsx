"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import { StackedCards } from "@/components/ui/glass-cards";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative bg-white px-6 py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(210,247,255,0.48),transparent_32%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#487F89]">
              What We Do
            </span>
            <h2
              className="mt-5 font-display font-bold text-[#0F172A] text-balance"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                lineHeight: 1.1,
              }}
            >
              What Do We Bring to You?
            </h2>
            <p
              className="mt-5 text-stone-600"
              style={{ fontSize: 18, lineHeight: 1.7 }}
            >
              All the innovative solutions you need to grow your business are
              here. We add value with services that simplify workflows, improve
              efficiency, and strengthen your decisions.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {["Build", "Connect", "Scale"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-white/65 px-4 py-3 text-center text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <StackedCards />
      </div>
    </section>
  );
}
