/*
10. кнопки
*/

let btn_play = document.querySelector('.button_play');
let btn_left = document.querySelector('.button_left');
let btn_right = document.querySelector('.button_right');
let audio = document.querySelector('audio');
let flag = false;
let song = document.querySelector('.name_song');
let author = document.querySelector('.name_author');
let image = document.querySelector('.img');

let playList = [
  {
    image: "./assets/img/агутин.jpg",
    name: "HOP HEY LALALEY",
    author: "Леонид Агутин",
    path: "./assets/music/рингтон - Агутин.mp3"
  },
  {
    image: "./assets/img/omega.jpg",
    name: "Lovin_You",
    author: "Mikkie Repeton",
    path: "./assets/music/рингтон - Lovin_You.mp3"
  },
  {
  image: "./assets/img/img_instasamka.jpg",
  name: "Delay, chto hochy...",
  author: "INSTASAMKA",
  path: "./assets/music/рингтон - INSTASAMKA.mp3"
},
{
  image: "./assets/img/img_sqwz.jpg",
  name: "АУФ",
  author: "SQWOZ BAB",
  path: "./assets/music/рингтон - SQWOZ BAB.mp3"
},
{
  image: "./assets/img/img_nurminskiy.jpg",
  name: "ой, мама",
  author: "Нурминский",
  path: "./assets/music/рингтон - Нурминский.mp3"
}
]
let currentIndexSong = 0;


btn_play.addEventListener('click', function(){
  audio.src = playList[currentIndexSong].path ;

  if(flag==false){
    audio.play();
    flag = true;
    btn_play.textContent = 'STOP';
    //возможности  доступа к DOM: id, к атрибуту, textContent (к тексту)
  } else {
    audio.pause();
    flag = false;
    btn_play.textContent = 'PLAY';
  }
  song.textContent = playList[currentIndexSong].name;
  author.textContent = playList[currentIndexSong].author;
  image.style = `
  background-image: url(${playList[currentIndexSong].image});

  `;
})

btn_left.addEventListener('click', function(){
  if(currentIndexSong==0) return;
  currentIndexSong--;
  audio.src = playList[currentIndexSong].path;
  audio.play();
  btn_play.textContent = 'STOP';
  flag = true;
  song.textContent = playList[currentIndexSong].name;
  author.textContent = playList[currentIndexSong].author;
  image.style = `
  background-image: url(${playList[currentIndexSong].image});

  `;
})
btn_right.addEventListener('click', function(){
  if(currentIndexSong >= playList.length -1) return ;
  currentIndexSong++;
  audio.src = playList[currentIndexSong].path;
  audio.play();
  btn_play.textContent = 'STOP';
  flag = true;
  song.textContent = playList[currentIndexSong].name;
  author.textContent = playList[currentIndexSong].author;
  image.style = `
  background-image: url(${playList[currentIndexSong].image});

  `;
})
