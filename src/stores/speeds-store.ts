import { writable } from "svelte/store"

export const speeds_store = writable<Array<Number>>([])
