import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData, type ServiceCard } from "@/components/ServicePageLayout";
import TechStackCarousel, { AUTOMATION_ROW1, AUTOMATION_ROW2 } from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "Business process and workflow automation — from RPA to AI-powered pipelines that eliminate manual work and accelerate operations.",
  alternates: { canonical: 'https://aibizmod.com/services/automation' },
  openGraph: {
    title: "Automation | aibizmod",
    description:
      "Business process and workflow automation — from RPA to AI-powered pipelines that eliminate manual work and accelerate operations.",
    url: "/services/automation",
  },
};

const data: ServicePageData = {
  name: "Automation",
  tagline:
    "For operations teams and growing businesses in the UK, USA, and internationally that lose hours to manual data entry, we build custom automation pipelines — invoice routing, CRM synchronization, weekly reporting, and approval workflows. You receive documented runbooks, error-handling logic, and working integrations, so repetitive tasks run automatically and your team focuses on higher-value work.",
  heroBullets: [
    "For operations teams that lose hours to manual data entry and repetitive processes",
    "Custom automation pipelines — invoice routing, CRM sync, weekly reporting, and approval workflows",
    "Documented runbooks and working integrations so repetitive tasks run automatically",
    "Serving clients in the UK, USA, and internationally",
  ],
  slug: "automation",
  iconColor: "text-yellow-600",

  overview: {
    paragraphs: [
      "We design and build custom data pipelines and workflow integrations that replace manual data-entry tasks with programmatic logic. When you work with us, you receive fully documented runbooks, visual workflow diagrams, error notification alerts, and database synchronizations. We do not sell pre-built plug-ins or third-party licenses; we configure custom codebases and API connections using platforms like n8n, Make, or Python scripts. These pipelines capture email invoices and route them to accounting, assign inbound leads to sales staff based on round-robin routing rules, and compile weekly reports into summaries sent to managers automatically — so repetitive tasks run without manual intervention.",
    ],
    benefits: [
      "No more manual copy-pasting",
      "Error fallback and retry triggers",
      "Direct CRM-to-database connections",
      "Weekly automatic report delivery",
      "Handover runbooks and workflows",
      "No licensing cost markup"
    ],
  },

  features: [
    {
      icon: "fileText",
      title: "Invoice Routing",
      desc: "We build pipelines that capture email invoices, parse metadata, write data to accounting ledgers, and trigger approvals."
    },
    {
      icon: "users",
      title: "Lead Assignment Rules",
      desc: "We automate lead distribution, capturing form inquiries, checking staff calendars, and assigning records in your CRM."
    },
    {
      icon: "refreshCw",
      title: "CRM Synchronization",
      desc: "We write real-time sync pipelines using webhooks to align data fields across HubSpot, Salesforce, or internal databases."
    },
    {
      icon: "barChart",
      title: "Weekly Reporting",
      desc: "We run cron scripts that query database metrics, generate summary files, and email PDF reports to management tables."
    },
    {
      icon: "bell",
      title: "Customer Notifications",
      desc: "We set up automated SMS or email alert triggers to notify customers immediately when their order status is updated."
    },
    {
      icon: "workflow",
      title: "Approval Workflows",
      desc: "We configure interactive slack buttons or email forms that allow managers to approve purchase requests without leaving their inbox."
    }
  ],

  process: [
    {
      icon: "compass",
      title: "Workflow Discovery",
      desc: "We shadow your manual steps, write a step-by-step logic document, and estimate hours saved before development."
    },
    {
      icon: "code2",
      title: "API Integration",
      desc: "We write API connectors, mapping webhooks, parameters, data types, and credentials inside n8n or Python scripts."
    },
    {
      icon: "testTube",
      title: "Exception Testing",
      desc: "We test scenarios like missing input fields, invalid formats, and server timeouts to verify that retry logs function."
    },
    {
      icon: "rocket",
      title: "Handover & Monitor",
      desc: "We deploy, set up runtime dashboards, train your staff, and hand over the documentation runbooks."
    }
  ],

  techStack: [],

  faqs: [
    {
      q: "What happens if an automated workflow fails or an API goes down?",
      a: "We build workflows with error handling. If a third-party API returns an error, the system records the log, triggers a Slack or email notification to your team, and halts the task safely so it can be re-run manually once the API is online."
    },
    {
      q: "Do we need to pay for automation licenses?",
      a: "We build workflows using open-source platforms like n8n or Python scripts hosted on your own servers. This means you do not have to pay licensing fees to us, and you only pay direct utility costs to your cloud provider."
    },
    {
      q: "Where do we see a list of automated workflows currently running?",
      a: "We configure a unified runtime dashboard. Your team can log in to view execution history, success rates, processing logs, and active queue states at any time."
    },
    {
      q: "Can you automate legacy systems that do not have an API?",
      a: "Yes. In cases where legacy software lacks API access, we construct browser automation scripts (using Puppeteer or Selenium) that log in, navigate pages, and submit forms exactly like a human user would."
    }
  ],
};

const serviceCards: ServiceCard[] = [
  {
    title: "Process Automation",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format&fit=crop",
    bullets: ["Workflow & Process Automation"],
  },
  {
    title: "Conversational AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80&auto=format&fit=crop",
    bullets: ["AI Chatbots", "Voice Agents", "Knowledge Assistants"],
  },
  {
    title: "AI Intelligence",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop",
    bullets: ["Predictive Analytics", "Recommendation Systems"],
  },
  {
    title: "Generative AI",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop",
    bullets: ["Custom GPT Development", "RAG Systems", "LLM Integration", "Enterprise AI Deployment"],
  },
  {
    title: "AI Vision",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&q=80&auto=format&fit=crop",
    bullets: ["Computer Vision", "OCR Solutions"],
  },
  {
    title: "AI-Powered Apps",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80&auto=format&fit=crop",
    bullets: ["Custom AI Solutions", "Model Fine-tuning", "AI Integration", "Deployment & Monitoring"],
  },
];

export default function AutomationPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={<TechStackCarousel row1={AUTOMATION_ROW1} row2={AUTOMATION_ROW2} />}
      serviceCards={serviceCards}
    />
  );
}
