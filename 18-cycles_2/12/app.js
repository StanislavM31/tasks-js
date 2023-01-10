/*
Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while
 */

let arr = [2, 5, 9, 15, 0, 4];

let i = arr.length-1;

while(i!==0){
  if(arr[i]!==0 && arr[i]%5==0){
    console.log(arr[i]);
  }
  i--;
}