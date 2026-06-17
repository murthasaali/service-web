"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, BarChart2 } from "lucide-react";

// ─── CountUp — rAF + IntersectionObserver, no extra library ──────────────────

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(to);
          return;
        }

        let startTs: number | null = null;
        const tick = (ts: number) => {
          if (startTs === null) startTs = ts;
          const p = Math.min((ts - startTs) / 1600, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setCount(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <div ref={wrapperRef} className="flex flex-col">
      <span className="font-display text-[28px] font-bold text-ink leading-none">
        {count}{suffix}
      </span>
    </div>
  );
}

// ─── Static data ──────────────────────────────────────────────────────────────

const stats = [
  { type: "count" as const, to: 50,  suffix: "+", label: "Projects delivered" },
  { type: "count" as const, to: 10,  suffix: "+", label: "Industries served"  },
  { type: "static" as const, display: "24/7",      label: "Support"           },
];

const projects = [
  { name: "E-commerce Platform Rebuild",  status: "Live",      pct: 100, dot: "#A21CAF" },
  { name: "Mobile App — FinTech Client",  status: "In Review", pct:  88, dot: "#7E22CE" },
  { name: "Cloud Migration Strategy",     status: "Active",    pct:  62, dot: "#B8860B" },
];

// ─── Framer Motion variants ───────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative bg-canvas overflow-hidden">
      {/* Soft ambient blob */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(126,34,206,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">
        <div
          className="grid items-center gap-14"
          style={{ gridTemplateColumns: "1.05fr 0.95fr" }}
        >
          {/* ── LEFT COLUMN ──────────────────────────────────────────────── */}
          <div className="flex flex-col max-w-[600px]">

            {/* Gold rule */}
            <motion.span
              className="gold-rule"
              aria-hidden="true"
              {...(prefersReduced ? {} : fadeUp(0))}
            />

            {/* Eyebrow pill */}
            <motion.div {...(prefersReduced ? {} : fadeUp(0.08))}>
              <span className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">✦</span>
                Trusted by 50+ global teams
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="mt-6 font-display font-bold text-ink text-balance"
              style={{ fontSize: "clamp(42px, 5vw, 64px)", lineHeight: 1.03, letterSpacing: "-0.03em" }}
              {...(prefersReduced ? {} : fadeUp(0.16))}
            >
              We Build Digital Products
              <br />
              That{" "}
              <span className="gradient-text">Drive Growth</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="mt-6 text-muted-foreground max-w-[520px]"
              style={{ fontSize: 19, lineHeight: 1.65 }}
              {...(prefersReduced ? {} : fadeUp(0.24))}
            >
              From web apps to automation — end-to-end tech services for
              modern businesses that want real results, not just deliverables.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              {...(prefersReduced ? {} : fadeUp(0.32))}
            >
              <Link href="/services" className="btn-primary">
                Explore Services <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to Us
              </Link>
            </motion.div>

            {/* Trust / stats row */}
            <motion.div
              className="mt-12 flex items-start gap-10 flex-wrap"
              {...(prefersReduced ? {} : fadeUp(0.40))}
            >
              {stats.map((s) =>
                s.type === "count" ? (
                  <div key={s.label} className="flex flex-col gap-1.5">
                    <CountUp to={s.to} suffix={s.suffix} />
                    <span className="text-label text-muted-foreground font-medium">{s.label}</span>
                  </div>
                ) : (
                  <div key={s.label} className="flex flex-col gap-1.5">
                    <span className="font-display text-[28px] font-bold text-ink leading-none">
                      {s.display}
                    </span>
                    <span className="text-label text-muted-foreground font-medium">{s.label}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — dashboard card ────────────────────────────── */}
          <motion.div
            className="relative hidden lg:block"
            initial={prefersReduced ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            {/* Main card — styled as "photo card" placeholder */}
            <div
              className="rounded-[20px] bg-surface overflow-hidden"
              style={{
                boxShadow: "0 30px 60px rgba(109,40,217,0.10)",
                border: "1px solid rgba(184,134,11,0.15)",
              }}
            >
              {/* Card header */}
              <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest">
                    Active Projects
                  </p>
                  <p className="mt-0.5 font-display font-bold text-ink text-[17px]">
                    Q2 2024 Dashboard
                  </p>
                </div>
                <div className="icon-box">
                  <TrendingUp size={18} aria-hidden="true" />
                </div>
              </div>

              {/* Project rows */}
              <div className="px-6 py-5 space-y-3">
                {projects.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-canvas"
                    style={{ border: "1px solid #EDE0FB" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: p.dot }}
                      aria-hidden="true"
                    />
                    <span className="flex-1 text-[13px] font-medium text-ink truncate">
                      {p.name}
                    </span>
                    <span
                      className="text-[11px] font-semibold shrink-0"
                      style={{ color: p.pct === 100 ? "#16a34a" : "#6B5C8A" }}
                    >
                      {p.status}
                    </span>
                    <div
                      className="w-20 h-1.5 rounded-full overflow-hidden shrink-0"
                      style={{ background: "#F7F0FF" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${p.pct}%`,
                          background: "linear-gradient(90deg, #6D28D9, #A21CAF)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div
                className="px-6 py-4 flex items-center gap-2 border-t border-border"
                style={{ background: "#FDFBFF" }}
              >
                <CheckCircle size={13} className="text-emerald-500" aria-hidden="true" />
                <span className="text-[12px] text-muted-foreground">
                  All systems operational · Updated just now
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <BarChart2 size={13} className="text-muted-foreground" aria-hidden="true" />
                  <span className="text-[11px] text-muted-foreground">98% on-time delivery</span>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom-left, overlaps card */}
            <motion.div
              className="absolute -bottom-5 -left-6 bg-surface rounded-[14px] px-4 py-3.5 flex items-center gap-3"
              style={{
                border: "1px solid rgba(184,134,11,0.25)",
                boxShadow: "0 8px 24px rgba(30,22,38,0.12)",
              }}
              animate={prefersReduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="icon-box">
                <CheckCircle size={16} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground leading-none mb-1">
                  Avg. turnaround
                </p>
                <p className="text-[15px] font-bold text-ink leading-none">2 weeks</p>
              </div>
            </motion.div>

            {/* Floating stat chip — top-right, gradient bg */}
            <motion.div
              className="absolute -top-5 -right-4 rounded-[12px] px-4 py-3 text-white"
              style={{ background: "linear-gradient(120deg, #6D28D9, #A21CAF)" }}
              animate={prefersReduced ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[10px] font-medium opacity-80 leading-none mb-1">
                Client Satisfaction
              </p>
              <p className="text-[22px] font-bold leading-none">98%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
