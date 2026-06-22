"use client";

import {
  Target, Lightbulb, Award, Eye, Layers,
  Users, BarChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import ShaderBackground from "@/components/ui/shader-background";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/ui/animated-cards-stack";
import {
  BrandScroller,
  BrandScrollerReverse,
} from "@/components/ui/brand-scoller";
import ExpandOnHover from "./ExpandOnHover";


// ─── Data ─────────────────────────────────────────────────────────────────────

interface Value { icon: LucideIcon; name: string; desc: string; }

const values: Value[] = [
  { icon: Award,    name: "Client-First",         desc: "Every decision is made in the client's interest — not the technology, the trend, or the easier path for us." },
  { icon: Eye,      name: "Radical Transparency", desc: "Honest estimates, honest timelines, honest assessments — even when the truth is uncomfortable to share." },
  { icon: Layers,   name: "Build to Last",        desc: "We build systems and relationships that compound in value over time, not quick fixes that create tomorrow's debt." },
  { icon: Lightbulb, name: "Continuous Learning", desc: "Technology moves fast. We stay at the edge so our clients always benefit from what is genuinely best today." },
  { icon: Users,    name: "True Partnership",     desc: "We work with you, not for you. Your domain knowledge and our technical expertise together is the winning combination." },
  { icon: BarChart, name: "Measurable Impact",    desc: "Every engagement has clear goals and metrics. We are accountable to outcomes and results, not hours billed." },
];

// ─── Main export ──────────────────────────────────────────────────────────────

export default function AboutPageContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-32 md:pt-36">
        <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />

        <div
          className="pointer-events-none absolute left-1/2 top-28 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md">
                <Users size={14} aria-hidden="true" />
                About Us
              </span>
              <h1
                className="mt-7 font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.02 }}
              >
                We are{" "}
                <span className="gradient-text font-normal">aibizmod</span>
              </h1>
              <p
                className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md md:text-lg"
              >
                A team of builders, thinkers, and technologists on a mission to
                help businesses grow through technology.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 border-t border-border relative"
        style={{
          backgroundColor: "#f0f9ff",
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto max-w-3xl">

            {/* Narrative */}
            <AnimatedSection delay={0.1}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "black", border: "none" }}>Our Story</span>
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
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "black", border: "none" }}>Our Purpose</span>
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

      <section className="pt-20 pb-4 px-6 bg-canvas border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
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

          <ContainerScroll className="h-[380vh] min-h-[500px]">
            <div className="sticky left-0 top-20 flex h-[calc(100vh-5rem)] w-full items-center justify-center py-12">
              <CardsContainer className="h-[360px] w-[min(88vw,420px)]">
                {values.map(({ icon: Icon, name, desc }, i) => (
                  <CardTransformed
                    key={name}
                    arrayLength={values.length}
                    index={i + 1}
                    incrementY={8}
                    incrementZ={12}
                    variant="light"
                    className="items-start justify-between rounded-card border-cyan-100 bg-white/85 p-7 text-left shadow-[0_18px_55px_rgba(8,145,178,0.12)]"
                    role="article"
                    aria-labelledby={`core-value-${i}-title`}
                  >
                    <div className="icon-box">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3
                        id={`core-value-${i}-title`}
                        className="font-display font-semibold text-ink"
                        style={{ fontSize: 24, lineHeight: 1.15 }}
                      >
                        {name}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </CardTransformed>
                ))}
              </CardsContainer>
            </div>
          </ContainerScroll>
        </div>
      </section>

      <section className="pt-14 pb-6 px-6 bg-canvas border-t border-border">
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-center font-display font-bold"
            style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.15, color: "#0E7490" }}
          >
            Trusted By Companies Like
          </h2>
        </div>
      </section>

      <section className="pb-14 bg-canvas">
        <div className="flex flex-col gap-6 mt-10">
          <BrandScroller />
          <BrandScrollerReverse />
        </div>
      </section>

      <ExpandOnHover />

    </>
  );
}
