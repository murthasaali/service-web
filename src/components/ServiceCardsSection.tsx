"use client";

import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { iconMap, type IconKey } from "./ServicePageLayout";
import SectionHeading from "@/components/common/SectionHeading";

export interface ServiceCard {
  iconKey?: IconKey;
  title: string;
  bullets: string[];
  image?: string;
  href?: string;
}

function Card({
  card,
  prefersReduced,
}: {
  card: ServiceCard;
  prefersReduced: boolean | null;
}) {
  const [hovered, setHovered] = useState(false);
  const active = hovered && !prefersReduced;
  const hasImage = Boolean(card.image);
  const Icon = card.iconKey ? iconMap[card.iconKey] : null;

  function handleMouseEnter() {
    if (!prefersReduced) setHovered(true);
  }
  function handleMouseLeave() {
    if (!prefersReduced) setHovered(false);
  }

  return (
    <div
      role="listitem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        background: "#ffffff",
        border: active
          ? "1px solid rgba(165,243,252,0.9)"
          : "1px solid rgba(103,232,249,0.8)",
        boxShadow: active
          ? "0 24px 70px rgba(8,145,178,0.14)"
          : "0 18px 55px rgba(59,130,246,0.09)",
        transition: "border-color 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "border-color, box-shadow",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Clickable overlay when href is provided */}
      {card.href && (
        <Link
          href={card.href}
          aria-label={card.title}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            cursor: "pointer",
          }}
        />
      )}

      {/* Radial fill layer — only in icon mode */}
      {!hasImage && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "47px",
            left: "43px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "#ecfeff",
            transform: active ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.07)",
            opacity: active ? 1 : 0,
            zIndex: 0,
            pointerEvents: "none",
            transition: active
              ? "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.45s ease-out"
              : "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s ease-out",
            willChange: "transform, opacity",
          }}
        />
      )}

      {/* Top image */}
      {hasImage && (
        <div style={{ position: "relative", height: "168px", flexShrink: 0, overflow: "hidden" }}>
          <Image
            src={card.image!}
            alt={card.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
              transform: active ? "scale(1.04)" : "scale(1)",
              willChange: "transform",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.55) 100%)",
            }}
          />
        </div>
      )}

      {/* Card content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Icon — only in icon mode */}
        {!hasImage && Icon && (
          <div
            className="flex items-center justify-center rounded-full border border-cyan-100 text-cyan-700 shadow-[0_12px_28px_rgba(8,145,178,0.10)]"
            style={{
              width: "44px",
              height: "44px",
              flexShrink: 0,
              marginBottom: "20px",
              background: active ? "#cffafe" : "#ecfeff",
              transition: "background 0.3s",
            }}
          >
            <Icon size={19} aria-hidden="true" />
          </div>
        )}

        <h3
          className="font-display font-semibold text-[#0F172A]"
          style={{ fontSize: "16px", fontWeight: 650, lineHeight: 1.3, marginBottom: "0" }}
        >
          {card.title}
        </h3>

        <div
          aria-hidden="true"
          style={{
            height: "1px",
            background: active ? "rgba(8,145,178,0.30)" : "rgba(0,0,0,0.08)",
            margin: "12px 0",
            transition: "background 0.3s",
          }}
        />

        <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }} role="list">
          {card.bullets.map((bullet) => (
            <li
              key={bullet}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "6px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: active ? "#0891b2" : "#cbd5e1",
                  flexShrink: 0,
                  marginTop: "8px",
                  transition: "background 0.3s",
                }}
              />
              <span style={{ fontSize: "14px", color: "#475569", lineHeight: 1.5 }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServiceCardsSection({ cards }: { cards: ServiceCard[] }) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      style={{
        background: "#f8fafc",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          eyebrow="What We Offer"
          heading="End-to-end digital services for modern businesses"
          centered
          className="mb-14"
        />

        <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Card key={card.title} card={card} prefersReduced={prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
