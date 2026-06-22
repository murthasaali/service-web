import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import IntegrationHero, { HOSTING_ROW1, HOSTING_ROW2 } from "@/components/ui/integration-hero";

export const metadata: Metadata = {
  title: "Hosting & Infrastructure",
  description:
    "Scalable, secure cloud infrastructure on AWS, GCP, and Azure — designed, built, and managed by our infrastructure team.",
  openGraph: {
    title: "Hosting & Infrastructure | aibizmod",
    description:
      "Scalable, secure cloud infrastructure on AWS, GCP, and Azure — designed, built, and managed by our infrastructure team.",
    url: "/services/hosting-infrastructure",
  },
};

const data: ServicePageData = {
  name: "Hosting & Infrastructure",
  tagline:
    "We set up cloud hosting, configure staging and production environments, establish backups, and build deployment pipelines.",
  slug: "hosting-infrastructure",
  iconColor: "text-orange-500",

  overview: {
    paragraphs: [
      "We deploy cloud hosting platforms and automate release pipelines. When you engage us, you receive a visual infrastructure diagram, active server and database monitoring systems, a documented backup policy, an automated deployment workflow with rollbacks, a security access checklist, and separated staging and production environments. We write plain-language specifications explaining server costs and resource options so your management team can make clear budget decisions.",
      "Our infrastructure builds ensure your systems remain stable during releases and traffic fluctuations. We split applications into separate staging and production zones so updates can be tested prior to release, configure daily automated database backups, set up uptime alerts, and build deploy/rollback scripts to restore previous code versions instantly in case of issues.",
      "Previous projects include: a multi-environment AWS setup for a SaaS company that isolates development, staging, and live production databases; a daily snapshot and automated database recovery system configured on Google Cloud for a billing application; and a git-triggered CI/CD release pipeline using GitHub Actions that deploys code to Vercel and AWS Lambda."
    ],
    benefits: [
      "Separated staging and production systems",
      "Automated deployment with rollback triggers",
      "Configured daily database backups",
      "Active CPU and HTTP alert monitors",
      "Plain business language billing estimates",
      "Complete infrastructure codebase access"
    ],
  },

  features: [
    {
      icon: "layers",
      title: "Infrastructure Diagram",
      desc: "We provide a diagram detailing your virtual networks, server resources, database storage, and external traffic routing."
    },
    {
      icon: "activity",
      title: "Monitoring Setup",
      desc: "We set up alert logs on CPU usage, disk space limits, and HTTP response errors, routing warnings directly to email or messaging channels."
    },
    {
      icon: "database",
      title: "Backup Policy",
      desc: "We schedule automated daily database snapshots, set retention limits, and document step-by-step restoration instructions."
    },
    {
      icon: "workflow",
      title: "Deployment Workflow",
      desc: "We write git-triggered build scripts that run automatic integration checks and push releases to cloud servers without downtime."
    },
    {
      icon: "shield",
      title: "Security Checklist",
      desc: "We lock down SSH server access, enforce SSL encryption certificates, and configure IAM role credentials following the least-privilege principle."
    },
    {
      icon: "cloud",
      title: "Environment Isolation",
      desc: "We provision distinct development, staging, and production environments with isolated databases to prevent test data leaks."
    }
  ],

  process: [
    {
      icon: "search",
      title: "Hosting Assessment",
      desc: "We review your codebase, estimate traffic requirements, and outline server costs across AWS, Google Cloud, or digital VPS providers."
    },
    {
      icon: "layers",
      title: "IaC & Scripting",
      desc: "We codify the server setups using Terraform or deployment scripts, allowing environments to be recreated automatically."
    },
    {
      icon: "shield",
      title: "Staging Setup & QA",
      desc: "We set up staging, verify database restoration scripts, test rollback actions, and execute load simulations."
    },
    {
      icon: "rocket",
      title: "Production Migration",
      desc: "We migrate production data, configure DNS records, verify SSL certificate layers, and set monitoring systems to live."
    }
  ],

  faqs: [
    {
      q: "How do you explain the difference between AWS, Google Cloud, and basic hosting?",
      a: "Basic hosting shares server hardware with other websites, which can cause slowdowns. Cloud providers like AWS and Google Cloud isolate your resources on virtual servers, allowing us to configure isolated environments, set up dedicated database backups, and expand CPU capacity during peak loads."
    },
    {
      q: "What happens if a new code deployment crashes our live application?",
      a: "We build deployment pipelines with a rollback strategy. If the live app encounters errors after a release, our script immediately redirects traffic back to the previously built version. This recovery process takes less than 30 seconds."
    },
    {
      q: "How do we verify that our database backups actually work?",
      a: "We establish a restore drill as part of our backup policy. Every month, our scripts restore a recent database snapshot to an isolated staging database and verify that schemas and record counts match the live production state."
    },
    {
      q: "Do you retain control over our cloud hosting credentials?",
      a: "No. We configure all servers and databases directly within your own billing accounts on AWS, Vercel, or Google Cloud. You retain administrative master credentials, and we access the resources through restricted IAM team permissions that you can revoke at any time."
    }
  ],
};

export default function HostingInfrastructurePage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={<IntegrationHero iconsRow1={HOSTING_ROW1} iconsRow2={HOSTING_ROW2} />}
    />
  );
}
