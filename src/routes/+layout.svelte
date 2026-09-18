<script lang="ts">
	import './layout.css';
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import constants from '$lib/constants';

	let { children } = $props();

	const origin = $derived(dev ? page.url.origin : constants.SITE_URL);
	const canonical = $derived(new URL(page.url.pathname, origin).href);
	const ogImage = $derived(`${origin}/og.jpg`);

	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Michael Podolsky',
			jobTitle: 'Software Engineer',
			url: origin,
			image: ogImage,
			email: `mailto:${constants.EMAIL}`,
			address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV' },
			worksFor: { '@type': 'Organization', name: 'West Co.' },
			alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Nevada, Las Vegas' },
			sameAs: [constants.GITHUB_URL, constants.LINKEDIN_URL]
		})
	);
</script>

<svelte:head>
	<title>{constants.SITE_TITLE}</title>
	<meta name="description" content={constants.SITE_DESCRIPTION} />
	<meta name="author" content="Michael Podolsky" />
	<meta name="robots" content="index, follow" />
	<meta name="theme-color" content="#0f1410" />
	<link rel="canonical" href={canonical} />

	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content={constants.SITE_NAME} />
	<meta property="og:title" content={constants.SITE_TITLE} />
	<meta property="og:description" content={constants.SITE_DESCRIPTION} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Michael Podolsky, Software Engineer" />
	<meta property="og:locale" content="en_US" />
	<meta property="profile:first_name" content="Michael" />
	<meta property="profile:last_name" content="Podolsky" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={constants.SITE_TITLE} />
	<meta name="twitter:description" content={constants.SITE_DESCRIPTION} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Static JSON-LD built from constants above; no user input reaches this string. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${jsonLd}</${'script'}>`}
</svelte:head>

{@render children()}
