/*
На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо вывести значения массива без дублирования.
Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
только чисел после каждого введенного элемента.
1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5
*/
const a = prompt("amount of elem");
const arr = [];
let rez = [];

for (let i = 0; i < a; i++) {
  let temp = prompt("enter elem");
  if (!isNaN(temp)) {
    arr.push(+temp);
  }
}

/* for( let i = 0 ; i<arr.length; i++){
    if(!rez.includes(arr[i])){
        rez.push(arr[i]);
    }
} */

/* arr.forEach(function (elem) {
    if(!rez.includes(elem)){
        rez.push(elem);
    }
});
 */

/* rez = arr.filter(function(elem){
    if(!rez.includes(elem)){
        rez.push(elem);
       return true;
    }
}) */



if (rez.length === 0) {
  console.log("empty");
} else {
  console.log(rez);
}
