/*
Добавьте картинку на страницу. При наведении на картинку мышкой необходимо ее изменять на другую картинку.
Но как только мышка снова отходит в сторону, то возвращается первая картинка
*/

let img = document.querySelector('.img');

img.addEventListener('mouseover', function(){
    this.style = `background-image: url(./assets/hs-2.png)`
})
img.addEventListener('mouseout', function(event){
    event.target.style = `background-image: url(./assets/hs-1.png)`
})