import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Hosting & Infrastructure",
  description:
    "Scalable, secure cloud infrastructure on AWS, GCP, and Azure — designed, built, and managed by our infrastructure team.",
  openGraph: {
    title: "Hosting & Infrastructure | aibizmod",
    description:
      "Scalable, secure cloud infrastructure on AWS, GCP, and Azure — designed, built, and managed by our infrastructure team.",
    url: "/services/hosting-infrastructure",
  },
};

const data: ServicePageData = {
  name: "Hosting & Infrastructure",
  tagline:
    "Reliable, scalable cloud infrastructure — built for uptime, optimised for cost, and managed by experts.",
  slug: "hosting-infrastructure",
  iconColor: "text-orange-500",

  overview: {
    paragraphs: [
      "Cloud infrastructure is no longer an operational afterthought — it is the foundation that your product's reliability, performance, and security are built on. Poorly designed infrastructure costs organisations in downtime, security incidents, spiralling cloud bills, and engineering time spent firefighting instead of building.",
      "Our infrastructure team brings deep expertise across AWS, Google Cloud, and Azure. We design multi-region architectures, containerised workloads with Kubernetes, and fully automated pipelines that make deployment a predictable, low-risk event rather than a nerve-wracking one. Every environment we provision is codified in Terraform or Pulumi — reproducible, auditable, and version-controlled.",
      "We also handle the operational side of infrastructure so your engineering team can focus on product. That means proactive monitoring with defined alerting thresholds, incident response with SLA-backed resolution times, capacity planning ahead of traffic spikes, and security hardening against evolving threats.",
    ],
    benefits: [
      "Multi-cloud expertise across AWS, GCP, and Azure with no vendor lock-in",
      "Infrastructure as Code for fully reproducible and auditable environments",
      "99.9%+ uptime SLAs with automated failover and disaster recovery",
      "Proactive monitoring and 24/7 incident alerting with defined response times",
      "Cost optimisation reviews that typically reduce cloud spend by 15–30%",
    ],
  },

  features: [
    {
      icon: "cloud",
      title: "Cloud Architecture",
      desc: "Purpose-built cloud architectures on AWS, GCP, or Azure — designed for your specific scale, compliance requirements, and cost envelope.",
    },
    {
      icon: "workflow",
      title: "CI/CD Pipelines",
      desc: "Fully automated build, test, and deployment pipelines that make shipping code safe, fast, and repeatable across every environment.",
    },
    {
      icon: "container",
      title: "Container Orchestration",
      desc: "Kubernetes and Docker-based container platforms that scale dynamically with your traffic and isolate workloads for reliability and security.",
    },
    {
      icon: "shield",
      title: "Security & Compliance",
      desc: "IAM role management, encryption at rest and in transit, network security policies, and compliance configuration for SOC 2, GDPR, and HIPAA.",
    },
    {
      icon: "activity",
      title: "Monitoring & Observability",
      desc: "Prometheus and Grafana stacks, structured logging, distributed tracing, and alerting that gives you full visibility into system health and performance.",
    },
    {
      icon: "refreshCw",
      title: "Disaster Recovery",
      desc: "Automated backup strategies, cross-region failover, and RTO/RPO-defined recovery playbooks tested regularly — not just documented.",
    },
  ],

  process: [
    {
      icon: "search",
      title: "Infrastructure Assessment",
      desc: "We audit your current setup, identify risks and performance bottlenecks, and document the target architecture with clear rationale.",
    },
    {
      icon: "layers",
      title: "Design & Provision",
      desc: "We design the full infrastructure plan and provision all environments through IaC (Terraform/Pulumi) for reproducibility and auditability.",
    },
    {
      icon: "shield",
      title: "Migration & Testing",
      desc: "Staged migration with zero-downtime cutover plans and extensive load testing — no surprises on go-live day.",
    },
    {
      icon: "activity",
      title: "Ongoing Management",
      desc: "Proactive monitoring, security patching, cost reviews, and on-call incident response once your infrastructure is live.",
    },
  ],

  techStack: [
    "AWS", "Google Cloud", "Azure", "Terraform", "Pulumi", "Kubernetes",
    "Docker", "Prometheus", "Grafana", "Nginx", "GitHub Actions", "Vault", "Datadog", "Cloudflare",
  ],

  faqs: [
    {
      q: "Can you manage infrastructure you didn't build?",
      a: "Yes. We regularly take over infrastructure built by other teams or vendors. We start with a thorough audit to understand the current state, identify risks, and recommend improvements before making any changes. We never modify production environments without a clear, agreed plan.",
    },
    {
      q: "How do you handle incidents and outages?",
      a: "We set up alerting with defined severity tiers and escalation paths. For managed clients, our on-call rotation responds to critical alerts (system down, data breach risk) within 15 minutes, high-severity issues within 2 hours. Every incident is followed by a post-mortem with root cause analysis and a documented remediation plan.",
    },
    {
      q: "What does Infrastructure as Code mean in practice?",
      a: "It means your entire infrastructure — servers, databases, networking, security groups — is defined in version-controlled configuration files (Terraform or Pulumi). Every change is peer-reviewed like application code, every environment is reproducible from scratch, and rollbacks are as simple as reverting a commit. It eliminates snowflake servers and configuration drift.",
    },
    {
      q: "Can you help us reduce our cloud bill?",
      a: "Yes. Cost optimisation is a core part of every infrastructure engagement. We conduct regular rightsizing reviews, identify idle or over-provisioned resources, and recommend Reserved Instance or Savings Plan purchases. Clients typically see 15–30% reduction in cloud spend within the first 90 days.",
    },
    {
      q: "Do you support hybrid or multi-cloud setups?",
      a: "Yes. We design hybrid architectures that connect on-premise systems with cloud services using Direct Connect, VPN, or SD-WAN depending on latency and compliance requirements. We also manage multi-cloud environments where workloads are split across AWS, GCP, and Azure by design.",
    },
  ],
};

export default function HostingInfrastructurePage() {
  return <ServicePageLayout data={data} />;
}
