import { writable } from "svelte/store"

interface IGeolocationStore {
	latitude?: number
	longitude?: number
	speed?: number
	accuracy?: number
}

export const geolocation_store = writable<IGeolocationStore>({})
