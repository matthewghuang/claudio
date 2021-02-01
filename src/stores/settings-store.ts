import { writable } from "svelte/store"

interface SettingsStore {
	map_enabled: boolean
}

export const settings_store = writable<SettingsStore>({ map_enabled: true })
