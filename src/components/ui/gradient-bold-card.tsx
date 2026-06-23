"use client";

import React from "react";
import { type LucideIcon, ExternalLink } from "lucide-react";

export interface GradientBlobCardProps {
  icon?: LucideIcon;
  title?: string;
  desc?: string;
  className?: string;
  standalone?: boolean;
}

const GradientBlobCard: React.FC<GradientBlobCardProps> = ({
  icon: Icon,
  title,
  desc,
  className = "",
  standalone = false,
}) => {
  // If standalone is explicitly requested, or if no content props are passed,
  // we render the exact default demo card format from the prompt.
  const isDemo = standalone || (!Icon && !title && !desc);

  if (isDemo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-[200px] h-[250px] rounded-[14px] flex flex-col items-center justify-center
                        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#111,-20px_-20px_60px_#222]
                        overflow-hidden">
          {/* Glassy Background */}
          <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] bg-white/95 dark:bg-black/70 backdrop-blur-[24px]
                          rounded-[10px] outline outline-2 outline-white dark:outline-gray-700 z-10"></div>

          {/* Animated Gradient Blob (same bold colors for light & dark mode) */}
          <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full opacity-100
                          filter blur-[12px] z-0 animate-blob 
                          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

          {/* Inline keyframes animation */}
          <style>
            {`
              @keyframes blob {
                0% {
                  transform: translate(-100%, -100%);
                }
                25% {
                  transform: translate(0%, -100%);
                }
                50% {
                  transform: translate(0%, 0%);
                }
                75% {
                  transform: translate(-100%, 0%);
                }
                100% {
                  transform: translate(-100%, -100%);
                }
              }

              .animate-blob {
                animation: blob 5s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  // Otherwise, we render a highly polished, responsive grid-friendly card
  // incorporating the animated blob as a premium glassmorphic background layer.
  return (
    <div className={`relative w-full h-full min-h-[260px] rounded-[14px] flex flex-col overflow-hidden 
                    shadow-[10px_10px_30px_rgba(15,23,42,0.04),-10px_-10px_30px_#ffffff] 
                    dark:shadow-[10px_10px_30px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.02)]
                    border border-border/20 ${className}`}>
      
      {/* Glassy Content Container */}
      <div className="absolute inset-[4px] bg-white/95 dark:bg-slate-950/80 backdrop-blur-[24px]
                      rounded-[10px] outline outline-2 outline-white dark:outline-slate-900 z-10 p-6 md:p-8 flex flex-col items-start justify-start">
        {Icon && (
          <div className="icon-box mb-5 relative z-20">
            <Icon size={20} className="text-royal" aria-hidden="true" />
          </div>
        )}
        {title && (
          <h3 className="font-display font-semibold text-ink text-lg leading-tight relative z-20">
            {title}
          </h3>
        )}
        {desc && (
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed relative z-20">
            {desc}
          </p>
        )}
      </div>

      {/* Animated Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 w-[160px] h-[160px] rounded-full opacity-60 dark:opacity-40
                      filter blur-[16px] z-0 animate-blob 
                      bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

      <style>
        {`
          @keyframes blob {
            0% {
              transform: translate(-100%, -100%);
            }
            25% {
              transform: translate(0%, -100%);
            }
            50% {
              transform: translate(0%, 0%);
            }
            75% {
              transform: translate(-100%, 0%);
            }
            100% {
              transform: translate(-100%, -100%);
            }
          }

          .animate-blob {
            animation: blob 8s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default GradientBlobCard;

// ─── Social Media Card ─────────────────────────────────────────────────────────

export interface SocialGradientBlobCardProps {
  socialIcon: React.ReactNode;
  name: string;
  handle: string;
  desc: string;
  href: string;
  gradient: string;
  category: "official" | "registered";
  className?: string;
}

export const SocialGradientBlobCard: React.FC<SocialGradientBlobCardProps> = ({
  socialIcon,
  name,
  handle,
  desc,
  href,
  gradient,
  category,
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative w-full h-full min-h-[220px] rounded-[14px] flex flex-col overflow-hidden
                  shadow-[10px_10px_30px_rgba(15,23,42,0.06),-10px_-10px_30px_#ffffff]
                  border border-border/20 hover:border-cyan-200 hover:shadow-[0_16px_36px_rgba(8,145,178,0.12)]
                  transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* Animated gradient blob — platform brand colours */}
      <div
        className={`absolute top-1/2 left-1/2 w-[140px] h-[140px] rounded-full opacity-50
                    filter blur-[20px] z-0 animate-social-blob
                    bg-gradient-to-r ${gradient}`}
      />

      <style>{`
        @keyframes social-blob {
          0%   { transform: translate(-110%, -110%); }
          25%  { transform: translate(10%,  -110%); }
          50%  { transform: translate(10%,  10%);   }
          75%  { transform: translate(-110%, 10%);  }
          100% { transform: translate(-110%, -110%);}
        }
        .animate-social-blob { animation: social-blob 8s linear infinite; }
      `}</style>

      {/* Glassy content layer */}
      <div
        className="absolute inset-[4px] bg-white/95 backdrop-blur-[24px]
                   rounded-[10px] outline outline-2 outline-white z-10
                   p-4 flex flex-col gap-3"
      >
        {/* Top row: icon + badge */}
        <div className="flex items-start justify-between">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg
                        bg-gradient-to-br ${gradient} shadow-md`}
          >
            {socialIcon}
          </div>
          <span
            className={`text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full
                        ${category === "official"
                          ? "bg-cyan-50 text-cyan-700 border border-cyan-200"
                          : "bg-slate-100 text-slate-500 border border-slate-200"}`}
          >
            {category === "official" ? "Official" : "Registered"}
          </span>
        </div>

        {/* Platform name + handle */}
        <div>
          <h3 className="font-display font-semibold text-ink" style={{ fontSize: 18, lineHeight: 1.2 }}>
            {name}
          </h3>
          <p className="mt-1 text-xs font-mono text-muted-foreground">{handle}</p>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-muted-foreground flex-1">{desc}</p>

        {/* CTA */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700">
          Open Profile
          <ExternalLink size={12} className="opacity-60" />
        </span>
      </div>
    </a>
  );
};
