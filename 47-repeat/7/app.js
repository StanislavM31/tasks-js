/*
7. Вы вводите числа в поле для ввода формируя и отображая массив.
Необходимо вывести все числа кратные 3
*/

let inputTag = document.querySelector('input');
let btn = document.querySelector('button');
let p = document.querySelector('p');
let arr = [];
let temp = [];

btn.addEventListener('click', ()=>{
  arr.push(inputTag.value);
  let temp = arr.filter(el=> el%3==0);
  p.innerHTML = `[ ${arr} ] %3: ->[ ${temp} ]`;

})

