let music = 
[
    {name :"Darya",
    img :"./image/Darya.jpg",
    audio : new Audio("./music/Darya.mp3")},
    {name :"Poste shir",
    img :"./image/pooste shir.jpg",
    audio : new Audio("./music/poste shir.mp3")},
    {name :"Tangna",
    img :"./image/aa.jpg",
    audio : new Audio("./music/tangna.mp3")}
]
let range = document.querySelector("#time-music")
let pre = document.querySelector("#pre-bts")
let play = document.querySelector("#play-bts")
let next = document.querySelector("#next-bts")
let name1 = document.querySelector("#music-name")
let img = document.querySelector("#img")

let num = 0;
let audio = music[num].audio

function pat(num){
    audio = music[num].audio
    img.src = music[num].img
    name1.innerText =  music[num].name
    range.addEventListener("input",()=>{
       audio.currentTime = range.value
})
}
pat(num)


audio.addEventListener("canplay",()=>{
    Range.max = audio.duration
})
audio.addEventListener("timeupdate",()=>{
   range.value = audio.currentTime
})

play.addEventListener("click",()=>{
    if(audio.paused){
        audio.play() 
        img.style.animationPlayState = "running"; 
        play.classList.replace("fa-play","fa-pause")
    }else{
        audio.pause()
        img.style.animationPlayState = "paused"; 
        play.classList.replace("fa-pause","fa-play")
    }
})

next.addEventListener("click",()=>{draw(next)})
pre.addEventListener("click",()=>{draw(pre)})

function draw(state){
    audio.pause()
    range.value = 0;
    play.classList.replace("fa-pause","fa-play")
    img.style.animationPlayState = "paused"; 
    audio.currentTime = 0;
    if(state == "next"){
        if(num == music.length -1){
            num = 0;
            pat(num)
        }else{
            num += 1
            pat(num)
        }
    }else{
        if(num == 0){
        num = music.length -1;
        pat(num)
    }else{
        num -= 1
        pat(num)
    }}}
