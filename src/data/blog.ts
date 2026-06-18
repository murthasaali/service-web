export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    initials: string;
    avatarColor: string; // tailwind bg-* class
  };
  date: string;
  readTime: string;
  imagePlaceholderColor: string; // tailwind gradient classes e.g. "from-blue-600 to-indigo-700"
  featured?: boolean;
}

export const categories = [
  "All",
  "Web Dev",
  "Mobile",
  "Marketing",
  "Automation",
  "Company News",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ai-in-enterprise-software",
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Large language models are no longer a curiosity for enterprise engineering teams — they're becoming a core part of the software delivery pipeline. We explore how AI is reshaping code generation, QA automation, and deployment strategy across the stack.",
    category: "Web Dev",
    author: { name: "James Carter", initials: "JC", avatarColor: "bg-electric-blue" },
    date: "Jan 15, 2026",
    readTime: "8 min read",
    imagePlaceholderColor: "from-blue-600 to-indigo-700",
    featured: true,
  },
  {
    slug: "progressive-web-apps-vs-native",
    title: "When PWAs Beat Native: A Practical Comparison for 2026",
    excerpt:
      "Progressive Web Apps have closed the gap on native mobile apps faster than most predicted. We examine the exact use cases where choosing a PWA over native makes strong business sense — and where it still doesn't.",
    category: "Mobile",
    author: { name: "Sarah Chen", initials: "SC", avatarColor: "bg-cyan-600" },
    date: "Jan 10, 2026",
    readTime: "6 min read",
    imagePlaceholderColor: "from-cyan-600 to-sky-700",
  },
  {
    slug: "technical-seo-mistakes",
    title: "10 Technical SEO Mistakes That Are Quietly Killing Your Rankings",
    excerpt:
      "Most SEO advice focuses on content and backlinks. But technical issues — crawl errors, duplicate content, slow Core Web Vitals — are often what's silently preventing your pages from ranking where they should be.",
    category: "Marketing",
    author: { name: "Priya Patel", initials: "PP", avatarColor: "bg-emerald-600" },
    date: "Jan 5, 2026",
    readTime: "7 min read",
    imagePlaceholderColor: "from-emerald-600 to-teal-700",
  },
  {
    slug: "automating-invoice-processing-with-ai",
    title: "How We Cut Invoice Processing Time by 85% with AI Automation",
    excerpt:
      "Manual invoice processing is one of the highest-ROI automation opportunities we consistently encounter. Here's exactly how we built an AI pipeline that reduced a client's daily processing time from 4 hours to 35 minutes.",
    category: "Automation",
    author: { name: "Marcus Williams", initials: "MW", avatarColor: "bg-amber-600" },
    date: "Dec 28, 2025",
    readTime: "9 min read",
    imagePlaceholderColor: "from-amber-500 to-orange-600",
  },
  {
    slug: "aws-vs-gcp-vs-azure-2026",
    title: "AWS vs GCP vs Azure in 2026: A Decision Framework That Actually Helps",
    excerpt:
      "Cloud provider choice is one of the most consequential — and hardest to reverse — infrastructure decisions a company makes. We share the vendor-agnostic framework we use to guide clients through this decision.",
    category: "Web Dev",
    author: { name: "David Kim", initials: "DK", avatarColor: "bg-sky-700" },
    date: "Dec 20, 2025",
    readTime: "11 min read",
    imagePlaceholderColor: "from-sky-600 to-blue-700",
  },
  {
    slug: "space-ai-50-projects-milestone",
    title: "50 Projects Delivered: What Building for 50 Businesses Taught Us",
    excerpt:
      "We've just delivered our 50th client project. Here's an honest look at what the journey has taught us about what genuinely makes technology projects succeed — and what makes them quietly fail.",
    category: "Company News",
    author: { name: "The space-ai Team", initials: "SA", avatarColor: "bg-cyan-600" },
    date: "Dec 15, 2025",
    readTime: "4 min read",
    imagePlaceholderColor: "from-cyan-600 to-sky-700",
  },
  {
    slug: "cutting-aws-bill-by-40-percent",
    title: "How We Cut a Client's AWS Bill by 40% Without Touching Their Code",
    excerpt:
      "Cloud cost optimisation doesn't have to mean performance trade-offs. We walk through the exact steps we took to reduce a client's monthly AWS spend from £18,000 to £10,800 — in just six weeks.",
    category: "Web Dev",
    author: { name: "David Kim", initials: "DK", avatarColor: "bg-sky-700" },
    date: "Dec 8, 2025",
    readTime: "5 min read",
    imagePlaceholderColor: "from-indigo-600 to-blue-700",
  },
];

export const featuredPost = blogPosts.find((p) => p.featured)!;
export const gridPosts = blogPosts.filter((p) => !p.featured);
