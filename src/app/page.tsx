import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyFooterLayout from '@/components/layout/StickyFooterLayout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GlobalPresence from '@/components/sections/GlobalPresence';
import HowWeWork from '@/components/sections/HowWeWork';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
	title: { absolute: 'aibizmode | Intelligent Tech Services' },
	description:
		'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
	openGraph: {
		title: 'aibizmode | Intelligent Tech Services',
		description:
			'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
		url: '/',
	},
};

export default function Home() {
	return (
		<>
			<Navbar />
			<StickyFooterLayout footer={<Footer />}>
				<main>
					<HeroSection />
					<ServicesGrid />
					<WhyChooseUs />
					<GlobalPresence />
					<HowWeWork />
					<Testimonials />
					<FAQSection />
				</main>
			</StickyFooterLayout>
		</>
	);
}

