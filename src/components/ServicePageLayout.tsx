"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight, ChevronDown, CheckCircle, ArrowRight,
  Code2, Database, Server, Network, Cloud, TestTube,
  Smartphone, Monitor, Layers, Eye, Bell, Search,
  Target, FileText, Mail, Megaphone, LineChart,
  Workflow, Container, Shield, Activity, RefreshCw,
  Compass, Bot, Cpu, MessageSquare, Headphones,
  Package, Settings, Wrench, Zap, Users, Lightbulb,
  Globe, Award, Clock, Rocket, Pencil, BarChart, GitBranch,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";

// ─── Icon registry ────────────────────────────────────────────────────────────

export type IconKey =
  | "code2" | "database" | "server" | "network" | "cloud" | "testTube"
  | "smartphone" | "monitor" | "layers" | "eye" | "bell" | "search"
  | "target" | "fileText" | "mail" | "megaphone" | "lineChart"
  | "workflow" | "container" | "shield" | "activity" | "refreshCw"
  | "compass" | "bot" | "cpu" | "messageSquare" | "headphones"
  | "package" | "settings" | "wrench" | "zap" | "users" | "lightbulb"
  | "globe" | "award" | "clock" | "rocket" | "pencil" | "barChart" | "gitBranch";

const iconMap: Record<IconKey, LucideIcon> = {
  code2: Code2, database: Database, server: Server, network: Network,
  cloud: Cloud, testTube: TestTube, smartphone: Smartphone, monitor: Monitor,
  layers: Layers, eye: Eye, bell: Bell, search: Search, target: Target,
  fileText: FileText, mail: Mail, megaphone: Megaphone, lineChart: LineChart,
  workflow: Workflow, container: Container, shield: Shield, activity: Activity,
  refreshCw: RefreshCw, compass: Compass, bot: Bot, cpu: Cpu,
  messageSquare: MessageSquare, headphones: Headphones, package: Package,
  settings: Settings, wrench: Wrench, zap: Zap, users: Users,
  lightbulb: Lightbulb, globe: Globe, award: Award, clock: Clock,
  rocket: Rocket, pencil: Pencil, barChart: BarChart, gitBranch: GitBranch,
};

// ─── Data types ───────────────────────────────────────────────────────────────

export interface FeatureCard { icon: IconKey; title: string; desc: string; }
export interface ProcessStep  { icon: IconKey; title: string; desc: string; }
export interface FAQ           { q: string; a: string; }

export interface ServicePageData {
  name: string;
  tagline: string;
  slug: string;
  iconColor: string; // kept for backwards compat; layout uses text-royal throughout
  overview: { paragraphs: string[]; benefits: string[]; };
  features: FeatureCard[];   // exactly 6
  process: ProcessStep[];    // exactly 4
  techStack: string[];
  faqs: FAQ[];               // 4–5
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span
          className={`font-semibold text-sm pr-4 leading-snug transition-colors ${
            open ? "text-royal-deep" : "text-ink group-hover:text-royal-deep"
          }`}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-royal" : "text-muted-foreground"
          }`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <Navbar />
      <main>

        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-canvas border-b border-border">
          {/* Ambient blob */}
          <div
            className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(6,182,212,0.07) 0%, transparent 65%)",
            }}
          />

          <div className="max-w-7xl mx-auto relative">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-1.5 text-[13px] text-muted-foreground mb-8 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
              <ChevronRight size={13} className="shrink-0 text-border" aria-hidden="true" />
              <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
              <ChevronRight size={13} className="shrink-0 text-border" aria-hidden="true" />
              <span className="text-ink font-medium" aria-current="page">{data.name}</span>
            </nav>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Gold rule + eyebrow */}
              <span className="gold-rule" aria-hidden="true" />
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                Our Services
              </span>

              {/* H1 */}
              <h1
                className="mt-6 font-display font-bold text-ink text-balance leading-[1.05]"
                style={{
                  fontSize: "clamp(36px, 5vw, 58px)",
                  letterSpacing: "-0.03em",
                }}
              >
                {data.name}
              </h1>

              {/* Tagline */}
              <p
                className="mt-5 text-muted-foreground max-w-2xl leading-relaxed"
                style={{ fontSize: 19, lineHeight: 1.65 }}
              >
                {data.tagline}
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get a Free Consultation <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-ghost">
                  All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Overview ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* Left: description */}
              <AnimatedSection direction="left" className="lg:col-span-3">
                <span className="gold-rule" aria-hidden="true" />
                <span className="eyebrow">
                  <span className="eyebrow-star" aria-hidden="true">✦</span>
                  Overview
                </span>
                <h2
                  className="mt-6 font-display font-bold text-ink"
                  style={{ fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
                >
                  What we deliver
                </h2>
                <div className="mt-6 space-y-4">
                  {data.overview.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                      style={{ fontSize: 17, lineHeight: 1.65 }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right: key benefits sticky card */}
              <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
                <div className="card-royal p-8 lg:sticky lg:top-24">
                  <h3 className="font-display font-semibold text-ink mb-5" style={{ fontSize: 18 }}>
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {data.overview.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={16}
                          className="text-royal mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 3. What's Included ──────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-tint">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="gold-rule mx-auto" aria-hidden="true" />
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                What&apos;s Included
              </span>
              <h2
                className="mt-6 font-display font-bold text-ink text-balance"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Everything you need, nothing you don&apos;t
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.features.map((f, i) => {
                const Icon = iconMap[f.icon];
                return (
                  <AnimatedSection key={f.title} delay={i * 0.07}>
                    <div className="card-royal h-full p-6 flex flex-col">
                      <div className="icon-box mb-5">
                        <Icon size={19} aria-hidden="true" />
                      </div>
                      <h3
                        className="font-display font-semibold text-ink mb-2"
                        style={{ fontSize: 17, lineHeight: 1.3 }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {f.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. Process ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-ink">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(184,134,11,0.7)" }}>
                How It Works
              </p>
              <h2
                className="font-display font-bold text-white text-balance"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Our process
              </h2>
            </AnimatedSection>

            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connector */}
                <div
                  className="absolute top-8 left-[12.5%] right-[12.5%] h-px"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(6,182,212,0.5) 0%, rgba(14,165,233,0.2) 100%)",
                  }}
                />
                <div className="relative grid grid-cols-4 gap-6">
                  {data.process.map((step, i) => {
                    const Icon = iconMap[step.icon];
                    return (
                      <AnimatedSection key={step.title} delay={i * 0.12}>
                        <div className="flex flex-col items-center text-center">
                          <div
                            className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                          >
                            <Icon size={22} className="text-white" aria-hidden="true" />
                            <span
                              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                              style={{ background: "linear-gradient(120deg, #06B6D4, #3B82F6)" }}
                              aria-hidden="true"
                            >
                              {i + 1}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-white text-sm mb-2">
                            {step.title}
                          </h3>
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
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
            <div className="md:hidden">
              {data.process.map((step, i) => {
                const Icon = iconMap[step.icon];
                return (
                  <AnimatedSection key={step.title} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                          }}
                        >
                          <Icon size={18} className="text-white" aria-hidden="true" />
                          <span
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                            style={{ background: "linear-gradient(120deg, #06B6D4, #3B82F6)" }}
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                        </div>
                        {i < data.process.length - 1 && (
                          <div
                            className="w-px flex-1 my-2"
                            aria-hidden="true"
                            style={{ background: "rgba(6,182,212,0.25)" }}
                          />
                        )}
                      </div>
                      <div className={`${i < data.process.length - 1 ? "pb-8" : ""}`}>
                        <h3 className="font-display font-semibold text-white text-sm pt-3 mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
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

        {/* ── 5. Tech Stack ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-canvas border-b border-border">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <span className="gold-rule mx-auto" aria-hidden="true" />
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                Tech Stack &amp; Tools
              </span>
              <h2
                className="mt-6 font-display font-bold text-ink"
                style={{
                  fontSize: "clamp(22px, 3vw, 34px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Technologies we work with
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap justify-center gap-2.5">
                {data.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-pill text-sm font-medium text-ink cursor-default transition-colors"
                    style={{
                      background: "#ECFEFF",
                      border: "1px solid rgba(184,134,11,0.18)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(6,182,212,0.35)";
                      el.style.background = "#E0F2FE";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(184,134,11,0.18)";
                      el.style.background = "#ECFEFF";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-tint">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="gold-rule mx-auto" aria-hidden="true" />
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                FAQ
              </span>
              <h2
                className="mt-6 font-display font-bold text-ink"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Common questions
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-royal px-8 py-2">
                {data.faqs.map((faq) => (
                  <FAQItem key={faq.q} faq={faq} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 7. CTA Banner ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink py-24 px-6">
          {/* Ambient glows */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, rgba(6,182,212,0.7) 0%, transparent 70%)",
              animation: "glow-pulse 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, rgba(14,165,233,0.6) 0%, transparent 70%)",
              animation: "glow-pulse 6s ease-in-out infinite",
              animationDelay: "3s",
            }}
          />

          <AnimatedSection className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Gold label */}
            <span
              className="inline-flex items-center gap-1.5 text-label font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#B8860B" }}
            >
              <span aria-hidden="true">✦</span> Let&apos;s Talk
            </span>

            <h2
              className="font-display font-bold text-white text-balance"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Start your{" "}
              <span className="gradient-text">{data.name}</span>{" "}
              project today
            </h2>

            <p
              className="mt-5 max-w-xl mx-auto"
              style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}
            >
              Tell us what you&apos;re building and we&apos;ll put together a
              tailored plan, timeline, and estimate — at no charge.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-ghost-dark">
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  );
}
