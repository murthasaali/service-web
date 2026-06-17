import { Code2, Smartphone, TrendingUp, Server, Zap, Users, Lightbulb, type LucideIcon } from "lucide-react";

export interface ServiceData {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  href: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  borderHover: string;
}

export const services: ServiceData[] = [
  {
    id: "web-development",
    name: "Web & Software Development",
    description:
      "We design and engineer high-performance web applications and custom software built to handle real-world scale. From MVPs to enterprise platforms, we ship reliable software with clean architecture and long-term maintainability in mind.",
    capabilities: [
      "Full-stack web application development",
      "Custom API design and third-party integration",
      "SaaS product architecture and build",
      "Legacy system modernisation",
      "Performance audits and optimisation",
    ],
    href: "/services/web-development",
    icon: Code2,
    gradient: "from-blue-500/15 to-electric-blue/15",
    iconColor: "text-electric-blue",
    borderHover: "hover:border-electric-blue/40",
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "We build native and cross-platform mobile applications that deliver smooth, intuitive experiences on iOS and Android. Whether you need a consumer app or an internal enterprise tool, we handle everything from UX design to App Store launch.",
    capabilities: [
      "iOS and Android native app development",
      "Cross-platform apps with React Native or Flutter",
      "App Store and Google Play submission",
      "Push notifications and offline functionality",
      "Mobile API integration and backend services",
    ],
    href: "/services/mobile-app-development",
    icon: Smartphone,
    gradient: "from-violet-500/15 to-purple-400/15",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-400/40",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "We craft data-driven digital marketing strategies that increase brand visibility, drive qualified traffic, and convert leads into revenue. Our campaigns are built on analytics and continuous testing, not guesswork.",
    capabilities: [
      "SEO strategy and technical optimisation",
      "Paid search and social advertising (PPC)",
      "Content marketing and editorial planning",
      "Email marketing automation",
      "Analytics setup, tracking, and reporting",
    ],
    href: "/services/digital-marketing",
    icon: TrendingUp,
    gradient: "from-emerald-500/15 to-teal-400/15",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-400/40",
  },
  {
    id: "hosting-infrastructure",
    name: "Hosting & Infrastructure",
    description:
      "We design and manage cloud infrastructure that is secure, scalable, and cost-efficient. Whether you are migrating to the cloud or optimising an existing environment, we build systems engineered to stay up.",
    capabilities: [
      "Cloud architecture on AWS, GCP, and Azure",
      "Containerisation with Docker and Kubernetes",
      "CI/CD pipeline setup and automation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Security hardening and compliance configuration",
    ],
    href: "/services/hosting-infrastructure",
    icon: Server,
    gradient: "from-orange-500/15 to-amber-400/15",
    iconColor: "text-orange-500",
    borderHover: "hover:border-orange-400/40",
  },
  {
    id: "automation",
    name: "Automation",
    description:
      "We identify repetitive, manual processes in your business and replace them with intelligent automation — freeing your team to focus on work that matters. From workflow automation to AI-driven pipelines, we eliminate operational drag.",
    capabilities: [
      "Business process automation (BPA)",
      "Robotic process automation (RPA) implementation",
      "API and system integration automation",
      "AI-powered workflow orchestration",
      "Custom automation scripts and tooling",
    ],
    href: "/services/automation",
    icon: Zap,
    gradient: "from-yellow-400/15 to-orange-400/15",
    iconColor: "text-yellow-600",
    borderHover: "hover:border-yellow-400/40",
  },
  {
    id: "customer-exp-management",
    name: "Customer Experience Management",
    description:
      "We help businesses design and deliver exceptional customer experiences across every touchpoint. By combining technology, data, and strategy, we turn customer interactions into lasting loyalty and measurable retention.",
    capabilities: [
      "CX strategy and customer journey mapping",
      "CRM implementation and optimisation",
      "Customer feedback and analytics platforms",
      "Omnichannel communication setup",
      "Support tooling and helpdesk integration",
    ],
    href: "/services/customer-exp-management",
    icon: Users,
    gradient: "from-pink-500/15 to-rose-400/15",
    iconColor: "text-pink-600",
    borderHover: "hover:border-pink-400/40",
  },
  {
    id: "it-consulting-it-services",
    name: "IT Consulting & IT Services",
    description:
      "We provide strategic technology advisory and hands-on managed IT services that align your technology investments with business outcomes. From architecture reviews to day-to-day support, we are your trusted technology partner.",
    capabilities: [
      "Technology strategy and digital roadmapping",
      "IT architecture and systems review",
      "Vendor selection and procurement advisory",
      "IT project management and delivery oversight",
      "Ongoing managed IT support and helpdesk",
    ],
    href: "/services/it-consulting-it-services",
    icon: Lightbulb,
    gradient: "from-cyan-500/15 to-sky-400/15",
    iconColor: "text-cyan-600",
    borderHover: "hover:border-cyan-400/40",
  },
];
