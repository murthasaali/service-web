"use client";

import { Search, Pencil, Code2, Rocket } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We deep-dive into your goals, users, and constraints — mapping the problem before writing a single line of code.",
  },
  {
    icon: Pencil,
    title: "Design",
    desc: "Architecture, UX flows, and system design — all validated with stakeholders before development begins.",
  },
  {
    icon: Code2,
    title: "Develop",
    desc: "Agile sprints, clean code, and continuous integration — delivering working software every two weeks.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    desc: "Staged rollouts, monitoring, and post-launch support — we stay on until your product is live and stable.",
  },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 px-6 bg-tint">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="gold-rule mx-auto" aria-hidden="true" />
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true">✦</span>
            How We Work
          </span>
          <h2
            className="mt-6 font-display font-bold text-ink text-balance"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            A Process You Can Count On
          </h2>
          <p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.65 }}
          >
            Every engagement follows the same disciplined four-step process —
            predictable, transparent, and built for outcomes.
          </p>
        </AnimatedSection>

        {/* Desktop: horizontal 4-step timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-10 left-[12.5%] right-[12.5%] h-px"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, #7E22CE 0%, rgba(126,34,206,0.25) 100%)",
              }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <AnimatedSection key={step.title} delay={i * 0.14}>
                    <div className="flex flex-col items-center text-center">
                      {/* Icon circle */}
                      <div
                        className="relative w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-5 z-10"
                        style={{
                          border: "1px solid rgba(184,134,11,0.22)",
                          boxShadow: "0 4px 24px rgba(30,22,38,0.06)",
                        }}
                      >
                        <Icon size={26} className="text-royal" aria-hidden="true" />
                        {/* Step number badge */}
                        <span
                          className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-ink text-white text-[10px] font-bold flex items-center justify-center"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                      </div>
                      <h3
                        className="font-display font-semibold text-ink"
                        style={{ fontSize: 18 }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  {/* Left: icon + connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className="relative w-14 h-14 rounded-full bg-surface flex items-center justify-center shrink-0 z-10"
                      style={{
                        border: "1px solid rgba(184,134,11,0.22)",
                        boxShadow: "0 4px 16px rgba(30,22,38,0.06)",
                      }}
                    >
                      <Icon size={20} className="text-royal" aria-hidden="true" />
                      <span
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-ink text-white text-[9px] font-bold flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 my-2"
                        aria-hidden="true"
                        style={{ background: "rgba(126,34,206,0.18)" }}
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className={`${i < steps.length - 1 ? "pb-10" : ""}`}>
                    <h3
                      className="font-display font-semibold text-ink pt-3"
                      style={{ fontSize: 17 }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
