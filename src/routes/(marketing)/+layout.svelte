<script>
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Nav />
<main id="main">
	<slot />
</main>
<Footer />

<style>
</style>
