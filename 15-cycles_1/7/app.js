/*
Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
элементов этого массива
*/

let n = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < n.length; i++) {
    res *= n[i];
}
console.log(res);