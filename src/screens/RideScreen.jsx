import React from "react"
import { Link } from "react-router-dom"
import { SensorDisplay } from "../components/SensorDisplay"

export const RideScreen = ({ sensor_data }) => {
	return (
		<>
			<Link to="/">Back</Link>
			{Object.entries(sensor_data).map(([key, value]) => (
				<SensorDisplay
					key={key}
					sensor_name={key}
					value={value}
				></SensorDisplay>
			))}
		</>
	)
}
