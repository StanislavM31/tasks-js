/* 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
без повторений -> [1, 2, 3, 4, 5] (for, for of) */

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let rez = [];

for(let i =0; i<arr.length; i++){
  if(!rez.includes(arr[i])){
    rez.push(arr[i]);
  }
}

console.log(rez);