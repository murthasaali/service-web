import { cn } from "@/lib/utils";
import Image from "next/image";

export type ThemeColor = "blue" | "indigo" | "cyan" | "emerald" | "orange" | "yellow" | "pink";

export interface ListItem {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  color: ThemeColor;
}

const colorTextMap: Record<ThemeColor, string> = {
  blue:    "text-blue-500",
  indigo:  "text-indigo-500",
  cyan:    "text-cyan-500",
  emerald: "text-emerald-500",
  orange:  "text-orange-500",
  yellow:  "text-yellow-500",
  pink:    "text-pink-500",
};

const colorOverlayMap: Record<ThemeColor, string> = {
  blue:    "bg-blue-600/15",
  indigo:  "bg-indigo-600/15",
  cyan:    "bg-cyan-600/15",
  emerald: "bg-emerald-600/15",
  orange:  "bg-orange-600/15",
  yellow:  "bg-yellow-600/15",
  pink:    "bg-pink-600/15",
};

function RollingTextItem({ item }: { item: ListItem }) {
  return (
    <div className="group relative w-full border-b border-neutral-200 py-5 md:py-6 cursor-default">
      <div className="flex items-center justify-between gap-4 md:gap-6">

        {/* ── Title — left side, original position ─────────────────────── */}
        <div className="shrink-0 min-w-0 max-w-[52%] md:max-w-[60%]">
          <div className="relative overflow-hidden h-7 md:h-10">
            <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
              {/* Default state */}
              <div className="h-7 md:h-10 flex items-center">
                <h3 className="text-base md:text-xl font-bold text-neutral-900 uppercase tracking-tight leading-none truncate">
                  {item.title}
                </h3>
              </div>
              {/* Hover state — accent italic roll */}
              <div className="h-7 md:h-10 flex items-center">
                <h3
                  className={cn(
                    "text-base md:text-xl font-bold uppercase tracking-tight italic leading-none truncate",
                    colorTextMap[item.color]
                  )}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right slot: description (default) ↔ image (hover) ────────── */}
        <div className="relative w-52 md:w-80 h-20 md:h-24 shrink-0 rounded-xl overflow-hidden">

          {/* Description — shown by default, fades out on hover */}
          <div className="absolute inset-0 flex items-center transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Image — hidden by default, fades in on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 208px, 320px"
            />
            <div className={cn("absolute inset-0 mix-blend-overlay", colorOverlayMap[item.color])} />
          </div>

        </div>

      </div>
    </div>
  );
}

function RollingTextList({ items, heading }: { items: ListItem[]; heading?: string }) {
  if (items.length === 0) return null;

  return (
    <div className="w-full flex flex-col">
      {heading && (
        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-neutral-500">
          {heading}
        </h3>
      )}
      <div className="w-full flex flex-col">
        {items.map((item) => (
          <RollingTextItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export { RollingTextList };
