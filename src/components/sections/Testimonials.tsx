"use client";

import { Star } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { CardStack } from "@/components/ui/card-stack";

const testimonials = [
  {
    quote:
      "aibizmod delivered our entire platform in under 3 months. The quality exceeded our expectations and the team was remarkably responsive throughout.",
    name: "Sarah M.",
    role: "CTO",
    company: "FinVault",
    initials: "SM",
  },
  {
    quote:
      "Their automation solution saved us 200+ hours per month. The ROI was visible within the first quarter — one of the best technology investments we've made.",
    name: "James K.",
    role: "Head of Operations",
    company: "LogiFlow",
    initials: "JK",
  },
  {
    quote:
      "We've worked with many agencies, but aibizmod's approach to tech consulting is unmatched. They truly understand business outcomes, not just technology.",
    name: "Priya R.",
    role: "CEO",
    company: "Nexora",
    initials: "PR",
  },
];

const cardStackItems = testimonials.map((t, index) => ({
  id: index,
  title: t.name,
  quote: t.quote,
  role: t.role,
  company: t.company,
  initials: t.initials,
}));

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Client Stories
          </span>
          <h2
            className="mt-5 font-display font-bold text-primary text-balance"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
            }}
          >
            Trusted by Teams That Ship
          </h2>
          <p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.65 }}
          >
            But don&apos;t take our word for it — listen to the businesses we&apos;ve helped grow.
          </p>
        </AnimatedSection>

        {/* Testimonials stacked cards */}
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <CardStack
              items={cardStackItems}
              initialIndex={0}
              autoAdvance={true}
              intervalMs={4500}
              pauseOnHover={true}
              showDots={true}
              cardWidth={560}
              cardHeight={340}
              renderCard={(item, { active }) => (
                <div
                  className={`card-royal h-full w-full p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                    active ? "border-cyan-500/40 bg-surface/90 shadow-[0_8px_30px_rgba(6,182,212,0.06)]" : "border-border/30 bg-surface/50 opacity-60"
                  }`}
                >
                  <div>
                    {/* 5-star rating */}
                    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={13}
                          className="text-yellow-400 fill-yellow-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Decorative opening quote */}
                    <p
                      className="font-display leading-none text-royal/10 select-none -mt-1 mb-1"
                      style={{ fontSize: 72 }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </p>

                    {/* Quote body */}
                    <p className="text-muted-foreground leading-relaxed -mt-4 text-[14px] md:text-[15px]">
                      {item.quote}
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="border-t border-border my-5" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center shrink-0"
                        style={{
                          background: "linear-gradient(120deg, #06B6D4, #3B82F6)",
                        }}
                        aria-hidden="true"
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-ink text-sm">{item.title}</p>
                        <p className="text-[12px] text-muted-foreground">
                          {item.role} · {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
