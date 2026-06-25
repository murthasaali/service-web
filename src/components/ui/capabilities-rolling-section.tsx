import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeading from "@/components/common/SectionHeading";
import { RollingTextList, type ThemeColor } from "@/components/ui/rolling-list";

interface CapabilityItem {
  title: string;
  description: string;
}

const serviceColorMap: Record<string, ThemeColor> = {
  "web-development": "blue",
  "software-development": "indigo",
  "mobile-app-development": "cyan",
  "digital-marketing": "emerald",
  "hosting-infrastructure": "orange",
  automation: "yellow",
  "customer-exp-management": "pink",
  "it-consulting-it-services": "cyan",
};

const capabilityImages: string[] = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400&auto=format&fit=crop&q=60",
];

export default function CapabilitiesRollingSection({
  capabilities,
  serviceSlug,
  heading = "What this service includes",
}: {
  capabilities: CapabilityItem[];
  serviceSlug: string;
  heading?: string;
}) {
  const color = serviceColorMap[serviceSlug] ?? "blue";

  const items = capabilities.map((cap, i) => ({
    id: i + 1,
    title: cap.title,
    description: cap.description,
    src: capabilityImages[i % capabilityImages.length],
    alt: cap.title,
    color,
  }));

  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-20 bg-[#F8FEFF] border-y border-cyan-100/50">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(210,247,255,0.5),transparent_35%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection className="mb-8 text-center">
          <SectionHeading
            eyebrow="Key Capabilities"
            heading={heading}
            centered
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mx-auto max-w-4xl">
            <RollingTextList items={items} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
