import React from "react"
import { Sensors } from "../sensors/Sensors"
import { Link } from "react-router-dom"

export const ConnectScreen = ({ add_sensor }) => {
	return (
		<>
			<Link to="/">Back</Link>
			<button onClick={() => add_sensor(Sensors.HEART_RATE)}>Heart Rate</button>
		</>
	)
}
