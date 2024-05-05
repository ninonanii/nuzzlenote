// see https://dexie.org/docs/Tutorial/Svelte

import Dexie from 'dexie'

export const db = new Dexie('nuzzlenoteDatabase')

// what to index? rule of thumb: "Are you going to put your property in a where(‘…’) clause? If yes, index it, if not, dont.". see https://dexie.org/docs/Version/Version.stores()
db.version(1).stores({
	notes: '++id, title, content, created, updated'
})
