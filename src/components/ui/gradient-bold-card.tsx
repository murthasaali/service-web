"use client";

import React from "react";
import { type LucideIcon } from "lucide-react";

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
