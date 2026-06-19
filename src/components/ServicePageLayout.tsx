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
  Sparkles, type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";
import ShaderBackground from "@/components/ui/shader-background";
import { StarButton } from "@/components/ui/star-button";
import StickyFooterLayout from "@/components/layout/StickyFooterLayout";

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

const serviceImages: Record<string, string> = {
  "web-development":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
  "digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  "hosting-infrastructure":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  automation:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  "customer-exp-management":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  "it-consulting-it-services":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
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
    <div className="border-b border-cyan-100 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span
          className={`font-semibold text-sm pr-4 leading-snug transition-colors ${
            open ? "text-cyan-700" : "text-[#0F172A] group-hover:text-cyan-700"
          }`}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-cyan-600" : "text-slate-400"
          }`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const prefersReduced = useReducedMotion();
  const heroImage = serviceImages[data.slug] ?? serviceImages["web-development"];

  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main className="bg-white text-ink">

        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-36">
          <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
          <div
            className="pointer-events-none absolute left-1/2 top-24 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
            {/* Breadcrumb */}
            <nav
              className="mb-8 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-[13px] text-slate-500 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="transition-colors hover:text-[#0F172A]">Home</Link>
              <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
              <Link href="/services" className="transition-colors hover:text-[#0F172A]">Services</Link>
              <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
              <span className="font-medium text-[#0F172A]" aria-current="page">{data.name}</span>
            </nav>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md">
                <Sparkles size={14} aria-hidden="true" />
                Our Services
              </span>

              {/* H1 */}
              <h1
                className="mt-7 max-w-3xl font-display font-thin text-[#0F172A] text-balance"
                style={{
                  fontSize: "clamp(40px, 6vw, 76px)",
                  lineHeight: 1.02,
                }}
              >
                {data.name}
              </h1>

              {/* Tagline */}
              <p
                className="mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md md:text-lg"
              >
                {data.tagline}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" aria-label="Get a free consultation">
                  <StarButton
                    as="span"
                    lightColor="#38bdf8"
                    backgroundColor="#0f172a"
                    className="h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.55),0_0_4px_rgba(56,189,248,0.7)]"
                  >
                    Get a Free Consultation
                    <ArrowRight size={16} aria-hidden="true" />
                  </StarButton>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-100 bg-white/55 px-6 text-sm font-semibold text-[#0F172A] shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:border-cyan-200 hover:bg-white"
                >
                  All Services
                </Link>
              </div>
            </motion.div>
            </div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="relative"
            >
              <div
                className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-cyan-100 bg-cyan-50 shadow-[0_26px_80px_rgba(8,145,178,0.16)]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(15,23,42,0.34)), url(${heroImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(210,247,255,0.52),transparent_34%)]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/55 bg-white/55 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.15)] backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    aibizmod delivery
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Strategy, implementation, launch, and support with one
                    connected technical team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Overview ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 py-24 bg-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(210,247,255,0.6),transparent_32%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

              {/* Left: description */}
              <AnimatedSection direction="left" className="lg:col-span-3">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Overview
                </span>
                <h2
                  className="mt-5 font-display font-thin text-[#0F172A]"
                  style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.08 }}
                >
                  What we deliver
                </h2>
                <div className="mt-6 space-y-4">
                  {data.overview.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-slate-600 leading-relaxed"
                      style={{ fontSize: 17, lineHeight: 1.65 }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right: key benefits sticky card */}
              <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
                <div className="rounded-[28px] border border-cyan-100 bg-white/70 p-8 shadow-[0_18px_55px_rgba(59,130,246,0.10)] backdrop-blur-md lg:sticky lg:top-24">
                  <h3 className="font-display font-semibold text-[#0F172A] mb-5" style={{ fontSize: 18 }}>
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {data.overview.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={16}
                          className="text-cyan-600 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-slate-600 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 3. What's Included ──────────────────────────────────────────── */}
        <section className="px-6 py-24 bg-[#F8FEFF]">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                What&apos;s Included
              </span>
              <h2
                className="mt-5 font-display font-thin text-[#0F172A] text-balance"
                style={{
                  fontSize: "clamp(30px, 4vw, 52px)",
                  lineHeight: 1.08,
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
                    <div className="flex h-full flex-col rounded-[24px] border border-cyan-100/80 bg-white/75 p-6 shadow-[0_18px_55px_rgba(59,130,246,0.09)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(8,145,178,0.14)]">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50 text-cyan-700 shadow-[0_12px_28px_rgba(8,145,178,0.10)]">
                        <Icon size={19} aria-hidden="true" />
                      </div>
                      <h3
                        className="font-display font-semibold text-[#0F172A] mb-2"
                        style={{ fontSize: 17, lineHeight: 1.3 }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">
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
        <section
          className="relative overflow-hidden px-6 py-24 bg-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(210,247,255,0.56),transparent_34%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700 mb-3">
                How It Works
              </p>
              <h2
                className="font-display font-thin text-[#0F172A] text-balance"
                style={{
                  fontSize: "clamp(30px, 4vw, 52px)",
                  lineHeight: 1.08,
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
                              background: "rgba(236, 254, 255, 0.86)",
                              border: "1px solid rgba(103, 232, 249, 0.45)",
                              boxShadow: "0 16px 40px rgba(8,145,178,0.14)",
                            }}
                          >
                            <Icon size={22} className="text-cyan-700" aria-hidden="true" />
                            <span
                              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                              style={{ background: "linear-gradient(120deg, #06B6D4, #3B82F6)" }}
                              aria-hidden="true"
                            >
                              {i + 1}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-[#0F172A] text-sm mb-2">
                            {step.title}
                          </h3>
                          <p className="text-xs leading-relaxed text-slate-600">
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
                            background: "rgba(236, 254, 255, 0.86)",
                            border: "1px solid rgba(103, 232, 249, 0.45)",
                            boxShadow: "0 16px 40px rgba(8,145,178,0.14)",
                          }}
                        >
                          <Icon size={18} className="text-cyan-700" aria-hidden="true" />
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
                        <h3 className="font-display font-semibold text-[#0F172A] text-sm pt-3 mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-600">
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
        <section className="py-20 px-6 bg-[#F8FEFF] border-y border-cyan-100">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Tech Stack &amp; Tools
              </span>
              <h2
                className="mt-5 font-display font-thin text-[#0F172A]"
                style={{
                  fontSize: "clamp(28px, 4vw, 46px)",
                  lineHeight: 1.08,
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
                    className="rounded-full px-4 py-2 text-sm font-medium text-[#0F172A] cursor-default shadow-[0_10px_24px_rgba(59,130,246,0.08)] transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      border: "1px solid rgba(103,232,249,0.42)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(6,182,212,0.55)";
                      el.style.background = "#ECFEFF";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(103,232,249,0.42)";
                      el.style.background = "rgba(255,255,255,0.72)";
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
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                FAQ
              </span>
              <h2
                className="mt-5 font-display font-thin text-[#0F172A]"
                style={{
                  fontSize: "clamp(30px, 4vw, 52px)",
                  lineHeight: 1.08,
                }}
              >
                Common questions
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-[28px] border border-cyan-100 bg-white/75 px-8 py-2 shadow-[0_18px_55px_rgba(59,130,246,0.10)] backdrop-blur-md">
                {data.faqs.map((faq) => (
                  <FAQItem key={faq.q} faq={faq} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 7. CTA Banner ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white px-6 py-24">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
            aria-hidden="true"
          />

          <AnimatedSection className="relative z-10 mx-auto max-w-4xl rounded-[32px] border border-cyan-100 bg-[#ECFEFF]/70 p-8 text-center shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md md:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Let&apos;s Talk
            </span>

            <h2
              className="mt-5 font-display font-thin text-[#0F172A] text-balance"
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                lineHeight: 1.08,
              }}
            >
              Start your{" "}
              <span className="gradient-text font-normal">{data.name}</span>{" "}
              project today
            </h2>

            <p
              className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600"
            >
              Tell us what you&apos;re building and we&apos;ll put together a
              tailored plan, timeline, and estimate at no charge.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" aria-label="Get a free consultation">
                <StarButton
                  as="span"
                  lightColor="#38bdf8"
                  backgroundColor="#0f172a"
                  className="h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                >
                  Get a Free Consultation
                  <ArrowRight size={16} aria-hidden="true" />
                </StarButton>
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-100 bg-white/55 px-6 text-sm font-semibold text-[#0F172A] shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:border-cyan-200 hover:bg-white"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </main>
      </StickyFooterLayout>
    </>
  );
}
