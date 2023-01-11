/*
19. Пользователь вводит число, явдяющееся количеством элементов будущего
массива. Напишите код заполнения массива методом prompt. Проверить каждый
prompt на число (ввод строки, проверка на isNaN)

*/

let a = prompt('enter the digit');
let arr = [];
for (let index = 0; index < a; index++) {
  let element;
  while (isNaN(element=prompt('введите элемент'))) {
    alert('нужно ввести число');
  }
  arr.push(+element);
}

console.log(arr);