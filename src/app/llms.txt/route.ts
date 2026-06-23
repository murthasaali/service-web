// EXPERIMENTAL — maintain this file alongside src/app/sitemap.ts.
// When routes are added or removed from the sitemap, update this file too.

import { blogPosts } from '@/data/blog';

const BASE = 'https://aibizmod.com';

function buildContent(): string {
  const blogUrls = blogPosts
    .map((post) => `${BASE}/blog/${post.slug}`)
    .join('\n');

  return `# aibizmod

aibizmod Ltd. is a technology services firm that designs and builds web platforms, mobile applications, custom software, cloud infrastructure, business process automation, digital marketing systems, and customer experience tools for businesses of every size. The company is based in London and serves clients across the UK, USA, India, Singapore, and Australia. Contact: hello@aibizmod.com

## Core pages

${BASE}
${BASE}/about
${BASE}/services
${BASE}/contact
${BASE}/faq
${BASE}/blog

## Service pages

${BASE}/services/web-development
${BASE}/services/software-development
${BASE}/services/mobile-app-development
${BASE}/services/digital-marketing
${BASE}/services/hosting-infrastructure
${BASE}/services/automation
${BASE}/services/customer-exp-management
${BASE}/services/it-consulting-it-services

## Blog posts

${blogUrls}
`;
}

export function GET(): Response {
  return new Response(buildContent(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
