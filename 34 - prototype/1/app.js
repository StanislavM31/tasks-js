/*
1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
этого массива
*/

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let avg = document.querySelector('.avg');
let array = document.querySelector('.array');
const arr = [];

btn.addEventListener('click',function(a,b){
    arr.push(+inp.value);
    array.innerHTML = `числа в массиве [${arr}]`;
    inp.value = '';
    let t = arr.reduce(function (a,b){
        return a+b;
    });
    avg.innerHTML = `среднее значение ${t/arr.length}`;
})

