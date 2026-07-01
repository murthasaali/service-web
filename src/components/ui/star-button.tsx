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
  glow?: boolean;
  sparkClassName?: string;
  sparkGradient?: string;
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
  glow = false,
  sparkClassName,
  sparkGradient = "conic-gradient(from 0deg, transparent 0deg, transparent 90deg, rgba(14, 165, 233, 0.3) 140deg, var(--light-color) 180deg, #ffffff 200deg, #67e8f9 220deg, rgba(6, 182, 212, 0.3) 260deg, transparent 300deg)",
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
      <span
        className={cn(
          "animate-spark-border absolute -inset-3 rounded-[inherit]",
          glow && "blur-[1px]",
          sparkClassName
        )}
        style={{
          background: sparkGradient,
          ...(glow ? { filter: "drop-shadow(0 0 6px var(--light-color))" } : {})
        }}
        aria-hidden="true"
      />

      <span className={cn("relative z-10 inline-flex h-full w-full items-center justify-center gap-2 rounded-[calc(1.5rem-var(--border-width))] bg-[var(--button-bg)] px-6 py-2.5", textColor)}>
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.22)_45%,transparent_68%)] opacity-100 animate-shine-sweep" />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </span>
    </Component>
  );
}

