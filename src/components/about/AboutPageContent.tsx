"use client";

import {
  Target, Lightbulb, Award, Eye, Layers,
  Users, BarChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import ExpandOnHover from "./ExpandOnHover";


// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6",   label: "Years in Business" },
  { value: "12",  label: "Specialists" },
  { value: "3",   label: "Countries Served" },
];

const milestones = [
  { year: "2019", title: "Founded",                   desc: "Founded by James and Sarah to make enterprise-grade technology accessible to growing businesses." },
  { year: "2020", title: "First Major Client",         desc: "Scaled a fintech platform from 0 to 500k users, establishing our value-driven approach." },
  { year: "2021", title: "Team & Service Expansion",   desc: "Expanded to 12 specialists and launched our Digital Marketing division." },
  { year: "2022", title: "Automation Practice",        desc: "Built a dedicated automation division, reducing client manual workflows by over 65%." },
  { year: "2023", title: "50+ Engagements",            desc: "Surpassed 50 completed client projects across the US and Europe." },
  { year: "2024", title: "Full-Service Partner",       desc: "Launched IT Consulting to offer complete senior-led strategy, implementation, and cloud advisory." },
];

interface Value { icon: LucideIcon; name: string; desc: string; }

const values: Value[] = [
  { icon: Award,    name: "Client-First",         desc: "Every decision is made in the client's interest — not the technology, the trend, or the easier path for us." },
  { icon: Eye,      name: "Radical Transparency", desc: "Honest estimates, honest timelines, honest assessments — even when the truth is uncomfortable to share." },
  { icon: Layers,   name: "Build to Last",        desc: "We build systems and relationships that compound in value over time, not quick fixes that create tomorrow's debt." },
  { icon: Lightbulb, name: "Continuous Learning", desc: "Technology moves fast. We stay at the edge so our clients always benefit from what is genuinely best today." },
  { icon: Users,    name: "True Partnership",     desc: "We work with you, not for you. Your domain knowledge and our technical expertise together is the winning combination." },
  { icon: BarChart, name: "Measurable Impact",    desc: "Every engagement has clear goals and metrics. We are accountable to outcomes and results, not hours billed." },
];

const whyUs = [
  { icon: Award,  title: "Senior-Only Delivery",    desc: "Every project is led and delivered by senior practitioners — not handed to a junior team after the pitch. You work with the same people you met in the discovery call, start to finish." },
  { icon: Eye,    title: "Transparent by Default",   desc: "We share project status, costs, and honest assessments in real time. You will never be caught off-guard by a missed deadline or a ballooning invoice at the end of a sprint." },
  { icon: Target, title: "Outcomes, Not Activity",   desc: "We are measured on results, not effort. Every engagement begins with clearly agreed success metrics — and we are held accountable to those, not to a statement of hours worked." },
];



// ─── Timeline ─────────────────────────────────────────────────────────────────

function Timeline() {
  return (
    <div>
      {milestones.map((m, i) => (
        <div key={m.year} className="flex gap-5">
          <div className="flex flex-col items-center">
            <div
              className="mt-[7px] w-3 h-3 rounded-full shrink-0"
              style={{
                background: "linear-gradient(120deg, #06B6D4, #3B82F6)",
                boxShadow: "0 0 0 4px rgba(6,182,212,0.12)",
              }}
            />
            {i < milestones.length - 1 && (
              <div
                className="flex-1 mt-2.5 min-h-[52px]"
                style={{ width: 1, background: "#E0F2FE" }}
              />
            )}
          </div>
          <div className="pb-8 min-w-0">
            <span className="text-[11px] font-bold text-royal-deep uppercase tracking-widest">
              {m.year}
            </span>
            <h3 className="font-display font-semibold text-ink mt-0.5" style={{ fontSize: 15 }}>
              {m.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function AboutPageContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-canvas border-b border-border">
        <div
          className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at top right, rgba(6,182,212,0.07) 0%, transparent 65%)" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="gold-rule mx-auto" aria-hidden="true" />
<span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "black", border: "none" }}>About Us</span>
              <h1
                className="mt-6 font-display font-bold text-ink text-balance"
                style={{ fontSize: "clamp(38px, 5.5vw, 64px)", lineHeight: 1.03, letterSpacing: "-0.03em" }}
              >
                We are{" "}
                <span className="gradient-text">aibizmod</span>
              </h1>
              <p
                className="mt-6 text-muted-foreground max-w-2xl mx-auto"
                style={{ fontSize: 19, lineHeight: 1.65 }}
              >
                A team of builders, thinkers, and technologists on a mission to
                help businesses grow through technology.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats strip */}
          <AnimatedSection delay={0.1}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12 max-w-2xl mx-auto overflow-hidden rounded-card"
              style={{ background: "#E0F2FE", border: "1px solid #E0F2FE" }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="py-6 text-center bg-surface">
                  <div
                    className="font-display font-bold text-ink"
                    style={{ fontSize: 30, letterSpacing: "-0.02em" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>


        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-tint border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Timeline */}
            <AnimatedSection className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <span className="gold-rule" aria-hidden="true" />
                <span className="eyebrow mb-6">
                  <span className="eyebrow-star" aria-hidden="true">✦</span>
                  Our Journey
                </span>
                <div className="mt-6">
                  <Timeline />
                </div>
              </div>
            </AnimatedSection>

            {/* Narrative */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              <span className="gold-rule" aria-hidden="true" />
              <span className="eyebrow" style={{ color: "black", border: "none" }}>Our Story</span>
              <h2
                className="mt-6 font-display font-bold text-ink"
                style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#0E7490" }}
              >
                How we got here
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-[1.8]" style={{ fontSize: 15 }}>
                <p>
                  aibizmod was founded in 2019 by James and Sarah, former enterprise engineers
                  who saw a need for a firm where technical excellence and business goals align.
                  We focus on bringing clarity to what to build, when to build it, and how to scale it.
                </p>
                <p>
                  As we grew, we added specialists in digital marketing, cloud infrastructure, and
                  automation. We skip bloated retainers and avoid unnecessary complexity, focusing instead
                  on senior-led execution for a limited number of clients at a time.
                </p>
                <p>
                  Today, we partner with companies ranging from pre-seed startups to established
                  enterprises. Our commitment remains simple: honest work, built to last, in your interest.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="gold-rule mx-auto" aria-hidden="true" />
            <span className="eyebrow" style={{ color: "black", border: "none" }}>Our Purpose</span>
            <h2
              className="mt-6 font-display font-bold text-ink"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0E7490" }}
            >
              Mission &amp; Vision
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission — dark card */}
            <AnimatedSection delay={0.05}>
              <div className="h-full bg-ink rounded-card p-8 md:p-10">
                <div
                  className="w-12 h-12 rounded-btn flex items-center justify-center mb-6"
                  style={{ background: "rgba(6,182,212,0.20)", border: "1px solid rgba(6,182,212,0.30)" }}
                >
                  <Target size={22} className="text-white" aria-hidden="true" />
                </div>
                <h3
                  className="font-display font-bold text-white mb-4"
                  style={{ fontSize: 22 }}
                >
                  Our Mission
                </h3>
                <p className="leading-relaxed" style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.60)" }}>
                  To make world-class technology accessible to businesses of
                  every size — delivering software, strategy, and execution that
                  creates measurable, lasting impact.
                </p>
              </div>
            </AnimatedSection>

            {/* Vision — gold-hairline card */}
            <AnimatedSection delay={0.12}>
              <div className="h-full card-royal p-8 md:p-10">
                <div className="icon-box mb-6">
                  <Lightbulb size={22} aria-hidden="true" />
                </div>
                <h3
                  className="font-display font-bold text-ink mb-4"
                  style={{ fontSize: 22 }}
                >
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 17, lineHeight: 1.65 }}>
                  To be the technology partner that businesses grow with for
                  decades — not a vendor they outgrow, but a team that evolves
                  alongside them.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-canvas border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="gold-rule mx-auto" aria-hidden="true" />
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "black", border: "none" }}>What We Stand For</span>
            <h2
              className="mt-6 font-display font-bold"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0E7490" }}
            >
              Core Values
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed" style={{ fontSize: 16 }}>
              These are not aspirational wall art. They are the principles that
              guide how we make decisions every day.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, name, desc }, i) => (
              <AnimatedSection key={name} delay={i * 0.07}>
                <div className="card-royal h-full p-6">
                  <div className="icon-box mb-4">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-ink mb-2" style={{ fontSize: 16 }}>
                    {name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ExpandOnHover />

      {/* ── Why Work With Us ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-ink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(184,134,11,0.7)" }}>
              Why aibizmod
            </p>
            <h2
              className="font-display font-bold text-white text-balance"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              A different kind of technology partner
            </h2>
            <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ fontSize: 16, color: "rgba(255,255,255,0.50)" }}>
              The things that make us genuinely worth working with are not the
              things most agencies lead with.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div
                    className="w-14 h-14 rounded-card flex items-center justify-center mb-6 mx-auto md:mx-0"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <Icon size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-display font-semibold text-white mb-3"
                    style={{ fontSize: 17 }}
                  >
                    {title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
                    {desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
