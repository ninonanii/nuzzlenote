<script>
	import { liveQuery } from 'dexie'
	import { db } from '$lib/scripts/db.js'

	let notes = liveQuery(() => db.notes.toArray())

	console.log('notes', notes)
</script>

<ul class="noteslist">
	{#if $notes}
		{#each $notes as note (note.id)}
			<li>
				<div class="note" data-id={note.id}>
					<h2>{note.title}</h2>
					<p>{@html note.content}</p>
				</div>
			</li>
		{/each}
	{/if}
</ul>
