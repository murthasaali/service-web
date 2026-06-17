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
}

export function StarButton({
  children,
  as = "button",
  duration = 3,
  lightColor = "#FAFAFA",
  backgroundColor = "#0f1111",
  borderWidth =1,
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
        className="animate-spark-border absolute -inset-3 rounded-[inherit] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_72deg,#e0f2fe_82deg,var(--light-color)_88deg,#67e8f9_92deg,transparent_102deg,transparent_206deg,#ffffff_216deg,#bae6fd_220deg,transparent_230deg,transparent_360deg)]"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute left-[18%] top-[22%] h-1 w-1 animate-sparkle rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.85)]" />
      <span className="pointer-events-none absolute right-[20%] top-[28%] h-1.5 w-1.5 animate-sparkle rounded-full bg-sky-200 shadow-[0_0_5px_rgba(125,211,252,0.85)] [animation-delay:0.7s]" />
      <span className="pointer-events-none absolute bottom-[24%] left-[58%] h-1 w-1 animate-sparkle rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.85)] [animation-delay:1.3s]" />
      <span className="relative z-10 inline-flex h-full w-full items-center gap-2 rounded-[calc(1.5rem-var(--border-width))] bg-[var(--button-bg)] px-5 py-2.5 text-white">
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.22)_45%,transparent_68%)] opacity-0 transition-opacity duration-300 group-hover/star-button:animate-shine-sweep group-hover/star-button:opacity-100" />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </span>
    </Component>
  );
}
