<script lang="ts">
	import constants from '$lib/constants';
</script>

<div
	class="flex w-full flex-col overflow-hidden lg:min-h-[calc(100vh-32px)] xl:max-h-[calc(100vh-32px)]"
>
	<div
		class="flex min-h-0 flex-1 flex-col-reverse items-stretch justify-between lg:flex-col xl:flex-row"
	>
		<div class="flex flex-1 flex-col justify-center gap-5 gutter py-8 lg:gap-12 lg:py-32 xl:py-40">
			<p class="text-gray-300">Software Engineer • Las Vegas, NV</p>
			<div class="flex flex-1 items-center">
				<h1 class="font-serif text-[100px] leading-[0.9] md:text-[150px] lg:text-[180px]">
					Michael<br /> Podolsky
				</h1>
			</div>
			<div class="flex flex-col gap-6">
				<p class="text-xl text-gray-200 md:max-w-3/4">
					Software, built with care, end to end. Consumer apps, internal platforms, and the AI
					systems underneath them.
				</p>
				<div class="flex items-center gap-6 md:gap-8">
					<a href="#work" class="group relative leading-loose">
						Work
						<div
							class="absolute right-0 bottom-0 left-0 h-px bg-surface-accent transition-colors group-hover:bg-gray-200"
						></div>
					</a>
					<a href="#background" class="group relative leading-loose">
						Background
						<div
							class="absolute right-0 bottom-0 left-0 h-px bg-surface-accent transition-colors group-hover:bg-gray-200"
						></div>
					</a>
					<a href="mailto:{constants.EMAIL}" target="_blank" class="group relative leading-loose">
						Email
						<div
							class="absolute right-0 bottom-0 left-0 h-px bg-surface-accent transition-colors group-hover:bg-gray-200"
						></div>
					</a>
				</div>
			</div>
		</div>
		<div
			class="xl:max-w-unset relative aspect-square w-full lg:ml-16 xl:ml-0 xl:aspect-[unset] xl:w-[40%] xl:min-w-[500px] 2xl:min-w-[700px]"
		>
			<img
				src="/portrait.jpeg"
				alt="Michael Podolsky"
				class="absolute inset-0 h-full w-full object-cover object-bottom"
			/>
		</div>
	</div>
</div>
