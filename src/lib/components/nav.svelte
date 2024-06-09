<script>
	import { onMount } from 'svelte'
	import { onNavigate } from '$app/navigation'

	let pages = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Pricing',
			path: '/pricing'
		}
	]

	const updateCurrentPage = () => {
		pages.forEach((page) => {
			page.active = page.path === window.location.pathname
		})

		pages = pages // trigger reactivity
	}

	onNavigate(() => {
		updateCurrentPage()
	})

	onMount(() => {
		updateCurrentPage()
	})
</script>

<nav aria-label="Main navigation">
	<ul class="container" aria-label="Pages">
		{#each pages as page}
			<li>
				<a href={page.path} aria-current={page.active ? 'page' : null}>{page.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		margin-block-end: var(--size-3);
		padding: var(--size-3) 0;
		display: flex;
		align-items: start;
		gap: var(--size-3);
		background-color: var(--bg-1);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-3);
	}
	a {
		text-decoration: none;
	}
	a[aria-current='page'] {
		text-decoration: underline;
	}
</style>
