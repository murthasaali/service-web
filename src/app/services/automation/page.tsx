import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import TechStackCarousel, { AUTOMATION_ROW1, AUTOMATION_ROW2 } from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "Business process and workflow automation — from RPA to AI-powered pipelines that eliminate manual work and accelerate operations.",
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
    "We build custom automation pipelines for invoice routing, CRM synchronization, weekly reporting, and approval workflows.",
  slug: "automation",
  iconColor: "text-yellow-600",

  overview: {
    paragraphs: [
      "We design and build custom data pipelines and workflow integrations. When you work with us, you receive fully documented runbooks, visual workflow diagrams, error notification alerts, and database synchronizations. We do not sell pre-built plug-ins or third-party licenses; we configure custom codebases and API connections using platforms like n8n, Make, or Python scripts to link your existing tools directly.",
      "Our projects replace manual data-entry tasks with programmatic logic. We build pipelines that capture email invoices and route them to accounting, assign inbound leads to sales staff based on round-robin routing rules, and compile weekly reports into summaries sent to managers automatically. Before-and-after scenarios are mapped clearly. For example, rather than a clerk downloading CSVs and copy-pasting customer details to a CRM manually (taking 4 hours a week), the system synchronizes records instantly via secure APIs.",
      "Previous projects include: a billing pipeline that extracts PDF invoice details using OCR text recognition and routes them to Xero; a lead assignment system that parses Webhook data from Typeform and assigns tasks in Salesforce; and a weekly PDF reporting script that queries database tables and emails summary metrics to company directors every Friday morning."
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

export default function AutomationPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={<TechStackCarousel row1={AUTOMATION_ROW1} row2={AUTOMATION_ROW2} />}
    />
  );
}
