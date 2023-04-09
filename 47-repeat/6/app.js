/*
6. При наведении на картинку изменять ее
*/

let img = document.querySelector('img');

img.addEventListener('mouseover', function(){
  img.src = "./H2.png";
})
img.addEventListener('mouseout', function(){
  img.src = "./H1.png";
})