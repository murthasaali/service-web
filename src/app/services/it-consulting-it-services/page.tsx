import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "IT Consulting & IT Services",
  description:
    "Strategic technology advisory and managed IT services — fractional CTO support, architecture reviews, and IT project management.",
  openGraph: {
    title: "IT Consulting & IT Services | aibizmod",
    description:
      "Strategic technology advisory and managed IT services — fractional CTO support, architecture reviews, and IT project management.",
    url: "/services/it-consulting-it-services",
  },
};

const data: ServicePageData = {
  name: "IT Consulting & IT Services",
  tagline:
    "Strategic technology leadership without the overhead — senior advisory and managed IT services aligned to your business goals.",
  slug: "it-consulting-it-services",
  iconColor: "text-cyan-600",

  overview: {
    paragraphs: [
      "Technology decisions made without strategic context are expensive. The wrong stack choice, a poorly managed vendor relationship, or an architecture that can't scale — these mistakes compound over time, and they often happen because organisations don't have the right technology leadership in the room when decisions are made.",
      "We provide fractional CTO services, IT strategy consulting, architecture reviews, and managed IT support — giving you access to senior technology leadership at a fraction of the cost of a full-time hire. Our advisory is always anchored to business outcomes: growth, efficiency, risk reduction, and competitive advantage — not technology for its own sake.",
      "We have guided companies through cloud migrations, ERP implementations, cybersecurity overhauls, vendor selection processes, and end-to-end digital transformations. Our approach is pragmatic and vendor-agnostic — we assess what you have, define where you need to be, and build the roadmap with the honesty of advisors who are not trying to sell you a product.",
    ],
    benefits: [
      "Senior technology leadership without the cost of a full-time CTO hire",
      "Objective, vendor-agnostic technology recommendations in your interest",
      "ISO and ITIL-aligned service delivery with clear governance",
      "Technology roadmaps tied directly to your 1–3 year business milestones",
      "Flexible engagement models — project, retainer, or fractional CTO",
    ],
  },

  features: [
    {
      icon: "target",
      title: "IT Strategy & Roadmapping",
      desc: "Technology strategies aligned to your 1–3 year business plan — prioritised, budgeted, and presented in a format your board and investors can act on.",
    },
    {
      icon: "layers",
      title: "Architecture Review",
      desc: "Comprehensive assessment of your current systems, identifying technical debt, security risks, scalability limits, and modernisation opportunities with clear remediation paths.",
    },
    {
      icon: "package",
      title: "Vendor Selection & Management",
      desc: "Objective vendor evaluation, RFP management, and contract negotiation — we act entirely in your interest, not the vendor's, and have no reseller relationships.",
    },
    {
      icon: "settings",
      title: "IT Project Management",
      desc: "Experienced project and programme management for technology initiatives — keeping scope, budget, and timelines accountable so your IT investments deliver what was promised.",
    },
    {
      icon: "shield",
      title: "Cybersecurity Assessment",
      desc: "Security posture reviews, penetration testing coordination, threat modelling, and actionable remediation roadmaps ranked by risk and business impact.",
    },
    {
      icon: "wrench",
      title: "Managed IT Support",
      desc: "Day-to-day IT support, helpdesk management, device and patch management, and proactive system monitoring — keeping your team productive and your systems secure.",
    },
  ],

  process: [
    {
      icon: "search",
      title: "Discovery & Assessment",
      desc: "Structured workshops with leadership and technical teams to understand current state, pain points, constraints, and strategic priorities.",
    },
    {
      icon: "layers",
      title: "Gap Analysis",
      desc: "We map the gap between your current state and target state, then prioritise initiatives by business impact, feasibility, and risk.",
    },
    {
      icon: "target",
      title: "Strategy & Roadmap",
      desc: "A detailed technology roadmap with clear milestones, ownership, resource requirements, and budget — ready to present to the board.",
    },
    {
      icon: "award",
      title: "Implementation & Advisory",
      desc: "We run or oversee implementation of the roadmap and provide ongoing advisory to keep technology aligned with business growth.",
    },
  ],

  techStack: [
    "ITIL Framework", "Microsoft 365", "Google Workspace", "AWS", "Azure",
    "Jira", "Confluence", "ServiceNow", "Sophos", "CrowdStrike", "Okta", "Slack", "Notion",
  ],

  faqs: [
    {
      q: "How is this different from hiring a full-time CTO?",
      a: "A full-time CTO costs £120,000–£200,000+ per year in salary, plus equity, benefits, and recruitment fees. Our fractional CTO engagement delivers the same strategic capability — technology leadership, architecture decisions, vendor management, team mentoring — for a fraction of the cost, typically 1–3 days per week with the flexibility to scale up or down as your needs change.",
    },
    {
      q: "What size of company do you work with?",
      a: "We work with companies across the full growth spectrum — from 10-person startups that need their first technology strategy through to 500-person enterprises managing complex transformation programmes. The engagement model, depth of advisory, and team size we deploy scale accordingly.",
    },
    {
      q: "How do you ensure confidentiality?",
      a: "We sign mutual NDAs before any substantive conversations begin. All client information — technology architecture, commercial data, strategic plans — is handled under strict confidentiality protocols and is never disclosed to third parties or used in other engagements. Our advisors operate as trusted members of your leadership team.",
    },
    {
      q: "What are your response times for managed IT support?",
      a: "Response times are governed by severity tier: critical issues (system down, potential data breach) receive a response within 15 minutes; high-priority issues within 2 hours; standard requests within 8 business hours. All SLAs are documented in your service agreement and tracked transparently in a shared dashboard.",
    },
    {
      q: "Can you help with a specific project rather than ongoing advisory?",
      a: "Yes. We take on discrete project engagements — architecture reviews, vendor selection processes, technology audits, security assessments — with a clearly defined scope, deliverable, and fixed price. Not every client needs an ongoing retainer, and we don't push one unless it genuinely adds value to you.",
    },
  ],
};

export default function ITConsultingPage() {
  return <ServicePageLayout data={data} />;
}
