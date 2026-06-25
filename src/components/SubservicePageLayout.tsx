"use client";

/* eslint-disable @next/next/no-img-element */

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeading from "@/components/common/SectionHeading";
import ShaderBackground from "@/components/ui/shader-background";
import { StarButton } from "@/components/ui/star-button";
import StickyFooterLayout from "@/components/layout/StickyFooterLayout";
import { iconMap, type IconKey } from "@/components/ServicePageLayout";
import ProblemSolutionCard from "@/components/ui/ProblemSolutionCard";

// ─── Data types ───────────────────────────────────────────────────────────────

export interface SubserviceCapability {
  icon: IconKey;
  title: string;
  description: string;
}

export interface SubserviceUseCase {
  industry: string;
  title: string;
  description: string;
}

export interface SubserviceBenefit {
  title: string;
  description: string;
}

export interface SubserviceFAQ {
  q: string;
  a: string;
}

export interface SubservicePageData {
  name: string;
  parentName: string;
  parentSlug: string;
  slug: string;
  tagline: string;
  heroImage: string;

  solves: {
    challenge: string;
    challengePoints: string[];
    solution: string;
    solutionPoints: string[];
  };

  capabilities: SubserviceCapability[];
  useCases: SubserviceUseCase[];
  technologies: string[];
  benefits: SubserviceBenefit[];
  faqs: SubserviceFAQ[];
}

// ─── Structured data ─────────────────────────────────────────────────────────

function buildSchema(data: SubservicePageData) {
  const pageUrl = `https://aibizmod.com/services/${data.parentSlug}/${data.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: data.name,
        description: data.tagline,
        url: pageUrl,
        provider: { "@id": "https://aibizmod.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://aibizmod.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://aibizmod.com/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: data.parentName,
            item: `https://aibizmod.com/services/${data.parentSlug}`,
          },
          { "@type": "ListItem", position: 4, name: data.name, item: pageUrl },
        ],
      },
    ],
  };
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────

function FAQItem({ faq }: { faq: SubserviceFAQ }) {
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

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function SubservicePageLayout({ data }: { data: SubservicePageData }) {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main className="bg-white text-ink">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(data)) }}
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
                {/* 4-level breadcrumb */}
                <nav
                  className="mb-8 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-[13px] text-slate-500 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md"
                  aria-label="Breadcrumb"
                >
                  <Link href="/" className="transition-colors hover:text-[#0F172A]">Home</Link>
                  <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                  <Link href="/services" className="transition-colors hover:text-[#0F172A]">Services</Link>
                  <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                  <Link
                    href={`/services/${data.parentSlug}`}
                    className="transition-colors hover:text-[#0F172A]"
                  >
                    {data.parentName}
                  </Link>
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
                    {data.parentName}
                  </span>

                  <h1
                    className="mt-7 font-display font-thin text-[#0F172A] text-balance"
                    style={{ fontSize: "clamp(34px, 5.2vw, 56px)", lineHeight: 1.02 }}
                  >
                    {data.name}
                  </h1>

                  <p
                    className="mt-6 max-w-xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md text-base leading-8 md:text-lg"
                  >
                    {data.tagline}
                  </p>

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
                      href={`/services/${data.parentSlug}`}
                      className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-100 bg-white/55 px-6 text-sm font-semibold text-[#0F172A] shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:border-cyan-200 hover:bg-white"
                    >
                      Back to {data.parentName}
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Hero image */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              >
                <div
                  className="relative min-h-[400px] overflow-hidden rounded-[32px] border border-cyan-100 bg-cyan-50 shadow-[0_26px_80px_rgba(8,145,178,0.16)]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(15,23,42,0.34)), url(${data.heroImage})`,
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
                      Strategy, implementation, launch, and support with one connected technical team.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── 2. What This Service Solves ─────────────────────────────────── */}
          <section
            className="relative overflow-hidden px-6 py-24 bg-[#F8FEFF]"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(210,247,255,0.55),transparent_35%)]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-7xl">
              <AnimatedSection className="text-center mb-14">
                <SectionHeading eyebrow="The Problem" heading="What this service solves" centered />
              </AnimatedSection>

              <ProblemSolutionCard
                slug={data.slug}
                parentSlug={data.parentSlug}
                challenge={data.solves.challenge}
                challengePoints={data.solves.challengePoints}
                solution={data.solves.solution}
                solutionPoints={data.solves.solutionPoints}
              />
            </div>
          </section>

          {/* ── 3. Key Capabilities ─────────────────────────────────────────── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <SectionHeading eyebrow="Key Capabilities" heading="What this service includes" centered />
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.capabilities.map((cap, i) => {
                  const Icon = iconMap[cap.icon];
                  return (
                    <AnimatedSection key={cap.title} delay={i * 0.06}>
                      <div className="flex h-full flex-col rounded-[24px] border border-cyan-100/80 bg-white/75 p-6 shadow-[0_18px_55px_rgba(59,130,246,0.09)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(8,145,178,0.14)]">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50 text-cyan-700 shadow-[0_12px_28px_rgba(8,145,178,0.10)]">
                          <Icon size={19} aria-hidden="true" />
                        </div>
                        <h3
                          className="font-display font-semibold text-[#0F172A] mb-2"
                          style={{ fontSize: 17, lineHeight: 1.3 }}
                        >
                          {cap.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed flex-1">
                          {cap.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── 4. Common Use Cases ─────────────────────────────────────────── */}
          <section
            className="relative overflow-hidden px-6 py-24 bg-[#F8FEFF]"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(210,247,255,0.5),transparent_32%)]"
              aria-hidden="true"
            />
            <div className="relative max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <SectionHeading eyebrow="Use Cases" heading="How businesses use this" centered />
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.useCases.map((uc, i) => (
                  <AnimatedSection key={uc.title} delay={i * 0.07}>
                    <div className="flex h-full flex-col rounded-[24px] border border-cyan-100/80 bg-white p-6 shadow-[0_12px_40px_rgba(8,145,178,0.08)]">
                      <span className="inline-flex self-start items-center rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 mb-4">
                        {uc.industry}
                      </span>
                      <h3
                        className="font-display font-semibold text-[#0F172A] mb-2"
                        style={{ fontSize: 16, lineHeight: 1.3 }}
                      >
                        {uc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">
                        {uc.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. Benefits ─────────────────────────────────────────────────── */}
          <section
            className="relative overflow-hidden px-6 py-24 bg-[#F8FEFF]"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.06)",
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(210,247,255,0.56),transparent_34%)]"
              aria-hidden="true"
            />
            <div className="relative max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <SectionHeading eyebrow="Why It Matters" heading="Business outcomes you can expect" centered />
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.benefits.map((benefit, i) => (
                  <AnimatedSection key={benefit.title} delay={i * 0.06}>
                    <div className="flex h-full flex-col rounded-[24px] border border-cyan-100/80 bg-white/80 p-6 shadow-[0_18px_55px_rgba(59,130,246,0.09)] backdrop-blur-md">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-cyan-700"
                          style={{ background: "#ecfeff", border: "1px solid rgba(103,232,249,0.6)" }}
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="font-display font-semibold text-[#0F172A]"
                          style={{ fontSize: 16 }}
                        >
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── 7. FAQ ──────────────────────────────────────────────────────── */}
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
