/*
10. кнопки
*/

let btn_play = document.querySelector('.button_play');
let btn_left = document.querySelector('.button_left');
let btn_right = document.querySelector('.button_right');
let audio = document.querySelector('audio');
let flag = false;
let author = document.querySelector('.author');
let image = document.querySelector('.img');

let playList = [{
  image: "./assets/img/img1.jpg",
  author: "INSTASAMKA",
  name: "рингтон - INSTASAMKA",
  path: "./assets/music/рингтон - INSTASAMKA.mp3"
},
{
  image: "./assets/img/img2.jpg",
  author: "Mikkie Repeton",
  name: "рингтон - Lovin_You",
  path: "./assets/music/рингтон - Lovin_You.mp3"
},
{
  image: "./assets/img/img3.jpg",
  author: "SQWOZ BAB",
  name: "рингтон - Sqwz Bab",
  path: "./assets/music/рингтон - SQWOZ BAB.mp3"
},
{
  image: "./assets/img/img1.jpg",
  author: "Лнонид Агутин",
  name: "рингтон - Л.Агутин",
  path: "./assets/music/рингтон - Агутин.mp3"
},
{
  image: "./assets/img/img2.jpg",
  author: "Нурминский",
  name: "рингтон - Нурминский",
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
  author.textContent = playList[currentIndexSong].author;
  image.style = `
  background-image: url(${playList[currentIndexSong].image});
  background-size: contain;
  width:300px;
  height:300px;
  `;
})

btn_left.addEventListener('click', function(){
  if(currentIndexSong==0) return;
  currentIndexSong--;
  audio.src = playList[currentIndexSong].path;
  audio.play();
  btn_play.textContent = 'STOP';
  flag = true;
  author.textContent = playList[currentIndexSong].author;
  image.style = `
  background-image: url(${playList[currentIndexSong].image});
  background-size: contain;
  width:300px;
  height:300px;
  `;
})
btn_right.addEventListener('click', function(){
  if(currentIndexSong >= playList.length -1) return ;
  currentIndexSong++;
  audio.src = playList[currentIndexSong].path;
  audio.play();
  btn_play.textContent = 'STOP';
  flag = true;
  author.textContent = playList[currentIndexSong].author;
  image.style = `
  background-image: url(${playList[currentIndexSong].image});
  background-size: contain;
  width:300px;
  height:300px;
  `;
})
