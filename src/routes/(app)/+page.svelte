<script>
	import Editor from '$lib/components/editor.svelte'
	import Noteslist from '$lib/components/noteslist.svelte'
</script>

<div class="container">
	<h1>Welcome to Nuzzlenote</h1>
	<p>offline-first, customizable cozy writing space</p>
	<p>check out <a href="/about">about us page</a></p>

	<Editor />
	<Noteslist />
</div>

<style>
</style>
