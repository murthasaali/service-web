import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData, type ServiceCard } from "@/components/ServicePageLayout";
import IntegrationHero, { CX_ROW1, CX_ROW2 } from "@/components/ui/integration-hero";

export const metadata: Metadata = {
  title: "Customer Experience Management",
  description:
    "CX strategy, CRM implementation, and omnichannel communication setup — turning every customer interaction into lasting loyalty.",
  alternates: { canonical: 'https://aibizmod.com/services/customer-exp-management' },
  openGraph: {
    title: "Customer Experience Management | aibizmod",
    description:
      "CX strategy, CRM implementation, and omnichannel communication setup — turning every customer interaction into lasting loyalty.",
    url: "/services/customer-exp-management",
  },
};

const data: ServicePageData = {
  name: "Customer Experience Management",
  tagline:
    "For customer-facing teams and service businesses across the UK, USA, and international markets that need better visibility into client history, we clean CRM databases, configure ticket routing, and connect HubSpot, Zoho, Salesforce, Intercom, and WhatsApp Business. The result is faster agent response, accurate customer records, and measurable improvements in support consistency.",
  heroBullets: [
    "For customer-facing teams that need better visibility into client history and faster support response",
    "CRM database cleanup, ticket routing, and setup of HubSpot, Zoho, Salesforce, Intercom, and WhatsApp Business",
    "Accurate customer records, faster agent response, and consistent support operations",
    "Serving clients in the UK, USA, and internationally",
  ],
  slug: "customer-exp-management",
  iconColor: "text-pink-600",

  overview: {
    paragraphs: [
      "We configure support helpdesks, clean client databases, and customize communication workflows to give your agents accurate customer context when answering queries. When you work with us, you receive a mapped support routing diagram, cleaned CRM contact fields, and integrated ticketing channels across HubSpot, Zoho, Salesforce, Intercom, and WhatsApp Business. We do not write soft relationship slogans; we build the database syncs and communication queues — merging duplicate CRM profiles, configuring automated ticket assignment rules based on agent load, setting up post-resolution feedback surveys, and displaying billing records directly inside support chat screens — so every agent interaction is backed by complete and accurate data.",
    ],
    benefits: [
      "Deduplicated and structured CRM contacts",
      "Automated ticket routing rules",
      "Unified customer support histories",
      "Post-support CSAT survey logs",
      "WhatsApp Business text configurations",
      "Shared agent inboxes in Intercom"
    ],
  },

  features: [
    {
      icon: "database",
      title: "CRM Data Cleanup",
      desc: "We run deduplication scripts, map database columns, delete invalid entries, and organize contact history logs."
    },
    {
      icon: "workflow",
      title: "Ticket Routing Logic",
      desc: "We set up rules that automatically route customer queries to the right support queue based on text analysis or ticket tags."
    },
    {
      icon: "eye",
      title: "History Visibility Setup",
      desc: "We pull customer invoice values and shipment events directly into your HubSpot or Zoho ticket views."
    },
    {
      icon: "messageSquare",
      title: "Feedback Collection",
      desc: "We configure CSAT and NPS survey forms that trigger automatically after a ticket is marked resolved, recording scores to the customer profile."
    },
    {
      icon: "bell",
      title: "WhatsApp Business Setup",
      desc: "We configure WhatsApp API access, set up message templates, and link the channel to HubSpot or Intercom inboxes."
    },
    {
      icon: "settings",
      title: "HubSpot & Salesforce Config",
      desc: "We customize pipeline stages, build custom properties, and set up team permission profiles."
    }
  ],

  process: [
    {
      icon: "compass",
      title: "Database Audit",
      desc: "We review duplicate contacts, evaluate helpdesk layouts, and map communication channels to find bottlenecks."
    },
    {
      icon: "target",
      title: "Integration Mapping",
      desc: "We draft CRM properties, ticketing rules, and WhatsApp templates in a specification sheet before setup."
    },
    {
      icon: "code2",
      title: "Systems Configuration",
      desc: "We run data cleanup scripts, set up routing workflows, connect Intercom or WhatsApp, and build custom layouts."
    },
    {
      icon: "rocket",
      title: "Handover & Go-Live",
      desc: "We test routing rules with sample tickets, verify survey triggers, and deliver setup guides to your team."
    }
  ],

  faqs: [
    {
      q: "What systems do you configure for customer experience management?",
      a: "We configure and clean database systems like HubSpot, Zoho, and Salesforce. We also set up communication inboxes and ticket routing tools in Intercom, Zendesk, and WhatsApp Business API."
    },
    {
      q: "Why is CRM data cleanup a part of customer experience?",
      a: "If your customer profiles are duplicate or disorganized, support agents cannot see accurate invoice histories, purchase dates, or previous logs. Cleaning the database ensures agents have the correct context immediately."
    },
    {
      q: "Do you write customer service response scripts?",
      a: "No. We handle the technical setup—configuring ticket routing queues, API webhooks, databases, and survey triggers. We do not write customer service manuals or provide staffing."
    },
    {
      q: "How do automated surveys log customer scores?",
      a: "We set up GTM triggers or helpdesk actions that send an email or chat link after a ticket closes. When the customer submits a score, the API writes the CSAT or NPS value directly to their CRM profile for reporting."
    }
  ],
};

const serviceCards: ServiceCard[] = [
  {
    iconKey: "users",
    title: "CRM Services",
    bullets: ["CRM Implementation", "Customization", "Integration"],
  },
  {
    iconKey: "headphones",
    title: "Customer Support Systems",
    bullets: ["Helpdesk Systems", "Ticketing Systems", "Live Chat", "Knowledge Bases"],
  },
  {
    iconKey: "messageSquare",
    title: "Customer Engagement",
    bullets: ["Loyalty Programs", "Omnichannel Support", "WhatsApp Integration"],
  },
  {
    iconKey: "lineChart",
    title: "Customer Intelligence",
    bullets: ["Customer Analytics", "Retention Tracking"],
  },
  {
    iconKey: "workflow",
    title: "Automation",
    bullets: ["Workflow Automation", "AI Chatbots", "Voice Agents"],
  },
  {
    iconKey: "compass",
    title: "IT Consulting",
    bullets: ["Digital Transformation", "Technology Roadmaps", "IT Planning"],
  },
];

export default function CustomerExpManagementPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={<IntegrationHero iconsRow1={CX_ROW1} iconsRow2={CX_ROW2} />}
      serviceCards={serviceCards}
    />
  );
}
