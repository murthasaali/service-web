import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';

const BASE = 'https://aibizmod.com';

const staticRoutes = [
  '',
  '/about',
  '/blog',
  '/contact',
  '/faq',
  '/services',
  '/services/automation',
  '/services/customer-exp-management',
  '/services/digital-marketing',
  '/services/hosting-infrastructure',
  '/services/it-consulting-it-services',
  '/services/mobile-app-development',
  '/services/software-development',
  '/services/web-development',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...statics, ...posts];
}
