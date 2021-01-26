<script lang="ts">
	import "./Tailwind.svelte"
	import RideScreen from "./screens/RideScreen.svelte"
	import page from "page"

	let screen_component

	page("/ride", () => (screen_component = RideScreen))
	page()
</script>

<svelte:component this={screen_component} />
