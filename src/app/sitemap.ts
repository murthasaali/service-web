import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { services } from '@/data/services';

const BASE = 'https://aibizmod.com';

// Core static routes plus each individual service page
const staticRoutes = [
  '',
  '/about',
  '/blog',
  '/contact',
  '/faq',
  '/services',
  // Dynamically include every service sub‑page
  ...services.map((s) => `/services/${s.id}`),
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
