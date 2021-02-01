import { writable } from "svelte/store"

interface HeartRateStore {
	heart_rate?: number
}

export const heart_rate_store = writable<HeartRateStore>({})
