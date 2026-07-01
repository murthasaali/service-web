"use client";

import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, MotionValue, useVelocity } from "framer-motion";

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export const useScrollProgress = () => {
  const context = useContext(ScrollProgressContext);
  if (!context) throw new Error("useScrollProgress must be used within ContainerScroll");
  return context;
};

// Accessibility hook to check user preferences for motion reduction
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);
  
  return prefersReducedMotion;
}

export const ContainerScroll = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });
  
  return (
    <ScrollProgressContext.Provider value={scrollYProgress}>
      <div ref={targetRef} className={className}>
        {children}
      </div>
    </ScrollProgressContext.Provider>
  );
};

export const ContainerSticky = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div className={`sticky left-0 top-0 min-h-svh w-full flex flex-col justify-center overflow-hidden ${className || ""}`}>
      {children}
    </div>
  );
};

export const ContainerAnimated = ({
  children,
  className,
  inputRange = [0.2, 0.8],
  outputRange = [80, 0],
}: {
  children: React.ReactNode;
  className?: string;
  inputRange?: number[];
  outputRange?: number[];
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollYProgress = useScrollProgress();
  
  const rawY = useTransform(scrollYProgress, inputRange, outputRange);
  const springY = useSpring(rawY, { stiffness: 100, damping: 16, mass: 0.75 });
  
  const rawOpacity = useTransform(scrollYProgress, [0.0, 0.25], [0, 1]);
  const rawBlur = useTransform(scrollYProgress, [0.0, 0.25], [10, 0]);
  const blurTemplate = useMotionTemplate`blur(${rawBlur}px)`;
  
  const style = prefersReducedMotion 
    ? {} 
    : {
        y: springY,
        opacity: rawOpacity,
        filter: blurTemplate,
      };
      
  return (
    <motion.div className={className} style={style}>
      {children}
    </motion.div>
  );
};

export const HeroVideo = ({
  src,
  className,
  poster,
  startTime = 0,
  scrollControlled = false,
}: {
  src: string;
  className?: string;
  poster?: string;
  startTime?: number;
  scrollControlled?: boolean;
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollYProgress = useScrollProgress();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth scroll progress using a spring for ultra-smooth video seeking/velocity
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.7,
  });
  const smoothVelocity = useVelocity(smoothProgress);

  // Handle start time, manual loop, and timeupdate clamp
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.currentTime < startTime) {
        video.currentTime = startTime;
      }
    };

    const handleEnded = () => {
      video.currentTime = startTime;
      video.play().catch((err) => console.log("Video replay error:", err));
    };

    const handleTimeUpdate = () => {
      // Prevent playing the first seconds during standard playback
      if (video.currentTime < startTime && !video.paused) {
        video.currentTime = startTime;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [startTime]);

  // Adjust playbackRate and currentTime based on scroll position and velocity
  useEffect(() => {
    if (!scrollControlled) return;
    const video = videoRef.current;
    if (!video) return;

    const startPlay = () => {
      if (video.currentTime < startTime) {
        video.currentTime = startTime;
      }
      video.play().catch((err) => console.log("Video playback play call:", err));
    };

    if (video.readyState >= 1) {
      startPlay();
    } else {
      video.addEventListener("loadedmetadata", startPlay);
    }

    const handleProgressChange = () => {
      const textVelocity = smoothVelocity.get();

      if (textVelocity > 0.01) {
        // Scrolling down (forwards) -> Fast Forward
        if (video.paused) {
          video.play().catch((err) => console.log("Video play resume:", err));
        }

        const multiplier = 6.0;
        const newRate = 1.0 + textVelocity * multiplier;
        video.playbackRate = Math.max(1.0, Math.min(4.0, newRate));
      } else {
        // Stationary or Scrolling up (backwards) -> Play normally at 1.0x
        if (video.paused) {
          video.play().catch((err) => console.log("Video play resume:", err));
        }
        video.playbackRate = 1.0;
      }
    };

    const unsubscribe = smoothProgress.on("change", handleProgressChange);

    return () => {
      unsubscribe();
      video.removeEventListener("loadedmetadata", startPlay);
    };
  }, [smoothProgress, smoothVelocity, scrollControlled, startTime]);

  const rawScale = useTransform(scrollYProgress, [0, 0.45], [0.7, 1.0]);
  const springScale = useSpring(rawScale, { stiffness: 100, damping: 16, mass: 0.75 });

  const style = prefersReducedMotion ? {} : { scale: springScale };

  return (
    <motion.video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop={false}
      playsInline
      aria-hidden="true"
      poster={poster}
      className={className}
      style={style}
    />
  );
};

export const HeroButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`rounded-full border border-slate-200 bg-[#0f172a] text-white font-medium tracking-wide transition-shadow hover:shadow-[0_4px_20px_rgba(15,23,42,0.15)] ${className || ""}`}
    >
      {children}
    </motion.button>
  );
};

export const ContainerInset = ({
  children,
  className,
  insetYRange = [45, 0],
  insetXRange = [45, 0],
  roundednessRange = [1000, 16],
}: {
  children: React.ReactNode;
  className?: string;
  insetYRange?: number[];
  insetXRange?: number[];
  roundednessRange?: number[];
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollYProgress = useScrollProgress();
  
  const yVal = useTransform(scrollYProgress, [0, 0.45], insetYRange);
  const xVal = useTransform(scrollYProgress, [0, 0.45], insetXRange);
  const rVal = useTransform(scrollYProgress, [0, 0.45], roundednessRange);
  
  const springY = useSpring(yVal, { stiffness: 100, damping: 16, mass: 0.75 });
  const springX = useSpring(xVal, { stiffness: 100, damping: 16, mass: 0.75 });
  const springR = useSpring(rVal, { stiffness: 100, damping: 16, mass: 0.75 });
  
  const clipPath = useMotionTemplate`inset(${springY}% ${springX}% round ${springR}px)`;
  
  const style = prefersReducedMotion ? {} : { clipPath };
  
  return (
    <motion.div className={className} style={style}>
      {children}
    </motion.div>
  );
};
