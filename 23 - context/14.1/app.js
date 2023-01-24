/*
14.1 *Вычислите сумму массива целых чисел статичного массива используя рекурсию
*/

const arr = [10,20,30,40,50];
let i = 0;
let s = 0;

function sumArr(array, index, sum) {
  if(array[index]== undefined){
    return sum;
  }
  sum+=array[index];
  index++;
  return sumArr(array, index, sum);
}

console.log(sumArr(arr, i, s));
