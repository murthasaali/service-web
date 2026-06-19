import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/common/AnimatedSection";
import ShaderBackground from "@/components/ui/shader-background";
import { StarButton } from "@/components/ui/star-button";
import { blogAuthor, blogPosts, getBlogPost } from "@/data/blog";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | aibizmode`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://aibizmode.com${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: blogAuthor.name,
      url: blogAuthor.url,
    },
    publisher: {
      "@type": "Organization",
      name: "aibizmode",
      url: "https://aibizmode.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aibizmode.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-32 md:pb-28 md:pt-36">
          <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
          <div
            className="pointer-events-none absolute left-1/2 top-24 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-sm font-semibold text-[#0F172A] shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md transition hover:border-cyan-200 hover:bg-white"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Blog
            </Link>

            <AnimatedSection>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md">
                <Sparkles size={14} aria-hidden="true" />
                {post.category}
              </span>
              <h1
                className="mt-7 max-w-4xl font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.02 }}
              >
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md md:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="font-semibold text-[#0F172A]">
                  {post.author.name}
                </span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-cyan-100 bg-cyan-50 shadow-[0_26px_80px_rgba(8,145,178,0.16)]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(210,247,255,0.36),transparent_34%)]" />
              </div>
            </AnimatedSection>

            <article className="mx-auto mt-16 max-w-3xl">
              {post.sections.map((section) => (
                <AnimatedSection key={section.heading} className="mb-14">
                  <h2
                    className="font-display font-thin text-[#0F172A] text-balance"
                    style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1 }}
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-slate-600 md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 space-y-3 rounded-[24px] border border-cyan-100 bg-[#ECFEFF]/60 p-6 shadow-[0_18px_55px_rgba(59,130,246,0.08)] backdrop-blur-md">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AnimatedSection>
              ))}
            </article>

            <AnimatedSection className="mx-auto mt-16 max-w-4xl rounded-[32px] border border-cyan-100 bg-[#ECFEFF]/70 p-8 text-center shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md md:p-12">
              <h2
                className="font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.08 }}
              >
                Have a similar project question?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
                Tell us what you are building or improving. We will reply with
                the most practical next step.
              </p>
              <Link href="/contact" className="mt-8 inline-flex">
                <StarButton
                  as="span"
                  lightColor="#38bdf8"
                  backgroundColor="#0f172a"
                  className="h-12 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                >
                  Talk to Us
                  <ArrowRight size={16} aria-hidden="true" />
                </StarButton>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

