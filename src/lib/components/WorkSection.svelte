<script lang="ts">
	import type { WorkEntry } from '$lib/types';

	let { work }: { work: WorkEntry } = $props();
</script>

<section class="flex flex-col gap-8 gutter py-16 lg:gap-12 lg:py-24">
	<h2 class="font-serif text-7xl leading-none md:text-[112px]">{work.company}</h2>

	<div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] lg:gap-16">
		<div class="flex flex-col gap-1 leading-relaxed">
			<p>{work.period}</p>
			<p class="text-gray-300">{work.role}</p>
			{#each work.details ?? [] as detail (detail)}
				<p class="text-gray-300">{detail}</p>
			{/each}
		</div>

		<div class="flex flex-col">
			{#each work.sections as section, i}
				{#if i > 0}
					<div class="my-12 h-px bg-surface-accent"></div>
				{/if}

				<div class="flex flex-col gap-6">
					<h3 class="font-serif text-5xl leading-none">{section.title}</h3>

					{#if section.description}
						<p class="max-w-3xl text-lg leading-relaxed text-gray-200">{section.description}</p>
					{/if}

					{#if section.stats?.length}
						<div class="h-px bg-surface-accent"></div>
						<div class="flex flex-wrap gap-x-16 gap-y-8">
							{#each section.stats as stat}
								<div class="flex flex-col gap-2">
									<p class="font-serif text-5xl leading-none">{stat.value}</p>
									<p class="text-sm text-gray-300">{stat.label}</p>
								</div>
							{/each}
						</div>
						<div class="h-px bg-surface-accent"></div>
					{/if}

					{#if section.highlights?.length}
						<div class="grid gap-x-16 gap-y-10 pt-2 md:grid-cols-2">
							{#each section.highlights as highlight}
								<div class="flex flex-col gap-3">
									<h4 class="font-serif text-xl leading-none">{highlight.title}</h4>
									<p class="leading-relaxed text-gray-300">{highlight.description}</p>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}

			{#if work.stack?.length}
				<p class="mt-14 text-gray-400">{work.stack.join(', ')}</p>
			{/if}
		</div>
	</div>
</section>
