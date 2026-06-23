type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="mx-auto mt-14 grid max-w-5xl gap-4">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-cyan-100/80 bg-white/70 p-5 shadow-[0_18px_55px_rgba(59,130,246,0.08)] backdrop-blur-md transition hover:border-cyan-200 hover:shadow-[0_22px_70px_rgba(8,145,178,0.12)] open:border-cyan-300/80 open:bg-white"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 [&::-webkit-details-marker]:hidden">
            <span className="flex items-start gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-xs font-semibold text-cyan-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold leading-7 text-[#0F172A] md:text-lg">
                {faq.question}
              </span>
            </span>
            <span className="relative h-6 w-6 shrink-0 rounded-full bg-cyan-50 text-cyan-700 transition duration-300 group-open:rotate-45">
              <span className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
              <span className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
            </span>
          </summary>

          <p className="ml-12 mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
