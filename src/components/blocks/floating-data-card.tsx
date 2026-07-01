import React from "react";
import { type LucideIcon } from "lucide-react";

export interface DataCardRow {
  icon: LucideIcon;
  label: string;
  value: string;
  meta?: string;
  tone?: "default" | "positive" | "negative";
}

export interface FloatingDataCardProps {
  rows: DataCardRow[];
  className?: string;
  dark?: boolean;
}

export default function FloatingDataCard({ rows, className, dark = false }: FloatingDataCardProps) {
  const getToneColor = (tone?: "default" | "positive" | "negative") => {
    switch (tone) {
      case "positive":
        return dark ? "text-[#22d3ee] font-semibold" : "text-[#0891B2] font-semibold";
      case "negative":
        return dark ? "text-rose-400 font-semibold" : "text-rose-600 font-semibold";
      default:
        return dark ? "text-slate-200 font-medium" : "text-slate-900 font-medium";
    }
  };

  return (
    <div className={`rounded-2xl p-5 w-full max-w-[320px] pointer-events-auto transition-colors duration-300 ${
      dark 
        ? "bg-slate-900/90 border border-slate-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]" 
        : "bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    } ${className || ""}`}>
      <div className="space-y-3">
        {rows.map((row, index) => {
          const Icon = row.icon;
          return (
            <div 
              key={index} 
              className={`flex items-center gap-3 ${
                index > 0 
                  ? dark 
                    ? "border-t border-dashed border-slate-800/60 pt-3" 
                    : "border-t border-dashed border-slate-200 pt-3" 
                  : ""
              }`}
            >
              {/* Icon Square */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                dark 
                  ? "bg-[#0891B2]/20 border border-[#0891B2]/30 text-[#22d3ee]" 
                  : "bg-[#0891B2] text-white"
              }`}>
                <Icon size={16} aria-hidden="true" />
              </div>

              {/* Label & Content */}
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-medium truncate ${dark ? "text-slate-400" : "text-slate-500"}`}>
                  {row.label}
                </p>
              </div>

              {/* Right-aligned Value & Meta */}
              <div className="text-right shrink-0">
                <p className={`text-sm ${getToneColor(row.tone)}`}>
                  {row.value}
                </p>
                {row.meta && (
                  <p className={`text-[10px] mt-0.5 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                    {row.meta}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
