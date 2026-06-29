import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData, type ServiceCard } from "@/components/ServicePageLayout";
import TechStackCarousel, { AUTOMATION_ROW1, AUTOMATION_ROW2 } from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "AI agents, machine learning, generative AI, computer vision, and workflow automation — intelligent systems that eliminate manual work and accelerate operations.",
  alternates: { canonical: 'https://aibizmod.com/services/automation' },
  openGraph: {
    title: "AI & Automation | aibizmod",
    description:
      "AI agents, machine learning, generative AI, computer vision, and workflow automation — intelligent systems that eliminate manual work and accelerate operations.",
    url: "/services/automation",
  },
};

const data: ServicePageData = {
  name: "AI & Automation",
  tagline:
    "We design and build custom AI tools and automated pipelines that connect your software stack and handle routine administrative tasks. Your team receives clean integrations, documented workflows, and direct ownership of the systems, freeing up hours spent on manual coordination and copying data by hand.",
  heroBullets: [
    "Built for teams losing time to repetitive back-office workflows and database updates.",
    "Custom pipelines for routing invoices, syncing CRM records, and sending management reports.",
    "Clear setup documentation and error-handling steps so you own the systems.",
  ],
  slug: "automation",
  iconColor: "text-yellow-600",

  overview: {
    paragraphs: [
      "Almost every growing business has workflows where someone manually downloads a file, formats a spreadsheet, and uploads it to another tool. This routine copy-paste work is slow, easy to mess up, and takes time away from actual operations. We analyze these bottlenecks, write clean connectors between your systems, and automate the transfer of data. Whether it is routing incoming PDF invoices to your accounting ledger or syncing form leads across marketing tools, we handle the integration, build in error checks, and document the setup so your team can manage it moving forward.",
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
      desc: "We set up automated rules to parse details from incoming invoice attachments, write them to your accounting ledger, and alert managers for review."
    },
    {
      icon: "users",
      title: "Lead Assignment Rules",
      desc: "We automate how leads are distributed by reading incoming form inquiries, cross-referencing team calendars, and creating CRM records automatically."
    },
    {
      icon: "refreshCw",
      title: "CRM Synchronization",
      desc: "We build real-time synchronization rules using webhooks to keep data consistent between your CRM, database, and marketing platforms."
    },
    {
      icon: "barChart",
      title: "Weekly Reporting",
      desc: "We run scheduled scripts that query operational databases, generate clean summary sheets, and send reports directly to stakeholder inboxes."
    },
    {
      icon: "bell",
      title: "Customer Notifications",
      desc: "We configure automated alerts that notify customers via SMS or email the moment their shipping status or order details are updated."
    },
    {
      icon: "workflow",
      title: "Approval Workflows",
      desc: "We build simple Slack buttons and quick email approval forms so team leaders can approve purchase orders without logging into separate portals."
    }
  ],

  process: [
    {
      icon: "compass",
      title: "Workflow Discovery",
      desc: "We review your current manual steps, map out a clear logic flow, and detail the estimated time savings before writing any code."
    },
    {
      icon: "code2",
      title: "API Integration",
      desc: "We write API connectors to bridge your software tools, configuring webhooks and credential security inside python scripts or n8n workflows."
    },
    {
      icon: "testTube",
      title: "Exception Testing",
      desc: "We test edge cases like missing form fields, incorrect inputs, and network drops to verify that self-correction and error alerts work."
    },
    {
      icon: "rocket",
      title: "Handover & Monitor",
      desc: "We launch the workflows, set up a simple monitor dashboard, explain the runbooks to your team, and hand over full repository ownership."
    }
  ],

  techStack: [],

  faqs: [
    {
      q: "What happens if an automated workflow fails or an API goes down?",
      a: "We build workflows to catch and log errors. If a tool's API fails, the system logs the issue, alerts your team on Slack or email, and pauses the workflow safely. You can review the details and trigger a manual run once the external tool is online."
    },
    {
      q: "Do we need to pay for automation licenses?",
      a: "No, we don't build on top of expensive closed platforms. We write python integrations or set up open-source engines like n8n on your own servers. You only pay for your actual cloud hosting costs with no markup."
    },
    {
      q: "Where do we see a list of automated workflows currently running?",
      a: "We set up a simple monitor dashboard where your team can log in to check task histories, queue lists, run statuses, and logs at any time."
    },
    {
      q: "Can you automate legacy systems that do not have an API?",
      a: "Yes. If an old platform doesn't have an API, we build secure browser automation scripts that log in, navigate the dashboard, and export data exactly like a human user would."
    }
  ],
};

const serviceCards: ServiceCard[] = [
  {
    title: "Process Automation",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Close-up of server microchip board representing automated business process workflows.",
    bullets: ["Workflow & Process Automation"],
    href: "/services/automation/process-automation",
  },
  {
    title: "Conversational AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Futuristic humanoid face interface symbolizing conversational AI and voice agents.",
    bullets: ["AI Chatbots", "Voice Agents", "Knowledge Assistants"],
    href: "/services/automation/conversational-ai",
  },
  {
    title: "AI Intelligence",
    image: "/services/automation/ai-intelligence.png",
    imageAlt: "Analytics graphs depicting predictive forecasting models and data intelligence algorithms.",
    bullets: ["Predictive Analytics", "Recommendation Systems"],
    href: "/services/automation/ai-intelligence",
  },
  {
    title: "Generative AI",
    image: "/services/automation/generative-ai.jpg",
    imageAlt: "Artificial neural network diagram representing generative AI models and LLM system architecture.",
    bullets: ["Custom GPT Development", "RAG Systems", "LLM Integration", "Enterprise AI Deployment"],
    href: "/services/automation/generative-ai",
  },
  {
    title: "AI Vision",
    image: "/services/automation/ai-vision.jpg",
    imageAlt: "Digital computer vision interface scan representing automated optical character recognition.",
    bullets: ["Computer Vision", "OCR Solutions"],
    href: "/services/automation/ai-vision",
  },
  {
    title: "AI-Powered Apps",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Programmer refining machine learning model training scripts for AI-powered applications.",
    bullets: ["Custom AI Solutions", "Model Fine-tuning", "AI Integration", "Deployment & Monitoring"],
    href: "/services/automation/ai-powered-apps",
  },
  {
    title: "Agentic AI",
    image: "/services/automation/agentic-ai.jpg",
    imageAlt: "Flow diagram representing autonomous AI agent operations and feedback loops with human-in-the-loop controls.",
    bullets: ["Autonomous AI Agents", "Feedback Flow Architecture", "Cross-Platform Execution", "Human-in-the-Loop Guardrails"],
    href: "/services/automation/agentic-ai",
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
