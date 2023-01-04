/*
14. На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
значение которого имеет вид #name
[“hschool”, “company”] -> [“#hschool”, “#company”]
 */

let n = +prompt("введите кол-во эл-в массива");
let arr = [];
/* let rez = []; */

for (let i = 0; i < n; i++) {
  let temp = prompt("введите элемент массива (строку)");
  arr.push(temp);
}

/* arr.forEach(function (el) {
  rez.push('#' + el);
})
console.log(rez); */

let m = arr.map(function (elem) {
  return '#' + elem;
})
console.log(m);