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

<div class="flex flex-col w-full h-screen p-3 space-y-3 justify-center bg-gray-100">
	<div class="flex-initial h-24 p-3 shadow-lg rounded-lg bg-white">
		<p>SPEED</p>
		<p class="font-mono text-2xl">0</p>
	</div>

	<div class="flex-initial h-24 p-3 shadow-lg rounded-lg bg-white">
		<p>HEART RATE</p>
		<p class="font-mono text-2xl">0</p>
	</div>

	{#if $settings_store.map_enabled && navigator.onLine}
		<div class="flex-1 shadow-lg">
			<Map />
		</div>
	{/if}
</div>