/*
8 *Дана таблица c 1 колонкой.
Под таблицей сделайте форму (инпут и кнопка),
с помощью которой можно будет добавить нового значение в таблицу.
*/

let divTag = document.querySelector('.table');
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerHTML = "Push";

document.querySelector('body').append(input, btn);

btn.addEventListener('click',()=>{
    let el = document.createElement('p');
    el.innerHTML = input.value;
    divTag.append(el);
    input.value = '';
})