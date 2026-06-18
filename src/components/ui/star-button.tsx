"use client";

import React, { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StarButtonProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: "button" | "span";
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  textColor?: string;
}

export function StarButton({
  children,
  as = "button",
  duration = 3,
  lightColor = "#FAFAFA",
  backgroundColor = "#0f1111",
  borderWidth = 1.5,
  textColor = "text-white",
  className,
  ...props
}: StarButtonProps) {
  const Component = as as ElementType;

  return (
    <Component
      style={
        {
          "--duration": duration,
          "--light-color": lightColor,
          "--border-width": `${borderWidth}px`,
          "--button-bg": backgroundColor,
          isolation: "isolate",
        } as CSSProperties
      }
      className={cn(
        "group/star-button relative z-[3] inline-flex h-10 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-3xl p-[var(--border-width)] text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <div
        className="animate-spark-border absolute -inset-3 rounded-[inherit] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,rgba(14,165,233,0.3)_140deg,var(--light-color)_180deg,#ffffff_200deg,#67e8f9_220deg,rgba(6,182,212,0.3)_260deg,transparent_300deg)]"
        aria-hidden="true"
      />

      <span className={cn("relative z-10 inline-flex h-full w-full items-center justify-center gap-2 rounded-[calc(1.5rem-var(--border-width))] bg-[var(--button-bg)] px-6 py-2.5", textColor)}>
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.22)_45%,transparent_68%)] opacity-0 transition-opacity duration-300 group-hover/star-button:animate-shine-sweep group-hover/star-button:opacity-100" />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </span>
    </Component>
  );
}

