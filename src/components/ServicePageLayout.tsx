"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
import SectionHeading from "@/components/common/SectionHeading";
import ShaderBackground from "@/components/ui/shader-background";
import { StarButton } from "@/components/ui/star-button";
import StickyFooterLayout from "@/components/layout/StickyFooterLayout";
import ServiceCardsSection, { type ServiceCard } from "@/components/ServiceCardsSection";

// ─── Icon registry ────────────────────────────────────────────────────────────

export type IconKey =
  | "code2" | "database" | "server" | "network" | "cloud" | "testTube"
  | "smartphone" | "monitor" | "layers" | "eye" | "bell" | "search"
  | "target" | "fileText" | "mail" | "megaphone" | "lineChart"
  | "workflow" | "container" | "shield" | "activity" | "refreshCw"
  | "compass" | "bot" | "cpu" | "messageSquare" | "headphones"
  | "package" | "settings" | "wrench" | "zap" | "users" | "lightbulb"
  | "globe" | "award" | "clock" | "rocket" | "pencil" | "barChart" | "gitBranch";

export const iconMap: Record<IconKey, LucideIcon> = {
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
  "software-development":
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1000&q=80",
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
  heroBullets: [string, string, string, string];
  slug: string;
  iconColor: string; // kept for backwards compat; layout uses text-royal throughout
  overview: { paragraphs: string[]; benefits: string[]; };
  features: FeatureCard[];   // exactly 6
  process: ProcessStep[];    // exactly 4
  techStack?: string[];
  faqs: FAQ[];               // 4–5
}

export type { ServiceCard };

// ─── Structured data ─────────────────────────────────────────────────────────

function buildServiceSchema(data: ServicePageData) {
  const pageUrl = `https://aibizmod.com/services/${data.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}/#service`,
        name: data.name,
        description: data.tagline,
        url: pageUrl,
        provider: { '@id': 'https://aibizmod.com/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://aibizmod.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://aibizmod.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────

function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <details className="group border-b border-cyan-100 last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 [&::-webkit-details-marker]:hidden">
        <span className="font-semibold text-sm pr-4 leading-snug text-[#0F172A] transition-colors group-hover:text-cyan-700 group-open:text-cyan-700">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-cyan-600"
        />
      </summary>
      <div className="pb-5">
        <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
      </div>
    </details>
  );
}

const getProcessDeliverables = (index: number) => {
  switch (index) {
    case 0:
      return [
        "Requirement scoping & architecture sign-off",
        "Milestone definition & project roadmap",
        "Technology stack alignment"
      ];
    case 1:
      return [
        "Prototype construction & component buildout",
        "API hooks & core database mapping",
        "Staging pipeline configuration"
      ];
    case 2:
      return [
        "Comprehensive QA & system stress-testing",
        "Staging deployment & user feedback cycle",
        "Performance audit & SEO verification"
      ];
    case 3:
      return [
        "Production DNS sync & SSL setup",
        "Live system telemetry & logs activation",
        "Post-launch audit & team handoff"
      ];
    default:
      return [];
  }
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function ServicePageLayout({
  data,
  techStackFooter,
  serviceCards,
}: {
  data: ServicePageData;
  techStackFooter?: ReactNode;
  serviceCards?: ServiceCard[];
}) {
  const prefersReduced = useReducedMotion();
  const heroImage = serviceImages[data.slug] ?? serviceImages["web-development"];
  const [activeStep, setActiveStep] = useState(0);
  const [mobileOpenStep, setMobileOpenStep] = useState(0);

  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main className="bg-white text-ink">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(data)) }}
          />

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
                className="mt-7 font-display font-thin text-[#0F172A] text-balance"
                style={{
                  fontSize: "clamp(34px, 5.2vw, 56px)",
                  lineHeight: 1.02,
                }}
              >
                {data.name}
              </h1>

              {/* Hero bullets */}
              <ul
                className="mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md space-y-2"
              >
                {data.heroBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-base leading-8 text-slate-600 md:text-lg">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>

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
                <SectionHeading eyebrow="Overview" heading="What we deliver" className="mb-6" />
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
        {/* <section className="px-6 py-24 bg-[#F8FEFF]">
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
        </section> */}

        {/* ── 3b. Animated Service Cards ──────────────────────────────────── */}
        {serviceCards && serviceCards.length > 0 && (
          <ServiceCardsSection cards={serviceCards} />
        )}

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
              <SectionHeading eyebrow="How It Works" heading="Our process" centered />
            </AnimatedSection>

            {/* Desktop: Interactive Stepper */}
            <div className="hidden md:grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start relative min-h-[460px]">
              {/* Left Column: Vertical Step Navigation */}
              <div className="space-y-4">
                {data.process.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <div key={step.title} className="relative">
                      <button
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={cn(
                          "relative z-10 flex items-center gap-6 p-6 rounded-3xl text-left w-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                          isActive ? "shadow-[0_10px_30px_rgba(8,145,178,0.04)]" : "hover:bg-slate-50/40"
                        )}
                      >
                        {/* Background slider pill using framer-motion */}
                        {isActive && (
                          <motion.div
                            layoutId="activeProcessStep"
                            className="absolute inset-0 bg-cyan-50/50 border border-cyan-100/50 rounded-3xl -z-10"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}

                        <span
                          className={cn(
                            "font-display font-light text-4xl tracking-tight transition-all duration-300",
                            isActive ? "text-cyan-600 scale-105 font-medium" : "text-slate-300"
                          )}
                        >
                          {`0${i + 1}`}
                        </span>

                        <div className="flex-1">
                          <h3
                            className={cn(
                              "font-display font-semibold text-base transition-colors duration-300",
                              isActive ? "text-[#0F172A]" : "text-slate-500"
                            )}
                          >
                            {step.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                            {step.desc}
                          </p>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Active Card Details */}
              <div className="relative h-full min-h-[380px]">
                <AnimatePresence mode="wait">
                  {(() => {
                    const step = data.process[activeStep];
                    const ActiveIcon = iconMap[step.icon];
                    return (
                      <motion.div
                        key={activeStep}
                        initial={prefersReduced ? {} : { opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReduced ? {} : { opacity: 0, y: -15 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="relative bg-white/70 backdrop-blur-md border border-cyan-100/80 rounded-[32px] p-8 md:p-10 shadow-[0_22px_70px_rgba(8,145,178,0.06)]"
                      >
                        {/* Decorative background glow */}
                        <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-gradient-to-r from-cyan-200/10 to-blue-200/10 -z-10 opacity-60 blur-xl" />

                        <div className="flex flex-col lg:flex-row gap-8">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-cyan-50 border border-cyan-200/60 text-cyan-600 shadow-[0_6px_16px_rgba(6,182,212,0.06)] transition-transform duration-500 hover:rotate-[360deg]">
                                <ActiveIcon size={20} aria-hidden="true" />
                              </div>
                              <span className="px-3 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase text-cyan-700 bg-cyan-50/50 border border-cyan-100 rounded-full">
                                PHASE 0{activeStep + 1}
                              </span>
                            </div>

                            <h3 className="font-display font-semibold text-[#0F172A] text-2xl mb-4 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                              {step.desc}
                            </p>
                          </div>

                          <div className="lg:w-64 border-t lg:border-t-0 lg:border-l border-cyan-100/50 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-4 block">
                              Deliverables & Focus
                            </span>
                            <ul className="space-y-3">
                              {getProcessDeliverables(activeStep).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                                  <span className="text-xs text-slate-600 font-medium leading-normal">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile: Interactive Accordion */}
            <div className="md:hidden space-y-4">
              {data.process.map((step, i) => {
                const isOpen = mobileOpenStep === i;
                return (
                  <div
                    key={step.title}
                    className={cn(
                      "border rounded-2xl transition-all duration-300 overflow-hidden",
                      isOpen
                        ? "border-cyan-200 bg-cyan-50/10 shadow-[0_12px_24px_rgba(8,145,178,0.04)]"
                        : "border-slate-100 bg-white"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setMobileOpenStep(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            "font-display font-light text-2xl tracking-tight transition-colors duration-300",
                            isOpen ? "text-cyan-500 font-semibold" : "text-slate-300"
                          )}
                        >
                          {`0${i + 1}`}
                        </span>
                        <h3
                          className={cn(
                            "font-display font-semibold text-sm transition-colors duration-300",
                            isOpen ? "text-[#0F172A]" : "text-slate-600"
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "text-slate-400 transition-transform duration-300",
                          isOpen && "rotate-180 text-cyan-600"
                        )}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100/50">
                        <p className="text-xs leading-relaxed text-slate-600 mb-4">
                          {step.desc}
                        </p>
                        <div className="bg-white/50 border border-cyan-100/50 rounded-xl p-4">
                          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-3 block">
                            Deliverables
                          </span>
                          <ul className="space-y-2">
                            {getProcessDeliverables(i).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                                <span className="text-[11px] text-slate-600 leading-normal">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. Tech Stack ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#F8FEFF] border-y border-cyan-100">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <SectionHeading eyebrow="Tech Stack & Tools" heading="Technologies we work with" centered />
            </AnimatedSection>

            {data.techStack && data.techStack.length > 0 ? (
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
            ) : null}

            {techStackFooter ? (
              <AnimatedSection delay={0.15}>{techStackFooter}</AnimatedSection>
            ) : null}
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <SectionHeading eyebrow="FAQ" heading="Common questions" centered />
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

      </main>
      </StickyFooterLayout>
    </>
  );
}
