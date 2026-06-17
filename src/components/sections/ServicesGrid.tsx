"use client";

import {
  Code2, Smartphone, TrendingUp, Server,
  Zap, Users, Lightbulb, ArrowRight, type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";

interface Service {
  icon: LucideIcon;
  name: string;
  desc: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Code2,
    name: "Web & Software Development",
    desc: "Custom web applications and software built for scale, performance, and long-term maintainability.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    desc: "Native and cross-platform apps delivering seamless experiences across iOS and Android.",
    href: "/services/mobile-app-development",
  },
  {
    icon: TrendingUp,
    name: "Digital Marketing",
    desc: "Data-driven campaigns that grow your brand, increase qualified traffic, and convert leads.",
    href: "/services/digital-marketing",
  },
  {
    icon: Server,
    name: "Hosting & Infrastructure",
    desc: "Reliable, scalable cloud infrastructure designed for maximum uptime and cost efficiency.",
    href: "/services/hosting-infrastructure",
  },
  {
    icon: Zap,
    name: "Automation",
    desc: "Intelligent automation pipelines that eliminate manual work and accelerate business operations.",
    href: "/services/automation",
  },
  {
    icon: Users,
    name: "Customer Experience Management",
    desc: "CX strategies and tooling that turn every interaction into lasting customer loyalty.",
    href: "/services/customer-exp-management",
  },
  {
    icon: Lightbulb,
    name: "IT Consulting & IT Services",
    desc: "Strategic technology advisory and managed IT services aligned with your business goals.",
    href: "/services/it-consulting-it-services",
  },
];

function ServiceCard({
  service,
  index,
  delay,
}: {
  service: Service;
  index: number;
  delay: number;
}) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection delay={delay} className="h-full">
      <div
        className={`card-royal h-full p-7 flex flex-col ${
          isEven ? "bg-surface" : "bg-tint"
        }`}
      >
        <div className="icon-box mb-5">
          <Icon size={20} aria-hidden="true" />
        </div>
        <h3
          className="font-display font-semibold text-ink"
          style={{ fontSize: 20, lineHeight: 1.2 }}
        >
          {service.name}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {service.desc}
        </p>
        <Link
          href={service.href}
          className="mt-5 inline-flex items-center gap-1.5 text-label font-semibold text-royal-deep
            hover:gap-3 transition-all duration-150
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-2 rounded"
        >
          Explore <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-tint">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="gold-rule mx-auto" aria-hidden="true" />
          <span className="eyebrow">
            <span className="eyebrow-star" aria-hidden="true">✦</span>
            What We Do
          </span>
          <h2
            className="mt-6 font-display font-bold text-ink text-balance"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Services Built for Scale
          </h2>
          <p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            style={{ fontSize: 17, lineHeight: 1.65 }}
          >
            From concept to deployment, we cover the full technology spectrum so
            you can focus on growing your business.
          </p>
        </AnimatedSection>

        {/* 2-column grid — spec requirement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={i}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
