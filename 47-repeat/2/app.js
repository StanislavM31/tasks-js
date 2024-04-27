/*
2. Вы вводите числа в поле для ввода формируя массив.
Необходимо отобразить массив, а также отдельно
все четные элементы этого массива и нечетные
*/

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let array = document.querySelector('.array');
let chet = document.querySelector('.chet');
let nechet = document.querySelector('.nechet');
let everyInp = [];

btn.addEventListener('click', function(){
    everyInp.push(inp.value);
    array.innerHTML = everyInp;
    inp.value = '';
    chet.innerHTML = everyInp.filter(elem=>elem%2==0);
    nechet.innerHTML = everyInp.filter(elem=>elem%2==1);
});

