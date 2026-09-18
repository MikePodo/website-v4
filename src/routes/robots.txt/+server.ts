import type { RequestHandler } from './$types';
import constants from '$lib/constants';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = `User-agent: *
Allow: /

Sitemap: ${constants.SITE_URL}/sitemap.xml
`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
