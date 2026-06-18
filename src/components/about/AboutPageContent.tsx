"use client";

import Link from "next/link";
import {
  Target, Lightbulb, Award, Eye, Layers,
  Users, BarChart, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

// ─── Data ─────────────────────────────────────────────────────────────────────

const team = [
  { name: "James Carter",    role: "CEO & Co-Founder",              initials: "JC", specialty: "Product Strategy · Business Growth" },
  { name: "Sarah Chen",      role: "CTO & Co-Founder",              initials: "SC", specialty: "Software Architecture · Engineering" },
  { name: "Priya Patel",     role: "Head of Digital Marketing",     initials: "PP", specialty: "SEO · Paid Media · Growth" },
  { name: "Marcus Williams", role: "Lead Engineer",                  initials: "MW", specialty: "Full-Stack · Automation" },
  { name: "David Kim",       role: "Head of Cloud & Infrastructure", initials: "DK", specialty: "AWS · DevOps · SRE" },
  { name: "Aisha Okonkwo",   role: "Client Experience Lead",        initials: "AO", specialty: "CX Strategy · Client Relations" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6",   label: "Years in Business" },
  { value: "12",  label: "Specialists" },
  { value: "3",   label: "Countries Served" },
];

const milestones = [
  { year: "2019", title: "Founded",                   desc: "space-ai was founded by James and Sarah with one belief: world-class technology should not be exclusive to enterprises with eight-figure IT budgets." },
  { year: "2020", title: "First Major Client",         desc: "Our flagship fintech partnership scaled from 0 to 500k users. It defined how we think about technology — as a growth lever, not a cost centre." },
  { year: "2021", title: "Team Expanded",              desc: "Grew to twelve specialists and launched our Digital Marketing practice, becoming a true end-to-end technology partner." },
  { year: "2022", title: "Automation Practice Launched", desc: "Identified a consistent gap in the market and built a practice around it — helping 10+ businesses reduce manual work by over 65% on average." },
  { year: "2023", title: "50 Engagements",             desc: "Surpassed 50 completed client engagements and expanded our reach to companies across the US and mainland Europe." },
  { year: "2024", title: "Full-Service Partner",       desc: "The launch of our IT Consulting practice completed the picture — from strategy and build through to operations and ongoing advisory." },
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

// ─── Team photo banner ────────────────────────────────────────────────────────

function TeamPhotoBanner() {
  const backRow  = team.slice(3);
  const frontRow = team.slice(0, 3);

  return (
    <div
      className="relative w-full h-72 md:h-[400px] rounded-card overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E1626 0%, #3B0764 50%, #1E1626 100%)" }}
      role="img"
      aria-label="The space-ai team"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(6,182,212,0.20)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(14,165,233,0.12)" }}
      />

      {/* Avatar arrangement */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-5">
        <div className="flex gap-3 md:gap-5">
          {backRow.map((m) => (
            <div
              key={m.name}
              title={m.name}
              className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center shadow-lg shrink-0"
              style={{
                background: "linear-gradient(120deg, #06B6D4, #3B82F6)",
                boxShadow: "0 0 0 3px rgba(255,255,255,0.10)",
              }}
            >
              <span className="text-white font-bold text-base md:text-lg select-none">
                {m.initials}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 md:gap-5 -mt-1">
          {frontRow.map((m) => (
            <div
              key={m.name}
              title={m.name}
              className="w-[72px] h-[72px] md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl shrink-0"
              style={{
                background: "linear-gradient(120deg, #06B6D4, #3B82F6)",
                boxShadow: "0 0 0 4px rgba(255,255,255,0.15)",
              }}
            >
              <span className="text-white font-bold text-xl md:text-2xl select-none">
                {m.initials}
              </span>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute bottom-5 left-0 right-0 text-center text-[11px] text-white/25 font-medium tracking-wider select-none">
        The space-ai team
      </span>
    </div>
  );
}

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
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                About Us
              </span>
              <h1
                className="mt-6 font-display font-bold text-ink text-balance"
                style={{ fontSize: "clamp(38px, 5.5vw, 64px)", lineHeight: 1.03, letterSpacing: "-0.03em" }}
              >
                We are{" "}
                <span className="gradient-text">space&#8209;ai</span>
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

          {/* Team banner */}
          <AnimatedSection delay={0.15}>
            <TeamPhotoBanner />
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
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                Our Story
              </span>
              <h2
                className="mt-6 font-display font-bold text-ink"
                style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
              >
                How we got here
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-[1.8]" style={{ fontSize: 15 }}>
                <p>
                  space-ai started with a simple question: why do so many
                  technology projects fail, despite good intentions on both
                  sides? James and Sarah — both former enterprise engineers —
                  had watched too many well-funded companies lose months and
                  budgets to software that didn&apos;t solve the actual problem. They
                  founded space-ai in 2019 to change that: a firm where
                  engineering excellence and business understanding were not
                  separate disciplines.
                </p>
                <p>
                  Our early years taught us that the most valuable thing we
                  could offer a client was not code — it was clarity. Clarity
                  about what to build, when to build it, and what to prioritise
                  first. As our team grew, we added specialists in digital
                  marketing, cloud infrastructure, and automation — always
                  hiring people who understood that technology is a means, not
                  an end.
                </p>
                <p>
                  We run our practice differently from most agencies. We do not
                  sell retainers to clients who do not need them. We do not
                  upsell complexity to inflate scope. We take on a limited
                  number of engagements at a time so that every client gets the
                  full attention of a senior team — not a fraction of a
                  distracted one.
                </p>
                <p>
                  Today, space-ai works with companies from pre-seed startups
                  to established businesses serving hundreds of thousands of
                  users. Whatever the size of the company, the commitment is the
                  same: honest work, done well, on time, in your interest.
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
            <span className="eyebrow">
              <span className="eyebrow-star" aria-hidden="true">✦</span>
              Our Purpose
            </span>
            <h2
              className="mt-6 font-display font-bold text-ink"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
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
            <span className="eyebrow">
              <span className="eyebrow-star" aria-hidden="true">✦</span>
              What We Stand For
            </span>
            <h2
              className="mt-6 font-display font-bold text-ink"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
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

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-tint border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="gold-rule mx-auto" aria-hidden="true" />
            <span className="eyebrow">
              <span className="eyebrow-star" aria-hidden="true">✦</span>
              The People Behind the Work
            </span>
            <h2
              className="mt-6 font-display font-bold text-ink"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Meet the Team
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed" style={{ fontSize: 16 }}>
              Small by design, senior by default. Every member of the team
              has shipped production software and worked directly with clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.07}>
                <div className="card-royal h-full p-7 text-center flex flex-col items-center">
                  {/* Gradient avatar */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(120deg, #06B6D4, #3B82F6)",
                      boxShadow: "0 4px 20px rgba(6,182,212,0.22)",
                    }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-2xl select-none">
                      {member.initials}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-ink text-base leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-royal-deep text-xs font-semibold mt-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed flex-1">
                    {member.specialty}
                  </p>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-royal-deep transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Work With Us ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-ink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(184,134,11,0.7)" }}>
              Why space-ai
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-canvas py-24 px-6 border-t border-border">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <span className="gold-rule mx-auto" aria-hidden="true" />
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true">✦</span>
            Work With Us
          </span>
          <h2
            className="mt-6 font-display font-bold text-ink text-balance"
            style={{ fontSize: "clamp(26px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Want to build{" "}
            <span className="gradient-text">something together?</span>
          </h2>
          <p
            className="mt-5 max-w-lg mx-auto text-muted-foreground leading-relaxed"
            style={{ fontSize: 17, lineHeight: 1.65 }}
          >
            We take on a limited number of new engagements each quarter to
            ensure every client gets our full attention — not a fraction of it.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-ghost">
              View Our Services
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
