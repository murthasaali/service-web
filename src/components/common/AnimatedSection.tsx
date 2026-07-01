"use client";

import { motion, useInView, useReducedMotion, type Easing } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  ease?: Easing | Easing[];
  style?: React.CSSProperties;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
  ease = [0.21, 0.47, 0.32, 0.98],
  style,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const initialVariant = prefersReduced
    ? { opacity: 0 }
    : {
        up: { x: 0, y: distance, opacity: 0, scale: 0.97, filter: "blur(6px)", rotateX: 8, rotateY: 0 },
        down: { x: 0, y: -distance, opacity: 0, scale: 0.97, filter: "blur(6px)", rotateX: -8, rotateY: 0 },
        left: { x: distance, y: 0, opacity: 0, scale: 0.82, filter: "blur(8px)", rotateX: 0, rotateY: 40 },
        right: { x: -distance, y: 0, opacity: 0, scale: 0.82, filter: "blur(8px)", rotateX: 0, rotateY: -40 },
      }[direction];

  const animateVariant = prefersReduced
    ? { opacity: 1 }
    : { x: 0, y: 0, opacity: 1, scale: 1, filter: "blur(0px)", rotateX: 0, rotateY: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initialVariant}
      animate={isInView ? animateVariant : initialVariant}
      transition={{ duration, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
