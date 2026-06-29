import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogPageContent from '@/components/blog/BlogPageContent';

import StickyFooterLayout from '@/components/layout/StickyFooterLayout';

export const metadata: Metadata = {
	title: 'Blog | Technology Articles & SEO Insights | aibizmod',
	description:
		'aibizmod blog — technology articles on custom software development, web development, digital marketing, cloud infrastructure, and IT consulting strategies.',
	alternates: { canonical: 'https://aibizmod.com/blog' },
	openGraph: {
		title: 'Blog | aibizmod Technology Insights',
		description:
			'Original aibizmod notes on domain launch, SEO service building, generative optimisation, and practical website strategy.',
		url: '/blog',
	},
};

export default function BlogPage() {
	return (
		<>
			<Navbar />
			<StickyFooterLayout footer={<Footer />}>
				<main>
					<BlogPageContent />
				</main>
			</StickyFooterLayout>
		</>
	);
}
