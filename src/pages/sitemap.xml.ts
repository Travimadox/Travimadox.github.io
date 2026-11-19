import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
export const GET: APIRoute = async ({ site }) => {
  const paths = ['/', '/projects/', '/research/', '/experience/', '/about/', '/contact/', ...(await getCollection('projects')).map(p => `/projects/${p.data.slug}/`)];
  // No invented production domain: populate absolute URLs only when SITE_URL is set.
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${site ? paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('') : ''}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
