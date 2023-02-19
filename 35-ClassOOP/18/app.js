/*
18. Пользователь вводит число, явдяющееся количеством элементов будущего
массива. Напишите код заполнения массива методом prompt.
*/

let a = prompt('enter the digit');
let arr = [];
for (let index = 0; index < a; index++) {
  const element = prompt('введите элемент');
  arr.push(element);
}

console.log(arr);