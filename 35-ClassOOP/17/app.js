/*
17. Дано предложение и количество раз которое его надо повторить. Напишите
программу, которая повторяет данное предложение нужное количество раз.
*/

let times;

while(isNaN(times = prompt('склько раз повторим предолжение?...'))){
  alert('Введите число');
}
console.log(typeof times);


let str = prompt('введите предложение...');
console.log(str.repeat(times));