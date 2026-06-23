"use client";

import { Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { StarButton } from "@/components/ui/star-button";
import {
  FaLinkedinIn, FaInstagram, FaPinterestP,
  FaFacebookF, FaWhatsapp, FaYoutube,
  FaGithub, FaReddit, FaDiscord,
} from "react-icons/fa";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import {
  SiBluesky, SiSubstack, SiMastodon,
  SiThreads, SiMedium, SiQuora,
} from "react-icons/si";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import ShaderBackground from "@/components/ui/shader-background";
import { SocialGradientBlobCard } from "@/components/ui/gradient-bold-card";
import HighlightCard from "@/components/ui/highlight-card";
import { InteractiveCard } from "@/components/ui/interactive-card";

// ─── Data ──────────────────────────────────────────────────────────────────────

const officialPlatforms = [
  {
    name: "LinkedIn",
    handle: "linkedin.com/company/aibizmod",
    desc: "We share company updates, project reflections, and thoughts on the work we do.",
    href: "https://linkedin.com/company/aibizmod",
    gradient: "from-blue-700 via-blue-500 to-cyan-400",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Instagram",
    handle: "@aibizmod",
    desc: "A visual look at how we work, what we build, and the people behind it.",
    href: "https://instagram.com/aibizmod",
    gradient: "from-purple-600 via-pink-500 to-orange-400",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    handle: "facebook.com/aibizmod",
    desc: "Updates on what we're working on and occasional announcements worth sharing.",
    href: "https://facebook.com/aibizmod",
    gradient: "from-blue-800 via-blue-600 to-blue-400",
    icon: <FaFacebookF />,
  },
  {
    name: "Pinterest",
    handle: "@aibizmod",
    desc: "Boards we've put together around design, technology ideas, and digital work.",
    href: "https://pinterest.com/aibizmod",
    gradient: "from-red-600 via-rose-500 to-pink-400",
    icon: <FaPinterestP />,
  },
  {
    name: "X (Twitter)",
    handle: "@aibizmod",
    desc: "Short posts and reactions to things happening in technology.",
    href: "https://x.com/aibizmod",
    gradient: "from-slate-700 via-slate-500 to-slate-300",
    icon: <FaXTwitter />,
  },
  {
    name: "YouTube",
    handle: "@aibizmod",
    desc: "Walkthroughs, demos, and recordings from sessions we've hosted.",
    href: "https://youtube.com/@aibizmod",
    gradient: "from-red-700 via-red-500 to-orange-400",
    icon: <FaYoutube />,
  },
  {
    name: "WhatsApp",
    handle: "+44 20 7946 0958",
    desc: "The fastest way to reach us directly with a quick question.",
    href: "https://wa.me/4420000000",
    gradient: "from-green-600 via-emerald-500 to-teal-400",
    icon: <FaWhatsapp />,
  },
];

const registeredPlatforms = [
  {
    name: "Medium",
    handle: "@aibizmod",
    desc: "Longer pieces on technology decisions, things we've learned, and how we think about the work.",
    href: "https://medium.com/@aibizmod",
    gradient: "from-slate-800 via-slate-600 to-stone-400",
    icon: <SiMedium />,
  },
  {
    name: "GitHub",
    handle: "@aibizmod",
    desc: "Where we share code and open-source work from projects we're able to make public.",
    href: "https://github.com/aibizmod",
    gradient: "from-gray-800 via-gray-600 to-gray-400",
    icon: <FaGithub />,
  },
  {
    name: "Reddit",
    handle: "u/aibizmod",
    desc: "We join discussions on software and technology when we have something useful to add.",
    href: "https://reddit.com/u/aibizmod",
    gradient: "from-orange-600 via-orange-500 to-amber-400",
    icon: <FaReddit />,
  },
  {
    name: "Discord",
    handle: "aibizmod",
    desc: "A space for clients and partners to connect and follow what we're building.",
    href: "https://discord.gg/aibizmod",
    gradient: "from-indigo-600 via-violet-500 to-purple-400",
    icon: <FaDiscord />,
  },
  {
    name: "Telegram",
    handle: "@aibizmod",
    desc: "Announcements and quick updates when we have something worth sharing.",
    href: "https://t.me/aibizmod",
    gradient: "from-sky-600 via-sky-500 to-blue-400",
    icon: <FaTelegram />,
  },
  {
    name: "Bluesky",
    handle: "@aibizmod.bsky.social",
    desc: "We're here for the open web conversations.",
    href: "https://bsky.app/profile/aibizmod.bsky.social",
    gradient: "from-sky-500 via-blue-400 to-cyan-300",
    icon: <SiBluesky />,
  },
  {
    name: "Substack",
    handle: "aibizmod.substack.com",
    desc: "Our newsletter. When we have something worth reading, it goes here first.",
    href: "https://aibizmod.substack.com",
    gradient: "from-orange-500 via-amber-400 to-yellow-300",
    icon: <SiSubstack />,
  },
  {
    name: "Quora",
    handle: "aibizmod",
    desc: "We answer questions about software and technology when we can add something useful.",
    href: "https://quora.com/profile/aibizmod",
    gradient: "from-red-700 via-red-500 to-rose-400",
    icon: <SiQuora />,
  },
  {
    name: "Mastodon",
    handle: "@aibizmod@mastodon.social",
    desc: "Part of the open web. We're here if that's where you prefer to connect.",
    href: "https://mastodon.social/@aibizmod",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    icon: <SiMastodon />,
  },
  {
    name: "Threads",
    handle: "@aibizmod",
    desc: "Lighter posts and quick thoughts from the team.",
    href: "https://threads.net/@aibizmod",
    gradient: "from-slate-800 via-gray-700 to-zinc-500",
    icon: <SiThreads />,
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SocialMediaPageContent() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-32 md:pt-36">
        <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />

        <div
          className="pointer-events-none absolute left-1/2 top-28 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md">
                <Share2 size={14} aria-hidden="true" />
                Social Media
              </span>
              <h1
                className="mt-7 font-display font-thin text-[#0F172A] text-balance"
                style={{ fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.02 }}
              >
                Find us{" "}
                <motion.span
                  className="font-normal inline-block"
                  style={{ color: "#0891B2" }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(8,145,178,0))",
                      "drop-shadow(0 0 12px rgba(8,145,178,0.55))",
                      "drop-shadow(0 0 0px rgba(8,145,178,0))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Everywhere
                </motion.span>
              </h1>
              <p
                className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-base leading-8 text-slate-600 shadow-[0_18px_55px_rgba(59,130,246,0.12)] backdrop-blur-md md:text-lg"
              >
                One place to find every account we use. If you&apos;re looking
                for us on social media, this is where to start.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Official Channels ──────────────────────────────────────────────── */}
      <section
        className="relative py-12 px-6 border-t border-border bg-white md:py-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(210,247,255,0.48),transparent_32%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <span
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "black",
              }}
            >
              Verified Accounts
            </span>
            <h2
              className="mt-4 font-display font-bold"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0E7490" }}
            >
              Official Channels
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed" style={{ fontSize: 15 }}>
              These are the accounts we actively post to and check regularly.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {officialPlatforms.map(({ name, handle, desc, href, icon }, i) => (
              <AnimatedSection key={name} delay={i * 0.06}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <HighlightCard
                    title={name}
                    description={[handle, desc]}
                    icon={<span className="text-xl text-[#0891B2]">{icon}</span>}
                  />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registered Platforms ───────────────────────────────────────────── */}
      <section className="py-12 px-6 border-t border-border bg-canvas md:py-14">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <span
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "black",
              }}
            >
              Also On
            </span>
            <h2
              className="mt-4 font-display font-bold"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0E7490" }}
            >
              Registered Profiles
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed" style={{ fontSize: 15 }}>
              We hold accounts on these platforms. We don&apos;t post regularly, but the names are ours.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ perspective: "1000px" }}>
            {registeredPlatforms.map(({ name, handle, desc, href, gradient, icon }, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <InteractiveCard className="h-full">
                  <SocialGradientBlobCard
                    name={name}
                    handle={handle}
                    desc={desc}
                    href={href}
                    gradient={gradient}
                    socialIcon={icon}
                    category="registered"
                  />
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-canvas border-t border-[#E0F2FE] overflow-hidden">
        {/* Background glows — mirrors WhyChooseUs */}
        <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-200/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-blue-200/10 blur-[120px] pointer-events-none" />

        <AnimatedSection>
          <div className="relative max-w-2xl mx-auto">
            <div className="rounded-2xl border border-[#BAE6FD] bg-[#ECFEFF]/70 backdrop-blur-sm
                            px-10 py-14 text-center shadow-[0_4px_24px_rgba(8,145,178,0.08)]">

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black">
                Get in Touch
              </span>

              <h2
                className="mt-4 font-display font-thin text-primary text-balance"
                style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: 1.1 }}
              >
                Don&apos;t see your favourite platform?
              </h2>

              <p className="mt-5 text-muted-foreground leading-relaxed max-w-md mx-auto" style={{ fontSize: 16 }}>
                Just ask. We&apos;ll tell you if we use that platform, or you can
                email us directly at hello@aibizmod.com
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-3xl inline-flex"
                >
                  <StarButton
                    lightColor="#38bdf8"
                    backgroundColor="#0f172a"
                    className="font-sans font-semibold text-[11px] uppercase tracking-[0.2em]"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 group-hover/star-button:translate-x-1 transition-transform duration-300" />
                  </StarButton>
                </Link>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
