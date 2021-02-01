export const text_to_speech = {
	speak: (text: string) => {
		const utterance = new SpeechSynthesisUtterance(text)
		window.speechSynthesis.speak(utterance)
	}
}
