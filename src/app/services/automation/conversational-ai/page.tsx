import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "Conversational AI | AI & Automation | aibizmod",
  description:
    "Deploy AI assistants that handle customer inquiries, support tickets, and internal queries by drawing from your actual knowledge base and live system data.",
  alternates: { canonical: "https://aibizmod.com/services/automation/conversational-ai" },
  openGraph: {
    title: "Conversational AI | aibizmod",
    description:
      "Deploy AI assistants that handle customer inquiries, support tickets, and internal queries by drawing from your actual knowledge base and live system data.",
    url: "/services/automation/conversational-ai",
  },
};

const data: SubservicePageData = {
  name: "Conversational AI",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "conversational-ai",
  tagline:
    "• AI customer support assistants, voice booking systems and internal IT helpdesk bots built to handle conversations in natural language\nEach bot is intended to:\n• Resolve common inquiries regarding orders, returns and calendars 24/7\n• Look up live database records to provide real-time, user-specific answers\n• Transfer complex tickets seamlessly to human support staff with full chat context",
  heroImage:
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1000&q=80&auto=format&fit=crop",

  solves: {
    challenge:
      "Customer support teams spend hours copying and pasting answers to identical questions daily. Tickets about shipping times, booking slots, and return policies fill up support queues, delaying responses to complex cases and frustrating customers who wait for answers.",
    challengePoints: [
      "Reps wasting time copying templates for common customer queries.",
      "Customers waiting overnight or through weekends for basic help.",
      "Product information locked in scattered manuals and internal wikis.",
      "Traditional chat widgets breaking when users ask follow-up questions.",
    ],
    solution:
      "We deploy AI chat engines trained on your actual manuals, product catalogs, and policies. They answer support queries accurately, check live order databases, and route complex cases to your staff with the full chat transcript attached.",
    solutionPoints: [
      "Chatbots grounded in your company's actual PDF manuals and policies.",
      "Secure connections to check live order status and appointment listings.",
      "Multi-channel deployment across web chat, WhatsApp, and Slack.",
      "Seamless transfer to human support reps when cases require escalation.",
    ],
  },

  capabilities: [
    {
      icon: "messageSquare",
      title: "AI Chatbot Development",
      description:
        "We design custom chat tools for your website that resolve user inquiries using natural language instead of rigid buttons.",
    },
    {
      icon: "headphones",
      title: "Voice Agent Integration",
      description:
        "We build voice integrations to answer simple inbound calls, qualify leads, and route calls to the correct desk.",
    },
    {
      icon: "lightbulb",
      title: "Knowledge Base Assistants",
      description:
        "We index your company's SOPs and wikis so team members can find policy details via chat.",
    },
    {
      icon: "globe",
      title: "Multi-channel Deployment",
      description:
        "We deploy a single conversational engine across WhatsApp, Slack, Teams, and web chat simultaneously.",
    },
    {
      icon: "users",
      title: "Human Handoff Routing",
      description:
        "We write escalation rules that route users to your human support team with the full chat history intact.",
    },
    {
      icon: "shield",
      title: "Guardrails and Content Controls",
      description:
        "We program strict topic limits to keep the agent focused on your business, preventing off-topic responses.",
    },
  ],

  useCases: [
    {
      industry: "E-commerce",
      title: "Order Tracking and Returns Handling",
      description:
        "Customers check shipment status and return limits. The AI queries your ERP to answer instantly without support queue delays.",
    },
    {
      industry: "Professional Services",
      title: "Initial Client Qualification",
      description:
        "A web assistant asks incoming leads qualification questions and schedules discovery calls directly on your sales calendar.",
    },
    {
      industry: "Internal Operations",
      title: "IT Helpdesk First Response",
      description:
        "Staff submit IT support requests via Slack or Teams. The AI resolves common issues from a knowledge base and creates tickets for anything requiring a human technician.",
    },
    {
      industry: "Property",
      title: "Lettings FAQ and Viewing Bookings",
      description:
        "Prospects ask about apartment terms and rent schedules, booking viewing appointments directly on the agent's calendar.",
    },
    {
      industry: "Healthcare",
      title: "Appointment Booking and Pre-visit Information",
      description:
        "Patients schedule clinic visits, check opening hours, and receive prep instructions via a secure clinic portal chat.",
    },
    {
      industry: "Legal",
      title: "Initial Matter Intake",
      description:
        "New clients submit case details via web chat. The AI extracts the legal matter type and assigns the file to the correct team.",
    },
  ],

  technologies: [
    "OpenAI GPT-4o",
    "Anthropic Claude API",
    "LangChain",
    "LlamaIndex",
    "Pinecone",
    "Twilio",
    "WhatsApp Business API",
    "Voiceflow",
    "Python",
    "FastAPI",
    "Next.js",
  ],

  benefits: [
    {
      title: "Coverage Outside Business Hours",
      description:
        "Answer basic queries 24/7, preventing backlog queues from building up over weekends and holidays.",
    },
    {
      title: "Consistent Answers Across Every Channel",
      description:
        "Connect your help docs to web, email, and chat apps so customers get identical answers on any channel.",
    },
    {
      title: "Reduced Ticket Volume for Human Agents",
      description:
        "Resolve common tickets automatically so your helpdesk can focus on resolving complex customer issues.",
    },
    {
      title: "Accurate, Source-Grounded Responses",
      description:
        "Keep bot responses grounded in your uploaded guides, preventing fabricated claims or off-brand suggestions.",
    },
    {
      title: "Structured Escalation",
      description:
        "Transfer complex chats to human reps along with the context, saving customers from repeating their problem.",
    },
    {
      title: "Measurable Performance",
      description:
        "Log chat transcripts and success metrics to track where help resources need updating.",
    },
  ],

  faqs: [
    {
      q: "How is this different from a basic chatbot or FAQ widget?",
      a: "Standard chatbots follow static, button-driven paths and crash when a user types a unique sentence. Our AI assistants use language reasoning to understand natural text, process spelling errors, and pull actual records from your database.",
    },
    {
      q: "Can the AI access our live system data such as order status or appointment availability?",
      a: "Yes. We set up API integrations so the AI can verify details (like checking shipping status or calendar availability) in real time while chat conversations are active.",
    },
    {
      q: "How do you handle questions the AI cannot answer?",
      a: "We set up clear routing rules. If the bot doesn't recognize a question or if a user requests a human, the session transfers to your support inbox with the full transcript attached.",
    },
    {
      q: "Will the AI understand our industry-specific terminology?",
      a: "Yes. We prime the AI assistant with your technical guides, glossary terms, and product catalogs. This keeps responses aligned with your company's actual terminology and rules.",
    },
  ],
};

export default function ConversationalAIPage() {
  return <SubservicePageLayout data={data} />;
}
