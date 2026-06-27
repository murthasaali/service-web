"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { iconMap, type IconKey } from "./ServicePageLayout";
import SectionHeading from "@/components/common/SectionHeading";
import TargetCursor from "@/components/ui/TargetCursor";

export interface ServiceCard {
  iconKey?: IconKey;
  title: string;
  bullets: string[];
  image?: string;
  href?: string;
}

function Card({
  card,
}: {
  card: ServiceCard;
}) {
  const Icon = card.iconKey ? iconMap[card.iconKey] : null;

  const cardContent = (
    <div
      className="
        relative w-full h-full overflow-hidden rounded-[24px]
        border border-slate-200/40 bg-white p-3.5
        shadow-[0_12px_36px_-6px_rgba(10,22,40,0.06),0_4px_16px_-4px_rgba(8,145,178,0.03)]
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        flex flex-col items-stretch
        group-hover:border-cyan-300/60
        group-hover:shadow-[0_0_28px_6px_rgba(6,182,212,0.18),0_32px_64px_-10px_rgba(10,22,40,0.14)]
      "
    >
      {/* Top Image or Icon container - 60% Height */}
      {card.image ? (
        <div className="relative w-full h-[60%] overflow-hidden rounded-[18px] flex-shrink-0 z-10">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.14]"
          />
        </div>
      ) : (
        Icon && (
          <div className="flex items-center justify-center w-full h-[60%] rounded-[18px] bg-cyan-50 border border-cyan-100 text-cyan-700 shadow-[0_12px_28px_rgba(8,145,178,0.10)] flex-shrink-0 z-10">
            <Icon size={28} aria-hidden="true" />
          </div>
        )
      )}

      {/* Content block below - 40% Height */}
      <div className="flex flex-col p-3 pt-4 h-[40%] justify-start overflow-hidden">
        <h3 className="mb-2 font-display text-[16px] font-bold leading-tight text-[#0F172A] tracking-tight transition-colors duration-500 group-hover:text-cyan-700 truncate">
          {card.title}
        </h3>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 overflow-hidden" role="list">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="relative pl-3.5 text-[13px] text-slate-600 leading-normal transition-colors duration-500 group-hover:text-slate-800">
              <span
                className="absolute left-0 top-[7.5px] h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-500 group-hover:bg-[#0891b2]"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (card.href) {
    return (
      <Link
        href={card.href}
        className="cursor-target group flex w-full max-w-sm h-[390px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:scale-[1.01]"
        style={{ perspective: "1000px" }}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="cursor-target group flex w-full max-w-sm h-[390px]">
      {cardContent}
    </div>
  );
}

export default function ServiceCardsSection({ cards }: { cards: ServiceCard[] }) {
  const [inSection, setInSection] = React.useState(false);

  return (
    <section
      onMouseEnter={() => setInSection(true)}
      onMouseLeave={() => setInSection(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#F8FEFF",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "80px 24px",
      }}
    >
      {/* Custom cursor — snaps around cards on hover, only active inside this section */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={3}
        hideDefaultCursor={false}
        parallaxOn={true}
        cursorColor="#06b6d4"
        visible={inSection}
      />

      {/* Soft ambient mesh glows */}
      <div className="absolute -top-12 -left-12 w-[350px] h-[350px] rounded-full bg-cyan-200/26 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[400px] h-[400px] rounded-full bg-blue-200/22 blur-3xl pointer-events-none" />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="What We Offer"
          heading="End-to-end digital services for modern businesses"
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
