import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQAccordion from "./FAQAccordion";
import StickyFooterLayout from "@/components/layout/StickyFooterLayout";

const faqs = [
  {
    question: "What type of technology services does aibizmode provide?",
    answer:
      "We help businesses with web platforms, mobile apps, cloud infrastructure, automation, digital marketing, customer experience systems, and IT consulting.",
  },
  {
    question: "Can you build a complete product from idea to launch?",
    answer:
      "Yes. We can support discovery, planning, UI direction, development, deployment, testing, and post-launch improvements as one connected delivery process.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "Yes. We work with early-stage teams that need a fast first release and established companies that need reliable systems, integrations, and scaling support.",
  },
  {
    question: "How do you start a new project?",
    answer:
      "We begin with a consultation to understand goals, users, timelines, technical needs, and business priorities. From there, we outline scope, milestones, and the best delivery approach.",
  },
  {
    question: "Can you improve an existing website or app?",
    answer:
      "Yes. We can audit an existing product, identify performance or UX issues, modernize the stack, add features, and improve reliability without rebuilding everything unnecessarily.",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. We build mobile experiences for iOS and Android, including customer apps, internal tools, booking flows, dashboards, and connected business workflows.",
  },
  {
    question: "Can you handle cloud hosting and deployment?",
    answer:
      "Yes. We can set up hosting, CI/CD, monitoring, infrastructure configuration, database deployment, backups, and ongoing operational support.",
  },
  {
    question: "Do you offer automation and AI-assisted workflows?",
    answer:
      "Yes. We design automations that reduce manual work, connect tools, route data, generate reports, and improve team productivity with practical AI-assisted workflows.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A focused landing page or website can be delivered quickly, while custom platforms and mobile apps usually move through phased milestones.",
  },
  {
    question: "Will we get a clear project plan before development starts?",
    answer:
      "Yes. We define deliverables, milestones, dependencies, communication rhythm, and acceptance criteria before build work begins.",
  },
  {
    question: "Can you support us after launch?",
    answer:
      "Yes. We provide post-launch support for bug fixes, updates, monitoring, optimization, security improvements, and new feature iterations.",
  },
  {
    question: "Do you integrate third-party tools and APIs?",
    answer:
      "Yes. We integrate payment systems, CRMs, analytics tools, marketing platforms, maps, authentication, cloud services, and custom APIs.",
  },
  {
    question: "How do you keep projects aligned with business goals?",
    answer:
      "We connect technical decisions to measurable outcomes such as speed, conversion, operational efficiency, customer experience, and long-term maintainability.",
  },
  {
    question: "Can you help with digital marketing after the website is live?",
    answer:
      "Yes. We can support SEO, analytics setup, campaign landing pages, conversion tracking, content direction, and performance-focused improvements.",
  },
  {
    question: "How can we contact aibizmode to discuss a project?",
    answer:
      "You can use the contact page to share your goals, timeline, and project details. The team will review it and get back with the next practical step.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about aibizmode technology services, delivery process, support, automation, and product development.",
  openGraph: {
    title: "FAQ | aibizmode",
    description:
      "Answers to common questions about aibizmode technology services, delivery process, support, automation, and product development.",
    url: "/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main>
          <section className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
            {/* Grid background */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(210,247,255,0.48),transparent_32%)]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50/60 px-4 py-1.5 text-xs font-semibold text-cyan-800 backdrop-blur-sm">
                <HelpCircle size={13} aria-hidden="true" />
                Frequently Asked Questions
              </span>
              <h1
                className="mt-6 font-display text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl"
                style={{ fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.02 }}
              >
                Questions about building with{" "}
                <span className="gradient-text font-normal">aibizmode</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Clear answers about our process, services, support, and how we
                help businesses turn ideas into dependable digital systems.
              </p>
            </div>

            <FAQAccordion faqs={faqs} />

            <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-100 bg-[#ECFEFF]/70 p-6 text-center shadow-[0_18px_55px_rgba(59,130,246,0.10)] backdrop-blur-md md:flex-row md:text-left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Still deciding?
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-[#0F172A]">
                  Tell us what you want to build.
                </h2>
              </div>
              <Link href="/contact" className="btn-primary rounded-full px-6 py-3">
                Start a Project
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </main>
      </StickyFooterLayout>
    </>
  );
}
