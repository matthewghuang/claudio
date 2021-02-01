import { writable } from "svelte/store"

interface GeolocationStore {
	latitude?: number
	longitude?: number
	speed?: number
	accuracy?: number
}

export const geolocation_store = writable<GeolocationStore>({})
