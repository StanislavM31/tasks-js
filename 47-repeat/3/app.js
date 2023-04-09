
// 3. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

let input = document.querySelector('input');
let btn = document.querySelector('button');
let array = document.querySelector('.array');
let uniq = document.querySelector('.chet');
let everyInp = [];

btn.addEventListener('click', function(){
    everyInp.push(input.value);
    array.innerHTML = everyInp;
    
})





