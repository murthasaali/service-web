'use client';

import { BrainCircuit, Target, PenTool, Code, ShieldCheck, Megaphone } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { ProcessSection } from '@/components/ui/how-we-do-it-process-overview';

const processItems = [
  {
    icon: BrainCircuit,
    title: 'Brainstorming',
    description: 'Ideas & Concepts',
  },
  {
    icon: Target,
    title: 'Market Strategy',
    description: 'Overall Planning',
  },
  {
    icon: PenTool,
    title: 'Product Design',
    description: 'UI/UX & Prototyping',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Full-Stack Engineering',
  },
  {
    icon: ShieldCheck,
    title: 'Testing & QA',
    description: 'Quality Assurance',
  },
  {
    icon: Megaphone,
    title: 'Release & Marketing',
    description: 'Launch Campaign',
  },
];

export default function HowWeWork() {
  return (
    <AnimatedSection>
      <ProcessSection
        subtitle="How We Work"
        title="A Process <br /> You Can Count On"
        description="We work on a typical matrix of time, effort, and money, following Agile methodologies to deliver exceptional results."
        buttonText="Get a Quote"
        items={processItems}
      />
    </AnimatedSection>
  );
}
