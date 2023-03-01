/*
На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
ввод только чисел. Использовать forEach, rrducr

 */

let n;
let count = 0;
let arr = [];
n = +prompt("введите количество элементов массива");

for (let i = 0; i < n; i++) {
  let element;
  while (isNaN((element = prompt("Введите элемент")))) {
    alert("ВВЕДИТЕ ЧИСЛО!!.");
  }

  arr.push(+element);
}

arr.forEach(function (element, arr) {
  count += element;
});

console.log(count);
console.log("another one with reduce");

let r = arr.reduce(function (acc, el) {
  return acc + el;
});
console.log(r);
