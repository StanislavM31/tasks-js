/*
3. Найти максимальное и минимальное число динамичного массива. forEach
 */

let l = +prompt("Enter size of array:...");
let arr = [];
for (let i = 0; i < l; i++) {
  arr.push(+prompt("Enter elem of arr..."));
}

let max = arr[0];
let min = arr[0];

arr.forEach(function (el) {
  if (el > max) {
    max = el;
  }
  if (el < min) {
    min=el;
  }
});
console.log(max, min, arr);
