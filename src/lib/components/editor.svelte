<script>
	import { onMount } from 'svelte'
	import { db } from '$lib/scripts/db'

	// db structure
	/* db.version(1).stores({
	notes: '++id, title, content, created, updated'
	}) */

	// props
	export let id = db.activeNoteId || null

	// refs
	let editorTitle = ''
	let editorContent = null

	const onContentInput = () => {
		console.log('content input', id, db.activeNoteId)
		// save content to db for current or new note
		if (db.activeNoteId) {
			db.notes.update(db.activeNoteId, { content: editorContent.innerHTML, updated: Date.now() })
		} else {
			db.notes
				.add({
					title: editorTitle,
					content: editorContent.innerHTML,
					created: Date.now(),
					updated: Date.now()
				})
				.then((newId) => {
					// update id for new note
					db.activeNoteId = newId
					console.log('new note id', newId, db.activeNoteId)
				})
		}
	}

	onMount(() => {
		// get current note if id is provided, otherwise create a new note
		if (db.activeNoteId) {
			db.notes.get(db.activeNoteId).then((note) => {
				editorTitle = note.title
				editorContent.innerHTML = note.content
			})
		} else {
			editorTitle = ''
			editorContent.innerHTML = ''
		}

		// subscribe to db changes
		/* db.notes.hook('updating', onContentInput)
		db.notes.hook('deleting', () => {
			editorTitle = ''
			editorContent.innerHTML = ''
		}) */
	})
</script>

<div class="editor">
	<div class="toolbar">
		<button>bold</button>
		<button>italic</button>
		<button>underline</button>
	</div>
	<input type="text" placeholder="Title" bind:value={editorTitle} />
	<div contenteditable class="content" bind:this={editorContent} on:input={onContentInput}></div>
</div>

<style>
	.content {
		width: 50ch;
		max-width: 100%;
		min-height: 300px;
		border: 1px solid var(--border-color);
		border-radius: var(--radius-1);
		font-size: var(--size-3);
		line-height: var(--size-4);
		font-family: var(--font-family-mono);
		padding: var(--size-3);

		@media (--md-n-above) {
			font-size: var(--size-4);
			line-height: var(--size-5);
		}
	}
</style>
