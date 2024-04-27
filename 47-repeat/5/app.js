// 5. У вас есть 3 инпута. Необходимо
// вывести в результат конкатенацию всех инпутов

let input1 = document.querySelector('.inp1');
let input2 = document.querySelector('.inp2');
let input3 = document.querySelector('.inp3');
let btn = document.querySelector('button');
let res = document.querySelector('.result');

btn.addEventListener('click', function(){
  res.innerHTML = input1.value+input2.value+input3.value;
})