"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlowButtonProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  as?: React.ElementType;
}

export function FlowButton({
  text = "Modern Button",
  as: Component = "button",
  className,
  ...props
}: FlowButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Component
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex items-center justify-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-transparent px-8 py-2.5 text-sm font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95]",
        isHovered
          ? "border-transparent text-white rounded-[12px]"
          : "border-[#0A1628]/40 text-[#0A1628]",
        className
      )}
      {...props}
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={cn(
          "absolute w-4 h-4 fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          isHovered
            ? "left-4 stroke-white"
            : "left-[-25%] stroke-[#0A1628]"
        )}
      />

      {/* Text */}
      <span className={cn(
        "relative z-[1] transition-all duration-[800ms] ease-out",
        isHovered ? "translate-x-3" : "-translate-x-3"
      )}>
        {text}
      </span>

      {/* Circle background expansion */}
      <span 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A1628] rounded-[50%] transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
          isHovered
            ? "w-[220px] h-[220px] opacity-100"
            : "w-4 h-4 opacity-0"
        )}
      />

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={cn(
          "absolute w-4 h-4 fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          isHovered
            ? "right-[-25%] stroke-white"
            : "right-4 stroke-[#0A1628]"
        )}
      />
    </Component>
  );
}

