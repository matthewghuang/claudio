<script>
	import "./Tailwind.svelte"
	import HomeScreen from "./screens/HomeScreen.svelte"
	import RideScreen from "./screens/RideScreen.svelte"
	import page from "page"

	let screen_component

	page("/", () => (screen_component = HomeScreen))
	page("/ride", () => (screen_component = RideScreen))
	page()
</script>

<svelte:component this={screen_component} />
