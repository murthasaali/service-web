"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import { Globe } from "@/components/ui/Globe";

const markers = [
  { id: "nyc", label: "New York", location: [40.7128, -74.006] as [number, number] },
  { id: "ldn", label: "London", location: [51.5074, -0.1278] as [number, number] },
  { id: "blr", label: "Bengaluru", location: [12.9716, 77.5946] as [number, number] },
  { id: "sgp", label: "Singapore", location: [1.3521, 103.8198] as [number, number] },
  { id: "syd", label: "Sydney", location: [-33.8688, 151.2093] as [number, number] },
];

const arcs = [
  { id: "nyc-ldn", from: [40.7128, -74.006] as [number, number], to: [51.5074, -0.1278] as [number, number], label: "NY → LD" },
  { id: "ldn-blr", from: [51.5074, -0.1278] as [number, number], to: [12.9716, 77.5946] as [number, number], label: "LD → BLR" },
  { id: "blr-sgp", from: [12.9716, 77.5946] as [number, number], to: [1.3521, 103.8198] as [number, number], label: "BLR → SG" },
  { id: "sgp-syd", from: [1.3521, 103.8198] as [number, number], to: [-33.8688, 151.2093] as [number, number], label: "SG → SYD" },
];

export default function GlobalPresence() {
  return (
    <section id="global-presence" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
              Global Presence
            </span>
            <h2
              className="mt-5 font-display font-bold text-primary text-balance"
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                lineHeight: 1.08,
              }}
            >
              Interactive footprint across every major market.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl" style={{ fontSize: 17, lineHeight: 1.8 }}>
              Our global team is connected with clients and partners around the world. Explore our interactive globe to see how we link strategy, engineering, and support across continents.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-[#FBF8FF] p-6 text-center">
                <p className="text-3xl font-display font-bold text-ink">5+</p>
                <p className="mt-2 text-sm text-muted-foreground">Core markets supported</p>
              </div>
              <div className="rounded-2xl border border-border bg-[#FBF8FF] p-6 text-center">
                <p className="text-3xl font-display font-bold text-ink">24/7</p>
                <p className="mt-2 text-sm text-muted-foreground">Global coverage and support</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="mx-auto max-w-[640px] w-full rounded-[32px] border border-border bg-white shadow-card p-6">
              <Globe
                markers={markers}
                arcs={arcs}
                className="h-[520px]"
                markerColor={[0.27, 0.49, 0.92]}
                arcColor={[0.27, 0.49, 0.92]}
                baseColor={[1, 1, 1]}
                glowColor={[0.95, 0.94, 0.92]}
                mapBrightness={12}
                markerSize={0.03}
                markerElevation={0.015}
                speed={0.0025}
                theta={0.15}
                diffuse={1.8}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
