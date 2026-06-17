"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import { StackedCards } from "@/components/ui/glass-cards";

export default function ServicesGrid() {
  return (
    <section id="services">
      {/* Section header */}
      <div className="py-24 px-6 bg-tint">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center">
            <span className="gold-rule mx-auto" aria-hidden="true" />
            <span className="eyebrow">
              <span className="eyebrow-star" aria-hidden="true">✦</span>
              What We Do
            </span>
            <h2
              className="mt-6 font-display font-bold text-ink text-balance"
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Services Built for Scale
            </h2>
            <p
              className="mt-4 text-muted-foreground max-w-xl mx-auto"
              style={{ fontSize: 17, lineHeight: 1.65 }}
            >
              From concept to deployment, we cover the full technology spectrum so
              you can focus on growing your business.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Stacked glass cards */}
      <StackedCards />
    </section>
  );
}
