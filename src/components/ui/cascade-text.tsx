"use client";

import React, { useMemo, useState, useEffect, type ElementType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  as?: ElementType;
  href?: string;
  target?: string;
  className?: string;
  style?: CSSProperties;
  fontSize?: string;
  staggerDelay?: number;
  duration?: number;
  easing?: string;
  color?: string;
  hoverColor?: string;
  direction?: "up" | "down";
  onClick?: (e: React.MouseEvent) => void;
  autoAnimate?: boolean;
  interval?: number;
}

const TextReveal = React.memo(function TextReveal({
  text,
  as: Component = "a",
  href,
  target,
  className = "",
  style,
  fontSize = "3rem",
  staggerDelay = 25,
  duration = 250,
  easing = "ease-in-out",
  color = "inherit",
  hoverColor = "#b2c73a",
  direction = "up",
  onClick,
  autoAnimate = true,
  interval = 3000,
}: TextRevealProps) {
  const [hovered, setHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!autoAnimate) return;
    const timer = setInterval(() => {
      setIsActive((prev) => !prev);
    }, interval);
    return () => clearInterval(timer);
  }, [autoAnimate, interval]);

  const isAnimated = autoAnimate ? isActive : hovered;

  const chars = useMemo(() => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  }, [text]);

  const sign = direction === "up" ? 1 : -1;

  const rootProps: Record<string, unknown> = {
    className: cn(
      "inline-block relative no-underline font-extrabold uppercase tracking-tight overflow-hidden cursor-pointer select-none",
      className
    ),
    style: {
      fontSize,
      color: isAnimated ? hoverColor : color,
      transition: "color 0.35s ease",
      padding: "0.15em 0.4em",
      lineHeight: 1,
      ...style,
    },
    onMouseEnter: () => { if (!autoAnimate) setHovered(true); },
    onMouseLeave: () => { if (!autoAnimate) setHovered(false); },
    onClick,
    "aria-label": text,
  };

  if (Component === "a") {
    rootProps.href = href ?? "#";
    if (target) rootProps.target = target;
    if (target === "_blank") rootProps.rel = "noopener noreferrer";
  }

  return (
    <Component {...rootProps}>
      <span
        className="inline-flex overflow-hidden relative"
        style={{ height: "1em" }}
        aria-hidden="true"
      >
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block relative will-change-transform"
            style={{
              textShadow: `0 ${sign}em currentColor`,
              transition: `transform ${duration}ms ${easing}`,
              transitionDelay: `${i * staggerDelay}ms`,
              transform: isAnimated
                ? `translateY(${-sign}em)`
                : "translateY(0)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Component>
  );
});

TextReveal.displayName = "TextReveal";
export { TextReveal };
