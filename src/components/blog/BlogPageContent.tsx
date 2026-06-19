"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import ShaderBackground from "@/components/ui/shader-background";
import { StarButton } from "@/components/ui/star-button";
import { blogPosts, categories, featuredPost, gridPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog";

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-100 bg-white/70 px-3 py-1 text-xs font-semibold text-cyan-700 shadow-[0_10px_24px_rgba(59,130,246,0.08)] backdrop-blur">
      {category}
    </span>
  );
}

function AuthorLine({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 font-bold text-white ${
          compact ? "h-8 w-8 text-[11px]" : "h-10 w-10 text-xs"
        }`}
        aria-hidden="true"
      >
        {post.author.initials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-[#0F172A]">
          {post.author.name}
        </p>
        <p className="text-xs text-slate-500">
          {post.date} · {post.readTime}
        </p>
      </div>
    </div>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <AnimatedSection>
      <Link
        href={`/blog/${post.slug}`}
        className="group grid overflow-hidden rounded-[32px] border border-cyan-100/80 bg-white/72 shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200 md:grid-cols-5"
      >
        <div className="relative min-h-[280px] md:col-span-2">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(210,247,255,0.45),transparent_38%)]" />
        </div>

        <div className="flex min-h-[320px] flex-col justify-between p-7 md:col-span-3 md:p-10">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Featured
              </span>
              <CategoryBadge category={post.category} />
            </div>

            <h2
              className="font-display font-thin leading-tight text-[#0F172A] text-balance transition group-hover:text-cyan-800"
              style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.08 }}
            >
              {post.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <AuthorLine post={post} />
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3">
              Read Article
              <ArrowRight size={15} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

function BlogCard({ post, delay }: { post: BlogPost; delay: number }) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-cyan-100/80 bg-white/72 shadow-[0_18px_55px_rgba(59,130,246,0.10)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(8,145,178,0.16)]"
      >
        <div className="relative aspect-video overflow-hidden bg-cyan-50">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(210,247,255,0.35),transparent_38%)]" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <CategoryBadge category={post.category} />
          <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-[#0F172A] transition group-hover:text-cyan-800">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-cyan-100 pt-5">
            <AuthorLine post={post} compact />
            <div className="flex shrink-0 items-center gap-1 text-xs text-slate-500">
              <Clock size={12} aria-hidden="true" />
              {post.readTime}
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const visiblePosts =
    activeCategory === "All"
      ? gridPosts
      : blogPosts.filter((post) => post.category === activeCategory && post.slug !== featuredPost.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-32 md:pb-28 md:pt-36">
        <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
        <div
          className="pointer-events-none absolute left-1/2 top-24 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md">
              <Sparkles size={14} aria-hidden="true" />
              aibizmode Journal
            </span>
            <h1
              className="mx-auto mt-7 max-w-4xl font-display font-thin text-[#0F172A] text-balance"
              style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.02 }}
            >
              Notes from building a{" "}
              <span className="gradient-text font-normal">digital service brand</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md md:text-lg">
              Original posts about our domain launch, SEO service journey,
              generative optimisation, and the practical work behind better
              business websites.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(210,247,255,0.58),transparent_34%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14">
            <FeaturedCard post={featuredPost} />
          </div>

          <div className="mb-10 overflow-x-auto">
            <div className="flex min-w-max items-center gap-2 pb-1 md:min-w-0 md:flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#0F172A] text-white shadow-[0_12px_32px_rgba(15,23,42,0.18)]"
                      : "border border-cyan-100 bg-white/70 text-[#0F172A] hover:border-cyan-200 hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} delay={index * 0.07} />
            ))}
          </div>

          <AnimatedSection className="mx-auto mt-20 max-w-4xl rounded-[32px] border border-cyan-100 bg-[#ECFEFF]/70 p-8 text-center shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md md:p-12">
            <h2
              className="font-display font-thin text-[#0F172A] text-balance"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.08 }}
            >
              Want us to write about a practical build question?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
              Send us the topic. We prefer specific questions over generic
              trend pieces.
            </p>
            <Link href="/contact" className="mt-8 inline-flex">
              <StarButton
                as="span"
                lightColor="#38bdf8"
                backgroundColor="#0f172a"
                className="h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
              >
                Suggest a Topic
                <ArrowRight size={16} aria-hidden="true" />
              </StarButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

