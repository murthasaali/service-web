import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "AI-Powered Apps | AI & Automation | aibizmod",
  description:
    "Build applications where AI models handle the core logic, from content generation and data analysis to recommendations and user interactions, rather than being an add-on feature.",
  alternates: { canonical: "https://aibizmod.com/services/automation/ai-powered-apps" },
  openGraph: {
    title: "AI-Powered Apps | aibizmod",
    description:
      "Build applications where AI models handle the core logic, from content generation and data analysis to recommendations and user interactions, rather than being an add-on feature.",
    url: "/services/automation/ai-powered-apps",
  },
};

const data: SubservicePageData = {
  name: "AI-Powered Apps",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "ai-powered-apps",
  tagline:
    "• Custom web and mobile applications, specialized model fine-tuning and secure deployment pipelines built around AI-first architectures\nEach application is intended to:\n• Drive user experiences and backend workflows directly using AI logic\n• Train and improve predictions continuously by capturing live user feedback\n• Host models within your secure cloud infrastructure to ensure full data ownership",
  heroImage:
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1000&q=80&auto=format&fit=crop",

  solves: {
    challenge:
      "Adding AI to an existing app often results in a generic 'AI chatbot button' that feels disconnected and performs slowly. Treating AI as a superficial feature rather than a core architectural component leads to high API costs, latency lag, and fragile integrations.",
    challengePoints: [
      "AI features built on top of database schemas that weren't designed to support them.",
      "Slow user interfaces caused by poorly routed model API requests.",
      "No way to capture user feedback to improve model outputs after launch.",
      "Lack of monitoring to detect when model quality degrades in production.",
    ],
    solution:
      "We design applications around the model's data requirements from day one. Our systems handle latency with background queuing, manage model updates cleanly, and capture user actions automatically to train and improve outputs.",
    solutionPoints: [
      "Inference-first layouts designed to handle model outputs natively.",
      "Feedback loops that capture how users interact with AI outputs.",
      "Operational dashboards to trace response latency and error rates.",
      "Decoupled backend logic that separates model hostings from standard database queries.",
    ],
  },

  capabilities: [
    {
      icon: "code2",
      title: "AI-First App Development",
      description:
        "We architect web and mobile apps where data loops and AI model responses are integrated directly into the core codebase.",
    },
    {
      icon: "cpu",
      title: "Model Fine-tuning",
      description:
        "We fine-tune open-source models on your proprietary datasets, teaching them your technical terminology and formatting rules.",
    },
    {
      icon: "settings",
      title: "AI Integration into Existing Products",
      description:
        "We add model capabilities into your current software, configuring query caching and backup rules to protect the user experience.",
    },
    {
      icon: "server",
      title: "Custom Model Deployment",
      description:
        "We deploy models within your cloud network, setting up automatic scaling rules and health monitors.",
    },
    {
      icon: "refreshCw",
      title: "Feedback Loop Architecture",
      description:
        "We write data capture rules to log user ratings and corrections, building automatic pipelines to retrain models.",
    },
    {
      icon: "activity",
      title: "Production Monitoring",
      description:
        "We track API latency, token consumption, and response drift to keep your AI features running reliably post-launch.",
    },
  ],

  useCases: [
    {
      industry: "EdTech",
      title: "Adaptive Learning Platform",
      description:
        "An educational app tracks student answers in real time, dynamically serving the next lesson based on their actual pace.",
    },
    {
      industry: "Legal Tech",
      title: "Contract Analysis Tool",
      description:
        "A legal SaaS platform processes uploaded PDFs to flag non-standard clauses and compile risk summaries.",
    },
    {
      industry: "Healthcare Tech",
      title: "Clinical Decision Support Tool",
      description:
        "A clinic portal reads patient diagnostic inputs, cross-referencing medical guidelines to highlight potential prescription risks.",
    },
    {
      industry: "Retail",
      title: "Visual Search Application",
      description:
        "A retail app lets users upload clothing photos, running a vision model to return matching items from the warehouse.",
    },
    {
      industry: "Content",
      title: "Personalised Content Recommendation App",
      description:
        "A media platform uses a recommendation model to serve custom feeds based on individual user clicks.",
    },
    {
      industry: "Finance",
      title: "Automated Portfolio Report Generation",
      description:
        "An asset manager tool compiles monthly client updates, writing commentary based on historical portfolio performances.",
    },
  ],

  technologies: [
    "Next.js",
    "Python",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "Hugging Face Transformers",
    "OpenAI API",
    "Anthropic Claude API",
    "AWS SageMaker",
    "Vercel AI SDK",
    "Docker",
    "PostgreSQL",
  ],

  benefits: [
    {
      title: "AI as a Core Function",
      description:
        "Ensure your AI features run fast and reliably by designing them into your database schema and routing rules from day one.",
    },
    {
      title: "Domain-Specific Performance",
      description:
        "Get highly accurate outputs tailored to your industry by training models on your specific documentation.",
    },
    {
      title: "Improving Over Time",
      description:
        "Build self-improving software that captures user corrections and retrains its models to get smarter over time.",
    },
    {
      title: "Production-Ready from Launch",
      description:
        "Deploy software equipped with automatic backup endpoints and error tracking, preventing outages on day one.",
    },
    {
      title: "Lower Long-Term Costs",
      description:
        "Host models on your own servers to pay stable infrastructure costs rather than paying per-token API fees that scale with traffic.",
    },
    {
      title: "Full Data Ownership",
      description:
        "Keep all user inputs and query logs inside your own databases, complying with internal security and compliance policies.",
    },
  ],

  faqs: [
    {
      q: "Can AI capabilities be added to our existing application?",
      a: "Yes. We review your database setup and backend endpoints to insert AI features without a full rebuild. We focus on caching model responses, handling query latency in the UI, and configuring backup rules.",
    },
    {
      q: "Do you build custom models or use existing foundation models like GPT or Claude?",
      a: "We do both. For most projects, we use pre-trained base models (like Claude or Llama) and customize them using RAG or fine-tuning. This is much faster and cheaper than training a model from scratch.",
    },
    {
      q: "How do you handle AI errors or incorrect outputs in production?",
      a: "We configure validation checks on model outputs. If a response fails checks or if the API drops, the app falls back to standard templates or cues a retry. We also design review screens for high-priority outputs.",
    },
    {
      q: "What does monitoring look like after the app is deployed?",
      a: "We set up tracking for latency, API errors, and token costs. We also monitor for 'data drift'—meaning we check if incoming user queries have changed compared to the data used during training.",
    },
  ],
};

export default function AIPoweredAppsPage() {
  return <SubservicePageLayout data={data} />;
}
