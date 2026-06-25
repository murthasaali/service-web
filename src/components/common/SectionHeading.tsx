"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", centered ? "items-center text-center" : "items-start text-left", className)}>
      <span
        className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground"
      >
        {eyebrow}
      </span>
      <h2
        className="mt-6 font-display font-bold text-balance"
        style={{
          fontSize: "clamp(26px, 3.5vw, 38px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "#0E7490",
        }}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-slate-500 leading-[1.8] text-base",
            centered ? "max-w-md mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
