<script lang="ts">
	const EDUCATION = {
		school: 'UNLV',
		details: ['BS Computer Science', 'Expected Dec 2026']
	};

	const SKILLS: { label: string; items: string[] }[] = [
		{ label: 'Languages', items: ['TypeScript', 'Go', 'SQL', 'Swift', 'Python'] },
		{ label: 'Frameworks', items: ['React', 'Next.js', 'Svelte', 'SvelteKit', 'Express', 'Flask'] },
		{
			label: 'Technologies',
			items: [
				'PostgreSQL',
				'GraphQL',
				'Node.js',
				'Capacitor',
				'Tailwind',
				'Git',
				'Figma',
				'Claude Code',
				'Codex'
			]
		}
	];
</script>

<section class="flex flex-col gap-8 gutter py-16 lg:gap-12 lg:py-24" id="background">
	<h2 class="font-serif text-7xl leading-none md:text-[112px]">Background</h2>

	<div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] lg:gap-16">
		<div class="flex flex-col gap-1 leading-relaxed">
			<p>{EDUCATION.school}</p>
			{#each EDUCATION.details as detail (detail)}
				<p class="text-gray-300">{detail}</p>
			{/each}
		</div>

		<div class="flex flex-col gap-12">
			<div class="flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-gray-200">
				<p>
					I taught myself to code during the 2020 shutdown, with the same discipline I'd been
					putting into guitar since I was nine. It wasn't long before I was doing it for a living.
				</p>
				<p>
					I've been at West Co. from the earliest days, through a long run of prototypes and into
					Tangle. It's an online space for living with intention, built alongside founders
					<a
						href="https://en.wikipedia.org/wiki/Evan_Sharp"
						target="_blank"
						rel="noopener"
						class="underline decoration-surface-light underline-offset-4 transition-colors hover:decoration-gray-200"
					>
						Evan Sharp
					</a>
					and
					<a
						href="https://en.wikipedia.org/wiki/Biz_Stone"
						target="_blank"
						rel="noopener"
						class="underline decoration-surface-light underline-offset-4 transition-colors hover:decoration-gray-200"
					>
						Biz Stone
					</a>, and more than two thousand people show up every week. I've taken nearly every core
					screen in the product from the interface all the way down to the database.
				</p>
				<p>
					The best work I've done came from a small team that was driven and kind at the same time.
					People who took the work seriously and put something soulful into it. That's what I want
					next.
				</p>
			</div>

			<dl class="flex flex-col border-t border-surface-accent">
				{#each SKILLS as group (group.label)}
					<div
						class="grid gap-2 border-b border-surface-accent py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.7fr)] sm:gap-8"
					>
						<dt class="text-gray-300">{group.label}</dt>
						<dd>{group.items.join(', ')}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
