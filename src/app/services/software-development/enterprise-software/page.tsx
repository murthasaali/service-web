import type { Metadata } from "next";
import SubservicePageLayout, { type SubservicePageData } from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "Enterprise Software | Software Development | aibizmod",
  description: "ERP, CRM, HRMS, and inventory management software development for organisations that need systems built around their processes rather than adapting their processes to an off-the-shelf product.",
  alternates: { canonical: "https://aibizmod.com/services/software-development/enterprise-software" },
  openGraph: {
    title: "Enterprise Software | aibizmod",
    description: "ERP, CRM, HRMS, and inventory management software development for organisations that need systems built around their processes rather than adapting their processes to an off-the-shelf product.",
    url: "/services/software-development/enterprise-software",
  },
};

const data: SubservicePageData = {
  name: "Enterprise Software",
  parentName: "Software Development",
  parentSlug: "software-development",
  slug: "enterprise-software",
  tagline: "ERP, CRM, HRMS, and inventory management software developed for organisations that need systems built around their actual processes — not the other way around.",
  heroBullets: [
    "ERP, CRM, HRMS, and inventory management systems",
    "Built around your business processes instead of standard software limits",
    "Custom data structures and integration with existing tools",
    "High-security permissions and workflow logic"
  ],
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80&auto=format&fit=crop",

  solves: {
    challenge:
      "Off-the-shelf enterprise platforms cover broad use cases but rarely fit any single organisation's processes precisely. The gaps are filled with workarounds, Excel spreadsheets running in parallel, and custom scripts that break with every platform update. The result is an enterprise system that is technically in use but practically bypassed for anything the software does not handle well. Custom enterprise software avoids this by modelling the actual process from the start.",
    challengePoints: [
      "Off-the-shelf ERP or CRM requiring significant process changes to accommodate platform constraints",
      "Multiple disconnected systems covering different operational areas with no integration",
      "Enterprise platform heavily customised to the point where upgrades are blocked by the customisations",
      "Key operational process managed in spreadsheets alongside an enterprise system that cannot support it"
    ],
    solution:
      "We develop custom enterprise software that models your actual operational processes — ERP, CRM, HRMS, or inventory systems — built on modern web architecture with the integrations, reporting, and access control your organisation requires.",
    solutionPoints: [
      "Requirements definition that models your actual process rather than adapting to a platform's data model",
      "Custom ERP, CRM, or HRMS built to your workflow, terminology, and reporting requirements",
      "Integration with existing systems through API or database connectors",
      "Role-based access control and approval workflows appropriate to your organisational structure"
    ],
  },

  capabilities: [
    { icon: "database", title: "ERP Development", description: "Build enterprise resource planning systems covering purchasing, inventory, production, finance, and reporting — modelled on your actual operational process." },
    { icon: "users", title: "CRM Development", description: "Develop custom CRM systems for organisations whose customer management requirements cannot be served by off-the-shelf platforms without significant workflow compromises." },
    { icon: "layers", title: "HRMS Development", description: "Build human resources management systems covering employee records, leave management, payroll processing, performance management, and compliance reporting." },
    { icon: "settings", title: "Inventory Management Systems", description: "Develop inventory and warehouse management systems with real-time stock visibility, multi-location tracking, reorder management, and supplier integration." },
    { icon: "workflow", title: "Workflow and Approval Engine", description: "Build configurable workflow and approval systems that model multi-stage business processes with conditional routing, escalation, and audit trail." },
    { icon: "lineChart", title: "Enterprise Reporting and Dashboards", description: "Develop operational reporting and executive dashboards pulling from enterprise system data, replacing manual export and reconciliation processes." },
  ],

  useCases: [
    { industry: "Manufacturing", title: "Custom ERP for a Mid-size Manufacturer", description: "A manufacturer with a complex production process could not find an off-the-shelf ERP that handled their job costing model correctly. A custom ERP was built around their actual costing method, replacing four separate spreadsheet-based systems." },
    { industry: "Professional Services", title: "Custom CRM for a Law Firm", description: "A law firm needed a CRM that tracked matter relationships, conflict checks, and billing across client entities in a way that standard CRMs could not support without significant workaround." },
    { industry: "Retail", title: "Multi-location Inventory System", description: "A retailer with 20 locations needed real-time inventory visibility across all sites and an automated reorder process. Their existing system required manual stock counts — the custom system provided real-time visibility." },
    { industry: "Healthcare", title: "Staff Management and Rota System", description: "A healthcare group needed an HRMS that handled NHS-specific shift patterns, mandatory rest periods, and skills-based staffing requirements that standard HR platforms did not support." },
    { industry: "Construction", title: "Job Costing and Project Tracking System", description: "A construction company needed a system that tracked materials, labour, and subcontractor costs against project budgets in real time — a capability their existing accounting software could not provide." },
    { industry: "Logistics", title: "Custom WMS for a Third-party Logistics Operator", description: "A 3PL needed a warehouse management system that supported their specific client billing model and integration with multiple client ERPs. No standard WMS supported their configuration requirements." },
  ],

  technologies: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "Tailwind CSS", "Prisma"],

  benefits: [
    { title: "System Modelled on Your Process", description: "Custom enterprise software is designed around how your business actually operates, not around the constraints of a platform built for a broad market." },
    { title: "No Workarounds or Parallel Spreadsheets", description: "A system built to handle your actual requirements removes the workarounds and parallel processes that organisations develop to fill gaps in off-the-shelf software." },
    { title: "Integrations Built From the Start", description: "Custom systems are designed with your existing integrations in mind rather than requiring costly post-purchase integration work to connect disparate platforms." },
    { title: "Upgrade Control", description: "Custom software evolves on your schedule and your requirements rather than a vendor's roadmap, without the upgrade compatibility problems of heavily customised off-the-shelf platforms." },
    { title: "Reporting That Reflects Your Metrics", description: "Operational reports and dashboards built into a custom system use your actual data model and terminology rather than requiring translation from a platform's reporting structure." },
    { title: "Access Control That Matches Your Structure", description: "Role-based access, approval routing, and data visibility controls are defined by your organisational structure rather than limited to the permission model a platform vendor has designed." },
  ],

  faqs: [
    { q: "When does custom enterprise software make more sense than an off-the-shelf platform?", a: "Custom development makes sense when your process requirements differ significantly from what available platforms support, when the customisation required to fit a platform would exceed the cost of custom development, or when integration with other systems is central to the requirement and platform integrations are limited or expensive. We assess both options during scoping and give you an honest comparison rather than defaulting to custom build." },
    { q: "How do you approach requirements for enterprise software?", a: "Enterprise software requirements are more complex than most software projects because they involve multiple user roles, existing processes, compliance requirements, and integration dependencies. We run structured requirements workshops with representatives from each business area that will use the system, produce process maps and data model diagrams, and review requirements with stakeholders before any development begins." },
    { q: "How long does custom enterprise software take to build?", a: "A focused custom module covering one area — inventory management, job costing, leave management — typically takes three to five months. A comprehensive multi-module system takes eight to eighteen months depending on complexity, integrations, and how quickly stakeholders can confirm requirements at each stage. We phase delivery to put working software in front of users early rather than delivering everything at once after a long development period." },
    { q: "Who maintains the software after delivery?", a: "We deliver the source code, documentation, and deployment configuration. You can maintain it with an internal development team or retain us for ongoing maintenance. We offer post-launch support retainers that cover bug fixes, minor enhancements, and security updates. The system is built without proprietary dependencies that would lock you into a specific vendor for maintenance." },
  ],
};

export default function EnterpriseSoftwarePage() {
  return <SubservicePageLayout data={data} />;
}
