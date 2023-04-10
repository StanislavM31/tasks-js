/*
8. Необходимо по нажатию на кнопку включать музыку
 */

let btn = document.querySelector('button');
let audio = document.querySelector('audio');

btn.addEventListener('click', function(){
  audio.src = './music/рингтон - Агутин.mp3';
  audio.play();
  //возможности  доступа к DOM: id, к атрибуту, textContent (к тексту)
})