/* Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
элементов этого массива. */
const arr = [2, 3, 4, 5];
let rez=1;
/*
for(let i=0; i<arr.length; i++){
    rez *= arr[i];
}
console.log(rez);
 */

let i=0;

do{
    rez *= arr[i];
    i++;
} while ( i<arr.length);
console.log('rez:',rez);
