"use client";

import {
  Award, Clock, Globe, CheckCircle,
  Users, Layers, Rocket, type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "50+",  label: "Projects Delivered",  icon: CheckCircle },
  { value: "10+",  label: "Industries Served",   icon: Globe       },
  { value: "24/7", label: "Support Desk",        icon: Clock       },
  { value: "ISO",  label: "Certified Process",   icon: Award       },
];

const values: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Users,
    title: "Expert Multidisciplinary Team",
    desc: "Our engineers, designers and strategists operate as a single squad, bringing deep domain expertise to every layer of the product.",
  },
  {
    icon: Layers,
    title: "Battle-Tested Process",
    desc: "We work with proven agile models that have clear milestones, transparent communication, and consistent delivery — no surprises.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Technology",
    desc: "We build on modern, scalable stacks that keep you ahead of the curve — not technical debt that holds you back.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-28 px-6 bg-canvas relative overflow-hidden border-t border-cyan-100/30">
      {/* Premium background mesh glow elements */}
      <div className="absolute top-1/4 -right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-200/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[450px] h-[450px] rounded-full bg-blue-200/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Stats Grid */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <AnimatedSection>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Why Choose Us
              </span>
              <h2
                className="mt-6 font-display font-extrabold text-primary leading-[1.1] tracking-tight text-balance"
                style={{
                  fontSize: "clamp(30px, 4vw, 44px)",
                }}
              >
                Built on Trust, Driven by Results
              </h2>
              <p
                className="mt-4 text-muted-foreground text-[16px] leading-[1.7]"
              >
                We are not just about delivering code. We own business outcomes, get rid of technical debt, and deliver at the highest standard.
              </p>
            </AnimatedSection>

            {/* Redesigned Stats Grid */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-slate-200/60 mt-8">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="group space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ECFEFF] border border-cyan-100/50 text-[#0891B2] group-hover:scale-110 group-hover:bg-[#CFFAFE] transition-all duration-300">
                          <Icon size={15} />
                        </div>
                        <span className="font-display text-[26px] sm:text-[32px] font-bold text-ink tracking-tight">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider leading-none">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Value Props Cards */}
          <div className="lg:col-span-7 space-y-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <AnimatedSection key={val.title} delay={i * 0.12}>
                  <div className="group relative bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_36px_rgba(8,145,178,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {/* Glowing left highlight border on hover */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#06B6D4] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      {/* Icon Container with double ring hover effect */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#ECFEFF] border border-cyan-100 text-royal transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#CFFAFE]">
                        <Icon size={20} />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-ink text-[18px] group-hover:text-royal-deep transition-colors duration-300">
                          {val.title}
                        </h3>
                        <p className="text-muted-foreground text-[14.5px] leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}