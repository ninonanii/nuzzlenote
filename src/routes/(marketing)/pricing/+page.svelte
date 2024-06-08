<div class="container">
	<h1>Pricing</h1>

	<p>The planned pricing is as follows:</p>
	<p>Choose the option that best fits your needs</p>
</div>

<section class="container">
	<article>
		<h2>Base</h2>
		<p>free</p>
		<ul>
			<li>unlimited notes and spaces</li>
			<li>offline usage</li>
			<li>basic themes</li>
			<li>basic customization</li>
			<li>no ads</li>
		</ul>
	</article>

	<article>
		<h2>Subscription</h2>
		<p>5€ per month / 50€ per year</p>
		<ul>
			<li>Sync between unlimited devices</li>
			<li>End-to-end encryption</li>
			<li>premium themes</li>
			<li>advanced customization</li>
		</ul>
	</article>

	<article>
		<h2>One-Time Purchase</h2>
		<p>One-time payments available</p>
		<ul>
			<li>Enjoy premium features without a subscription</li>
			<li>Pay once for the appropriate duration</li>
			<li>Same features as subscription</li>
		</ul>
	</article>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-3);

		@media (--lg-n-above) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	article {
		padding: var(--size-3);
		border-radius: var(--radius-1);
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-2);
		background-color: var(--bg-1);
		color: var(--text-1);
	}
</style>
