export interface TopicResource {
  title: string;
  description: string;
  href: string;
  type: 'guide' | 'service' | 'comparison' | 'checklist' | 'blog' | 'template';
}

export interface TopicHub {
  slug: string;
  title: string;
  excerpt: string;
  summary: string;
  corePage: TopicResource;
  supportingAssets: TopicResource[];
}

export const topicHubs: TopicHub[] = [
  {
    slug: 'geo-for-service-businesses',
    title: 'Generative Engine Optimisation (GEO) for Service Businesses',
    excerpt: 'Make your service business discoverable in AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews.',
    summary:
      'GEO is the practice of structuring content, evidence, and technical signals so answer engines cite your pages. For service businesses, this means publishing verifiable claims, named expertise, clear service definitions, and crawlable FAQ content. This hub brings together aibizmod\'s GEO guides, tools, and service offerings.',
    corePage: {
      title: 'What Is Generative Engine Optimization (GEO)?',
      description: 'A comprehensive guide to GEO — what it is, how answer engines work, and how to make your content citable.',
      href: '/blog/what-is-generative-engine-optimization-geo',
      type: 'guide',
    },
    supportingAssets: [
      {
        title: 'Generative Engine Optimisation for Service Businesses',
        description: 'Practical GEO strategies tailored for agencies, consultancies, and technology service providers.',
        href: '/blog/generative-engine-optimisation-for-service-businesses',
        type: 'blog',
      },
      {
        title: 'AI Visibility Audit',
        description: 'A service that benchmarks your site\'s visibility in AI-powered search and provides a roadmap for improvement.',
        href: '/services/ai-automation/ai-visibility-audit',
        type: 'service',
      },
      {
        title: 'SEO & GEO Services',
        description: 'Search marketing services covering both traditional SEO and generative engine optimisation.',
        href: '/services/digital-marketing/search-marketing',
        type: 'service',
      },
      {
        title: 'Website Performance Optimisation',
        description: 'Core Web Vitals improvements and technical SEO fixes that help both traditional and AI search engines.',
        href: '/services/web-development/web-optimization',
        type: 'service',
      },
    ],
  },
  {
    slug: 'business-automation',
    title: 'Business Automation — AI, Workflows & Process Improvement',
    excerpt: 'Automate manual processes, integrate AI, and build custom workflows that save time and reduce errors.',
    summary:
      'Business automation covers everything from simple workflow triggers to AI agent pipelines. The right approach depends on your process complexity, data sensitivity, and transaction volume. This hub connects you to aibizmod\'s automation services, guides, and comparison resources.',
    corePage: {
      title: 'AI Automation Services',
      description: 'Custom automation pipelines, AI agents, generative AI systems, and predictive analytics for UK and India-based businesses.',
      href: '/services/ai-automation',
      type: 'service',
    },
    supportingAssets: [
      {
        title: 'Automation Platform vs Custom Workflow',
        description: 'Compare Zapier, Make, and n8n against custom Python and Node.js workflows — with decision rules for each approach.',
        href: '/comparisons/automation-platform-vs-custom-workflow',
        type: 'comparison',
      },
      {
        title: 'AI Agents vs Traditional Automation',
        description: 'Understand the difference between rule-based automation and AI agent systems — and when to use each.',
        href: '/blog/ai-agents-vs-traditional-automation',
        type: 'blog',
      },
      {
        title: 'How AI Automation Saves Businesses Time and Money',
        description: 'Real examples of automation reducing manual work, eliminating errors, and freeing up team capacity.',
        href: '/blog/how-ai-automation-saves-businesses-time-and-money',
        type: 'blog',
      },
      {
        title: 'Business Process Automation Services',
        description: 'Workflow automation, invoice routing, CRM sync, and approval process automation that connects your existing tools.',
        href: '/services/ai-automation/process-automation',
        type: 'service',
      },
      {
        title: 'AI Chatbot Development & Conversational AI',
        description: 'AI chatbot development, voice agents, and knowledge assistants built on GPT-4 and Claude.',
        href: '/services/ai-automation/conversational-ai',
        type: 'service',
      },
      {
        title: 'Generative AI Development & LLM Integration',
        description: 'Custom GPT development, RAG systems, and LLM integration for business products and workflows.',
        href: '/services/ai-automation/generative-ai',
        type: 'service',
      },
    ],
  },
  {
    slug: 'web-software-buying-decisions',
    title: 'Web & Software Buying Decisions — Build, Buy, or Upgrade',
    excerpt: 'Make informed decisions about custom software, SaaS subscriptions, website redesigns, and technology modernisation.',
    summary:
      'Every business faces technology buying decisions: build custom software or buy SaaS, redesign the website or improve incrementally, go native or cross-platform. Getting these decisions right saves money, time, and competitive position. This hub connects you to aibizmod\'s comparison guides, service offerings, and planning resources.',
    corePage: {
      title: 'Custom Software Development Services',
      description: 'Bespoke software development for businesses that need systems built around their processes, not the reverse.',
      href: '/services/software-development',
      type: 'service',
    },
    supportingAssets: [
      {
        title: 'Custom Software vs SaaS',
        description: 'Compare custom software and SaaS across cost, control, timeline, and lock-in risk — with decision rules for each scenario.',
        href: '/comparisons/custom-software-vs-saas',
        type: 'comparison',
      },
      {
        title: 'Website Redesign vs Incremental Improvements',
        description: 'Decide whether to rebuild your website or fix specific issues — covering SEO risk, cost, timeline, and conversion impact.',
        href: '/comparisons/redesign-vs-improve-existing-website',
        type: 'comparison',
      },
      {
        title: 'Native vs Cross-Platform Apps',
        description: 'Compare native iOS and Android development against Flutter and React Native — performance, cost, and maintenance trade-offs.',
        href: '/comparisons/native-vs-cross-platform-apps',
        type: 'comparison',
      },
      {
        title: 'Web Development Services',
        description: 'Custom websites, SaaS dashboards, e-commerce platforms, and web applications built with React, Next.js, and Node.js.',
        href: '/services/web-development',
        type: 'service',
      },
      {
        title: 'IT Consulting & Digital Transformation',
        description: 'Technology roadmaps, cloud advisory, cybersecurity assessments, and managed IT services.',
        href: '/services/it-consulting-it-services',
        type: 'service',
      },
    ],
  },
];

export function getTopicHub(slug: string): TopicHub | undefined {
  return topicHubs.find((t) => t.slug === slug);
}
