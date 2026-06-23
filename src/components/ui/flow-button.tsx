"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlowButtonProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  as?: React.ElementType;
}

export function FlowButton({
  text = "Explore",
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
        "relative flex items-center h-8 rounded-full border-[1.5px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
        isHovered
          ? "w-28 bg-[#0A1628] border-transparent text-white"
          : "w-12 bg-transparent border-[#0A1628]/40 text-[#0A1628]",
        className
      )}
      {...props}
    >
      {/* Text */}
      <span
        className={cn(
          "absolute top-1/2 -translate-y-1/2 font-semibold text-[10px] tracking-wider uppercase whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-left",
          isHovered 
            ? "left-4 opacity-100 translate-x-0" 
            : "left-4 opacity-0 -translate-x-2 pointer-events-none"
        )}
      >
        {text}
      </span>

      {/* Arrow Icon */}
      <ArrowRight
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] stroke-current fill-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isHovered
            ? "left-[84px] translate-x-0"
            : "left-1/2 -translate-x-1/2"
        )}
      />
    </Component>
  );
}
