export const text_to_speech = {
	speak: (text) => {
		const utterance = new SpeechSynthesisUtterance(text)
		window.speechSynthesis.speak(utterance)
	}
}
