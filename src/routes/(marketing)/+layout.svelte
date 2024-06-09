<script>
	import SkipLinks from '$lib/components/skip-links.svelte'
	import Nav from '$lib/components/nav.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<SkipLinks />
<div class="page">
	<Nav />
	<main id="main">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.page {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
