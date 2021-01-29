export const text_to_speech = {
	get_voice: () => {
		const voices = window.speechSynthesis.getVoices()

		const english_voices = voices.filter((voice) => voice.lang === "en-US")
		const default_voices = english_voices.filter((voice) => voice.default)

		return default_voices[0]
	}
}
