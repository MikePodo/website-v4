<script lang="ts">
	import { onMount } from 'svelte';

	interface VantaEffect {
		destroy(): void;
		setOptions(opts: Record<string, unknown>): void;
		resize(): void;
	}

	const OPACITY = 0.3;

	let container: HTMLDivElement;

	onMount(() => {
		let effect: VantaEffect | undefined;
		let cancelled = false;

		const mobile = window.matchMedia('(max-width: 768px)');

		const init = async () => {
			const [THREE, vantaModule] = await Promise.all([
				import('three'),
				import('vanta/dist/vanta.net.min')
			]);
			if (cancelled) return;

			const NET =
				typeof vantaModule.default === 'function'
					? vantaModule.default
					: vantaModule.default.default;

			effect = NET({
				THREE,
				el: container,
				mouseControls: !mobile.matches,
				touchControls: false,
				gyroControls: false,
				minHeight: 200,
				minWidth: 200,
				scale: 1,
				scaleMobile: 1,
				color: 0x3a4436,
				backgroundColor: 0x0f1410,
				points: 15,
				maxDistance: 20,
				spacing: mobile.matches ? 24 : 16,
				showDots: true
			});
		};

		const onMediaChange = (e: MediaQueryListEvent) => {
			effect?.setOptions({ mouseControls: !e.matches, spacing: e.matches ? 24 : 16 });
		};
		mobile.addEventListener('change', onMediaChange);

		init();

		return () => {
			cancelled = true;
			mobile.removeEventListener('change', onMediaChange);
			effect?.destroy();
		};
	});
</script>

<div
	bind:this={container}
	class="pointer-events-none fixed inset-0 -z-10"
	style:opacity={OPACITY}
	aria-hidden="true"
></div>
