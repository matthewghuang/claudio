import { writable } from "svelte/store"

interface ISettingsStore {
	map_enabled: boolean
}

export const settings_store = writable<ISettingsStore>({ map_enabled: true })
