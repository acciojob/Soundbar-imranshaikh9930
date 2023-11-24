const audio = document.getElementById('audio');

const btn = document.querySelectorAll(".btn");

btn.forEach((btn)=>{

    btn.addEventListener("click",()=>{
        
        const soundFile = btn.getAttribute("data-sound");
        playAudio(soundFile);


    })
})


function playAudio(soundFile) {
    audio.src = `sounds/${soundFile}`;
    audio.play();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}