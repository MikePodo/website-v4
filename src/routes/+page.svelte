<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Vanta from '$lib/components/Vanta.svelte';
	import Work from '$lib/components/Work.svelte';
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex min-h-screen w-full flex-col overflow-x-hidden">
	<Vanta />
	<Hero />
	<div class="hr"></div>
	<Work />
	<Background />
	<div class="hr"></div>
	<Footer />
</div>
