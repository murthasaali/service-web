import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "Generative AI | AI & Automation | aibizmod",
  description:
    "Integrate large language models into your product or internal operations to automate content generation, document processing, and decision support at scale.",
  alternates: { canonical: "https://aibizmod.com/services/automation/generative-ai" },
  openGraph: {
    title: "Generative AI | aibizmod",
    description:
      "Integrate large language models into your product or internal operations to automate content generation, document processing, and decision support at scale.",
    url: "/services/automation/generative-ai",
  },
};

const data: SubservicePageData = {
  name: "Generative AI",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "generative-ai",
  tagline:
    "• Custom LLM assistants, Retrieval-Augmented Generation (RAG) search tools and automated text processors built to handle language-heavy workflows\nEach tool is intended to:\n• Retrieve accurate answers from your private documents with precise page citations\n• Read, classify and summarize complex multi-page contracts and specifications in seconds\n• Draft project records, change orders and technical updates based on your actual data",
  heroImage:
    "/services/automation/generative-ai.jpg",

  solves: {
    challenge:
      "Most organizations spend hours daily reading, sorting, and summarizing text files. Managing contracts, compiling weekly reports, answering repetitive RFIs, and routing support tickets takes up valuable team hours that could be spent on actual client delivery.",
    challengePoints: [
      "Hours lost drafting standard project updates and email summaries manually.",
      "Inconsistent document formats and varying quality when handled by different teams.",
      "Contracts and RFIs sitting in queues waiting for manual review.",
      "Team members unable to search across old project reports or SOP archives.",
    ],
    solution:
      "We build generative AI pipelines that connect directly to your databases. Our systems parse documents, extract key details, and draft responses based on your actual data, while enforcing strict review checkpoints for safety.",
    solutionPoints: [
      "RAG engines that search and answer queries using only your private files.",
      "Automated pipelines that read PDFs, summarize contracts, and log parameters.",
      "Custom AI assistants prompted to match your tone and operational constraints.",
      "Direct API connections that link models into your current CRM and databases.",
    ],
  },

  capabilities: [
    {
      icon: "bot",
      title: "Custom GPT Development",
      description:
        "We configure customized LLM assistants with specific system prompts, operational guardrails, and context boundaries.",
    },
    {
      icon: "database",
      title: "RAG System Development",
      description:
        "We build RAG architectures that connect model queries directly to your indexed document database to prevent hallucinated answers.",
    },
    {
      icon: "code2",
      title: "LLM Application Integration",
      description:
        "We connect language models straight into your internal dashboards, CRM portals, or custom apps via secure API credentials.",
    },
    {
      icon: "pencil",
      title: "Prompt Engineering",
      description:
        "We structure robust prompt templates and evaluation sets to ensure outputs remain consistent and formatted correctly.",
    },
    {
      icon: "shield",
      title: "Enterprise AI Deployment",
      description:
        "We host models within your cloud tenant, enforcing strict user access parameters, encryption keys, and auditable runtime logs.",
    },
    {
      icon: "workflow",
      title: "AI Output Pipelines",
      description:
        "We build pipelines that route LLM outputs directly into review dashboards, database tables, or messaging threads.",
    },
    {
      icon: "cpu",
      title: "Domain-Specific Fine-Tuning",
      description:
        "We fine-tune open-source models to understand your sector's acronyms, jargon, and specific operational rules.",
    },
    {
      icon: "fileText",
      title: "Automated Document Ingestion & Summarisation",
      description:
        "We set up automated ingestion models that scan multi-page contracts to pull values and flag liability terms in seconds.",
    },
  ],

  useCases: [
    {
      industry: "Legal",
      title: "Contract Summarisation and Clause Extraction",
      description:
        "An AI pipeline parses incoming contracts, pulls critical clauses, and compiles a structured summary for legal review.",
    },
    {
      industry: "Healthcare",
      title: "Clinical Note Structuring",
      description:
        "A text processing model extracts clinical details from unstructured doctor notes and logs them directly to patient records.",
    },
    {
      industry: "E-commerce",
      title: "Product Description Generation from Data Sheets",
      description:
        "Supplier spec sheets are parsed by a model that generates formatted, SEO-friendly product descriptions at scale.",
    },
    {
      industry: "Finance",
      title: "Earnings Report Analysis",
      description:
        "Earnings PDFs are indexed in a secure database so analysts can retrieve answers with exact page citations.",
    },
    {
      industry: "Property",
      title: "Tenancy Document Processing",
      description:
        "An agent reads incoming applications, extracts employment and income details, and updates the management system.",
    },
    {
      industry: "Customer Support",
      title: "Support Ticket Triage and Response Drafting",
      description:
        "An AI triages incoming support tickets and drafts responses based on knowledge base articles for helpdesk review.",
    },
    {
      industry: "Construction",
      title: "Instant Contract Risk Auditing",
      description:
        "Multi-page technical contracts are scanned by a model to instantly flag liability clauses or missing compliance terms.",
    },
    {
      industry: "Infrastructure",
      title: "Intelligent Knowledge Retrieval",
      description:
        "Engineering teams query past project files and manual guides using simple queries to find past solutions in seconds.",
    },
    {
      industry: "Construction",
      title: "Automated Technical Draft Engineering",
      description:
        "Models write drafts of technical project reports, change orders, and daily logs based on past site data.",
    },
    {
      industry: "Infrastructure",
      title: "Smart RFI Processing",
      description:
        "Client RFIs are automatically matched to historical project logs, drafting technical answers for engineer review.",
    },
  ],

  technologies: [
    "OpenAI GPT-4o",
    "Anthropic Claude API",
    "LangChain",
    "LlamaIndex",
    "Pinecone",
    "Chroma",
    "Weaviate",
    "Python",
    "FastAPI",
    "Next.js",
    "Vercel AI SDK",
  ],

  benefits: [
    {
      title: "Content at Volume",
      description:
        "Handle heavy volumes of text reviews and data extraction without adding to your team's administrative load.",
    },
    {
      title: "Knowledge Made Searchable",
      description:
        "Index PDF archives and project logs so team members can retrieve specific answers instantly with simple search queries.",
    },
    {
      title: "Consistent Quality Standards",
      description:
        "Ensure consistent formatting and parameters across drafts, avoiding variation when different staff handle tasks.",
    },
    {
      title: "Source-Grounded Answers",
      description:
        "Ground your answers in actual company documents, preventing fabricated outputs and providing exact citations for verification.",
    },
    {
      title: "Faster Document Throughput",
      description:
        "Process inbound contracts, applications, and logs immediately, avoiding backlogs and speeding up client delivery.",
    },
    {
      title: "Embedded in Existing Tools",
      description:
        "Deliver model answers directly to your current project boards, CRM, or Slack channels, keeping your existing tools in place.",
    },
  ],

  faqs: [
    {
      q: "What is the difference between a fine-tuned model and a RAG system?",
      a: "Fine-tuning updates the model's inner weights with your data, which changes how it behaves. This is costly and best for adapting style or jargon. RAG keeps the model the same, but pulls relevant document snippets from a secure index at search time. RAG is much better for business processes where data updates regularly.",
    },
    {
      q: "How do you prevent the AI from giving wrong or fabricated answers?",
      a: "We configure RAG systems with strict grounding: the model is forced to search only your supplied files, must cite the exact page or section, and will report 'answer not found' if the data is missing instead of generating a guess. We also add approval screens for high-stakes actions.",
    },
    {
      q: "Is our company data kept private when we use these models?",
      a: "Yes. Enterprise API contracts with OpenAI and Anthropic state they do not use your queries to train future models. For highly sensitive operations, we deploy open-source models like Llama within your private cloud environment so data never leaves your network.",
    },
    {
      q: "Can the AI output feed directly into our existing software?",
      a: "Yes. We program the models to output structured data formats (like JSON) rather than plain text. This allows your existing software to read and parse the details directly into your database.",
    },
    {
      q: "Is there a risk that our private contracts or corporate secrets will leak into public AI models?",
      a: "No. We connect models within a secure enterprise environment. RAG storage is kept separate from public model training cycles, and all data is encrypted. Your documents are never used to train public LLM models.",
    },
    {
      q: "How do you guarantee the AI won't hallucinate or invent technical clauses when analysing a contract?",
      a: "We enforce strict grounding rules: the model is forced to search only your supplied files, must cite the exact page or section, and will report 'answer not found' if the data is missing instead of generating a guess.",
    },
    {
      q: "Can the LLM understand highly specific engineering acronyms, regional regulations, and legal terminology?",
      a: "Yes. Standard AI models struggle with complex jargon. We configure your RAG index with custom glossaries and engineering documentation, matching the context to your industry's specific vocabulary and rules.",
    },
  ],
};

export default function GenerativeAIPage() {
  return <SubservicePageLayout data={data} />;
}
