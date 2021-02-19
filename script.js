/* 
    3. creer un événement
*/

let keys = document.querySelectorAll('.key');
let audios = document.querySelectorAll('audio')

document.addEventListener('keydown', function(event){
    audios.forEach( audio =>{
        if (event.keyCode == audio.getAttribute("data-key")) {
            audio.play()
            
        }
    })
    keys.forEach( key =>{
        if (event.keyCode == key.getAttribute("data-key")) {
            
            key.classList.add('playing')
            
        }
    })
})
document.addEventListener('keyup', function(event){
    audios.forEach( audio =>{
        if (event.keyCode == audio.getAttribute("data-key")) {
            audio.pause()
            audio.currentTime = 0
        }
    })
    keys.forEach( key =>{
        if (event.keyCode == key.getAttribute("data-key")) {
            // attendre la fin de l'anim avant de remove
            key.classList.remove('playing')
            
        }
    })
})


// function playDrum(letter){
//     const audio = new Audio()
//     audio.src = data.[letter].sound;
//     audio.play();
// }