/*
9. Необходимо по кнопку включать и выключать песню
*/

let btn = document.querySelector('button');
let audio = document.querySelector('audio');
let flag = false;


btn.addEventListener('click', function(){
  audio.src = './music/рингтон - Агутин.mp3';

  if(flag==false){
    audio.play();
    flag = true;
    btn.textContent = 'PLAY';
    //возможности  доступа к DOM: id, к атрибуту, textContent (к тексту)
  } else {
    audio.pause();
    flag = false;
    btn.textContent = 'STOP';
  }
})

