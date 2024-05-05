<script>
	import Accordion from '$lib/components/common/accordion.svelte'
	import faqs from './faqs.json'

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		name: 'Frequently Asked Questions',
		mainEntity: faqs.map(({ question, answer }) => ({
			'@type': 'Question',
			name: question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: answer
			}
		}))
	}

	const structuredDataString = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	)}<\/script>`
</script>

<svelte:head>
	{@html structuredDataString}
</svelte:head>

<h1>About</h1>

<section class="container">
	<header>
		<h2>FAQ</h2>
	</header>

	<ul>
		{#each faqs as faq, i}
			<li>
				<Accordion title={faq.question} open={i === 0}>
					<p>{faq.answer}</p>
				</Accordion>
			</li>
		{/each}
	</ul>
</section>
