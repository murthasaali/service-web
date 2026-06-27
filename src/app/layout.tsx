import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';

const generalSans = localFont({
  src: [
    { path: './fonts/GeneralSans-Semibold.woff2', weight: '600' },
    { path: './fonts/GeneralSans-Bold.woff2', weight: '700' },
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

const entityGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aibizmod.com/#organization',
      name: 'aibizmod Ltd.',
      url: 'https://aibizmod.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://aibizmod.com/#logo',
        url: 'https://aibizmod.com/favicon.ico',
        contentUrl: 'https://aibizmod.com/favicon.ico',
      },
      description:
        'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
      email: 'hello@aibizmod.com',
      telephone: '+442079460958',
      areaServed: [
        { '@type': 'City', name: 'London' },
        { '@type': 'City', name: 'New York' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Singapore' },
        { '@type': 'City', name: 'Sydney' },
      ],
      foundingDate: '2019',
      knowsAbout: [
        'Web Development',
        'Custom Software Development',
        'Mobile App Development',
        'Digital Marketing',
        'Cloud Hosting and Infrastructure',
        'Business Process Automation',
        'Customer Experience Management',
        'IT Consulting',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aibizmod.com/#website',
      url: 'https://aibizmod.com',
      name: 'aibizmod',
      description:
        'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
      publisher: { '@id': 'https://aibizmod.com/#organization' },
      inLanguage: 'en-GB',
    },
  ],
};

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: {
		default: 'aibizmod | Intelligent Tech Services',
		template: '%s | aibizmod',
	},
	description:
		'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
	keywords: ['tech services', 'web development', 'mobile apps', 'cloud', 'automation', 'digital marketing'],
	metadataBase: new URL('https://aibizmod.com'),
	openGraph: {
		type: 'website',
		locale: 'en_GB',
		siteName: 'aibizmod',
		title: 'aibizmod | Intelligent Tech Services',
		description:
			'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'aibizmod | Intelligent Tech Services',
		description:
			'End-to-end technology services for modern businesses — web development, mobile apps, digital marketing, cloud infrastructure, and automation.',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${inter.variable} ${generalSans.variable}`}>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph) }}
				/>
			</head>
			<body className='font-sans antialiased bg-canvas text-ink'>
				<SmoothScroll>
					{children}
				</SmoothScroll>
			</body>
		</html>
	);
}
