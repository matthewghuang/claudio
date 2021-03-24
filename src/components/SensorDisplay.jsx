import React from "react"

export const SensorDisplay = ({ sensor_name, value }) => {
	return (
		<>
			<p>{sensor_name.replace("_", " ").toUpperCase()}</p>
			<p>{value}</p>
		</>
	)
}
