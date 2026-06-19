"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThreeDMarqueeProps {
  images?: string[];
  className?: string;
}

const defaultImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=640&q=80",
];

export default function ThreeDMarquee({
  images = defaultImages,
  className,
}: ThreeDMarqueeProps) {
  const chunkSize = Math.ceil(images.length / 3);
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "block h-[18rem] w-full overflow-hidden rounded-2xl bg-transparent max-xl:h-[16rem] max-sm:h-[13rem]",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="aspect-square size-[31rem] shrink-0 scale-[1.08] max-xl:size-[28rem] max-xl:scale-100 max-sm:size-[23rem] max-sm:scale-100">
          <div
            style={{ transform: "rotateX(45deg) rotateY(0deg) rotateZ(45deg)" }}
            className="relative right-[-42%] top-[-8%] grid size-full origin-top-left grid-cols-3 gap-3 [transform-style:preserve-3d] max-xl:right-[-38%] max-xl:top-[-12%] max-sm:right-[-38%] max-sm:top-[-5%] max-sm:gap-2"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? 52 : -52 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                key={`${colIndex}-marquee`}
                className="flex flex-col items-start gap-3 max-sm:gap-2"
              >
                {subarray.map((src, imageIndex) => (
                  <div className="relative" key={`${imageIndex}-${src}`}>
                    <img
                      className="aspect-[4/3] h-full w-full select-none rounded-xl bg-neutral-100 object-cover shadow-[0_16px_36px_rgba(15,23,42,0.16)]"
                      src={src}
                      draggable={false}
                      alt=""
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
