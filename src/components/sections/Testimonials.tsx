"use client";

import { Star } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const testimonials = [
  {
    quote:
      "space-ai delivered our entire platform in under 3 months. The quality exceeded our expectations and the team was remarkably responsive throughout.",
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
      "We've worked with many agencies, but space-ai's approach to tech consulting is unmatched. They truly understand business outcomes, not just technology.",
    name: "Priya R.",
    role: "CEO",
    company: "Nexora",
    initials: "PR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="gold-rule mx-auto" aria-hidden="true" />
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true">✦</span>
            Client Stories
          </span>
          <h2
            className="mt-6 font-display font-bold text-ink text-balance"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Trusted by Teams That Ship
          </h2>
          <p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.65 }}
          >
            Don&apos;t take our word for it — hear directly from the businesses
            we&apos;ve helped grow.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="card-royal h-full p-8 flex flex-col">

                {/* 5-star rating */}
                <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
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
                <p
                  className="text-muted-foreground leading-relaxed flex-1 -mt-4"
                  style={{ fontSize: 15, lineHeight: 1.65 }}
                >
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="border-t border-border my-6" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(120deg, #06B6D4, #3B82F6)",
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{t.name}</p>
                    <p className="text-[12px] text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
