"use client";

import {
  Award, Clock, Globe, CheckCircle,
  Users, Layers, Rocket, type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "50+",  label: "Projects Delivered",  icon: CheckCircle },
  { value: "10+",  label: "Industries Served",   icon: Globe       },
  { value: "24/7", label: "Support",             icon: Clock       },
  { value: "ISO",  label: "Certified Process",   icon: Award       },
];

const values: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Users,
    title: "Expert Multidisciplinary Team",
    desc: "Our engineers, designers, and strategists work as a unified squad — bringing deep domain expertise across every layer of the product.",
  },
  {
    icon: Layers,
    title: "Battle-Tested Process",
    desc: "We follow proven agile frameworks with clear milestones, transparent communication, and consistent delivery — no surprises.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Technology",
    desc: "We build with scalable, modern stacks that keep you ahead of the curve — not technical debt that slows you down.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="gold-rule mx-auto" aria-hidden="true" />
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true">✦</span>
            Why Choose Us
          </span>
          <h2
            className="mt-6 font-display font-bold text-ink text-balance"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Built on Trust, Driven by Results
          </h2>
          <p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.65 }}
          >
            We don&apos;t just ship code — we take ownership of outcomes and
            hold ourselves to the highest standard of delivery.
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="card-royal flex flex-col items-center text-center p-6">
                  <div className="icon-box mb-4">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <p className="font-display text-[32px] font-bold text-ink leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-label text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Value prop cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <AnimatedSection key={val.title} delay={i * 0.12}>
                <div className="card-royal p-8 h-full">
                  <div className="icon-box mb-5">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3
                    className="font-display font-semibold text-ink"
                    style={{ fontSize: 20, lineHeight: 1.2 }}
                  >
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
