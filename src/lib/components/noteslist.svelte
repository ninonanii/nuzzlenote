<script>
	import { liveQuery } from 'dexie'
	import { db } from '$lib/scripts/db.js'

	// get all notes except the active note
	let notes = liveQuery(() =>
		db.notes
			.where('id')
			.notEqual(db.activeNoteId ?? '')
			.toArray()
	)

	// TODO: make activeNoteId work
	console.log('notes', notes, 'activeNoteId', db.activeNoteId)

	const setNoteActive = (id) => {
		db.activeNoteId = id

		console.log('setNoteActive', db.activeNoteId)
	}
</script>

<ul class="noteslist">
	{#each $notes || [] as note (note.id)}
		<li>
			<article class="note" data-id={note.id}>
				<h2>{note.title}</h2>
				<p>{@html note.content}</p>
				<button aria-label="Edit" on:click={() => setNoteActive(note.id)} />
			</article>
		</li>
	{/each}
</ul>

<style>
	.noteslist {
		max-height: 100dvh;
		overflow-y: auto;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-3);
	}

	.note {
		position: relative;
		border: 1px solid var(--border-color);
		border-radius: var(--radius-1);
		padding: var(--size-3);
	}

	.note > button {
		position: absolute;
		inset: 0;
	}
</style>
