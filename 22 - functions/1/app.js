/*
1. Сумма элементов массива динамичного массива. reduce
 */

let arr = [];
let l = prompt("Enter size of array");

for (let i = 0; i < l; i++) {
    arr.push (+prompt('Enter elem of arr'));
}

console.log(arr.reduce(function(acc, el) {
    return acc+el;
},0));
