import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "Business process and workflow automation — from RPA to AI-powered pipelines that eliminate manual work and accelerate operations.",
  openGraph: {
    title: "Automation | space-ai",
    description:
      "Business process and workflow automation — from RPA to AI-powered pipelines that eliminate manual work and accelerate operations.",
    url: "/services/automation",
  },
};

const data: ServicePageData = {
  name: "Automation",
  tagline:
    "Automate the mundane, amplify what matters — intelligent automation that gives your team back the hours they deserve.",
  slug: "automation",
  iconColor: "text-yellow-600",

  overview: {
    paragraphs: [
      "Time spent on repetitive, manual tasks is time not spent on strategy, customer relationships, and the work that creates real value. We help businesses systematically identify, prioritise, and automate the operational work that is slowing them down — turning bottlenecks into background processes.",
      "Our automation practice spans business process automation (BPA), robotic process automation (RPA), API and system integration, and AI-powered workflow orchestration. We don't implement automation tools in isolation — we map your actual processes, understand where breakdowns occur, and design automation that handles real-world edge cases and exceptions, not just the happy path.",
      "The ROI on well-implemented automation compounds over time. Clients typically see a 60–80% reduction in time spent on automated tasks within the first quarter, with additional gains as the automation matures and covers more complexity. Every system we build is documented, monitored, and handed over with your team fully trained.",
    ],
    benefits: [
      "Average 60–80% reduction in manual processing time within 90 days",
      "Automation built with error handling and human-in-the-loop fallbacks",
      "Comprehensive documentation and runbooks so your team can manage it",
      "Integration with your existing tools — no rip-and-replace required",
      "Monitoring dashboards and alerting on every automated workflow",
    ],
  },

  features: [
    {
      icon: "compass",
      title: "Process Mapping",
      desc: "In-depth analysis of your workflows to identify automation candidates, quantify time savings, and prioritise builds by ROI before anything is built.",
    },
    {
      icon: "bot",
      title: "RPA Implementation",
      desc: "Robotic process automation for UI-based tasks — interacting with applications exactly as a human would, but faster, with full audit trails.",
    },
    {
      icon: "workflow",
      title: "API & System Integration",
      desc: "Connecting your SaaS tools, internal databases, and legacy systems through reliable API integrations and event-driven workflow triggers.",
    },
    {
      icon: "cpu",
      title: "AI-Powered Automation",
      desc: "LLM and ML-based automation for document processing, email classification, data extraction, and decision-making at scale.",
    },
    {
      icon: "bell",
      title: "Monitoring & Alerting",
      desc: "Dashboards showing all automation run status, failure rates, and throughput — with immediate alerts and fallback triggers when something fails.",
    },
    {
      icon: "fileText",
      title: "Documentation & Training",
      desc: "Full operational runbooks, process diagrams, and hands-on team training — so your staff can manage, modify, and extend automations confidently.",
    },
  ],

  process: [
    {
      icon: "compass",
      title: "Discovery & Mapping",
      desc: "We interview stakeholders, observe workflows in action, and produce a prioritised automation opportunity map ranked by effort and impact.",
    },
    {
      icon: "settings",
      title: "Design & Prototype",
      desc: "We design the automation logic, map all integration points, and validate with a working prototype before committing to full build.",
    },
    {
      icon: "bot",
      title: "Build & Test",
      desc: "We build with full error handling and edge case coverage, then test end-to-end including failure scenarios and exception paths.",
    },
    {
      icon: "activity",
      title: "Deploy, Monitor & Optimise",
      desc: "We deploy, configure monitoring, train your team, and iterate on real-world performance data in the weeks after go-live.",
    },
  ],

  techStack: [
    "n8n", "Zapier", "Make", "UiPath", "Python", "Node.js",
    "REST APIs", "OpenAI API", "LangChain", "Selenium", "PostgreSQL", "AWS Lambda", "Webhooks",
  ],

  faqs: [
    {
      q: "What kinds of tasks can be automated?",
      a: "Strong automation candidates include: data entry and migration, report generation, invoice processing, email triage and routing, CRM updates, onboarding workflows, purchase order processing, and any task that happens more than 10 times a week with a consistent, rule-based pattern. If your team is doing the same sequence of clicks repeatedly, it's worth evaluating.",
    },
    {
      q: "How long does it take to implement automation?",
      a: "Simple single-system automations — such as a trigger-action workflow between two SaaS tools — can be live in days. Complex multi-system RPA workflows or AI-powered document processing pipelines typically take 4–10 weeks from scoping through to production go-live and team sign-off.",
    },
    {
      q: "What happens if the automation breaks?",
      a: "Every automation we build includes error handling, retry logic with backoff, and immediate alerting. When something fails, your team is notified and the task falls back to a defined manual process automatically. We also provide a monitoring dashboard so you can see the health of every automation at a glance.",
    },
    {
      q: "Do we need to change our existing software stack?",
      a: "Almost never. Our automation approach works with your existing tools through APIs, webhooks, and integrations — we connect them rather than replace them. If a specific tool genuinely has no viable integration path, we'll surface that during discovery rather than discovering it mid-build.",
    },
    {
      q: "How do you handle sensitive data in automated workflows?",
      a: "We design automations with data minimisation principles — processing only what's necessary for each step. Credentials are stored in secure vaults (not hard-coded), data in transit is encrypted, and all designs follow GDPR and SOC 2 principles. We can also configure automations to avoid processing sensitive fields where a human review step is more appropriate.",
    },
  ],
};

export default function AutomationPage() {
  return <ServicePageLayout data={data} />;
}
