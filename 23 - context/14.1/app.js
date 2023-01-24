/*
14.1 *Вычислите сумму массива целых чисел статичного массива используя рекурсию
*/

const arr = [10,20,30,40,50];
let i = 0;
let s = 0;

function sumArr(array) {
  if(array[i]== undefined){
    return s;
  }
  s+=array[i];
  i++;
  return sumArr(array);
}

console.log(sumArr(arr));