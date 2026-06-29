import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactPageContent from '@/components/contact/ContactPageContent';

import StickyFooterLayout from '@/components/layout/StickyFooterLayout';

export const metadata: Metadata = {
	title: 'Contact aibizmod | Get a Technology Consultation',
	description:
		"Contact aibizmod for a free technology consultation. Tell us about your project — web development, custom software, mobile apps, or IT consulting. We'll respond within 24 hours.",
	alternates: { canonical: 'https://aibizmod.com/contact' },
	openGraph: {
		title: 'Contact aibizmod | Technology Services',
		description:
			"Tell us about your project and we'll get back to you within 24 hours.",
		url: '/contact',
	},
};

export default function ContactPage() {
	return (
		<>
			<Navbar />
			<StickyFooterLayout footer={<Footer />}>
				<main>
					<ContactPageContent />
				</main>
			</StickyFooterLayout>
		</>
	);
}
