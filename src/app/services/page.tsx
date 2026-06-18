import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive technology solutions tailored to your business goals — web development, mobile apps, cloud infrastructure, automation, and more.",
  openGraph: {
    title: "Services | aibizmode",
    description:
      "Comprehensive technology solutions tailored to your business goals — web development, mobile apps, cloud infrastructure, automation, and more.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Page Hero ─────────────────────────────────────────────────── */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-canvas border-b border-border">
          {/* Ambient blob */}
          <div
            className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(126,34,206,0.07) 0%, transparent 65%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-1.5 text-[13px] text-muted-foreground mb-8"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-border shrink-0" aria-hidden="true" />
              <span className="text-ink font-medium" aria-current="page">Services</span>
            </nav>

            <AnimatedSection>
              <span className="gold-rule" aria-hidden="true" />
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                What We Offer
              </span>
              <h1
                className="mt-6 font-display font-bold text-ink text-balance"
                style={{
                  fontSize: "clamp(36px, 5vw, 58px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Our Services
              </h1>
              <p
                className="mt-5 text-muted-foreground max-w-2xl leading-relaxed"
                style={{ fontSize: 19, lineHeight: 1.65 }}
              >
                Comprehensive technology solutions tailored to your business
                goals — from the first line of code to go-live and beyond.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-canvas">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => {
                const Icon = service.icon;
                const isLast = i === services.length - 1;
                return (
                  <AnimatedSection
                    key={service.id}
                    delay={i * 0.07}
                    className={isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                  >
                    <Link
                      href={service.href}
                      className="card-royal h-full p-7 flex flex-col group"
                    >
                      {/* Icon box */}
                      <div className="icon-box mb-5 shrink-0">
                        <Icon size={19} aria-hidden="true" />
                      </div>

                      {/* Name */}
                      <h2
                        className="font-display font-semibold text-ink mb-3 group-hover:text-royal-deep transition-colors"
                        style={{ fontSize: 18, lineHeight: 1.25, letterSpacing: "-0.01em" }}
                      >
                        {service.name}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Capabilities */}
                      <ul className="space-y-2.5 mb-7 flex-1">
                        {service.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <CheckCircle
                              size={14}
                              className="text-royal mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            {cap}
                          </li>
                        ))}
                      </ul>

                      {/* Inline CTA */}
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-royal-deep group-hover:gap-2.5 transition-all mt-auto">
                        View Details
                        <ArrowRight size={13} aria-hidden="true" />
                      </span>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink py-24 px-6">
          {/* Ambient glows */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, rgba(109,40,217,1) 0%, transparent 70%)",
              animation: "glow-pulse 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, rgba(162,28,175,1) 0%, transparent 70%)",
              animation: "glow-pulse 6s ease-in-out infinite",
              animationDelay: "3s",
            }}
          />

          <AnimatedSection className="relative z-10 max-w-2xl mx-auto text-center">
            <span
              className="inline-flex items-center gap-1.5 text-label font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#B8860B" }}
            >
              <span aria-hidden="true">✦</span>
              Let&apos;s Talk
            </span>

            <h2
              className="font-display font-bold text-white text-balance"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Not sure which service{" "}
              <span className="gradient-text">fits your need?</span>
            </h2>

            <p
              className="mt-5 max-w-xl mx-auto"
              style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}
            >
              Tell us about your project and we&apos;ll recommend the right
              solution — no commitment required.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn-ghost-dark">
                About Our Team
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  );
}
