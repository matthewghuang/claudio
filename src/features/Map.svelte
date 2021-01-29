<script>
	import { onMount } from "svelte"
	import "leaflet/dist/leaflet.css"
	import * as leaflet from "leaflet"
	import { geolocation_store } from "../stores/geolocation-store"

	let map_object

	onMount(() => {
		map_object = leaflet.map("map")
		leaflet
			.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
			.addTo(map_object)
	})

	geolocation_store.subscribe((coords) => {
		const { latitude, longitude } = coords

		map_object && map_object.setView([latitude, longitude], 16)
	})
</script>

<div id="map" class="w-full h-full rounded-lg"></div>