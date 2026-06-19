import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';

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
		<html lang='en' className={inter.variable}>
			<head>
				{/* General Sans — served via CDN. Swap to next/font/local + woff2 for production. */}
				<link rel='preconnect' href='https://api.fontshare.com' />
				<link
					href='https://api.fontshare.com/v2/css?f[]=general-sans@600,700&display=swap'
					rel='stylesheet'
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
