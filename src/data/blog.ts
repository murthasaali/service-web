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
] as const;

export const blogPosts: BlogPost[] = [
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
