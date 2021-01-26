<script>
	import { settings_store } from "../stores/settings-store"
	import { geolocation_store } from "../stores/geolocation-store"
	import Map from "../features/Map.svelte"

	if ("geolocation" in navigator) {
		navigator.geolocation.watchPosition(
			(position) => {
				const { latitude, longitude, speed, accuracy } = position.coords

				$geolocation_store = { latitude, longitude, speed, accuracy }
			},
			(error) => {},
			{
				enableHighAccuracy: true
			}
		)
	}
</script>

<div class="w-screen h-screen">
	{#if $settings_store.map_enabled && navigator.onLine}
		<Map />
	{/if}
</div>