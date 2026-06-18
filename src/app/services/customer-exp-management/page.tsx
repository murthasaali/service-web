import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Customer Experience Management",
  description:
    "CX strategy, CRM implementation, and omnichannel communication setup — turning every customer interaction into lasting loyalty.",
  openGraph: {
    title: "Customer Experience Management | aibizmode",
    description:
      "CX strategy, CRM implementation, and omnichannel communication setup — turning every customer interaction into lasting loyalty.",
    url: "/services/customer-exp-management",
  },
};

const data: ServicePageData = {
  name: "Customer Experience Management",
  tagline:
    "Every interaction is an opportunity — we help you design and deliver experiences that retain customers and grow revenue.",
  slug: "customer-exp-management",
  iconColor: "text-pink-600",

  overview: {
    paragraphs: [
      "Customer experience is not a department — it is a strategic capability that touches every part of your business. Companies that invest in CX consistently outperform their peers on retention, Net Promoter Score, and customer lifetime value. The difference between average and exceptional CX is measurable in revenue.",
      "We bring together CX strategy, technology implementation, and data analytics to design customer journeys that convert, retain, and delight. From selecting and implementing the right CRM to building omnichannel communication flows and closed-loop feedback systems, our team handles the full spectrum of CX transformation.",
      "Our work is outcome-driven. We define success metrics before any tools are selected or configured — NPS, CSAT, churn rate, first response time, resolution rate — and hold every implementation accountable to those targets. Technology in service of outcomes, not technology for its own sake.",
    ],
    benefits: [
      "Holistic CX strategy tied to measurable retention and revenue outcomes",
      "CRM implementation with full data migration and structured team onboarding",
      "Omnichannel setup giving customers a consistent experience across all channels",
      "Feedback systems that surface actionable insights, not just raw scores",
      "Ongoing optimisation based on real customer behaviour and satisfaction data",
    ],
  },

  features: [
    {
      icon: "compass",
      title: "CX Strategy & Journey Mapping",
      desc: "End-to-end customer journey mapping that identifies friction points, drop-off moments, and high-impact improvement opportunities with prioritised recommendations.",
    },
    {
      icon: "database",
      title: "CRM Implementation",
      desc: "Full CRM selection, configuration, data migration, and team onboarding — Salesforce, HubSpot, or Pipedrive tailored precisely to your sales and support process.",
    },
    {
      icon: "network",
      title: "Omnichannel Communication",
      desc: "Unified customer communication across email, live chat, SMS, and phone — with a single inbox, full context history, and a consistent brand voice at every touchpoint.",
    },
    {
      icon: "messageSquare",
      title: "Customer Feedback Systems",
      desc: "NPS, CSAT, and in-app survey setup with closed-loop processes that ensure every piece of feedback leads to a visible action — not just a spreadsheet.",
    },
    {
      icon: "lineChart",
      title: "Analytics & Insight",
      desc: "Customer data platforms, cohort analysis, churn prediction models, and dashboards that make every CX decision evidence-based rather than intuition-driven.",
    },
    {
      icon: "headphones",
      title: "Support Tooling",
      desc: "Helpdesk setup and optimisation (Zendesk, Intercom, Freshdesk) with automated ticket routing, canned response libraries, and SLA performance tracking.",
    },
  ],

  process: [
    {
      icon: "search",
      title: "CX Audit",
      desc: "We interview stakeholders, analyse customer data, and map your current journey end to end — documenting what works and where customers fall through the cracks.",
    },
    {
      icon: "target",
      title: "Strategy & Roadmap",
      desc: "We identify the highest-impact CX improvements and build a prioritised roadmap with business case, estimated impact, and implementation timeline.",
    },
    {
      icon: "settings",
      title: "Tool Selection & Setup",
      desc: "We recommend and configure the right CRM, helpdesk, and analytics tools for your team size, budget, and customer journey complexity.",
    },
    {
      icon: "lineChart",
      title: "Implement, Measure & Optimise",
      desc: "We implement, migrate data, train your team, and track CX KPIs — running quarterly reviews to iterate on strategy and tooling as your business scales.",
    },
  ],

  techStack: [
    "Salesforce", "HubSpot CRM", "Zendesk", "Intercom", "Freshdesk",
    "Segment", "Klaviyo", "Hotjar", "Google Analytics 4", "Typeform", "SurveyMonkey", "Pipedrive",
  ],

  faqs: [
    {
      q: "We already have a CRM — can you improve our setup rather than replacing it?",
      a: "Yes. The majority of our CX engagements involve optimising an existing CRM rather than replacing it — cleaning and deduplicating data, adding workflow automation, building integrations with other tools, and training the team to use it effectively. Replacement is only recommended when the current tool is genuinely blocking growth.",
    },
    {
      q: "How long does a CRM implementation take?",
      a: "A typical CRM implementation takes 4–8 weeks depending on the complexity of your sales process, volume of data to migrate, and number of integrations required. We use a phased approach to ensure your team always has a working system — no big-bang cutover dates where everything stops if something goes wrong.",
    },
    {
      q: "What is omnichannel, and why does it matter for my business?",
      a: "Omnichannel means your customers get a consistent, seamless experience whether they contact you by email, live chat, phone, or social — and your team has full context on every previous interaction, regardless of channel. Research consistently shows omnichannel customers have 30%+ higher lifetime value and churn at lower rates than single-channel customers.",
    },
    {
      q: "How do you measure the success of CX improvements?",
      a: "We establish baseline metrics before starting — typically NPS, CSAT, average first response time, churn rate, and average resolution time. We measure against these benchmarks monthly and produce reports showing the direct business impact of each improvement. You'll always know what's moving and what isn't.",
    },
    {
      q: "Do you provide training for our team?",
      a: "Yes. Every implementation includes a structured team training programme covering the new tools, updated processes, and how to interpret the dashboards. We also produce internal documentation and, where appropriate, video walkthroughs for your team's ongoing reference as new people join.",
    },
  ],
};

export default function CustomerExpManagementPage() {
  return <ServicePageLayout data={data} />;
}
