export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  author: {
    name: string;
    initials: string;
  };
  sections: BlogSection[];
}

export const blogAuthor = {
  name: "aibizmode Editorial Team",
  initials: "AE",
  url: "https://aibizmode.com/blog",
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
    slug: "buying-aibizmode-domain-first-week",
    title: "What Buying the aibizmode Domain Taught Us About Starting Properly",
    excerpt:
      "A domain is a small purchase, but it forces useful decisions: name, promise, structure, tracking, and the first version of trust.",
    category: "Company Notes",
    date: "June 19, 2026",
    readTime: "4 min read",
    image: "/blog/aibizmode-domain-launch.png",
    imageAlt:
      "Editorial illustration of a clean domain launch workspace with a laptop and cyan network lines",
    featured: true,
    author: blogAuthor,
    sections: [
      {
        heading: "The domain made the idea less fuzzy",
        paragraphs: [
          "Buying `aibizmode.com` was not the finish line. It was the moment the idea stopped floating around and became something we had to shape. A name on a domain asks awkward but useful questions: what do we actually do, who is this for, and what should a visitor understand in the first ten seconds?",
          "That is why we treated the domain as a starting point, not a trophy. Before adding animations or service pages, we wrote down the core promise: help businesses use websites, apps, automation, cloud systems, and marketing without making the process feel heavier than the problem.",
        ],
      },
      {
        heading: "The first version does not need to say everything",
        paragraphs: [
          "Early websites often try to explain the entire company at once. We wanted the opposite: a clear homepage, service paths that make sense, and a contact flow that tells us enough to respond properly.",
          "The domain gave us a place to test that. We could see which words felt natural, which sections sounded like every other agency, and which claims needed proof before they deserved space on the page.",
        ],
        bullets: [
          "Keep the first message short enough for a busy founder or manager.",
          "Make every service page answer a real client question.",
          "Remove claims that cannot be backed by work, numbers, or process.",
        ],
      },
      {
        heading: "What we will keep improving",
        paragraphs: [
          "The next step is not just adding more pages. It is making the pages more useful. That means clearer examples, stronger local SEO foundations, better service explanations, and more honest notes about how we work.",
          "A domain is rented space. Trust is earned after that, paragraph by paragraph, project by project.",
        ],
      },
    ],
  },
  {
    slug: "starting-our-seo-marketing-service-journey",
    title: "Starting Our SEO Marketing Service Journey Without the Usual Noise",
    excerpt:
      "SEO work starts with small, practical checks: crawlability, page intent, analytics, local proof, and content that answers real buying questions.",
    category: "SEO",
    date: "June 18, 2026",
    readTime: "5 min read",
    image: "/blog/seo-marketing-service-journey.png",
    imageAlt:
      "Editorial illustration of an SEO planning desk with abstract analytics cards and cyan growth lines",
    author: blogAuthor,
    sections: [
      {
        heading: "We are starting with the basics that still matter",
        paragraphs: [
          "SEO can become a pile of dashboards very quickly. Our approach is simpler at the start: make sure the site can be found, understood, trusted, and measured.",
          "For a service business, that usually means fixing page titles, matching pages to real search intent, adding useful service details, and setting up analytics before chasing traffic numbers.",
        ],
      },
      {
        heading: "The first SEO checklist we use",
        paragraphs: [
          "Before publishing new content, we look at the technical floor. If pages load slowly, duplicate each other, or never explain the service clearly, more blog posts will not solve the problem.",
        ],
        bullets: [
          "Check indexability, sitemap, metadata, headings, and internal links.",
          "Map each service page to one clear search intent.",
          "Replace generic agency copy with examples and deliverables.",
          "Set up conversion events for forms, calls, and important button clicks.",
        ],
      },
      {
        heading: "Marketing should make sales conversations easier",
        paragraphs: [
          "The point is not to rank for every broad keyword. The point is to help the right visitor understand whether aibizmode can solve their problem.",
          "That means our SEO journey will focus on practical pages first: service explainers, local trust signals, comparison articles, and guides that answer the questions clients ask before they contact us.",
        ],
      },
    ],
  },
  {
    slug: "generative-engine-optimisation-for-service-businesses",
    title: "Generative Engine Optimisation: What Service Businesses Should Prepare Now",
    excerpt:
      "AI search changes how people discover service providers. The work starts with clearer pages, stronger proof, and content that answer engines can cite.",
    category: "GEO",
    date: "June 17, 2026",
    readTime: "6 min read",
    image: "/blog/generative-engine-optimisation.png",
    imageAlt:
      "Editorial illustration of AI search panels and connected content nodes on a bright white background",
    author: blogAuthor,
    sections: [
      {
        heading: "GEO is not a shortcut around good content",
        paragraphs: [
          "Generative Engine Optimisation, or GEO, is the work of making your expertise easier for AI search systems to understand, summarize, and cite. It does not replace SEO. It raises the bar for clarity.",
          "If a service page says the same thing as a hundred other websites, an answer engine has little reason to mention it. If the page explains who the service is for, what the process includes, what tools are used, and what proof exists, it becomes easier to reference.",
        ],
      },
      {
        heading: "What we are changing on our own pages",
        paragraphs: [
          "We are removing vague claims and adding more specific answers. That includes what happens during discovery, what deliverables a client receives, what tools we use, and where aibizmode is a good fit or not a good fit.",
        ],
        bullets: [
          "Write direct answers to buyer questions.",
          "Use structured headings that match real search questions.",
          "Add author and organization schema where it helps.",
          "Avoid fake authority signals and unsupported statistics.",
        ],
      },
      {
        heading: "The practical starting point",
        paragraphs: [
          "A good GEO plan begins with content hygiene. Remove duplicate sections, give each service page a unique purpose, and make sure important facts are easy to extract.",
          "AI search may change the interface, but it still rewards useful, specific, well-structured information. That is where we are putting our effort first.",
        ],
      },
    ],
  },
  {
    slug: "website-trust-before-seo-or-ads",
    title: "Before SEO or Ads, Make the Website Feel Trustworthy",
    excerpt:
      "Traffic is expensive when the website is unclear. A practical trust pass can fix the basics before spending on campaigns.",
    category: "Website Strategy",
    date: "June 16, 2026",
    readTime: "5 min read",
    image: "/blog/website-trust-before-marketing.png",
    imageAlt:
      "Editorial illustration of a website trust checklist dashboard with cyan network lines",
    author: blogAuthor,
    sections: [
      {
        heading: "A visitor decides faster than the team thinks",
        paragraphs: [
          "A website does not need to be loud to be convincing. It needs to answer the basic doubts quickly: who are you, what do you do, can you handle my type of problem, and what happens if I contact you?",
          "Before running SEO or ads, we like to run a trust pass. It is a small review of the pages a new visitor will see before they decide to enquire or leave.",
        ],
      },
      {
        heading: "What a trust pass looks for",
        paragraphs: [
          "The best fixes are often plain. Replace vague headlines, add service examples, clean up contact paths, show real proof, and make the page easy to scan on a phone.",
        ],
        bullets: [
          "A first screen that explains the offer without a buzzword pile.",
          "Service pages with examples, deliverables, and realistic timelines.",
          "Contact details that look active and easy to use.",
          "Proof points that are true, current, and not inflated.",
        ],
      },
      {
        heading: "Campaigns work better after clarity",
        paragraphs: [
          "SEO and ads can bring people to the site. They cannot make a confusing page feel safe. That is why we treat content cleanup, speed, mobile layout, and contact flow as marketing work too.",
          "The goal is simple: when the right visitor arrives, the website should make the next step feel obvious.",
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

