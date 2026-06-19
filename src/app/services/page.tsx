import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";
import ShaderBackground from "@/components/ui/shader-background";
import ThreeDMarquee from "@/components/ui/3d-marquee";
import { StarButton } from "@/components/ui/star-button";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "web-development":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  "digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  "hosting-infrastructure":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  automation:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  "customer-exp-management":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  "it-consulting-it-services":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
};

const marqueeImages = services
  .map((service) => serviceImages[service.id])
  .filter(Boolean)
  .concat([
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  ]);

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
      <main className="bg-white text-ink">
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-36">
          <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
          <div
            className="pointer-events-none absolute left-1/2 top-24 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md">
                <Sparkles size={14} aria-hidden="true" />
                What We Offer
              </span>
              <h1
                className="mt-7 max-w-3xl font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.02 }}
              >
                Services built for{" "}
                <span className="gradient-text font-normal">connected</span>{" "}
                growth
              </h1>
              <p className="mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md md:text-lg">
                Strategy, engineering, infrastructure, automation, and growth
                systems shaped around practical business outcomes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" aria-label="Start a project">
                  <StarButton
                    as="span"
                    lightColor="#38bdf8"
                    backgroundColor="#0f172a"
                    className="h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.55),0_0_4px_rgba(56,189,248,0.7)]"
                  >
                    Start a Project
                    <ArrowRight size={16} aria-hidden="true" />
                  </StarButton>
                </Link>
                <Link
                  href="#service-list"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-100 bg-white/55 px-6 text-sm font-semibold text-[#0F172A] shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md transition hover:border-cyan-200 hover:bg-white"
                >
                  Explore Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <ThreeDMarquee images={marqueeImages} className="h-[31rem] max-lg:h-[24rem]" />
            </AnimatedSection>
          </div>
        </section>

        <section
          id="service-list"
          className="relative overflow-hidden px-6 py-24"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(210,247,255,0.58),transparent_34%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Service Stack
              </span>
              <h2
                className="mt-5 font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08 }}
              >
                Choose the capability your business needs next.
              </h2>
            </AnimatedSection>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                const image = serviceImages[service.id];

                return (
                  <AnimatedSection key={service.id} delay={index * 0.06}>
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-cyan-100/80 bg-white/72 shadow-[0_18px_55px_rgba(59,130,246,0.10)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(8,145,178,0.16)]"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-cyan-50"
                        style={{
                          backgroundImage: image
                            ? `linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.42)), url(${image})`
                            : undefined,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.42),transparent_36%)]" />
                        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/70 text-cyan-700 shadow-[0_12px_32px_rgba(15,23,42,0.16)] backdrop-blur-md">
                          <Icon size={20} aria-hidden="true" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-xl font-semibold leading-tight text-[#0F172A] transition group-hover:text-cyan-700">
                          {service.name}
                        </h3>
                        <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600">
                          {service.description}
                        </p>

                        <ul className="mt-6 space-y-2.5">
                          {service.capabilities.slice(0, 3).map((capability) => (
                            <li
                              key={capability}
                              className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                            >
                              <CheckCircle
                                size={15}
                                className="mt-0.5 shrink-0 text-cyan-600"
                                aria-hidden="true"
                              />
                              {capability}
                            </li>
                          ))}
                        </ul>

                        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3 group-hover:text-cyan-900">
                          View Details
                          <ArrowRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-cyan-100 bg-[#ECFEFF]/70 p-8 text-center shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md md:p-12">
            <AnimatedSection>
              <h2
                className="font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.08 }}
              >
                Not sure which service fits your need?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
                Tell us about your goal and we will recommend the simplest path
                forward, from planning to launch.
              </p>
              <Link href="/contact" className="mt-8 inline-flex">
                <StarButton
                  as="span"
                  lightColor="#38bdf8"
                  backgroundColor="#0f172a"
                  className="h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                >
                  Talk to Us
                  <ArrowRight size={16} aria-hidden="true" />
                </StarButton>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
