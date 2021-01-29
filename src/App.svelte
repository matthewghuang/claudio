<script lang="ts">
	import "./Tailwind.svelte"
	import RideScreen from "./screens/RideScreen.svelte"
	import page from "page"
	import { text_to_speech } from "./features/text-to-speech"
	import { onMount } from "svelte"

	let screen_component

	page("/ride", () => (screen_component = RideScreen))
	page()

	onMount(() => {
		console.log(text_to_speech.get_voice())
	})
</script>

<svelte:component this={screen_component} />
