import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData, type ServiceCard } from "@/components/ServicePageLayout";
import TechStackCarousel, {
  DIGITAL_MARKETING_ROW1,
  DIGITAL_MARKETING_ROW2,
} from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Data-driven digital marketing strategies — SEO, paid advertising, content, and email automation that drive qualified traffic and revenue.",
  alternates: { canonical: 'https://aibizmod.com/services/digital-marketing' },
  openGraph: {
    title: "Digital Marketing | aibizmod",
    description:
      "Data-driven digital marketing strategies — SEO, paid advertising, content, and email automation that drive qualified traffic and revenue.",
    url: "/services/digital-marketing",
  },
};

const data: ServicePageData = {
  name: "Digital Marketing",
  tagline:
    "For businesses in the UK, USA, and internationally that need accurate measurement before spending on campaigns, we set up tracking plans, perform technical search audits, build Looker Studio dashboards, and map keywords for paid and organic campaigns. You receive clear attribution data so every marketing decision is based on what is actually working.",
  heroBullets: [
    "For businesses that need accurate measurement before spending on campaigns",
    "Tracking plans, technical search audits, Looker Studio dashboards, and keyword maps for paid and organic campaigns",
    "Clear attribution data so every marketing decision is based on what is actually working",
    "Serving clients in the UK, USA, and internationally",
  ],
  slug: "digital-marketing",
  iconColor: "text-emerald-600",

  overview: {
    paragraphs: [
      "We provide technical execution for digital marketing setups, search auditing, and analytics tracking. When you engage us, you receive a detailed tracking plan specifying custom event triggers, a comprehensive technical SEO audit report, custom-built Looker Studio reporting dashboards, and structured search campaign maps. We do not write vague marketing copy or buy list directories; we configure direct attribution and measurement systems so you can review actual campaign returns.",
      "Our services are designed to verify and map customer acquisition routes. For instance, we set up Google Analytics 4 (GA4) with custom conversion logs, audit Google Search Console to fix crawling and schema markup errors, analyze landing page interface friction, and build keyword mapping frameworks for paid search campaigns.",
      "Previous projects include: a GA4 and GTM conversion audit for an e-commerce company that resolved broken checkout event logs; a Search Console crawl optimization project for a software provider that corrected sitemap errors and indexed missing product pages; and a keyword research and ad campaign setup for a logistics provider targeting commercial business-to-business shipping search terms."
    ],
    benefits: [
      "Accurate Google Analytics attribution",
      "Fixed Search Console crawl indexing errors",
      "Custom conversion tracking configuration",
      "Competitor search term comparisons",
      "Unified dashboards in Looker Studio",
      "Structured paid campaign frameworks"
    ],
  },

  features: [
    {
      icon: "target",
      title: "Tracking Plan",
      desc: "We map out Google Tag Manager custom variables, tags, triggers, and datalayers to track specific clicks, form submissions, and purchases."
    },
    {
      icon: "search",
      title: "Audit Report",
      desc: "We run a technical review of Google Search Console and crawling tools to identify broken page links, metadata gaps, and indexing issues."
    },
    {
      icon: "lineChart",
      title: "Reporting Dashboard",
      desc: "We build custom Looker Studio dashboards connecting GA4, Google Search Console, and paid ad platforms into a single view."
    },
    {
      icon: "layers",
      title: "Campaign Structure",
      desc: "We compile search campaign ad groups, write targeted text ads, set up keyword matches, and configure bid limits."
    },
    {
      icon: "globe",
      title: "SEO Recommendations",
      desc: "We write specific recommendations for page headings, URL routing, site loading speed optimizations, and JSON-LD structured schemas."
    },
    {
      icon: "mail",
      title: "Conversion Tracking",
      desc: "We configure conversion parameters in Google Ads, Meta Pixel, and Google Analytics 4 to track outbound responses."
    }
  ],

  process: [
    {
      icon: "search",
      title: "Analytics & SEO Audit",
      desc: "We review your existing GA4 tags, Search Console errors, and current search visibility to document technical issues."
    },
    {
      icon: "target",
      title: "Tracking & Campaign Mapping",
      desc: "We design a spreadsheet detailing your keyword map, Looker Studio layout, and GTM tracking plan."
    },
    {
      icon: "code2",
      title: "Implementation",
      desc: "We set up tracking tags, build dashboards in Looker Studio, fix Search Console sitemap issues, and structure paid ad groups."
    },
    {
      icon: "lineChart",
      title: "Review & Verification",
      desc: "We run test conversions to verify that GA4 and Google Ads capture transaction events correctly."
    }
  ],

  techStack: [],

  faqs: [
    {
      q: "What deliverables do we receive from a digital marketing setup?",
      a: "You receive ownership of custom Looker Studio dashboards, configured Google Tag Manager and GA4 accounts, a documented tracking plan spreadsheet, a Search Console audit report PDF, and your live search campaign structure files."
    },
    {
      q: "Do you buy ad space directly on our behalf?",
      a: "No. We configure and manage the campaigns directly within your own Google Ads or Meta developer accounts. You register your payment details with the platforms directly, so you pay only for direct click cost with no markups from us."
    },
    {
      q: "Why is Google Search Console auditing important?",
      a: "Search Console is the direct link between Google's crawling engine and your website. Auditing identifies errors like slow loading pages, broken redirection paths, missing canonical links, and formatting bugs that block Google from index listing."
    },
    {
      q: "How do you verify that conversion tracking is functioning correctly?",
      a: "We use Tag Assistant and browser development consoles to run real-time transaction simulations on your staging website. We verify that specific tag headers fire and that the correct transaction values are received in GA4 and ad dashboards."
    }
  ],
};

const serviceCards: ServiceCard[] = [
  {
    iconKey: "search",
    title: "Search Marketing",
    bullets: ["SEO", "GEO", "Local SEO", "Technical SEO"],
  },
  {
    iconKey: "target",
    title: "Paid Advertising",
    bullets: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC Management"],
  },
  {
    iconKey: "megaphone",
    title: "Social Media Marketing",
    bullets: ["Social Media Management", "Content Creation", "Influencer Marketing"],
  },
  {
    iconKey: "pencil",
    title: "Brand Content",
    bullets: ["Content Marketing", "Blog Writing", "Copywriting", "Case Studies"],
  },
  {
    iconKey: "mail",
    title: "Email & Lifecycle Marketing",
    bullets: ["Email Campaigns", "Marketing Automation", "Lead Nurturing", "Customer Retention"],
  },
  {
    iconKey: "barChart",
    title: "Performance Insights",
    bullets: ["Analytics", "Conversion Optimization", "Funnel Analysis"],
  },
];

export default function DigitalMarketingPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={
        <TechStackCarousel row1={DIGITAL_MARKETING_ROW1} row2={DIGITAL_MARKETING_ROW2} />
      }
      serviceCards={serviceCards}
    />
  );
}
