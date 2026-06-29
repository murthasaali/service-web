import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "Agentic AI | AI & Automation | aibizmod",
  description:
    "Deploy autonomous AI agents that understand high-level goals, execute multi-step workflows across your software stack, and continuously self-optimise through a real-world feedback loop.",
  alternates: { canonical: "https://aibizmod.com/services/automation/agentic-ai" },
  openGraph: {
    title: "Agentic AI | aibizmod",
    description:
      "Deploy autonomous AI agents that understand high-level goals, execute multi-step workflows across your software stack, and continuously self-optimise through a real-world feedback loop.",
    url: "/services/automation/agentic-ai",
  },
};

const data: SubservicePageData = {
  name: "Agentic AI",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "agentic-ai",
  tagline:
    "• Goal-oriented software agents, self-healing pipelines and autonomous digital workers that are built to directly execute complex workflows across your software stack\nEach agent is intended to:\n• Ongoing cycle of optimization, evaluation and execution\n• Increase the efficiency of tasks and reduce operational latency\n• Proper management of system errors and exceptions",
  heroImage:
    "/services/automation/agentic-ai.jpg",

  solves: {
    challenge:
      "Even with AI predicting delays or demand spikes, teams still spend hours copying data between tools, chasing approvals, and updating project boards by hand. This manual coordination creates a bottleneck that slows down operations and introduces simple human errors.",
    challengePoints: [
      "AI forecasts that sit on dashboards instead of triggering real-world actions.",
      "Hours lost daily copying and pasting details between project tools and ERPs.",
      "Traditional automation scripts that crash or fail when real-world schedules shift.",
      "Processes that repeat the same execution errors because they cannot learn from past outcomes.",
    ],
    solution:
      "We design goal-oriented AI agents that act on data. Instead of just sending alerts, our agents plan out steps, connect directly to your software tools to execute them, and evaluate each outcome to handle subsequent tasks more efficiently — all while keeping your team in control.",
    solutionPoints: [
      "Autonomous planning that breaks high-level goals into specific operational tasks.",
      "Direct integration with your current tools, databases, and third-party APIs.",
      "Closed-loop execution where systems measure results and adapt their own logic.",
      "Programmed checkpoints that require human authorization before making financial or legal decisions.",
    ],
  },

  capabilities: [
    {
      icon: "cpu",
      title: "Autonomous Digital Agents",
      description:
        "Software entities that take on routine back-office workflows, working through multi-step checklists without manual supervision.",
    },
    {
      icon: "network",
      title: "Cross-Platform Tool Integration",
      description:
        "Secure API connections that let your agents read, update, and sync records across your ERP, CRM, and internal databases.",
    },
    {
      icon: "refreshCw",
      title: "Feedback Flow Architecture",
      description:
        "Workflows built to execute tasks, measure the actual outcome against targets, and update the planning path for the next run.",
    },
    {
      icon: "shield",
      title: "Human-in-the-Loop Oversight",
      description:
        "Authorization portals and Slack notification systems that pause high-stakes actions until a manager reviews and clicks approve.",
    },
    {
      icon: "workflow",
      title: "Multi-Agent Orchestration",
      description:
        "Collaborative agent systems where a manager agent splits complex objectives and routes sub-tasks to specialized worker agents.",
    },
    {
      icon: "bell",
      title: "Intelligent Exception Handling",
      description:
        "Self-correcting code that logs unexpected API errors, tries alternate routing paths, and alerts a human only when it cannot safely proceed.",
    },
    {
      icon: "barChart",
      title: "Autonomous Reporting & Compliance Logging",
      description:
        "Agents that gather shift logs and sensor metrics, compile summary reports, and upload them to compliance databases daily.",
    },
    {
      icon: "zap",
      title: "Continuous Workflow Optimisation",
      description:
        "Routines that monitor task completion speeds and automatically adjust internal rules to speed up execution over time.",
    },
  ],

  useCases: [
    {
      industry: "Construction",
      title: "Autonomous Schedule Adjustment",
      description:
        "If weather delays are predicted, the agent reschedules dependent tasks in your project tool and alerts subcontractors automatically.",
    },
    {
      industry: "Supply Chain",
      title: "Self-Correcting Material Procurement",
      description:
        "When inventory levels drop below threshold, the agent queries vendor prices, selects the best option, and drafts a purchase order for approval.",
    },
    {
      industry: "Operations",
      title: "Automated Compliance & Shift Reporting",
      description:
        "At shift end, the agent pulls updates from field logs and accounting systems, generates a daily summary, and submits it to your server.",
    },
    {
      industry: "Finance",
      title: "Autonomous Invoice-to-Payment Workflow",
      description:
        "An agent reads incoming invoices, matches line items with purchase orders, flags discrepancies, and queues matched bills for payment.",
    },
    {
      industry: "SaaS",
      title: "Continuous Workflow Optimisation",
      description:
        "An agent monitors operational cycle times and alters task routing rules to avoid bottlenecks before they delay project delivery.",
    },
    {
      industry: "Customer Support",
      title: "Intelligent Ticket Resolution Agent",
      description:
        "The agent answers common support tickets by querying internal databases, routes complex issues to team members, and updates documentation.",
    },
    {
      industry: "HR",
      title: "Automated Employee Onboarding Workflow",
      description:
        "An agent requests onboarding forms, creates accounts across your tools, and schedules training sessions based on start dates.",
    },
    {
      industry: "Logistics",
      title: "Real-Time Route & Load Optimisation",
      description:
        "An agent processes vehicle GPS data and traffic shifts, dynamically updating delivery routes to keep your fleet on time.",
    },
    {
      industry: "Legal",
      title: "Contract Lifecycle Management Agent",
      description:
        "An agent tracks renewal dates, drafts standard renewal documents based on past agreements, and assigns review tasks to legal teams.",
    },
    {
      industry: "Infrastructure",
      title: "Predictive Maintenance Dispatch Agent",
      description:
        "When equipment sensors flag an issue, the agent checks technician calendars, schedules the service window, and updates task lists.",
    },
  ],

  technologies: [
    "LangGraph",
    "AutoGen",
    "CrewAI",
    "OpenAI API",
    "Anthropic Claude API",
    "LangChain",
    "n8n",
    "Python",
    "FastAPI",
    "REST APIs",
    "Docker",
    "PostgreSQL",
  ],

  benefits: [
    {
      title: "Unprecedented Team Leverage",
      description:
        "Redirect managers from repetitive copy-paste administrative work to solving actual on-site problems and managing client relationships.",
    },
    {
      title: "True Real-Time Operational Agility",
      description:
        "Allow project schedules, load distributions, and material requests to adjust dynamically the moment operational variables shift.",
    },
    {
      title: "Exponential System Resiliency",
      description:
        "Build systems that attempt self-correction when errors occur, keeping back-office operations moving without crashing.",
    },
    {
      title: "Zero Administrative Bottlenecks",
      description:
        "Run actions the minute data is generated rather than waiting for a team member to manually read an email, verify a field, and log the change.",
    },
    {
      title: "Complete Auditability",
      description:
        "Log every agent decision, action, and API call in detail, giving you a searchable history for compliance and performance reviews.",
    },
    {
      title: "Adaptive Learning at Scale",
      description:
        "Utilize closed-loop feedback so the automation becomes more accurate and efficient with every project iteration.",
    },
  ],

  faqs: [
    {
      q: "What prevents an autonomous AI agent from making a costly mistake, like sending an incorrect purchase order to a vendor?",
      a: "You retain full control through strict human-in-the-loop checkpoints. While agents can automate low-risk tasks (like updating internal project boards), any critical financial or legal action requires a manager's sign-off. The agent compiles the data and drafts the request, but nothing is sent until a human clicks 'approve'.",
    },
    {
      q: "What happens if an agent encounters an unexpected error or a software API breaks mid-task?",
      a: "We design agents to fail safely. If a connected API drops or throws an error, the agent won't just crash. It logs the issue, attempts pre-programmed workarounds, and halts safely if it can't resolve the problem. The system then alerts your team with a detailed description of the error so a human can step in.",
    },
    {
      q: "How do AI agents actually interact with our separate software tools?",
      a: "Agents act as secure integrations. They connect to your current ERP, CRM, and databases through secure, encrypted API credentials. The system reads and writes data according to the specific user permissions and security policies you define.",
    },
    {
      q: "How is Agentic AI different from traditional workflow automation?",
      a: "Traditional automation follows rigid, predefined scripts and breaks as soon as a file format changes or a field is missing. Agentic AI uses language model reasoning to understand the goal of a task, adapt to unexpected changes, and resolve simple errors autonomously, making it far more flexible than simple rule-based automation.",
    },
  ],
};

export default function AgenticAIPage() {
  return <SubservicePageLayout data={data} />;
}
