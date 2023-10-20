//your JS code here. If required.
const audio = document.getElementById('audio');

function playAudio(soundFile) {
    audio.src = `sounds/${soundFile}`;
    audio.play();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}