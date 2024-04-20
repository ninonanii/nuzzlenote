// see https://dexie.org/docs/Tutorial/Svelte

import Dexie from 'dexie'

export const db = new Dexie('nuzzlenoteDatabase')
db.version(1).stores({
	notes: '++id, title, content, created, updated'
})
