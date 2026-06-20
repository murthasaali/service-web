'use client';

import { BrainCircuit, Target, PenTool, Code, ShieldCheck, Megaphone } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { ProcessSection } from '@/components/ui/how-we-do-it-process-overview';

const processItems = [
  {
    icon: BrainCircuit,
    title: 'Discovery',
    description: 'Goals, Problems & Ideas',
  },
  {
    icon: Target,
    title: 'Planning',
    description: 'Scope, Timeline & Priorities',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Screens, Flows & Prototypes',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Frontend, Backend & Integrations',
  },
  {
    icon: ShieldCheck,
    title: 'Review',
    description: 'Testing, Fixes & Polish',
  },
  {
    icon: Megaphone,
    title: 'Launch',
    description: 'Go-Live & Handover',
  },
];

export default function HowWeWork() {
  return (
    <AnimatedSection>
      <ProcessSection
        subtitle="How Projects Move"
        title="From First Call <br /> to Launch"
        description="We agree on the goal first, break the work into clear stages, and keep you updated until the project is live and handed over."
        buttonText="Get a Quote"
        items={processItems}
      />
    </AnimatedSection>
  );
}
