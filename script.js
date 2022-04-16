let video = document.getElementById("video")
let controles = document.getElementById("controles")
let volbar = document.getElementById("volbar")
let iconVol = document.getElementById("imageVol")
let playPauseBtn = document.getElementById("playPauseBtn")
let progressBar = document.getElementById("progressBar-percorrido")
let inputPB = document.getElementById("input-progressBar")
let listvideo = document.querySelectorAll(".listvideo")

video.addEventListener("timeupdate", progressBarWidth)
nextVideo = [{
    src: "./assets/videos/DARK.mp4",
    img: "./assets/dark.jpg"
}, {
    src: "assets/videos/TheBoys.mp4",
    img: "./assets/theboys.jpg"
}, {
    src: "assets/videos/brooklyn.mp4",
    img: "./assets/brooklyn-1.jpg"
}, {
    src: "assets/videos/BreakingBad.mp4",
    img: "./assets/766046eb2cc94d19b9fc29123e453868.webp"
}, {
    src: "assets/videos/TheHandmaidTale.mp4",
    img: "./assets/the-handmaids-tale-poster.jpg"
}]

for (let i = 0; i < listvideo.length; i++) {
    listvideo[i].addEventListener("click", function(e) {
        video.setAttribute("src", nextVideo[i].src)
        video.setAttribute("poster", nextVideo[i].img)
    })
}
// opacidade dos comandos
function aparecer() {
    controles.style.opacity = "1"
    controles.style.transition = "0.5s"
}

function sumir() {
    controles.style.opacity = "0"
    controles.style.transition = "0.5s"

}

// barra de progresso 

function progress() {
    let timeCurrent = video.duration * (inputPB.value / 1000)
    video.currentTime = timeCurrent
}

function progressBarWidth() {
    time = video.currentTime * (1000 / video.duration)
    width = time / 10
    progressBar.style.width = `${width}%`

}

// play e pause no botao, e na tela 
function PlayPauseTroca() {
    if (video.paused) {
        playPauseBtn.setAttribute("src", "./assets/outline_pause_circle_black_24dp.png")
        video.play()
    } else {
        playPauseBtn.setAttribute("src", "./assets/outline_play_circle_outline_black_24dp.png")
        video.pause()
    }
}

function playPause() {
    if (video.paused)
        video.play()
    else
        video.pause()
}
// funções dos botões
function voltar() {
    video.currentTime -= 10
}

function avancar() {
    video.currentTime += 10
}

function rapido() {
    video.playbackRate += 0.2
}

function lento() {
    video.playbackRate -= 0.2
}

function telaCheia() {
    video.requestFullscreen()
}

// volume 
function nivelVol() {
    volume = volbar.value / 100
    video.volume = volume
    if (video.volume === 0) {
        imageVol.setAttribute("src", "./assets/outline_volume_off_black_24dp.png")
    } else if (video.volume < 0.2) {
        imageVol.setAttribute("src", "./assets/outline_volume_mute_black_24dp.png")

    } else if (video.volume < 0.6) {
        imageVol.setAttribute("src", "./assets/outline_volume_down_black_24dp.png")

    } else {
        imageVol.setAttribute("src", "./assets/outline_volume_up_black_24dp.png")
    }
}

function mudo() {
    if (video.volume > 0) {
        iconVol.setAttribute("src", "./assets/outline_volume_off_black_24dp.png")
        video.volume = 0
    } else {
        iconVol.setAttribute("src", "./assets/outline_volume_up_black_24dp.png")
        video.volume = 1
    }

}
// trocar o vídeo