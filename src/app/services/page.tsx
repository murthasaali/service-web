import type { Metadata } from 'next';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = {
	title:
		'Technology Services | Custom Software, Web Development, Mobile Apps | aibizmod',
	description:
		'aibizmod technology services include custom software development, web development, mobile app development, digital marketing, cloud infrastructure, IT consulting, automation, and customer experience management.',
	alternates: { canonical: 'https://aibizmod.com/services' },
	openGraph: {
		title: 'Technology Services | aibizmod',
		description:
			'Comprehensive technology solutions tailored to your business goals — web development, mobile apps, cloud infrastructure, automation, and more.',
		url: '/services',
	},
};

export default function ServicesPage() {
	return <ServicesPageContent />;
}
