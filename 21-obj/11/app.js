/*
11. На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
объект ключ “avg” со значением среднего арифметического введенных с чисел

*/

let obj = {
  };
let a = +prompt('enter smth');
let b = +prompt('enter smth');


obj.avg = (a+b)/2;

console.log(obj);