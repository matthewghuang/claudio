import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ConnectScreen } from "./screens/ConnectScreen"
import { HomeScreen } from "./screens/HomeScreen"
import { RideScreen } from "./screens/RideScreen"
import { HeartRateSensor } from "./sensors/HeartRateSensor"
import { Sensors } from "./sensors/Sensors"

export const App = () => {
	const [sensor_data, set_sensor_data] = useState({})

	useEffect(() => {
		console.log(sensor_data)
	}, [sensor_data])

	const update_sensor_data = (sensor, new_value) => {
		const new_sensor_data = { ...sensor_data }
		new_sensor_data[sensor] = new_value
		set_sensor_data(new_sensor_data)
	}

	const add_sensor = sensor_type => {
		switch (sensor_type) {
			case Sensors.HEART_RATE: {
				console.log("heart_rate")
				new HeartRateSensor(hr => update_sensor_data(Sensors.HEART_RATE, hr))

				break
			}
		}
	}

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/ride">
					<RideScreen></RideScreen>
				</Route>
				<Route path="/connect">
					<ConnectScreen add_sensor={add_sensor}></ConnectScreen>
				</Route>
				<Route path="/">
					<HomeScreen></HomeScreen>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
