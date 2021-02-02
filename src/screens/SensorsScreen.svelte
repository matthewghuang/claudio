<script>
	import { heart_rate_store } from "../stores/heart-rate-store"

	const hrm_value_handler = event => {
		// from bluetooth heart rate service spec
		// https://www.bluetooth.com/specifications/specs/
		// in Uint8 array, @1 offset will be the heart rate value
		const hr = event.target.value.getUint8(1)
		$heart_rate_store = hr
	}

	const connect_heart_rate = async () => {
		if ("bluetooth" in navigator) {
			const device = await navigator.bluetooth.requestDevice({
				filters: [{ services: ["heart_rate"] }]
			})
			const server = await device.gatt.connect()
			const service = await server.getPrimaryService("heart_rate")
			const characteristic = await service.getCharacteristic(
				"heart_rate_measurement"
			)
			const notification = await characteristic.startNotifications()
			notification.addEventListener(
				"characteristicvaluechanged",
				hrm_value_handler
			)
			// navigator.bluetooth
			// 	.requestDevice({
			// 		filters: [
			// 			{
			// 				services: ["heart_rate"]
			// 			}
			// 		]
			// 	})
			// 	.then(device => device.gatt.connect())
			// 	.then(server => server.getPrimaryService("heart_rate"))
			// 	.then(service => service.getCharacteristic("heart_rate_measurement"))
			// 	.then(characteristic => characteristic.startNotifications())
			// 	.then(characteristic_notification =>
			// 		characteristic_notification.addEventListener(
			// 			"characteristicvaluechanged",
			// 			hrm_value_handler
			// 		)
			// 	)
		}
	}
</script>

<div class="flex w-screen h-screen justify-center items-center">
	<div class="flex flex-wrap space-y-3 justify-center items-center w-3/5">
		<button class="button" on:click={connect_heart_rate}
			>Connect Heart Rate</button
		>
		<a class="button-blue" href="/">Back</a>
	</div>
</div>

<style>
	.button {
		@apply bg-white p-3 rounded-lg w-full text-center shadow-lg;
	}

	.button-blue {
		@apply bg-blue-100 p-3 rounded-lg w-full text-center shadow-lg;
	}
</style>
