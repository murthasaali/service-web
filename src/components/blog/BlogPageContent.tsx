'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, ChevronRight, Send } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { blogPosts, categories } from '@/data/blog';
import type { BlogPost } from '@/data/blog';

function CategoryBadge({ category }: { category: string }) {
	return (
		<span className='inline-flex rounded-full border border-stone-200 bg-white/85 px-3 py-1 text-xs font-semibold text-stone-600'>
			{category}
		</span>
	);
}

function AuthorLine({ post }: { post: BlogPost }) {
	return (
		<div className='flex min-w-0 items-center gap-3'>
			<div
				className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-[11px] font-bold text-white'
				aria-hidden='true'
			>
				{post.author.initials}
			</div>
			<div className='min-w-0'>
				<p className='truncate text-sm font-semibold text-stone-950'>
					{post.author.name}
				</p>
				<p className='text-xs text-stone-500'>{post.date}</p>
			</div>
		</div>
	);
}

function BlogCard({ post, delay }: { post: BlogPost; delay: number }) {
	return (
		<AnimatedSection delay={delay} className='h-full'>
			<Link
				href={`/blog/${post.slug}`}
				className='group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_22px_55px_rgba(15,23,42,0.09)]'
			>
				<div className='relative aspect-[16/10] overflow-hidden bg-stone-100'>
					<Image
						src={post.image}
						alt={post.imageAlt}
						fill
						sizes='(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'
						className='object-cover transition duration-500 group-hover:scale-[1.03]'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/8' />
					<div className='absolute left-4 top-4'>
						<CategoryBadge category={post.category} />
					</div>
				</div>

				<div className='flex flex-1 flex-col p-6'>
					<h2 className='font-display text-2xl font-normal leading-tight text-stone-950 text-balance transition group-hover:text-[#0F172A]'>
						{post.title}
					</h2>
					<p className='mt-4 line-clamp-3 text-sm leading-7 text-stone-600'>
						{post.excerpt}
					</p>

					<div className='mt-7 flex items-end justify-between gap-4 border-t border-stone-200 pt-5'>
						<AuthorLine post={post} />
						<div className='flex shrink-0 items-center gap-1 text-xs text-stone-500'>
							<Clock size={12} aria-hidden='true' />
							{post.readTime}
						</div>
					</div>

					<span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] transition group-hover:gap-3'>
						Read Article
						<ArrowRight size={15} aria-hidden='true' />
					</span>
				</div>
			</Link>
		</AnimatedSection>
	);
}

export default function BlogPageContent() {
	const [activeCategory, setActiveCategory] = useState<string>('All');
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		if (email.trim()) setSubscribed(true);
	};

	return (
		<>
			<section className='relative overflow-hidden bg-white px-6 pb-16 pt-44 md:pb-20 md:pt-48'>
				<div
					className='pointer-events-none absolute inset-x-0 top-24 h-48 opacity-55'
					style={{
						background:
							'radial-gradient(circle at 50% 15%, rgba(210,247,255,0.55), transparent 36%), linear-gradient(90deg, transparent, rgba(72,127,137,0.12), transparent)',
					}}
					aria-hidden='true'
				/>
				<div className='relative mx-auto max-w-4xl text-center'>
					<AnimatedSection>
						<span className='inline-flex items-center rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 shadow-sm backdrop-blur'>
							aibizmod Journal
						</span>
						<h1
							className='mx-auto mt-7 max-w-3xl font-display font-normal text-[#0F172A] text-balance'
							style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.04 }}
						>
							Practical notes from building a service brand
						</h1>
						<p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg'>
							Field notes on the aibizmod domain, our SEO service journey,
							generative search, and the trust work that happens before traffic
							starts to matter.
						</p>
					</AnimatedSection>
				</div>
			</section>

			<section className='border-t border-stone-200 bg-stone-50 px-6 py-16 md:py-20'>
				<div className='mx-auto max-w-7xl'>
					<div className='mb-10 overflow-x-auto'>
						<div className='flex min-w-max items-center gap-2 pb-1 md:min-w-0 md:flex-wrap'>
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
										activeCategory === category
											? 'bg-[#0F172A] text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)]'
											: 'border border-stone-200 bg-white text-stone-700 hover:border-stone-300'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>

					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
						{visiblePosts.map((post, index) => (
							<BlogCard key={post.slug} post={post} delay={index * 0.06} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
