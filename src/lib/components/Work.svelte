<script lang="ts">
	import WorkSection from '$lib/components/WorkSection.svelte';
	import type { WorkEntry } from '$lib/types';

	const WORK: WorkEntry[] = [
		{
			company: 'West Co.',
			period: 'Aug 2022 — Present',
			role: 'Software Engineer',
			details: [],
			sections: [
				{
					title: 'Tangle',
					description:
						'An online space for living with intention, built alongside founders Evan Sharp and Biz Stone. I architected significant portions of the stack and data model, and built the core product flows end to end.',
					stats: [
						{ value: '2,000+', label: 'Weekly active users' },
						{ value: '20,000+', label: 'Weekly core actions' },
						{ value: 'iOS & Android', label: 'Shipped to both stores' }
					],
					highlights: [
						{
							title: 'Lifeguide',
							description:
								'An LLM coaching agent written in Go on the Anthropic API — multi-turn tool calling, persisted conversations, background fact extraction with supersession, image generation, and a Svelte chat interface.'
						},
						{
							title: 'Interview engine',
							description:
								'A pluggable interview system with per-kind handlers, type-safe argument validation, and persisted incremental state — six distinct experiences on one substrate, with funnel analytics and push-to-talk speech recognition.'
						},
						{
							title: 'Native mobile',
							description:
								'Launched and owned both apps on Capacitor, including custom native camera and media plugins, universal deep links, and the App Store and Play Store releases.'
						},
						{
							title: 'Foundations',
							description:
								'Authentication, onboarding, the social graph, user tracking, and product analytics.'
						}
					]
				},
				{
					title: 'Earlier prototypes',
					highlights: [
						{
							title: 'happiness.science',
							description:
								'A Next.js and Express application for delivering spiritual practices, with user accounts, personalized content access, and administrative publishing views.'
						},
						{
							title: 'Practice Generator',
							description:
								'A Flask app using early GPT-3.5-family models to help writers draft practices, with authoring tools, review workflows, and an approval pipeline into production.'
						}
					]
				}
			],
			stack: [
				'TypeScript',
				'Go',
				'Svelte',
				'SvelteKit',
				'Next.js',
				'Express',
				'Flask',
				'Capacitor',
				'PostgreSQL',
				'Anthropic/OpenAI APIs',
				'GCP'
			]
		},
		{
			company: 'Vantage Discovery',
			period: 'Jul 2023 — Feb 2024',
			role: 'Software Engineer',
			details: ['Acquired by Shopify'],
			sections: [
				{
					title: 'ATC',
					description:
						"An internal engineering platform for managing and monitoring Vantage's architecture. I designed and built it alone, end to end.",
					highlights: [
						{
							title: 'Observability',
							description:
								'Unified health, load, and instance monitoring with drill-down diagnostics across services.'
						},
						{
							title: 'Customer management',
							description: 'Administrative tooling for customer accounts and configuration.'
						},
						{
							title: 'Data ingestion',
							description:
								"File conversion tooling across customer formats, transforming into Vantage's schema for embedding ingestion."
						}
					]
				}
			],
			stack: ['Python', 'Java', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'OpenAI API']
		}
	];
</script>

<div class="flex w-full flex-col" id="work">
	{#each WORK as work (work.company)}
		<WorkSection {work} />
		<div class="hr"></div>
	{/each}
</div>
