import type { Metadata } from "next";
import SubservicePageLayout, { type SubservicePageData } from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "Managed IT Operations | IT Consulting & IT Services | aibizmod",
  description: "Helpdesk support, infrastructure planning, cost optimisation, and ongoing IT management services that keep business technology running reliably without requiring an in-house IT team.",
  alternates: { canonical: "https://aibizmod.com/services/it-consulting-it-services/managed-it-operations" },
  openGraph: {
    title: "Managed IT Operations | aibizmod",
    description: "Helpdesk support, infrastructure planning, cost optimisation, and ongoing IT management services that keep business technology running reliably without requiring an in-house IT team.",
    url: "/services/it-consulting-it-services/managed-it-operations",
  },
};

const data: SubservicePageData = {
  name: "Managed IT Operations",
  parentName: "IT Consulting & IT Services",
  parentSlug: "it-consulting-it-services",
  slug: "managed-it-operations",
  tagline: "Helpdesk support, infrastructure planning, cost optimisation, and ongoing IT management services that keep business technology running reliably — without requiring a full in-house IT function.",
  heroImage: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1000&q=80&auto=format&fit=crop",

  solves: {
    challenge:
      "Businesses that have grown past the point where one person can manage all their IT informally but are not large enough to justify a full IT department face a specific challenge. Technology problems are handled reactively by whoever is least busy. There is no IT strategy, no asset management, and no cost oversight. Infrastructure and software renewals are missed until they cause a problem, and there is no single owner of the IT environment.",
    challengePoints: [
      "Technology support handled reactively with no clear ownership or response time standard",
      "No inventory of IT assets or software licences, so renewals are missed and spend is uncontrolled",
      "Infrastructure decisions made without technical input, creating problems that compound over time",
      "Staff productivity lost to IT issues that take days to resolve because there is no dedicated support function"
    ],
    solution:
      "We provide managed IT operations as an extension of your team — handling support, managing your IT environment, tracking assets and renewals, and providing the technical input your leadership needs for infrastructure and software decisions.",
    solutionPoints: [
      "Helpdesk support for staff IT issues with defined response time standards",
      "IT asset and software licence inventory with renewal tracking and cost visibility",
      "Regular infrastructure review to identify maintenance requirements before they cause problems",
      "Technical advisory input for IT purchasing, contract renewals, and infrastructure decisions"
    ],
  },

  capabilities: [
    { icon: "headphones", title: "IT Helpdesk Support", description: "Provide responsive first and second-line support for staff IT issues, with defined response and resolution time targets and a ticketing system for visibility and reporting." },
    { icon: "database", title: "IT Asset Management", description: "Build and maintain an inventory of hardware, software, and cloud services with licence tracking, renewal calendars, and cost attribution by team or cost centre." },
    { icon: "settings", title: "Ongoing Infrastructure Management", description: "Regular review and maintenance of your server, network, and cloud environment to ensure patching is current, configurations are correct, and capacity is adequate." },
    { icon: "lineChart", title: "IT Cost Optimisation", description: "Audit technology spend across hardware, software, and cloud services to identify unused licences, over-provisioned resources, and better-value alternatives." },
    { icon: "shield", title: "IT Security Management", description: "Maintain endpoint protection, manage user access reviews, oversee patch management, and handle security incidents as part of ongoing IT operations." },
    { icon: "users", title: "IT Onboarding and Offboarding", description: "Manage the IT provisioning process for new starters and the deprovisioning process for leavers, including account creation, device setup, and access removal." },
  ],

  useCases: [
    { industry: "Professional Services", title: "IT Support for a 50-person Firm", description: "A professional services firm outgrew their part-time IT person but was not ready to hire a full IT team. We provided managed IT support covering helpdesk, infrastructure management, and strategic advisory." },
    { industry: "Retail", title: "IT Asset Audit for a Growing Retailer", description: "A retailer with multiple locations had no inventory of IT equipment or software licences. We audited all assets, identified three unused licence categories, and set up a renewal calendar that prevented further missed renewals." },
    { industry: "Finance", title: "IT Cost Reduction Programme", description: "A financial services company was spending 30 percent more than market rate on their cloud and software stack. A cost audit identified consolidation opportunities that reduced monthly IT spend by 25 percent." },
    { industry: "Healthcare", title: "Managed IT for a Private Healthcare Group", description: "A private healthcare group needed IT support that understood their confidentiality and data handling requirements. We provided managed IT with policies aligned to their patient data obligations." },
    { industry: "Education", title: "Staff Onboarding IT Process", description: "A training company with frequent contractor onboarding had no documented IT setup process, causing delays and inconsistent access provisioning. We designed and implemented a standard onboarding checklist." },
    { industry: "Manufacturing", title: "Infrastructure Review and Upgrade Planning", description: "A manufacturer's server infrastructure was approaching end of life with no replacement plan. We assessed the environment and produced a phased upgrade plan sequenced by business criticality." },
  ],

  technologies: ["Microsoft 365", "Google Workspace", "Jamf", "Intune", "Meraki", "Freshservice", "Zendesk", "AWS", "Azure", "1Password", "Okta"],

  benefits: [
    { title: "IT Problems Resolved Without Disrupting the Business", description: "Defined response times and a managed support process mean staff IT issues are handled by someone whose job it is, rather than whoever can be pulled away from real work." },
    { title: "No More Surprise Renewals or Licence Gaps", description: "Asset and licence inventory with proactive renewal tracking prevents the scramble caused by discovered expired subscriptions and unlicensed software." },
    { title: "Technology Spend Under Control", description: "Regular cost audits and licence reviews keep IT spend aligned to actual usage rather than accumulating unused subscriptions and over-provisioned capacity." },
    { title: "Infrastructure Maintained Rather Than Patched Reactively", description: "Regular infrastructure review identifies maintenance needs before they become failures, reducing the frequency of reactive incidents that cause downtime." },
    { title: "Expert Input Without Full-time Cost", description: "Access to technical advisory for purchasing decisions, contract negotiations, and infrastructure strategy without the cost of a full-time senior IT employee." },
    { title: "Consistent, Documented IT Processes", description: "Standard onboarding, offboarding, and access management processes reduce the security and operational risks that come from informal, inconsistently applied procedures." },
  ],

  faqs: [
    { q: "What is included in managed IT operations versus just helpdesk support?", a: "Helpdesk support covers reactive assistance with staff IT problems. Managed IT operations is a broader ongoing service that includes helpdesk but also adds proactive infrastructure management, asset and licence tracking, security management, cost review, and strategic advisory. The distinction is between fixing problems when they occur versus actively managing the IT environment to prevent them." },
    { q: "How do you structure response times for helpdesk support?", a: "We define response and resolution time targets by priority level, typically: critical issues affecting multiple staff or business-critical systems within one hour response, high priority single-user critical issues within four hours, standard requests within one business day. We provide a monthly report covering actual response and resolution times against these targets." },
    { q: "Do you manage cloud infrastructure as part of managed IT operations?", a: "Yes. Cloud service management — AWS, Azure, Microsoft 365, Google Workspace — is part of our managed IT scope. This includes user access management, billing review, configuration changes, and incident response for cloud services. The boundary with DevOps services is that managed IT handles the operational management of existing cloud environments; DevOps handles the design and implementation of new infrastructure or deployment pipelines." },
    { q: "What size of business do managed IT operations make sense for?", a: "Typically businesses between 20 and 200 staff who have outgrown informal IT management but are not yet at the scale to justify building a full internal IT team. The economics work when the cost of managed IT is less than a full-time senior IT employee, which is the case for most organisations in this range." },
  ],
};

export default function ManagedITOperationsPage() {
  return <SubservicePageLayout data={data} />;
}
