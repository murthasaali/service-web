"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * StickyFooterLayout — Bluebird-style sticky footer.
 *
 * The footer is position:fixed at the bottom of the viewport (z-0).
 * The content sits in a bg-canvas card at z-10 and scrolls normally.
 * Below the visible sections is a transparent gap equal to the footer height.
 * Through that transparent gap the fixed footer is revealed — creating the
 * illusion that the footer stays put while the white card scrolls away from it.
 */
export default function StickyFooterLayout({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const updateHeight = () => {
      const height = el.offsetHeight;
      setFooterHeight(height);
    };

    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    updateHeight();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      
      // Calculate remaining scroll height before reaching the bottom
      const distFromBottom = totalHeight - (scrollY + viewportHeight);
      
      // Reveal the footer only when within range of the bottom reveal spacer
      // (footerHeight is the spacer height; we add a 250px buffer for a smooth fade-in)
      const currentFooterHeight = el.offsetHeight || 400;
      setShowFooter(distFromBottom <= currentFooterHeight + 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    const t = setTimeout(handleScroll, 100);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {/* ── Content layer (z-10) ───────────────────────────────────────
       * We use `pointer-events-none` so that clicks can pass through the transparent bottom spacer
       * to reach the fixed footer underneath.
       */}
      <div className="relative z-10 pointer-events-none">
        {/*
         * Black shell behind the content card — fills the rounded corner cutouts.
         * pointer-events-auto is set here so the content card is clickable.
         */}
        <div className="bg-black pointer-events-auto">
          {/*
           * Sections wrapped in the white card — rounded bottom edge.
           * overflow-hidden clips content to the rounded shape.
           * The black parent shows through the rounded corners.
           */}
          <div className="bg-canvas rounded-b-[40px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
            {children}
          </div>
        </div>

        {/*
         * Transparent gap below the card, exactly as tall as the footer.
         * Because this is transparent and z-10, the fixed footer (z-0)
         * shows through it — this is where the reveal happens.
         */}
        <div style={{ height: footerHeight }} aria-hidden="true" />
      </div>

      {/* ── Footer (z-0) — fixed to viewport bottom, always stays put ── */}
      <div
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 transition-opacity duration-500 ease-in-out"
        style={{
          zIndex: 0,
          opacity: showFooter ? 1 : 0,
          pointerEvents: showFooter ? "auto" : "none",
        }}
      >
        {footer}
      </div>
    </>
  );
}
