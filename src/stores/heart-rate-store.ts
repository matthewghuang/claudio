import { writable } from "svelte/store"

interface IHeartRateStore {
	heart_rate?: number
}

export const heart_rate_store = writable<IHeartRateStore>({})
