// here are all the actions
function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // STOP THE FUNCTION FROM RUNNING IF THERE ISN'T AN AUDIO ELEMENT FOR THE PRESSED KEY
    audio.play();
    audio.currentTime = 0; //is going to rewind to the start
    key.classList.add("playing");
}
window.addEventListener('keydown',playSound);


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
  
}