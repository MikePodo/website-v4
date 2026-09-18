<script lang="ts">
	import { resolve } from '$app/paths';
	import constants from '$lib/constants';

	const AVAILABILITY = 'Open to full-time roles starting January 2027';

	const LINKS = [
		{ label: 'Email', href: `mailto:${constants.EMAIL}` },
		{ label: 'GitHub', href: constants.GITHUB_URL },
		{ label: 'LinkedIn', href: constants.LINKEDIN_URL },
		{ label: 'Resume', href: resolve('/resume') }
	];
</script>

<footer
	class="flex flex-col gap-12 gutter py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-24"
	id="contact"
>
	<h2 class="max-w-3xl font-serif text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
		{AVAILABILITY}
	</h2>

	<div class="flex flex-col items-start gap-3 lg:items-end">
		{#each LINKS as link (link.href)}
			<!-- External URLs plus an already-resolve()d route; the rule can't see through the array. -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={link.href} target="_blank" rel="noopener" class="group relative leading-loose">
				{link.label}
				<div
					class="absolute right-0 bottom-0 left-0 h-px bg-surface-accent transition-colors group-hover:bg-gray-200"
				></div>
			</a>
		{/each}
	</div>
</footer>
