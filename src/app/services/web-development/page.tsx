import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web & Software Development",
  description:
    "Custom web applications and enterprise software engineered for scale, performance, and long-term maintainability.",
  openGraph: {
    title: "Web & Software Development | space-ai",
    description:
      "Custom web applications and enterprise software engineered for scale, performance, and long-term maintainability.",
    url: "/services/web-development",
  },
};

const data: ServicePageData = {
  name: "Web & Software Development",
  tagline:
    "From idea to enterprise-grade product — custom software engineered for scale, reliability, and the long haul.",
  slug: "web-development",
  iconColor: "text-electric-blue",

  overview: {
    paragraphs: [
      "We design and engineer web applications and custom software that perform under real-world conditions. Whether you're building a SaaS product from scratch, modernising a legacy system, or integrating third-party services into an existing platform, our engineers bring precision, speed, and an uncompromising focus on code quality.",
      "Our full-stack capability spans pixel-perfect frontend interfaces built with React and Next.js, robust backend APIs in Node.js or Python, and scalable data architectures using PostgreSQL, MongoDB, or Redis. We don't hand off work to subcontractors — every line of code is written by our in-house engineers.",
      "We've delivered software for startups hitting product-market fit, enterprises scaling to millions of users, and everything in between. Our work doesn't end at launch — we provide post-delivery support, performance monitoring, and iterative improvement as part of every engagement.",
    ],
    benefits: [
      "Clean, maintainable codebases with full technical documentation",
      "Agile delivery with fortnightly demos and transparent progress reporting",
      "End-to-end ownership from architecture design through to production deployment",
      "Scalable, cloud-native architecture built in from day one",
      "Security-first development with automated vulnerability scanning at every stage",
    ],
  },

  features: [
    {
      icon: "code2",
      title: "Frontend Development",
      desc: "Pixel-perfect, accessible interfaces built with React and Next.js — fast to load, optimised for SEO, and responsive across every device.",
    },
    {
      icon: "database",
      title: "Backend Engineering",
      desc: "Robust APIs and server-side logic engineered for scale, reliability, and clean separation of concerns — built in Node.js or Python.",
    },
    {
      icon: "server",
      title: "Database Design",
      desc: "Normalised schemas, query optimisation, and data architecture designed to grow with your product without becoming a performance bottleneck.",
    },
    {
      icon: "network",
      title: "API Development & Integration",
      desc: "RESTful and GraphQL APIs, webhook systems, and third-party service integrations that connect your entire software ecosystem reliably.",
    },
    {
      icon: "cloud",
      title: "DevOps & Deployment",
      desc: "Automated CI/CD pipelines, containerised deployments, and cloud hosting that keep your application always available and simple to update.",
    },
    {
      icon: "testTube",
      title: "QA & Automated Testing",
      desc: "Unit, integration, and end-to-end tests that catch regressions before they reach your users — with coverage reports on every build.",
    },
  ],

  process: [
    {
      icon: "search",
      title: "Discovery & Scoping",
      desc: "We map your requirements, user journeys, and technical constraints — producing a detailed spec before writing a single line of code.",
    },
    {
      icon: "layers",
      title: "Architecture & Design",
      desc: "System architecture, stack selection, and database modelling — all validated with your team before development begins.",
    },
    {
      icon: "code2",
      title: "Development Sprints",
      desc: "Two-week agile sprints with working software demonstrated at each milestone. Full test coverage at every stage of the build.",
    },
    {
      icon: "rocket",
      title: "Launch & Support",
      desc: "Staged rollout with monitoring, alerting, and a 30-day post-launch support window included in every engagement.",
    },
  ],

  techStack: [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "Redis", "Docker", "AWS", "Tailwind CSS", "GraphQL", "Prisma", "GitHub Actions",
  ],

  faqs: [
    {
      q: "How long does it take to build a web application?",
      a: "A focused MVP typically takes 8–12 weeks from kick-off to launch. Larger enterprise systems with complex integrations or compliance requirements can take 3–9 months. We provide a detailed timeline estimate during the discovery phase before any contract is signed.",
    },
    {
      q: "Do you build with custom code or no-code tools?",
      a: "We write custom code for all client engagements. No-code and low-code tools have real limitations around scale, flexibility, and long-term maintainability that bespoke software avoids. That said, we'll always recommend the right tool for the job — sometimes that includes well-chosen third-party services.",
    },
    {
      q: "Who owns the code after the project?",
      a: "You do. All code, documentation, and intellectual property is fully transferred to you upon final payment. We can set up repositories under your own GitHub or GitLab organisation from day one, so you have full visibility and control throughout the engagement.",
    },
    {
      q: "Can you take over an existing codebase?",
      a: "Yes. We regularly perform codebase audits and take on legacy systems for modernisation, refactoring, or feature extension. We'll provide a detailed technical assessment of the current state before committing to any engagement scope.",
    },
    {
      q: "Do you provide ongoing support after launch?",
      a: "Yes. All projects include a 30-day post-launch support window at no additional cost. After that, we offer retainer arrangements for ongoing maintenance, security updates, and feature development — structured around your needs.",
    },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePageLayout data={data} />;
}
