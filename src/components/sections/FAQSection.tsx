"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StarButton } from "@/components/ui/star-button";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does aibizmod provide?",
      answer: "We specialize in end-to-end technology services, including custom web & software development, mobile app engineering, digital marketing campaigns, cloud hosting & infrastructure, workflow automation, and strategic IT consulting.",
    },
    {
      question: "How do you approach pricing and project timelines?",
      answer: "We operate on a transparent, milestone-driven model. Timelines vary depending on project scope — typically ranging from 4 to 12 weeks. We provide clear, fixed-price or time-and-materials quotes with structured deliverables.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! We provide flexible service level agreements (SLAs) and ongoing maintenance retainers to ensure your applications remain secure, updated, and performance-optimized post-launch.",
    },
    {
      question: "Can you integrate AI and automation into our workflow?",
      answer: "Absolutely. We design and deploy custom AI models, conversational agents, and automated data pipelines that plug directly into your existing systems to eliminate manual overhead.",
    },
    {
      question: "How do we get started with a project?",
      answer: "Simply head over to our contact page or email hello@aibizmod.com. We schedule an initial discovery call within 24 hours to discuss your goals, outline technical recommendations, and prepare a tailored proposal.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-canvas border-t border-[#E0F2FE]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col md:flex-row items-start justify-center gap-16">
          {/* Left Column: Text */}
          <div className="w-full md:w-[38%] shrink-0 space-y-5 md:sticky md:top-32">
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.16em]">FAQ&apos;s</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-ink leading-tight">
              Looking for answers?
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Ship beautiful frontends without the overhead — customizable, scalable and developer-friendly UI components.
            </p>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="flex-1 space-y-4">

            <div className="mt-8 space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden",
                    openIndex === index
                      ? "border-[#BAE6FD] bg-[#ECFEFF]/80 shadow-[0_2px_16px_rgba(8,145,178,0.10)]"
                      : "border-[#E0F2FE] bg-white hover:border-[#BAE6FD] hover:bg-[#F0FDFF]"
                  )}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {/* Question row */}
                  <div className="flex items-center justify-between px-5 py-4 gap-4">
                    <h3 className={cn(
                      "text-[15.5px] font-medium leading-snug transition-colors duration-200 flex-1",
                      openIndex === index ? "text-[#0891B2] font-semibold" : "text-ink"
                    )}>
                      {faq.question}
                    </h3>
                    {/* Chevron */}
                    <svg
                      width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "transition-all duration-400 ease-in-out shrink-0",
                        openIndex === index ? "rotate-180 text-[#0891B2]" : "text-[#94A3B8]"
                      )}
                    >
                      <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Answer */}
                  <div className={cn(
                    "transition-all duration-500 ease-in-out overflow-hidden",
                    openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-5 pb-5">
                      <p className="text-[14px] leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-[14px] pt-2">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline focus-visible:outline-none"
              >
                Contact our support team
              </Link>
            </p>

            {/* View All Button */}
            <Link href="/faq" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-3xl inline-flex mt-2">
              <StarButton
                lightColor="#38bdf8"
                backgroundColor="#0f172a"
                className="font-sans font-semibold text-[11px] uppercase tracking-[0.2em]"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4 group-hover/star-button:translate-x-1 transition-transform duration-300" />
              </StarButton>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
