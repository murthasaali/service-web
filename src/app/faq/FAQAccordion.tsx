"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-14 grid max-w-5xl gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`rounded-2xl border bg-white/70 p-5 shadow-[0_18px_55px_rgba(59,130,246,0.08)] backdrop-blur-md transition hover:border-cyan-200 hover:shadow-[0_22px_70px_rgba(8,145,178,0.12)] ${
              isOpen ? "border-cyan-300/80 bg-white" : "border-cyan-100/80"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40"
            >
              <span className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-xs font-semibold text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold leading-7 text-[#0F172A] md:text-lg">
                  {faq.question}
                </span>
              </span>
              <span
                className={`relative h-6 w-6 shrink-0 rounded-full bg-cyan-50 text-cyan-700 transition duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <span className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                <span className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.26,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="overflow-hidden"
                >
                  <p className="ml-12 mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
