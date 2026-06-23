"use client";

import { FC, ReactNode } from "react";

interface HighlightCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
}

const HighlightCard: FC<HighlightCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group cursor-pointer will-change-transform transition-[transform] duration-500 hover:scale-105 hover:-rotate-1">
      <div className="text-slate-800 rounded-2xl border border-slate-100 hover:border-cyan-200/60
                      bg-white shadow-[0_8px_32px_rgba(8,145,178,0.08)]
                      hover:shadow-[0_20px_48px_rgba(8,145,178,0.15)]
                      relative overflow-hidden w-full transition-[border-color,box-shadow] duration-500">

        {/* Background effects — hover-only, no continuous animation */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 to-blue-50/40 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-200/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-[transform] duration-1000" />
        </div>

        {/* Content */}
        <div className="p-5 relative z-10 flex flex-col items-center text-center">

          {/* Icon */}
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full border border-cyan-200/40 animate-pulse" />
            <div className="p-4 rounded-full border border-cyan-100
                            bg-gradient-to-br from-white to-cyan-50
                            shadow-[0_8px_24px_rgba(8,145,178,0.12)]
                            transition-[transform] duration-500
                            group-hover:rotate-12 group-hover:scale-110">
              <div className="transition-[transform] duration-700 group-hover:rotate-180">
                {icon}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800
                         bg-clip-text text-transparent transition-[transform] duration-300 group-hover:scale-105">
            {title}
          </h3>

          {/* Description */}
          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p
                key={idx}
                className={`text-xs leading-relaxed transition-colors duration-300
                  ${idx === 0
                    ? "font-mono text-[#0891B2] group-hover:text-[#0E7490]"
                    : "text-slate-500 group-hover:text-slate-700"
                  }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent
                          rounded-full transition-[width] duration-500 group-hover:w-1/2" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-100/50 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default HighlightCard;
