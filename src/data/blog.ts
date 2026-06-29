export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  citations?: { label: string; url: string }[];
}

export interface BlogDefinition {
  term: string;
  definition: string;
}

export interface RelatedService {
  name: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  answerSummary: string;
  keyTakeaways: string[];
  definitions?: BlogDefinition[];
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  author: {
    name: string;
    initials: string;
  };
  reviewer?: string;
  relatedServices?: RelatedService[];
  sections: BlogSection[];
}

export const blogAuthor = {
  name: "aibizmod Editorial Team",
  initials: "AE",
  url: "https://aibizmod.com/blog",
};

export const categories = [
  "All",
  "Company Notes",
  "SEO",
  "GEO",
  "Website Strategy",
  "AI & Automation",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-generative-engine-optimization-geo",
    title: "What Is Generative Engine Optimization (GEO)?",
    excerpt:
      "AI-powered search is changing how businesses get discovered online. GEO is the practice of making your content citable by answer engines like ChatGPT, Perplexity, and Google AI Overviews.",
    answerSummary:
      "Generative Engine Optimization (GEO) is the practice of structuring web content so AI-powered answer engines can accurately understand, extract, and cite it. Unlike traditional SEO which optimises for ranked links, GEO focuses on factual specificity, structured data, verifiable claims, and clear answers that an AI system can reference directly in a generated response.",
    keyTakeaways: [
      "GEO prepares your content for AI answer engines — ChatGPT, Google AI Overviews, Perplexity, and Bing Copilot — that generate direct answers rather than link lists.",
      "Vague marketing language ('scalable solutions', 'industry-leading') gives AI nothing citable. Specific facts, process descriptions, and named deliverables are far more extractable.",
      "Adding Organisation, Service, and FAQPage structured data helps AI systems identify your business as a trusted entity.",
      "GEO does not replace SEO. It raises the bar for content clarity — the same specificity that makes a page citable also makes it more useful to human readers.",
    ],
    definitions: [
      {
        term: "Generative Engine Optimisation (GEO)",
        definition:
          "The practice of structuring web content so AI-powered answer engines — such as ChatGPT, Google AI Overviews, Bing Copilot, and Perplexity — can accurately understand, summarise, and cite the page as a source in a generated response.",
      },
      {
        term: "Answer engine",
        definition:
          "A search or information retrieval system that generates a direct natural-language answer to a query rather than returning a list of links. Examples include Google AI Overviews, Bing Copilot, Perplexity, and ChatGPT search mode.",
      },
    ],
    category: "GEO",
    image: "/blog/geo-explained.svg",
    imageAlt: "A gradient background with the title 'What Is Generative Engine Optimization (GEO)?' overlaid.",
    date: "June 27, 2026",
    readTime: "7 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    sections: [
      {
        heading: "How AI answer engines are changing the way people find service providers",
        paragraphs: [
          "Traditional search engines return a list of blue links. AI answer engines — such as ChatGPT, Google AI Overviews, Perplexity, and Bing Copilot — generate a direct written response that synthesises information from multiple sources. For a service business, this changes the discovery process: a potential client may receive a paragraph about service providers without clicking through to any single website.",
          "Generative Engine Optimisation, or GEO, is the work of making a business's expertise easy for these AI systems to understand, summarise, and cite. If a service page is well structured, fact-specific, and clearly attributed, an AI system is more likely to reference it as a source. If the page contains only generic marketing language, the AI system will draw from competitors who provide more extractable content.",
        ],
      },
      {
        heading: "What makes a page citable by an AI system",
        paragraphs: [
          "AI answer engines evaluate web content differently from traditional search engines. They prioritise pages that state specific facts directly, describe processes clearly, name tools and methodologies, and provide verifiable evidence. Pages that rely on aspirational language — 'we deliver world-class solutions' — rarely get cited because the AI cannot corroborate or meaningfully extract those claims.",
          "A citable service page typically includes: a clear description of who the service is for, what the engagement process includes, which tools and platforms are used, what specific deliverables a client receives, and what outcomes a client can realistically expect. These details give an AI system concrete material to reference.",
        ],
        bullets: [
          "State your audience and service clearly in the first paragraph.",
          "Describe your process in specific, sequential steps.",
          "Name the tools, platforms, and frameworks you use.",
          "Include measurable outcomes or realistic timelines where available.",
          "Avoid superlatives and unverifiable claims.",
        ],
      },
      {
        heading: "Structured data: helping AI systems identify your business as a trusted source",
        paragraphs: [
          "Structured data markup — using Schema.org vocabulary in JSON-LD format — helps AI systems identify your business entity, the services you offer, and the questions you answer. The most important schemas for GEO are Organisation, Service, and FAQPage. When these are present and accurate, an AI system can confidently attribute information to your business rather than treating it as anonymous web content.",
          "Adding structured data does not guarantee citation, but its absence makes it harder for AI systems to distinguish your content from the thousands of similar service pages on the web.",
        ],
        citations: [
          {
            label: "Schema.org: Organisation",
            url: "https://schema.org/Organization",
          },
          {
            label: "Schema.org: Service",
            url: "https://schema.org/Service",
          },
        ],
      },
      {
        heading: "How to start a practical GEO improvement plan today",
        paragraphs: [
          "A GEO improvement plan starts with content hygiene: removing duplicate sections across similar pages, giving each service page a single clear purpose, and ensuring that important facts — pricing context, deliverables, process steps, geographic coverage — are easy to extract without reading the entire page.",
          "The pages that benefit most from GEO work are those that answer the questions a buyer asks before contacting a supplier. If your website already contains those answers but buries them in lengthy paragraphs, the practical work is restructuring, not rewriting.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-vs-traditional-automation",
    title: "AI Agents vs Traditional Automation: Which Is Right for Your Business?",
    excerpt:
      "Both AI agents and traditional automation can save time and reduce costs — but they solve different problems. Understanding the difference helps you invest in the right approach.",
    answerSummary:
      "Traditional automation follows predefined rules — if X happens, do Y. AI agents use large language models to make decisions, adapt to new situations, and handle unstructured inputs like emails or conversations. Traditional automation is best for repetitive, predictable tasks with clear inputs and outputs. AI agents excel at tasks that require judgment, context understanding, and flexibility — such as responding to customer enquiries, sorting complex documents, or triaging support tickets.",
    keyTakeaways: [
      "Traditional automation (RPA, workflow tools, Zapier) executes fixed rules reliably — best for predictable, repetitive tasks with structured data.",
      "AI agents use language models to interpret unstructured inputs, make decisions, and adapt — best for tasks requiring judgment and context.",
      "The most effective approach combines both: traditional automation for the routine steps and AI agents for decisions that need human-like understanding.",
      "Starting with a process audit — listing every repetitive task and classifying it as rules-driven or judgment-driven — prevents investing in the wrong solution.",
    ],
    definitions: [
      {
        term: "Traditional automation (RPA)",
        definition:
          "Rule-based software automation that follows predefined instructions to perform repetitive tasks. Robotic Process Automation (RPA) tools like UiPath, Automation Anywhere, and Microsoft Power Automate execute structured workflows such as data entry, invoice processing, and report generation without deviation.",
      },
      {
        term: "AI agent",
        definition:
          "An AI-powered system that uses large language models (LLMs) to interpret unstructured inputs, make contextual decisions, and take action. Unlike rule-based automation, AI agents can handle variations in language, ambiguous requests, and tasks that require understanding rather than pattern matching.",
      },
    ],
    category: "AI & Automation",
    image: "/blog/ai-agents-vs-automation.svg",
    imageAlt: "A gradient background with the title 'AI Agents vs Traditional Automation' overlaid.",
    date: "June 27, 2026",
    readTime: "8 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "AI & Automation", href: "/services/automation" },
      { name: "Software Development", href: "/services/software-development" },
    ],
    sections: [
      {
        heading: "The fundamental difference: rules versus judgment",
        paragraphs: [
          "Traditional automation tools — Robotic Process Automation (RPA), workflow engines like n8n and Make, and integration platforms like Zapier — operate on fixed rules. When an invoice arrives as a CSV file, the system extracts column A, maps it to field B, and enters it into the accounting software. The process never varies because the inputs are predictable.",
          "AI agents work differently. They use large language models to interpret what a piece of content means, not just what it says. An AI agent can read a customer email that says 'I need to update my billing address and also I think I was overcharged last month' — and decide that this requires two actions: an account update and a billing review. A traditional automation tool cannot make that judgment call.",
        ],
      },
      {
        heading: "When to use traditional automation",
        paragraphs: [
          "Traditional automation is the right choice when a task meets three criteria: the inputs are structured or predictable, the rules can be defined in advance, and the output is the same every time. Common examples include data entry between systems, invoice matching against purchase orders, scheduled report generation, and form-triggered email responses.",
          "The advantage of traditional automation is reliability. A well-configured workflow will run the same way thousands of times without error. The disadvantage is brittleness: if the input format changes, the automation breaks until a human updates the rules.",
        ],
        bullets: [
          "Invoice processing from structured formats (CSV, XML, EDI).",
          "Data synchronisation between CRM, ERP, and accounting platforms.",
          "Scheduled report generation and distribution.",
          "Employee onboarding workflows (account creation, permissions, document collection).",
        ],
      },
      {
        heading: "When to use AI agents",
        paragraphs: [
          "AI agents are valuable when tasks involve unstructured inputs, require understanding context, or need adaptation to new situations. Common applications include processing customer enquiries from email and chat, classifying and routing support tickets, extracting information from scanned documents and PDFs, and generating personalised responses at scale.",
          "The advantage of AI agents is flexibility. They handle variations in language, incomplete information, and edge cases without manual reprogramming. The disadvantage is that they can produce unexpected outputs — AI agents need guardrails, human review for high-stakes decisions, and continuous monitoring.",
        ],
        bullets: [
          "Sorting and responding to customer emails and messages.",
          "Extracting data from unstructured documents (contracts, invoices, PDFs).",
          "Triaging and routing support tickets by urgency and topic.",
          "Generating personalised sales follow-ups based on conversation history.",
        ],
      },
      {
        heading: "How to decide which approach fits your business",
        paragraphs: [
          "The decision between traditional automation and AI agents depends on the nature of the task, not the popularity of the technology. A practical approach is to audit your team's repetitive work and classify each task: is it rule-driven or judgment-driven?",
          "Rule-driven tasks — where the decision path can be drawn as a flowchart — are candidates for traditional automation. Judgment-driven tasks — where a human currently reads, interprets, and decides — are candidates for AI agents. Many real-world processes combine both: an AI agent reads and classifies an incoming enquiry, then a traditional workflow routes it to the correct team and triggers a response.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-automation-saves-businesses-time-and-money",
    title: "How AI Automation Saves Businesses Time and Money",
    excerpt:
      "Real numbers and practical strategies for reducing operational costs with AI-powered automation — without replacing your entire team.",
    answerSummary:
      "AI automation reduces operational costs by handling repetitive tasks that consume team hours — email processing, data entry, document extraction, customer triage, and report generation. Businesses typically recover the cost of implementation within three to six months and free 15–30 hours per week per automated workflow. The most effective approach targets specific high-volume, low-judgment tasks rather than attempting wholesale process replacement.",
    keyTakeaways: [
      "Businesses typically save 15–30 hours per week per automated workflow — with cost recovery within 3–6 months of implementation.",
      "The highest-impact targets are high-volume, low-judgment tasks: invoice processing, email triage, data entry, and report generation.",
      "AI automation handles unstructured inputs (emails, PDFs, conversations) that traditional RPA cannot process without manual prep.",
      "Starting with a process audit prevents the most common mistake: automating a process that should be redesigned or eliminated instead.",
    ],
    definitions: [
      {
        term: "AI automation",
        definition:
          "The use of artificial intelligence — particularly large language models and machine learning — to automate tasks that require understanding, judgment, or adaptation. Unlike traditional rule-based automation, AI automation can handle unstructured inputs such as emails, documents, and conversations.",
      },
      {
        term: "Process audit",
        definition:
          "A systematic review of business operations to identify repetitive tasks, measure the time they consume, classify them as rule-driven or judgment-driven, and prioritise automation candidates by impact and feasibility.",
      },
    ],
    category: "AI & Automation",
    image: "/blog/ai-automation-saves-time.svg",
    imageAlt: "A gradient background with the title 'How AI Automation Saves Businesses Time and Money' overlaid.",
    date: "June 27, 2026",
    readTime: "7 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "AI & Automation", href: "/services/automation" },
    ],
    sections: [
      {
        heading: "Where AI automation delivers the fastest return",
        paragraphs: [
          "The fastest returns from AI automation come from replacing manual processing of unstructured information. When a business receives hundreds of emails, invoices, or support tickets per week, a significant portion of team time is spent reading, classifying, and entering information into systems. AI automation can handle the classification and entry steps, leaving the team to focus on responses that require human judgment.",
          "A typical implementation for a mid-sized business might process 200–500 invoices per week, extracting line items, matching against purchase orders, and entering data into the accounting system. Before automation, this consumes 15–25 hours of finance team time. After automation, the team reviews exceptions only, reducing the time to 2–4 hours.",
        ],
      },
      {
        heading: "Cost savings: what the numbers look like",
        paragraphs: [
          "The cost of implementing AI automation varies by scope, but a focused workflow automation project typically costs between a few thousand and twenty thousand pounds, depending on complexity. The return calculation is straightforward: if a process consumes 20 hours per week of a team member's time at an effective hourly cost of 25 per hour including overhead, the annual cost is approximately 26,000. Automation that reduces this by 80 per cent saves roughly 20,000 per year per workflow.",
          "Most businesses recover their automation investment within three to six months. The ongoing cost is maintenance and monitoring — typically a fraction of the initial implementation — plus the cost of AI API usage, which ranges from a few pence to a few pounds per thousand transactions depending on the provider and model.",
        ],
        citations: [
          {
            label: "McKinsey: The state of AI in 2023",
            url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
          },
        ],
      },
      {
        heading: "Five high-impact processes to automate first",
        paragraphs: [
          "The most successful automation projects target specific bottlenecks rather than attempting to redesign entire departments. These five processes consistently deliver strong returns across service businesses:",
        ],
        bullets: [
          "Invoice and receipt processing — extract, match, and enter data from supplier invoices and expense receipts.",
          "Customer enquiry triage — read incoming emails and messages, classify by topic and urgency, and route or draft a response.",
          "Data entry and synchronisation — transfer information between CRM, ERP, marketing platforms, and spreadsheets.",
          "Report generation — pull data from multiple sources, format into standard reports, and distribute on schedule.",
          "Employee onboarding — create accounts, assign permissions, distribute documentation, and notify relevant teams.",
        ],
      },
      {
        heading: "How to start without overinvesting",
        paragraphs: [
          "The recommended approach is to run a process audit before purchasing any automation platform. List every task that consumes more than two hours of team time per week, measure the current time cost, classify each as rule-driven or judgment-driven, and estimate the complexity of automation.",
          "Start with one high-impact, low-complexity process. Implement it, measure the time saved, and use that result to build the business case for the next process. This incremental approach avoids the common failure mode of attempting a large-scale automation programme that stalls before delivering measurable value.",
        ],
      },
    ],
  },
  {
    slug: "website-redesign-checklist-2026",
    title: "Website Redesign Checklist for 2026",
    excerpt:
      "A practical 15-point checklist covering content, SEO, performance, mobile, accessibility, and analytics — everything to review before launching a redesigned site.",
    answerSummary:
      "A website redesign in 2026 should verify content clarity, technical SEO fundamentals, page speed (LCP under 2.5 seconds), mobile navigation, accessibility compliance (WCAG 2.1 AA), analytics tracking, structured data, and redirect mapping for all changed URLs. The highest-impact pre-launch checks are: testing the primary conversion path on mobile, verifying all old URLs redirect correctly, and confirming analytics events fire on every key action.",
    keyTakeaways: [
      "Test the primary conversion path on mobile before anything else — if a visitor cannot contact you from a phone, the redesign has failed.",
      "Map every old URL to its new equivalent using 301 redirects — broken backlinks and lost indexed pages can undo months of SEO progress.",
      "Verify Core Web Vitals pass — LCP under 2.5 seconds, FID under 100ms, CLS under 0.1 — before launch, not after.",
      "Confirm analytics events fire correctly on all key actions: form submissions, button clicks, phone number taps, and external link clicks.",
    ],
    definitions: [
      {
        term: "301 redirect",
        definition:
          "A permanent HTTP redirect that tells search engines a page has moved to a new URL. Proper redirect mapping preserves search rankings and ensures users and bots reach the correct page after a site migration.",
      },
      {
        term: "Core Web Vitals",
        definition:
          "A set of real-world performance metrics that Google uses as ranking signals: Largest Contentful Paint (LCP — loading speed), First Input Delay (FID — interactivity), and Cumulative Layout Shift (CLS — visual stability). Passing Core Web Vitals is a requirement for good search performance.",
      },
    ],
    category: "Website Strategy",
    image: "/blog/website-redesign-checklist.svg",
    imageAlt: "A gradient background with the title 'Website Redesign Checklist for 2026' overlaid.",
    date: "June 27, 2026",
    readTime: "8 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    sections: [
      {
        heading: "Why most redesigns lose traffic — and how to prevent it",
        paragraphs: [
          "A website redesign is one of the riskiest projects a business can undertake from an SEO perspective. When a site changes structure, URLs, content, and design simultaneously, search engines effectively see a new website that needs to rebuild trust from scratch. The most common outcome is a traffic drop that takes three to six months to recover.",
          "The way to prevent this is to treat the redesign as a migration. Every old URL needs a 301 redirect to its new equivalent. Every page that previously ranked needs its content preserved or improved. Every analytics event needs re-verification. The checklist below covers the critical checks that prevent post-launch traffic loss.",
        ],
      },
      {
        heading: "1. Content and conversion path",
        paragraphs: [
          "Before launch, verify that every page answers a clear question for a specific audience. Remove vague placeholder text, ensure calls-to-action are visible without scrolling on mobile, and test the complete contact or enquiry flow on a real phone.",
        ],
        bullets: [
          "Each page has a clear, specific purpose — no generic filler content.",
          "The primary call-to-action is visible above the fold on mobile and desktop.",
          "Contact forms submit correctly and trigger the expected email or CRM notification.",
          "Phone numbers are tappable on mobile devices.",
          "Proof points — testimonials, case studies, client logos — are present and verifiable.",
        ],
      },
      {
        heading: "2. Technical SEO and redirects",
        paragraphs: [
          "Technical errors during a redesign can undo years of accumulated search equity. The most critical technical check is the redirect map — every old URL must either redirect to its new equivalent or return a proper 410 (gone) if the page genuinely no longer exists.",
        ],
        bullets: [
          "Every old URL is mapped to a 301 redirect — no broken backlinks or lost indexed pages.",
          "Canonical tags are self-referencing and consistent across all pages.",
          "XML sitemap is generated and submitted to Google Search Console.",
          "Robots.txt allows crawling of all public pages and blocks staging or duplicate environments.",
          "Noindex tags are removed from production pages (common staging-to-production mistake).",
        ],
      },
      {
        heading: "3. Performance and Core Web Vitals",
        paragraphs: [
          "Page speed is a ranking factor and a conversion factor. Run Lighthouse tests on every template type — homepage, service page, blog post, contact page — and verify that all three Core Web Vitals pass before launch.",
        ],
        bullets: [
          "LCP (Largest Contentful Paint) under 2.5 seconds.",
          "FID (First Input Delay) under 100 milliseconds.",
          "CLS (Cumulative Layout Shift) under 0.1.",
          "Images are properly sized and use next-gen formats (WebP, AVIF).",
          "Fonts are self-hosted — no render-blocking third-party font requests.",
        ],
        citations: [
          {
            label: "web.dev: Core Web Vitals",
            url: "https://web.dev/vitals/",
          },
        ],
      },
      {
        heading: "4. Mobile and accessibility",
        paragraphs: [
          "More than half of B2B enquiries now start on a mobile device. If the mobile experience is incomplete — overlapping elements, hard-to-tap buttons, missing content — the redesign will underperform regardless of how good the desktop version looks.",
        ],
        bullets: [
          "All interactive elements are tappable with a finger — no targets smaller than 48x48px.",
          "Text is readable without zooming — minimum 16px font size on body copy.",
          "Forms are usable on a phone screen — fields are not cut off, dropdowns work, submit buttons are reachable.",
          "Colour contrast meets WCAG 2.1 AA standards (4.5:1 for normal text).",
          "Keyboard navigation works for all interactive elements.",
        ],
      },
      {
        heading: "5. Analytics and tracking",
        paragraphs: [
          "Launching a redesigned site without confirmed analytics is like flying without instruments. Verify that all tracking fires correctly before making the site live.",
        ],
        bullets: [
          "Google Analytics 4 (GA4) is installed and receiving data.",
          "Conversion events are configured and test-fired: form submissions, button clicks, phone calls, email clicks.",
          "E-commerce or goal tracking is mapped to the new page structure.",
          "Google Tag Manager (if used) has been republished for the new site.",
        ],
      },
    ],
  },
  {
    slug: "buying-aibizmod-domain-first-week",
    title: "What Buying the aibizmod Domain Taught Us About Starting Properly",
    excerpt:
      "A domain is a small purchase, but it forces useful decisions: name, promise, structure, tracking, and the first version of trust.",
    answerSummary:
      "Registering a domain forces a business to define its core promise, intended audience, and site structure before design begins. For aibizmod, that meant writing down what the company does, who it helps, and what a visitor should understand within the first ten seconds — before a single page was built.",
    keyTakeaways: [
      "A domain name is a commitment that forces clarity about brand promise and audience before any design work starts.",
      "The first version of a business website should answer three questions: what the company does, who it helps, and how to get started.",
      "Avoiding inflated claims from the beginning is easier than removing them after launch — every claim should be backed by work or process.",
      "A simple site structure — homepage, services, blog, contact — outperforms a complex one when the business is still establishing proof.",
    ],
    category: "Company Notes",
    image: "/blog/aibizmod-domain-launch.png",
    imageAlt:
      "A quiet desk setup with a laptop, notebook, and coffee while planning the aibizmod domain launch.",
    date: "June 19, 2026",
    readTime: "7 min read",
    featured: true,
    author: blogAuthor,
    relatedServices: [
      { name: "Web Development", href: "/services/web-development" },
    ],
    sections: [
      {
        heading: "Why buying a domain clarifies the business idea",
        paragraphs: [
          "Buying aibizmod.com was not the finish line. Registering the domain was the moment the idea stopped floating and became something that required definition. A name on a domain raises practical questions: what does this business actually do, who is it for, and what should a visitor understand within the first ten seconds of arriving?",
          "aibizmod treated the domain as a starting point rather than a milestone. Before adding animations or service pages, the team wrote down the core promise: help businesses use websites, apps, automation, cloud systems, and marketing without making the process feel heavier than the underlying problem.",
        ],
      },
      {
        heading: "What to decide before opening a design tool",
        paragraphs: [
          "The first planning notes were not glamorous. aibizmod listed the services that could be explained without jargon, the clients the team could help immediately, and the claims to avoid until real project evidence existed.",
          "That exercise changed the website structure. Instead of leading with every possible service, the team kept the first path simple: understand the company, review the services, read a few honest notes, and contact the team without a long form maze.",
        ],
        bullets: [
          "A visitor should understand what aibizmod does before scrolling twice.",
          "Every service page needs a practical reason to exist, not just a category placeholder.",
          "The brand voice should sound calm, useful, and close to the actual work.",
        ],
      },
      {
        heading: "Why the first version does not need to say everything",
        paragraphs: [
          "New business websites often try to explain the entire company at once. aibizmod took the opposite approach: a clear homepage, service pages that each address one specific question, and a contact flow that collects enough information to give a useful response.",
          "The domain gave the team a place to test language. The team could see which words felt natural, which sections sounded identical to every other agency, and which claims needed evidence before they deserved space on the page.",
        ],
        bullets: [
          "Keep the first message short enough for a busy founder or operations manager.",
          "Make every service page answer a real question a prospective client would ask.",
          "Remove claims that cannot be supported by completed work, numbers, or a documented process.",
        ],
      },
      {
        heading: "What aibizmod plans to keep improving",
        paragraphs: [
          "The next step is not adding more pages. The priority is making existing pages more useful — clearer project examples, stronger technical SEO foundations, more specific service explanations, and more honest descriptions of how aibizmod works with clients.",
          "The blog is intended to be a record of real decisions rather than a stream of recycled advice. When aibizmod tests something on its own site, the plan is to write about what changed, what did not work, and what would be done differently for a client.",
          "A domain is rented space. The trust that makes a business worth contacting is built after registration, one clear page and one completed project at a time.",
        ],
      },
    ],
  },
  {
    slug: "starting-our-seo-marketing-service-journey",
    title: "Starting Our SEO Marketing Service Journey Without the Usual Noise",
    excerpt:
      "SEO work starts with small, practical checks: crawlability, page intent, analytics, local proof, and content that answers real buying questions.",
    answerSummary:
      "Effective SEO for a service business begins with technical hygiene — ensuring pages are crawlable, metadata is accurate, and analytics are tracking correctly — before producing new content. Mapping each page to a single search intent and setting up conversion tracking gives a measurable foundation that content volume alone cannot provide.",
    keyTakeaways: [
      "Technical SEO — crawlability, correct metadata, and a clean sitemap — must be verified before publishing new content.",
      "Each service page should target one specific search intent rather than competing for multiple broad keywords.",
      "Conversion tracking for form submissions, calls, and key button clicks is required before any meaningful performance measurement is possible.",
      "SEO content for service businesses should answer the questions buyers ask before contacting a supplier, not just mirror popular search phrases.",
    ],
    definitions: [
      {
        term: "Search intent",
        definition:
          "The underlying goal a user has when typing a search query. For service businesses, intent is usually informational (learning about a topic), navigational (finding a specific company), or commercial (comparing suppliers before making a buying decision).",
      },
      {
        term: "Conversion event",
        definition:
          "A tracked user action that represents a meaningful step toward a business outcome, such as submitting a contact form, clicking a phone number, or downloading a document. Conversion events are configured in analytics platforms such as Google Analytics 4.",
      },
    ],
    category: "SEO",
    image: "/blog/seo-marketing-service-journey.png",
    imageAlt:
      "Printed SEO notes, a laptop analytics screen, and sticky notes on a light office desk.",
    date: "June 18, 2026",
    readTime: "8 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Web Development", href: "/services/web-development" },
    ],
    sections: [
      {
        heading: "Which SEO fundamentals still determine whether a service site gets found",
        paragraphs: [
          "SEO for service businesses can become a collection of dashboards and tools very quickly. A more focused starting point is to verify four things: the site can be found by search engines, pages are understood correctly, the business appears trustworthy, and key actions are being measured.",
          "For a service business, that typically means correcting page titles, matching each page to a specific search intent, adding concrete service details, and configuring analytics before chasing traffic volume.",
        ],
        citations: [
          {
            label: "Google Search Central: How Google Search Works",
            url: "https://developers.google.com/search/docs/fundamentals/how-search-works",
          },
        ],
      },
      {
        heading: "Why targeting fewer keywords produces better results for service businesses",
        paragraphs: [
          "Writing for every keyword a tool suggests is the fastest way to produce thin content. A more effective approach is to start narrower: one page should address one buyer intent, and the answer on that page should help a real decision-maker take the next step.",
          "For aibizmod, that means writing around the questions that appear in early sales conversations — what a service website should include, when a business should rebuild rather than patch an existing system, how much content is enough for a service page, and which technical changes actually affect enquiry rates.",
        ],
      },
      {
        heading: "The technical SEO checklist aibizmod uses before publishing new content",
        paragraphs: [
          "Before publishing new content, aibizmod reviews the technical foundation. If service pages load slowly, duplicate each other, or fail to describe the service clearly, additional blog posts will not solve the underlying visibility problem.",
        ],
        bullets: [
          "Check indexability, sitemap accuracy, canonical tags, metadata, heading structure, and internal links.",
          "Map each service page to one clearly defined search intent.",
          "Replace generic agency descriptions with specific examples and named deliverables.",
          "Configure conversion events in Google Analytics 4 for contact form submissions, phone clicks, and key button interactions.",
        ],
        citations: [
          {
            label: "Google Search Central: Sitemaps Overview",
            url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
          },
          {
            label: "Google Analytics 4: Set up and manage conversion events",
            url: "https://support.google.com/analytics/answer/9267568",
          },
        ],
      },
      {
        heading: "How SEO content shortens the sales conversation for service businesses",
        paragraphs: [
          "The goal of SEO for a service business is not ranking for every broad keyword. The goal is to help the right visitor understand whether aibizmod can solve their specific problem before they pick up the phone.",
          "aibizmod's content roadmap focuses on practical pages first: service explanations with specific deliverables, comparison articles that help buyers evaluate options, and guides that answer the questions clients typically ask before making contact.",
          "Well-structured SEO content shortens the sales call. When the website has already explained the offer, the process, and the next step, the first conversation can focus on the actual problem rather than basic company orientation.",
        ],
      },
    ],
  },
  {
    slug: "generative-engine-optimisation-for-service-businesses",
    title: "Generative Engine Optimisation: What Service Businesses Should Prepare Now",
    excerpt:
      "AI search changes how people discover service providers. The work starts with clearer pages, stronger proof, and content that answer engines can cite.",
    answerSummary:
      "Generative Engine Optimisation (GEO) is the practice of structuring web content so AI-powered answer engines can accurately understand, extract, and cite it. For service businesses, GEO means replacing vague marketing copy with specific facts: named deliverables, process descriptions, tools used, and verifiable proof — the elements an answer engine needs to confidently reference a page.",
    keyTakeaways: [
      "GEO is not a replacement for SEO — it raises the standard for content clarity, specificity, and verifiability that both search engines and AI systems expect.",
      "Answer engines favour pages that state facts directly: who the service is for, what the process involves, what tools are used, and what outcomes a client can expect.",
      "Vague marketing copy ('scalable solutions', 'best-in-class service') gives AI systems nothing citable — specific deliverables and process descriptions are far more extractable.",
      "Content hygiene — removing duplicate sections, giving each page a unique purpose, and making facts easy to locate — is the practical starting point for a GEO improvement plan.",
    ],
    definitions: [
      {
        term: "Generative Engine Optimisation (GEO)",
        definition:
          "The practice of structuring and writing web content so that AI-powered answer engines — such as those used in ChatGPT, Google AI Overviews, Bing Copilot, and Perplexity — can accurately understand, summarise, and cite the page. GEO extends traditional SEO by prioritising factual specificity, structured content, and verifiable claims over keyword density.",
      },
      {
        term: "Answer engine",
        definition:
          "A search or information retrieval system that generates a direct natural-language answer to a query rather than returning a list of links. Examples include Google AI Overviews, Bing Copilot, Perplexity, and ChatGPT search mode. Answer engines extract and synthesise information from multiple web sources.",
      },
      {
        term: "Structured data",
        definition:
          "Machine-readable markup added to web pages — typically using the Schema.org vocabulary and JSON-LD format — that explicitly labels content for search engines and AI systems. Structured data helps answer engines identify entity types such as Organisation, Service, FAQPage, and Article without relying on inference from unstructured text.",
      },
    ],
    category: "GEO",
    image: "/blog/generative-engine-optimisation.png",
    imageAlt:
      "A desk with a laptop, planning cards, and notes for improving content for generative search.",
    date: "June 17, 2026",
    readTime: "8 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Web Development", href: "/services/web-development" },
    ],
    sections: [
      {
        heading: "What GEO is and why it raises the bar rather than replacing SEO",
        paragraphs: [
          "Generative Engine Optimisation, or GEO, is the work of making a business's expertise easier for AI search systems to understand, summarise, and cite. GEO does not replace traditional SEO. Instead, GEO raises the bar for content clarity — the same specificity that makes a page citable by an AI system also makes it more useful to a human reader.",
          "If a service page repeats the same general claims as hundreds of other websites, an answer engine has no reason to reference it. A page that explains who the service is for, what the engagement process includes, which tools are used, and what evidence supports the claims becomes a candidate for citation.",
        ],
      },
      {
        heading: "What facts answer engines need to confidently cite a service page",
        paragraphs: [
          "A service page that only states 'we build scalable solutions' provides little for a search system to work with. A more citable page names the target audience, describes the delivery process, lists the specific deliverables a client receives, and explains how the team handles questions and follow-up after the project.",
          "Improving GEO does not mean adding schema markup for its own sake or writing artificial question-and-answer blocks. The goal is to make the genuinely useful facts visible enough that both a human visitor and an AI extraction system can find them without effort.",
        ],
      },
      {
        heading: "How aibizmod is applying GEO principles to its own pages",
        paragraphs: [
          "aibizmod is removing vague claims from its own service pages and replacing them with specific answers — what happens during a discovery session, what documents and files a client receives at handover, which platforms and tools are used in delivery, and where aibizmod is a strong fit versus where a different provider would be more appropriate.",
        ],
        bullets: [
          "Write direct answers to the questions buyers search for before choosing a supplier.",
          "Use descriptive, question-led headings that match real search queries rather than generic section labels.",
          "Add Organisation and Service structured data so AI systems can identify the business entity behind each page.",
          "Remove unverifiable statistics and superlative claims that AI systems cannot corroborate.",
        ],
      },
      {
        heading: "Where to start a practical GEO improvement plan",
        paragraphs: [
          "A GEO improvement plan begins with content hygiene: removing duplicate sections across similar pages, giving each service page a single clear purpose, and ensuring that important facts — pricing context, deliverables, process steps, geographic coverage — are easy to extract without reading the entire page.",
          "aibizmod is keeping examples close to the relevant service. A web development page covers performance benchmarks, CMS options, integration methods, and handover process. A digital marketing page covers tracking setup, keyword mapping, reporting dashboards, and campaign structure. Those concrete details are more extractable than aspirational positioning language.",
          "AI search changes the interface through which people discover service providers, but the underlying reward mechanism remains the same as traditional search: useful, specific, well-structured information gets referenced. That is where GEO effort should start.",
        ],
      },
    ],
  },
  {
    slug: "website-trust-before-seo-or-ads",
    title: "Before SEO or Ads, Make the Website Feel Trustworthy",
    excerpt:
      "Traffic is expensive when the website is unclear. A practical trust audit can fix the basics before spending on campaigns.",
    answerSummary:
      "A website trust audit reviews whether a new visitor can identify what a business does, trust the offer, and take a clear next step — without needing to search for information. Running a trust audit before SEO or advertising ensures that campaign traffic does not arrive at a page that creates doubt rather than enquiries.",
    keyTakeaways: [
      "A website trust audit should happen before SEO or advertising investment, because traffic arriving at an unclear page generates doubt rather than enquiries.",
      "Trust signals are cumulative — a visitor's decision to make contact depends on whether navigation, service descriptions, contact details, and mobile layout all feel credible together.",
      "The most common trust problems are vague headlines, missing service examples, absent contact signals, and proof points that cannot be verified.",
      "Content clarity, page speed, mobile layout, and a straightforward contact path are marketing work, not just technical tasks.",
    ],
    definitions: [
      {
        term: "Trust audit (trust pass)",
        definition:
          "A structured review of the pages a new visitor sees before deciding to make contact or leave a website. A trust audit checks whether the business offer is clearly stated, whether service descriptions contain specific examples, whether contact details are visible and functional, and whether the mobile experience is complete.",
      },
      {
        term: "Conversion path",
        definition:
          "The sequence of pages and actions a visitor takes from first arriving on a website to completing a desired action such as submitting a contact form, requesting a quote, or booking a call. A broken or unclear conversion path increases the proportion of visitors who leave without making contact.",
      },
    ],
    category: "Website Strategy",
    image: "/blog/website-trust-before-marketing.png",
    imageAlt:
      "A laptop, checklist notes, and a phone on a clean desk during a website trust review.",
    date: "June 16, 2026",
    readTime: "7 min read",
    author: blogAuthor,
    relatedServices: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    sections: [
      {
        heading: "How quickly a visitor forms a trust judgment — and what triggers doubt",
        paragraphs: [
          "A website does not need to be visually elaborate to convert visitors. A website needs to answer four basic questions quickly: who is this business, what does it offer, can it handle the visitor's specific type of problem, and what happens if the visitor makes contact?",
          "Before investing in SEO or paid advertising, aibizmod recommends running a trust audit — a focused review of the pages a new visitor will encounter before deciding whether to enquire or leave.",
        ],
      },
      {
        heading: "Why trust signals compound — and why fixing one is not enough",
        paragraphs: [
          "Visitors notice more than the headline. A visitor registers whether the navigation is logical, whether the contact page appears active, whether the service descriptions read as original or copied from a template, and whether the mobile version of the site has been maintained with the same care as the desktop version.",
          "No individual detail is decisive on its own. Together, these signals determine whether a visitor feels comfortable sharing a project brief, a phone number, or a budget range with the business.",
        ],
      },
      {
        heading: "What a website trust audit checks — and which fixes have the highest impact",
        paragraphs: [
          "The highest-impact fixes identified in a trust audit are usually straightforward: replace vague headline copy with a clear statement of what the business delivers, add specific examples to service pages, simplify the contact path, provide verifiable proof points, and verify that the mobile layout is complete and functional.",
        ],
        bullets: [
          "A first screen that states the offer clearly without relying on buzzwords or industry jargon.",
          "Service pages that include concrete examples, named deliverables, and realistic engagement timelines.",
          "Contact details that are visible, current, and link to active email addresses or phone numbers.",
          "Proof points — such as project descriptions or client references — that are specific and verifiable rather than generic.",
        ],
      },
      {
        heading: "Why trust work produces better returns from SEO and advertising investment",
        paragraphs: [
          "SEO and paid advertising can deliver visitors to a website. Neither can make an unclear or unconvincing page generate enquiries. Content clarity, page speed, mobile layout, and a logical contact path are marketing investments, not only technical maintenance tasks.",
          "Before increasing traffic volume, aibizmod focuses on removing the specific doubts that prevent conversion: vague service names, outdated placeholder content, missing next-step prompts, ambiguous pricing language, and page copy that does not address a specific audience.",
          "The objective is straightforward: when the right visitor arrives on the site, the website should make the most appropriate next step — contacting the team, reading a relevant service page, or reviewing a relevant article — feel obvious and low-effort.",
        ],
      },
    ],
  },
];

export const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
export const gridPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
