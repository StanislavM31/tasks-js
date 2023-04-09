/*
7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
элементов этого массива

 */

let arr= [1, 2, 3, 4, 5];
let sum = 0;
for (let i=0;i<arr.length;i++){
  sum +=arr[i];
}

console.log(sum);
