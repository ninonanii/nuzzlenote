<script>
	import { onMount } from 'svelte'

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
			name: 'Settings',
			path: '/settings'
		}
	]

	onMount(() => {
		pages.forEach((page) => {
			page.active = page.path === window.location.pathname
		})

		pages = pages // trigger reactivity
	})
</script>

<div>
	<ul class="skip-links">
		<li><a href="#main">Skip to main content</a></li>
		<li><a href="#footer">Skip to footer</a></li>
	</ul>
	<nav aria-label="Main navigation">
		{#each pages as page}
			<a href={page.path} aria-current={page.active ? 'page' : null}>{page.name}</a>
		{/each}
	</nav>
</div>

<style>
	.skip-links {
		position: fixed;
		top: 0;
		left: 0;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		background-color: var(--bg-1);
		z-index: var(--layer-skip-link);
		transform: translateY(-100%);
		transition: transform var(--transition);

		/* TODO: fix those links overlaying regular nav on hover*/

		&:focus-within {
			transform: translateY(0);
		}
	}
	.skip-links a {
		padding: var(--size-3);
		color: var(--text-1);
	}

	nav {
		display: flex;
		gap: var(--size-3);
	}
	nav a {
		text-decoration: none;
	}
	nav a[aria-current='page'] {
		text-decoration: underline;
	}
</style>
