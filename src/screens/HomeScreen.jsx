import React from "react"
import { Link } from "react-router-dom"

export const HomeScreen = () => {
	return (
		<>
			<Link to="/ride">Ride</Link>
			<Link to="/connect">Connect</Link>
		</>
	)
}
