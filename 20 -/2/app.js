/* 2. Найти максимальное число динамичного массива. filter  */

let arr = [2, 3, 4, 100, 2, 500, 17, 1];
/* let l = prompt("Enter size of array"); */

/* for (let i = 0; i < l; i++) {
  arr.push(+prompt("Enter elem of arr"));
} */

let max = arr[0];

arr.forEach(function (el) {
  if (el > max) {
    max = el;
  }
});
console.log(max, arr);
