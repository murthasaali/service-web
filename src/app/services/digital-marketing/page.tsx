import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Data-driven digital marketing strategies — SEO, paid advertising, content, and email automation that drive qualified traffic and revenue.",
  openGraph: {
    title: "Digital Marketing | space-ai",
    description:
      "Data-driven digital marketing strategies — SEO, paid advertising, content, and email automation that drive qualified traffic and revenue.",
    url: "/services/digital-marketing",
  },
};

const data: ServicePageData = {
  name: "Digital Marketing",
  tagline:
    "Data-driven campaigns that grow your brand, generate qualified leads, and convert them into revenue.",
  slug: "digital-marketing",
  iconColor: "text-emerald-600",

  overview: {
    paragraphs: [
      "Digital marketing at scale requires more than running ads and publishing blog posts. It demands a disciplined, data-led approach — understanding where your audience spends time, what content earns their trust, which channels convert with the best unit economics, and how to allocate budget across them intelligently.",
      "Our team combines technical SEO expertise, performance advertising, content strategy, and email automation into integrated campaigns that move the metrics that matter: qualified traffic, cost per lead, conversion rate, and revenue. We report on business outcomes, not vanity metrics.",
      "Every engagement starts with a thorough audit of your current digital presence, competitor landscape, and conversion funnel. We build a strategy from evidence, execute with precision, test relentlessly, and scale what works — cutting what doesn't, without sentiment.",
    ],
    benefits: [
      "Strategy grounded in data and competitor analysis, not assumptions",
      "Transparent reporting tied directly to revenue and pipeline, not page views",
      "Full-funnel coverage from brand awareness through to closed deal",
      "Integrated SEO, paid, content, and email approach for compounding results",
      "Monthly strategy reviews with actionable recommendations for the next period",
    ],
  },

  features: [
    {
      icon: "search",
      title: "SEO Strategy",
      desc: "Technical SEO audits, keyword research, on-page optimisation, and link-building campaigns that drive sustainable, compounding organic growth.",
    },
    {
      icon: "target",
      title: "Paid Advertising (PPC)",
      desc: "Google Ads and Meta Ads campaigns structured for maximum return on ad spend — with continuous A/B testing of copy, creative, and audience targeting.",
    },
    {
      icon: "fileText",
      title: "Content Marketing",
      desc: "Editorial strategy, long-form content, and thought leadership pieces that build topical authority, earn backlinks, and convert organic visitors.",
    },
    {
      icon: "mail",
      title: "Email Automation",
      desc: "Lifecycle email sequences, behavioural triggers, and newsletter programmes that nurture leads through the funnel and re-engage churned users.",
    },
    {
      icon: "megaphone",
      title: "Social Media Marketing",
      desc: "Organic and paid social strategies across LinkedIn, Instagram, and X — tailored to your audience's behaviour and your brand's voice.",
    },
    {
      icon: "lineChart",
      title: "Analytics & Reporting",
      desc: "GA4 setup, conversion tracking, custom Looker Studio dashboards, and monthly reports tied to KPIs that reflect real business performance.",
    },
  ],

  process: [
    {
      icon: "search",
      title: "Discovery & Audit",
      desc: "Full audit of your digital presence, ad accounts, SEO state, content library, and competitor strategies to establish an accurate baseline.",
    },
    {
      icon: "target",
      title: "Strategy & Planning",
      desc: "Channel selection, budget allocation, content calendar, KPI definition, and stakeholder alignment before any campaigns go live.",
    },
    {
      icon: "megaphone",
      title: "Execution & Launch",
      desc: "Asset creation, campaign setup, content publishing, SEO implementation, and coordinated campaign launch across chosen channels.",
    },
    {
      icon: "lineChart",
      title: "Optimise & Report",
      desc: "Ongoing A/B testing, audience refinement, bid strategy adjustment, and monthly performance reviews against agreed KPIs.",
    },
  ],

  techStack: [
    "Google Analytics 4", "Google Ads", "Meta Ads Manager", "SEMrush", "Ahrefs",
    "HubSpot", "Mailchimp", "Klaviyo", "Hotjar", "Looker Studio", "Google Search Console", "LinkedIn Ads",
  ],

  faqs: [
    {
      q: "How soon can I expect results from SEO?",
      a: "Organic SEO is a long-term investment — most clients see meaningful ranking movement within 3–6 months, with compounding returns building over 12–18 months. Paid advertising (PPC) delivers results within days of launch. For clients who need immediate pipeline alongside long-term organic growth, we run both in parallel from the start.",
    },
    {
      q: "How much budget do I need for paid advertising?",
      a: "Budget depends on your market, competitive landscape, and goals. As a guideline: B2B campaigns typically need £1,500–£3,000/month in ad spend to generate statistically meaningful data; B2C can start from £500–£1,500/month. Our management fee covers strategy, setup, optimisation, and reporting — it is separate from your ad spend.",
    },
    {
      q: "How do you measure success?",
      a: "We establish KPIs at the start of every engagement — typically cost per qualified lead, organic traffic growth, email conversion rates, and revenue influenced by digital channels. Every monthly report is tied directly to these agreed metrics, not surface-level statistics.",
    },
    {
      q: "Will you need access to our existing accounts?",
      a: "Yes. We require admin access to your Google Ads, Meta Ads Manager, GA4, and Search Console accounts to work effectively. We operate within your own accounts at all times — you retain full ownership and can access everything we've built throughout and after the engagement.",
    },
    {
      q: "Do you work with specific industries?",
      a: "We've run successful campaigns across SaaS, e-commerce, professional services, fintech, healthcare, and logistics. Our team adapts strategy to the specific purchase cycle, regulatory environment, and audience behaviour of your industry — no generic playbooks.",
    },
  ],
};

export default function DigitalMarketingPage() {
  return <ServicePageLayout data={data} />;
}
