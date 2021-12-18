

charactersArr.forEach( cat => {
    cat.initialize('name', 'description', 'job', 'avatar');
})

const popSound = new Audio('../model/sounds/mouse-on.mp3');
const clickSound = new Audio('../model/sounds/mouse-click.mp3');
const audio = new Audio('../model/sounds/sound.mp3');
audio.volume = 0.03;
audio.loop = true;

const slots = document.querySelectorAll('.avatar-slot');
const btn = document.getElementById("sound-btn");

function pop () {
    popSound.volume = 0.04;
    clickSound.volume = 0.1;

    slots.forEach(slot => {
        slot.addEventListener("mouseover", ()=> {
            if(popSound.paused) {
                popSound.play();
            } 
            else {
                popSound.currentTime = 0;
                popSound.pause;
            }
        })
        slot.addEventListener("click", ()=> {
            clickSound.play();
            clickSound.currentTime = 0;
        })
    })
}
window.addEventListener("mouseover", ()=>{console.log('hi')})
window.onload = pop();

//Criar pedido de permissão para sons
//Levar para a classe
//Se estiver selecionado, nenhum som


let soundOn = false;
btn.addEventListener("click", ()=> {
    if(soundOn == false) {
        btn.setAttribute('src', './model/elements/sound-on.svg')
        audio.play();
        soundOn = true;
    } 
    else {
        btn.setAttribute('src', './model/elements/sound-off.svg')
        audio.pause();
        soundOn = false;
    }
}) 

console.log(
    `All the sounds(except the music), images, template, texts, design and code 
    was made by Drayan Silva Magalhães[YandraDev].`
)