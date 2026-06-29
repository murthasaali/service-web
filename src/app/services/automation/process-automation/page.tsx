import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "Process Automation | AI & Automation | aibizmod",
  description:
    "Replace manual data entry, approval chains, and repetitive workflows with automated pipelines that connect your existing tools and run without staff intervention.",
  alternates: { canonical: "https://aibizmod.com/services/automation/process-automation" },
  openGraph: {
    title: "Process Automation | aibizmod",
    description:
      "Replace manual data entry, approval chains, and repetitive workflows with automated pipelines that connect your existing tools and run without staff intervention.",
    url: "/services/automation/process-automation",
  },
};

const data: SubservicePageData = {
  name: "Process Automation",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "process-automation",
  tagline:
    "• Multi-step integration pipelines, automated approval systems and scheduled reporting routines built to connect your software applications\nEach workflow is intended to:\n• Sync customer data, orders and inventory across CRM and ERP platforms automatically\n• Route operational sign-offs via single-click buttons directly in Slack or Teams\n• Email compiled, formatted database reports automatically on scheduled cadences",
  heroImage:
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1000&q=80&auto=format&fit=crop",

  solves: {
    challenge:
      "Operations teams lose hours every week transferring data between software systems. Typing invoice details by hand, waiting days for email sign-offs, and compiling spreadsheets manually introduces errors and slows down team progress.",
    challengePoints: [
      "Manually copy-pasting customer records between CRM and accounting apps.",
      "Project delays caused by approval forms sitting in managers' unread emails.",
      "Compiling weekly reports by merging CSV exports by hand.",
      "No tracking logs to identify where a manual data transfer failed.",
    ],
    solution:
      "We map your manual operations, identify the friction points, and build automated integrations that pass data between your software systems. Every workflow features error-handling scripts and comes with clear setup manuals.",
    solutionPoints: [
      "Direct connections between your CRMs, SQL databases, and SaaS portals.",
      "One-click approval buttons routed straight to Slack or Teams.",
      "Automated reports delivered directly to your team's email inboxes.",
      "Automated alerts that notify your team on Slack if a tool API fails.",
    ],
  },

  capabilities: [
    {
      icon: "workflow",
      title: "Workflow Automation",
      description:
        "We build multi-step workflows that run automatically when triggered by form submissions, database changes, or timers.",
    },
    {
      icon: "network",
      title: "API and Webhook Integration",
      description:
        "We write scripts to connect your SaaS tools and local databases via APIs, replacing CSV export and import routines.",
    },
    {
      icon: "fileText",
      title: "Document and Invoice Processing",
      description:
        "We set up pipelines to extract fields from incoming emails and invoices, logging the data directly into your ERP.",
    },
    {
      icon: "barChart",
      title: "Scheduled Reporting",
      description:
        "We automate database queries to compile, format, and deliver operational updates to Slack channels on a schedule.",
    },
    {
      icon: "users",
      title: "Approval Workflow Routing",
      description:
        "We set up automated approval loops that allow managers to approve requests via Slack buttons, updating database states instantly.",
    },
    {
      icon: "refreshCw",
      title: "Error Handling and Retry Logic",
      description:
        "We configure retry rules and failure alerts on every pipeline, notifying your developers if a tool goes offline.",
    },
  ],

  useCases: [
    {
      industry: "Finance",
      title: "Invoice Routing from Email to Accounting",
      description:
        "Supplier invoices are parsed from email attachments, logged in your accounting platform, and routed to the department manager for approval.",
    },
    {
      industry: "Sales",
      title: "CRM Lead Assignment from Forms",
      description:
        "Web form submissions instantly log a new lead record in your CRM and alert the correct sales rep on Slack.",
    },
    {
      industry: "Operations",
      title: "Inventory Sync Across Platforms",
      description:
        "Keep stock levels matching across your web store and warehouse databases without manual CSV updates.",
    },
    {
      industry: "HR",
      title: "Employee Onboarding Document Collection",
      description:
        "New hire emails trigger onboarding requests, collecting completed forms and updating HR directories automatically.",
    },
    {
      industry: "Logistics",
      title: "Shipment Status Notifications",
      description:
        "The system queries shipping APIs on a schedule to email tracking updates to customers whenever packages change hands.",
    },
    {
      industry: "Finance",
      title: "Monthly Reconciliation Reports",
      description:
        "Automated queries pull payment logs and bank statements, delivering a compiled reconciliation sheet to your inbox monthly.",
    },
  ],

  technologies: [
    "n8n",
    "Make (Integromat)",
    "Zapier",
    "Python",
    "Node.js",
    "PostgreSQL",
    "REST APIs",
    "Webhooks",
    "Slack API",
    "SMTP",
    "Puppeteer",
    "Playwright",
  ],

  benefits: [
    {
      title: "Fewer Manual Errors",
      description:
        "Eliminate typos and duplicate entries by transferring data between databases programmatically.",
    },
    {
      title: "Staff Time Redirected",
      description:
        "Free up your team's schedule from tedious copy-paste tasks, letting them focus on client-facing delivery.",
    },
    {
      title: "Consistent Process Execution",
      description:
        "Run operational workflows under identical rules every time, regardless of who is online or how busy the desk gets.",
    },
    {
      title: "24/7 Operation",
      description:
        "Keep processes running overnight and through weekends, avoiding delays for client confirmations and alerts.",
    },
    {
      title: "Full Audit Trail",
      description:
        "Log every pipeline execution detail, providing a searchable audit trail if you need to trace past inputs.",
    },
    {
      title: "Documented and Maintainable",
      description:
        "Receive detailed runbooks so your team knows how to update connections and edit logic without relying on us.",
    },
  ],

  faqs: [
    {
      q: "How long does it take to automate a typical business workflow?",
      a: "Simple integrations between two or three tools take one to two weeks. Complex workflows with nested routing, loops, and data cleaning typically take three to five weeks depending on API access.",
    },
    {
      q: "What happens when one of our connected tools updates their API?",
      a: "We pin integrations to specific API versions to prevent sudden updates from breaking workflows. If a third-party app makes a breaking update, our provided runbook explains how to swap the endpoint, or we can handle it via a support retainer.",
    },
    {
      q: "Do we need technical staff to maintain the automations after handover?",
      a: "No. We use visual integration tools like n8n and Make that feature easy-to-read flowcharts. We also provide straightforward guides explaining how to monitor executions and resolve common account errors.",
    },
    {
      q: "Can you automate processes that involve legacy software without an API?",
      a: "Yes. If your legacy software has no API, we write browser automation scripts using Playwright. These scripts log in, navigate links, and enter data exactly like a human operator.",
    },
  ],
};

export default function ProcessAutomationPage() {
  return <SubservicePageLayout data={data} />;
}
