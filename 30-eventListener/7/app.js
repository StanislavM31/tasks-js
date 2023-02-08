/*
Записать в результат удвоенное значение инпута.
 Добавить проверки
*/

let a = document.querySelector('input');
let b = document.querySelector('button');
let c = document.querySelector('p');



b.addEventListener('click', function(){
    let v = a.value*a.value;
    c.innerHTML = `Результат: ${v}`;
})



