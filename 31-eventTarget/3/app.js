/*
По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за границы кнопки сновка скрывать
*/
let element = document.querySelector('.button');

element.addEventListener('mouseover', function () {
    let paragraph = document.querySelector('p');
    paragraph.innerHTML = 'Hi';
})

element.addEventListener('mouseout', function () {
    let paragraph = document.querySelector('p');
    paragraph.innerHTML = '';
})