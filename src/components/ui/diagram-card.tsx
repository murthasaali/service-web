"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const TextRevealContext = createContext<{
  isMouseOver: boolean;
  widthPercentage: number;
  rotateDeg: number;
} | null>(null);

export const TextRevealCard = ({
  children,
  className,
  showSpotlight = true,
}: {
  children?: React.ReactNode;
  className?: string;
  showSpotlight?: boolean;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const { clientX, clientY } = event;
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;
      setWidthPercentage((relativeX / rect.width) * 100);

      cardRef.current.style.setProperty("--mouse-x", `${relativeX}px`);
      cardRef.current.style.setProperty("--mouse-y", `${relativeY}px`);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <TextRevealContext.Provider value={{ isMouseOver, widthPercentage, rotateDeg }}>
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        ref={cardRef}
        className={cn(
          "relative overflow-hidden w-full rounded-2xl p-[1px] bg-slate-100/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.35),_0_0_8px_rgba(34,211,238,0.15)] group-hover:bg-cyan-300/40 z-10",
          className
        )}
      >
        {/* Rotating Border Beam on hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_50%,#0891B2_75%,#22d3ee_92%,#34d399_97%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              animation: "spin 4s linear infinite",
            }}
          />
        </div>

        {/* Dynamic mouse spotlight backdrop on hover (Upgrade A) */}
        {showSpotlight && (
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
            style={{
              background: "radial-gradient(circle 140px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(34, 211, 238, 0.08), transparent)",
            }}
          />
        )}

        {/* Inner Card Body */}
        <div className="bg-white rounded-[15px] p-8 h-full w-full relative z-10 flex flex-col justify-between">
          {children}
        </div>
      </div>
    </TextRevealContext.Provider>
  );
};

export const TextRevealCardTitle = ({
  text,
  revealText,
  className,
}: {
  text: string;
  revealText: string;
  className?: string;
}) => {
  const context = useContext(TextRevealContext);
  const localCanvasRef = useRef<HTMLCanvasElement>(null);
  const widthPercentageRef = useRef(0);
  const isMouseOverRef = useRef(false);

  useEffect(() => {
    if (context) {
      widthPercentageRef.current = context.widthPercentage;
      isMouseOverRef.current = context.isMouseOver;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.widthPercentage, context?.isMouseOver]);

  useEffect(() => {
    if (!context) return;
    const canvas = localCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const sparkles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      life: number;
      maxLife: number;
      isCyan: boolean;
    }> = [];

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    let lastX = -1;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const targetXPercent = widthPercentageRef.current;
      const isHovered = isMouseOverRef.current;
      const currentX = (targetXPercent / 100) * width;

      // Spawn sparkles when the swipe line is active and moving (kept minimal and clean)
      if (isHovered && targetXPercent > 0 && targetXPercent < 100) {
        const isMoving = Math.abs(currentX - lastX) > 0.5;
        const spawnProbability = isMoving ? 0.45 : 0.05;

        if (Math.random() < spawnProbability) {
          const spawnCount = Math.random() > 0.6 ? 2 : 1; // Spawn only 1-2 particles max
          for (let s = 0; s < spawnCount; s++) {
            sparkles.push({
              x: currentX,
              y: Math.random() * height,
              vx: (Math.random() - 0.7) * 0.5, // Slow, gentle drift backward
              vy: (Math.random() - 0.5) * 0.4 + 0.1, // Slow, gentle drift downward
              radius: Math.random() * 1.0 + 0.5, // Very tiny sparks: 0.5px to 1.5px
              alpha: 1.0,
              life: 0,
              maxLife: Math.random() * 15 + 10, // Short lifespan: 10 to 25 frames
              isCyan: Math.random() > 0.4,
            });
          }
        }
      }

      lastX = currentX;

      // Draw and update sparkles
      sparkles.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        s.alpha = 1 - s.life / s.maxLife;

        // Transition from text-ink (15, 23, 42) to target theme colors to look like dissolving letters
        const progress = s.life / s.maxLife;
        let pColor = "";
        if (progress < 0.25) {
          const ratio = progress / 0.25;
          const targetR = s.isCyan ? 34 : 8;
          const targetG = s.isCyan ? 211 : 145;
          const targetB = s.isCyan ? 238 : 178;
          const r = Math.round(15 + (targetR - 15) * ratio);
          const g = Math.round(23 + (targetG - 23) * ratio);
          const b = Math.round(42 + (targetB - 42) * ratio);
          pColor = `rgb(${r}, ${g}, ${b})`;
        } else {
          pColor = s.isCyan ? "#22d3ee" : "#0891B2";
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = pColor;
        ctx.globalAlpha = s.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1.0; // Reset alpha

      // Filter dead sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        if (sparkles[i].life >= sparkles[i].maxLife) {
          sparkles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [context]);

  if (!context) {
    return <h2 className={twMerge("font-display font-bold text-ink text-[18px] mb-2", className)}>{text}</h2>;
  }

  const { isMouseOver, widthPercentage, rotateDeg } = context;

  return (
    <div className={twMerge("h-7 relative flex items-center overflow-hidden mb-2 w-full", className)}>
      {/* Revealed text (hover state) */}
      <motion.div
        style={{ width: "100%" }}
        animate={
          isMouseOver
            ? {
                opacity: widthPercentage > 0 ? 1 : 0,
                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
              }
            : { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
        }
        transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
        className="absolute bg-white z-20 will-change-transform flex items-center h-full w-full pointer-events-none"
      >
        <h2 className="font-display font-bold text-[#0891B2] text-[18px] whitespace-nowrap leading-none">
          {revealText}
        </h2>
      </motion.div>

      {/* Swipe line */}
      <motion.div
        animate={{
          left: `${widthPercentage}%`,
          rotate: `${rotateDeg}deg`,
          opacity: widthPercentage > 0 ? 1 : 0,
        }}
        transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
        className="h-6 w-[2px] bg-gradient-to-b from-transparent via-[#0891B2]/60 to-transparent absolute z-50 will-change-transform pointer-events-none"
      />

      {/* Mini canvas for local particle sparkles trail */}
      <canvas
        ref={localCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
      />

      {/* Initial text (default state) */}
      <div className="overflow-hidden w-full h-full flex items-center">
        <h2 className="font-display font-bold text-ink text-[18px] whitespace-nowrap leading-none">
          {text}
        </h2>
      </div>
    </div>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-muted-foreground text-sm", className)}>{children}</p>
  );
};
