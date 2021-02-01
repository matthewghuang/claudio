<script>
	import { settings_store } from "../stores/settings-store"
	import { geolocation_store } from "../stores/geolocation-store"
	import { onMount } from "svelte"
	import Map from "../features/Map.svelte"

	const hrm_value_handler = (event) => {
		console.log(event)
	}

	onMount(() => {
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

		if ("bluetooth" in navigator) {
			navigator.bluetooth
				.requestDevice({
					filters: [
						{
							services: ["heart_rate"]
						}
					]
				})
				.then((device) => device.gatt.connect())
				.then((server) => server.getPrimaryService("heart_rate"))
				.then((service) => service.getCharacteristic("heart_rate_measurement"))
				.then((characteristic) => characteristic.startNotifications())
				.then((characteristic_notification) =>
					characteristic_notification.addEventListener(
						"characteristicvaluechanged",
						hrm_value_handler
					)
				)
		}
	})
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