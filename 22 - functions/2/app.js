/* 2. Найти максимальное число динамичного массива. filter  */



let l = +prompt("Enter size of array");
let arr = [];
for (let i = 0; i < l; i++) {
  arr.push(+prompt("Enter elem of arr"));
}

let max = arr[0];

arr.forEach(function (el) {
  if (el > max) {
    max = el;
  }
});
console.log(max, arr);
