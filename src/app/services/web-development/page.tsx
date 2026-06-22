import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import TechStackCarousel, { WEB_DEV_ROW1, WEB_DEV_ROW2 } from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Build fast, scalable, responsive websites and web applications that help businesses grow online.",
  openGraph: {
    title: "Web Development | aibizmode",
    description:
      "Build fast, scalable, responsive websites and web applications that help businesses grow online.",
    url: "/services/web-development",
  },
};

const data: ServicePageData = {
  name: "Web Development",
  tagline:
    "We build custom corporate websites, e-commerce stores, SaaS dashboards, customer portals, and CRM-connected web applications.",
  slug: "web-development",
  iconColor: "text-electric-blue",

  overview: {
    paragraphs: [
      "We build custom web systems that run business operations and customer interactions. When you engage us for web development, you receive a version-controlled git repository, a fully configured staging environment, a live production environment, and a structured handover document outlining system access and credentials. There are no generic templates or automated setups; every page and dashboard is written specifically for your database and business model.",
      "Our projects address specific commercial use cases. For instance, we build booking platforms for fleet management companies, private customer portals for client document sharing, SaaS dashboards for subscription billing, and e-commerce platforms connected to internal CRM databases. This ensures that web transactions flow directly into your sales and inventory records.",
      "Previous projects include: a multi-site booking portal for a regional equipment hire firm that syncs with their physical inventory; a secure billing dashboard for a B2B logistics company that lets clients pay invoices via Stripe and download receipts; and a CMS-integrated corporate site for a financial advisory firm allowing their staff to publish compliance updates directly without developer assistance."
    ],
    benefits: [
      "Version-controlled codebase ownership",
      "Staging environment for previewing updates",
      "Custom database and API integrations",
      "No proprietary platform licensing fees",
      "Direct CRM and dashboard synchronization",
      "Clean Google Search Console index configuration"
    ],
  },

  features: [
    {
      icon: "code2",
      title: "Repository Setup",
      desc: "We set up a private GitHub or GitLab repository with distinct development, staging, and main production branches, establishing a clean history from day one."
    },
    {
      icon: "globe",
      title: "Staging Environment",
      desc: "We provision a password-protected staging environment mirroring the production setup, allowing your team to verify features and content before they go live."
    },
    {
      icon: "layers",
      title: "QA Checklist",
      desc: "We run every page through a pre-launch QA list covering responsive layout checks on mobile/desktop, form validation audits, and cross-browser testing."
    },
    {
      icon: "database",
      title: "Analytics Implementation",
      desc: "We configure Google Analytics 4 (GA4) with custom event tracking for key user actions like form submissions, resource downloads, and outbound clicks."
    },
    {
      icon: "shield",
      title: "SEO Setup",
      desc: "We build XML sitemaps, customize robots.txt files, set up redirect rules, and integrate JSON-LD structured data to ensure clean search engine crawls."
    },
    {
      icon: "rocket",
      title: "CMS Integration",
      desc: "We connect headless CMS editors (like Sanity, Strapi, or WordPress via API) so your team can edit page content directly without writing any code."
    }
  ],

  process: [
    {
      icon: "search",
      title: "Discovery & Scope",
      desc: "We list all page routes, database requirements, user authentication paths, and API integrations to build a functional specification document."
    },
    {
      icon: "code2",
      title: "Local Build & Dev",
      desc: "Our engineers build the site structure locally using React and Next.js, pushing code regularly to the private repository for progress tracking."
    },
    {
      icon: "testTube",
      title: "QA & Staging Review",
      desc: "We push the builds to staging, run our pre-launch QA checks, and verify all CRM and payment integrations with test transactions."
    },
    {
      icon: "rocket",
      title: "Production Launch",
      desc: "We configure the production domain, point DNS records, launch the site, and verify active analytics tracking and search indexing."
    }
  ],

  techStack: [],

  faqs: [
    {
      q: "What do we actually receive at the end of the project?",
      a: "You receive full admin ownership of the GitHub repository containing the complete source code, host platform configurations (Vercel/AWS), database credentials, Google Analytics properties, and a written handover document outlining how to build, run, and update the application."
    },
    {
      q: "How do you handle site updates and changes before going live?",
      a: "We publish all work-in-progress code to a password-protected staging URL. You can inspect changes on your own devices. Once you approve a release, we run a deployment pipeline to move the staging branch changes into the live production environment."
    },
    {
      q: "Can the website connect to our internal CRM database?",
      a: "Yes. We write custom API integrations using webhook handlers and secure endpoints to transfer website form inquiries and customer profile data directly into CRMs like HubSpot, Zoho, or Salesforce in real time."
    },
    {
      q: "Do we have to pay monthly software licensing fees to you?",
      a: "No. We build custom applications without proprietary software lock-in. You own the code and host it on your own cloud accounts (like Vercel, AWS, or Netlify). You only pay direct utility costs to the cloud hosting provider."
    }
  ],
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={<TechStackCarousel row1={WEB_DEV_ROW1} row2={WEB_DEV_ROW2} />}
    />
  );
}
