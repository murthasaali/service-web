"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, ChevronRight, Send } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { featuredPost, gridPosts, categories } from "@/data/blog";
import type { BlogPost } from "@/data/blog";

// ─── Category badge ───────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-pill text-royal-deep"
      style={{ background: "#F7F0FF", border: "1px solid rgba(184,134,11,0.18)" }}
    >
      {category}
    </span>
  );
}

// ─── Author avatar ────────────────────────────────────────────────────────────

function Avatar({ initials, size = 9 }: { initials: string; size?: number }) {
  const px = size * 4; // Tailwind w-9 = 36px, etc.
  return (
    <div
      className={`rounded-full text-white font-bold flex items-center justify-center shrink-0`}
      style={{
        width: px,
        height: px,
        fontSize: px * 0.3,
        background: "linear-gradient(120deg, #6D28D9, #A21CAF)",
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

// ─── Image placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({
  gradient,
  className = "",
}: {
  gradient: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Featured post card ───────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <AnimatedSection>
      <div className="card-royal overflow-hidden group">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Image */}
          <ImagePlaceholder
            gradient={post.imagePlaceholderColor}
            className="h-56 md:h-auto md:col-span-2"
          />

          {/* Content */}
          <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-widest text-royal-deep">
                  Featured
                </span>
                <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
                <CategoryBadge category={post.category} />
              </div>

              <h2
                className="font-display font-bold text-ink leading-tight mb-3 group-hover:text-royal-deep transition-colors"
                style={{ fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.2, letterSpacing: "-0.015em" }}
              >
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar initials={post.author.initials} size={9} />
                <div>
                  <p className="text-sm font-semibold text-ink leading-tight">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-deep hover:gap-3 transition-all"
              >
                Read Article <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── Blog grid card ───────────────────────────────────────────────────────────

function BlogCard({ post, delay }: { post: BlogPost; delay: number }) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full group">
        <div className="card-royal overflow-hidden flex flex-col h-full">
          {/* Image */}
          <ImagePlaceholder gradient={post.imagePlaceholderColor} className="aspect-video" />

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="mb-3">
              <CategoryBadge category={post.category} />
            </div>

            <h3
              className="font-display font-semibold text-ink leading-snug mb-2 group-hover:text-royal-deep transition-colors line-clamp-2 flex-none"
              style={{ fontSize: 15 }}
            >
              {post.title}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {post.excerpt}
            </p>

            {/* Card footer */}
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Avatar initials={post.author.initials} size={6} />
                <span className="text-xs text-muted-foreground truncate">
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                <Clock size={11} aria-hidden="true" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-canvas border-b border-border">
        {/* Ambient blob */}
        <div
          className="absolute -top-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(126,34,206,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-[13px] text-muted-foreground mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={13} className="text-border shrink-0" aria-hidden="true" />
            <span className="text-ink font-medium" aria-current="page">Blog</span>
          </nav>

          <AnimatedSection>
            <span className="gold-rule" aria-hidden="true" />
            <span className="eyebrow">
              <span className="eyebrow-star" aria-hidden="true">✦</span>
              Blog
            </span>
            <h1
              className="mt-6 font-display font-bold text-ink text-balance"
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Insights &amp; Updates
            </h1>
            <p
              className="mt-5 text-muted-foreground max-w-xl leading-relaxed"
              style={{ fontSize: 19, lineHeight: 1.65 }}
            >
              Tech tips, industry trends, and company news from the space&#x2011;ai team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Featured + Filter + Grid ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">

          {/* Featured Post */}
          <div className="mb-14">
            <FeaturedCard post={featuredPost} />
          </div>

          {/* Categories Filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex items-center gap-2 pb-1 min-w-max md:min-w-0 md:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-pill text-sm font-medium transition-all duration-150 whitespace-nowrap"
                  style={
                    activeCategory === cat
                      ? { background: "linear-gradient(120deg, #6D28D9, #A21CAF)", color: "#fff" }
                      : { background: "#F7F0FF", border: "1px solid rgba(184,134,11,0.18)", color: "#1E1626" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gridPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-24 px-6">
        {/* Ambient glows */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(109,40,217,1) 0%, transparent 70%)",
            animation: "glow-pulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle, rgba(162,28,175,1) 0%, transparent 70%)",
            animation: "glow-pulse 6s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />

        <AnimatedSection className="relative z-10 max-w-xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-1.5 text-label font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#B8860B" }}
          >
            <span aria-hidden="true">✦</span>
            Newsletter
          </span>

          <h2
            className="font-display font-bold text-white text-balance"
            style={{
              fontSize: "clamp(26px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Stay{" "}
            <span className="gradient-text">in the loop</span>
          </h2>

          <p
            className="mt-4"
            style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}
          >
            Get the latest tech insights, tutorials, and company updates
            delivered to your inbox. No spam, unsubscribe any time.
          </p>

          {subscribed ? (
            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-card border text-white font-semibold"
              style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}>
              ✓ You&apos;re subscribed — thank you!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-btn text-white placeholder:text-white/40 text-sm transition-colors focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              />
              <button
                type="submit"
                className="btn-primary shrink-0 justify-center"
              >
                Subscribe <Send size={14} aria-hidden="true" />
              </button>
            </form>
          )}
        </AnimatedSection>
      </section>
    </>
  );
}
