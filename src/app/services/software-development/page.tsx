import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Custom software solutions built to streamline operations, automate workflows, and support business growth.",
  openGraph: {
    title: "Custom Software Development | aibizmode",
    description:
      "Custom software solutions built to streamline operations, automate workflows, and support business growth.",
    url: "/services/software-development",
  },
};

const data: ServicePageData = {
  name: "Custom Software Development",
  tagline:
    "We build custom ERP systems, CRM platforms, internal workflows, SaaS dashboards, and operations software.",
  slug: "software-development",
  iconColor: "text-indigo-600",

  overview: {
    paragraphs: [
      "We design and build custom software systems to run business operations and replace manual workflows. When you work with us, you receive a detailed system architecture diagram, an entity-relationship database design, role-based access management, API integrations connecting your internal tools, and a complete documentation package. We do not sell pre-configured packages; everything is custom-written to fit your operational constraints.",
      "Our custom software development addresses specific internal workflows and data processing. For instance, we configure operations software to track products through a warehouse, build ERP systems to reconcile supplier invoices with purchase orders, and build secure internal CRM views that display complete client transaction histories in one screen.",
      "Previous projects include: a custom ERP and inventory system for a regional manufacturing company that tracks raw material stock and automates ordering; a patient intake and referral booking platform for a dental group that integrates with their clinical calendar; and a B2B SaaS scheduling application for a logistics company that coordinates cleaning and maintenance crew shifts across multiple locations."
    ],
    benefits: [
      "Direct database schema access",
      "Custom business logic configuration",
      "Automated reporting pipelines",
      "Role-based permission controls",
      "No licensing cost per user",
      "Complete source code ownership"
    ],
  },

  features: [
    {
      icon: "compass",
      title: "Requirements Workshop",
      desc: "We run a structured discovery session to define user roles, database entities, processing steps, and integration requirements before writing code."
    },
    {
      icon: "layers",
      title: "System Architecture",
      desc: "We map out a component diagram outlining server components, client views, database connections, and external API gateways."
    },
    {
      icon: "database",
      title: "Database Design",
      desc: "We design relational and document database schemas, setting up tables, primary keys, relationships, index mappings, and migration paths."
    },
    {
      icon: "shield",
      title: "User Role Management",
      desc: "We build role-based access control (RBAC) layers defining granular read, write, edit, and deletion permissions for different staff tiers."
    },
    {
      icon: "network",
      title: "API Integrations",
      desc: "We build custom connectors to securely synchronize data between your operations software and third-party accounting, CRM, or shipping services."
    },
    {
      icon: "fileText",
      title: "Documentation Package",
      desc: "We compile detailed API schemas, system deployment guides, database dictionaries, and onboarding documentation for your internal teams."
    }
  ],

  process: [
    {
      icon: "compass",
      title: "Requirements Mapping",
      desc: "We run our workshop to outline database structure, user roles, security tiers, and integration endpoints."
    },
    {
      icon: "code2",
      title: "Sprint Development",
      desc: "We build features in 2-week iterations, providing preview updates on staging environments at the end of each sprint."
    },
    {
      icon: "testTube",
      title: "Integration Testing",
      desc: "We perform automated test suites checking authentication scopes, data sync logic, and backup systems on staging."
    },
    {
      icon: "rocket",
      title: "Release & Handover",
      desc: "We deploy the system to production, configure live credentials, hand over repository ownership, and deliver the documentation package."
    }
  ],

  techStack: [
    "Python",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "AWS",
    "GitHub Actions",
    "FastAPI",
    "Express.js",
    "Redis"
  ],

  faqs: [
    {
      q: "What deliverables do we receive at the conclusion of the software project?",
      a: "You receive administrative access to the code repository, hosting server configurations, SQL database schemas, and a documentation package comprising API schemas, database dictionaries, and server runbooks."
    },
    {
      q: "Do you charge recurring software licensing fees for custom software?",
      a: "No. Once the system is built and paid for, you own the intellectual property and source code. There are no ongoing fees or licensing charges from us. You only pay for your direct server and database usage to your cloud host."
    },
    {
      q: "How do you handle database migrations for existing company records?",
      a: "We run a structured data mapping phase where we extract records from your legacy spreadsheets or databases, transform them to match the new schema, run test migrations on staging, and verify integrity before production deployment."
    },
    {
      q: "What happens if we need new features added to the software in the future?",
      a: "Because you own the complete source code and documentation package, your internal developers can modify and extend the software. Alternatively, we offer post-launch support retainers to build additional features as your processes evolve."
    }
  ],
};

export default function SoftwareDevelopmentPage() {
  return <ServicePageLayout data={data} />;
}
