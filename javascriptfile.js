window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key);
     if(!audio) return;
    
     key.classList.add("playing")
     audio.play();
 });
 function removeTransition(e){
     if(e.propertyName != 'transform') return;
     /* console.log(e) */
     this.classList.remove("playing")
 }
 const key = document.querySelectorAll(".key");
 key.forEach(key => key.addEventListener('transitionend',removeTransition))
