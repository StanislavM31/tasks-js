/*
2. Напишите функцию которая принимает массив чисел и возвращает сумму всех
элементов массива. Добавьте функцию проверки. Написать синтаксис 3 функций
*/

function doArray() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let temp = check(prompt("введите элемент массива"));
    arr.push(+temp);
  }
  return sum(arr);
}

function check(x) {
  while (isNaN(x)) {
    alert("НЕ число!");
    x = prompt("введите число");
  }
  return x;
}
function sum(arr) {
  return arr.reduce((a,b) => {
    return a + b;
  }, 0);
}

console.log(doArray());
