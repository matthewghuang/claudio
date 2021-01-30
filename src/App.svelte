<script>
	import "./Tailwind.svelte"
	import HomeScreen from "./screens/HomeScreen.svelte"
	import RideScreen from "./screens/RideScreen.svelte"
	import SensorsScreen from "./screens/SensorsScreen.svelte"
	import page from "page"

	let screen_component

	page("/", () => (screen_component = HomeScreen))
	page("/ride", () => (screen_component = RideScreen))
	page("/sensors", () => (screen_component = SensorsScreen))
	page()
</script>

<svelte:component this={screen_component} />
