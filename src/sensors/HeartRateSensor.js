export class HeartRateSensor {
	constructor(cb) {
		this.cb = cb
		this.init()
	}

	async init() {
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
			notification.addEventListener("characteristicvaluechanged", event => {
				const hr = event.target.value.getUint8(1)
				this.cb(hr)
			})
		} else throw "bluetooth is not supported"
	}
}
