const button = document.querySelector("button");
const textArea = document.querySelector("textarea");
const speech = new SpeechSynthesisUtterance();


button.addEventListener("click", () => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
})