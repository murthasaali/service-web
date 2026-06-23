import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData, type ServiceCard } from "@/components/ServicePageLayout";
import TechStackCarousel, {
  SOFTWARE_DEV_ROW1,
  SOFTWARE_DEV_ROW2,
} from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Custom software solutions built to streamline operations, automate workflows, and support business growth.",
  alternates: { canonical: 'https://aibizmod.com/services/software-development' },
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
    "For businesses across the UK, USA, and internationally whose operations outgrow spreadsheets and off-the-shelf tools, we design and build custom ERP systems, CRM platforms, internal workflows, SaaS dashboards, and operations software. You receive a documented codebase with role-based access, API integrations, and a handover package your internal team can maintain.",
  heroBullets: [
    "For businesses whose operations have outgrown spreadsheets and off-the-shelf tools",
    "Custom ERP systems, CRM platforms, internal workflows, SaaS dashboards, and operations software",
    "Documented codebase with role-based access, API integrations, and a maintainable handover package",
    "Serving clients in the UK, USA, and internationally",
  ],
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

  techStack: [],

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

const serviceCards: ServiceCard[] = [
  {
    iconKey: "package",
    title: "Enterprise Software",
    bullets: ["ERP", "CRM", "HRMS", "Inventory Management"],
  },
  {
    iconKey: "workflow",
    title: "Business Applications",
    bullets: ["Workflow Automation", "Internal Tools", "Billing Systems", "Project Management Systems"],
  },
  {
    iconKey: "layers",
    title: "Industry-Specific Software",
    bullets: ["Healthcare Solutions", "Construction Solutions", "Logistics Solutions", "Education Solutions", "Manufacturing Solutions"],
  },
  {
    iconKey: "refreshCw",
    title: "Software Modernization",
    bullets: ["Legacy Migration", "Re-engineering", "System Upgrades"],
  },
  {
    iconKey: "rocket",
    title: "Product Development",
    bullets: ["MVPs", "SaaS Products", "Maintenance & Support"],
  },
  {
    iconKey: "compass",
    title: "IT Consulting & Services",
    bullets: ["Digital Transformation Consulting", "Technology Roadmaps", "IT Planning", "Solution Architecture"],
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={
        <TechStackCarousel row1={SOFTWARE_DEV_ROW1} row2={SOFTWARE_DEV_ROW2} />
      }
      serviceCards={serviceCards}
    />
  );
}
