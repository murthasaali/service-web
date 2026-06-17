'use client';

import { Calendar, Code, FileText, User, Clock } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const timelineData = [
	{
		id: 1,
		title: 'Planning',
		date: 'Jan 2024',
		content: 'Project planning and requirements gathering phase.',
		category: 'Planning',
		icon: Calendar,
		relatedIds: [2],
		status: 'completed',
		energy: 100,
	},
	{
		id: 2,
		title: 'Design',
		date: 'Feb 2024',
		content: 'UI/UX design and system architecture.',
		category: 'Design',
		icon: FileText,
		relatedIds: [1, 3],
		status: 'completed',
		energy: 90,
	},
	{
		id: 3,
		title: 'Development',
		date: 'Mar 2024',
		content: 'Core features implementation and testing.',
		category: 'Development',
		icon: Code,
		relatedIds: [2, 4],
		status: 'in-progress',
		energy: 60,
	},
	{
		id: 4,
		title: 'Testing',
		date: 'Apr 2024',
		content: 'User testing and bug fixes.',
		category: 'Testing',
		icon: User,
		relatedIds: [3, 5],
		status: 'pending',
		energy: 30,
	},
	{
		id: 5,
		title: 'Release',
		date: 'May 2024',
		content: 'Final deployment and release.',
		category: 'Release',
		icon: Clock,
		relatedIds: [4],
		status: 'pending',
		energy: 10,
	},
];

export default function HowWeWork() {
	return (
		<section id='process' className='py-24 px-6 bg-white text-slate-900'>
			<div className='max-w-7xl mx-auto'>
				<AnimatedSection className='text-center mb-14'>
					<span className='gold-rule mx-auto' aria-hidden='true' />
					<span className='eyebrow'>
						<span className='eyebrow-star' aria-hidden='true'>
							✦
						</span>
						How We Work
					</span>
					<h2
						className='mt-6 font-display font-bold text-slate-900 text-balance'
						style={{
							fontSize: 'clamp(28px, 4vw, 38px)',
							lineHeight: 1.1,
							letterSpacing: '-0.02em',
						}}
					>
						A Process You Can Count On
					</h2>
					<p
						className='mt-4 text-slate-600 max-w-xl mx-auto'
						style={{ fontSize: 17, lineHeight: 1.65 }}
					>
						Every engagement follows the same disciplined four-step process —
						predictable, transparent, and built for outcomes.
					</p>
				</AnimatedSection>

				<div className='grid gap-10 items-start'>
					<AnimatedSection>
						<div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm'>
							<RadialOrbitalTimeline
								timelineData={timelineData}
								theme='light'
							/>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
