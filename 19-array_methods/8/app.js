/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
trur, в противном случае falsr. Evrry, forEach */

let n = prompt("enter count of elements...");
let arr = [];
let arr1 = [];
for (let i = 0; i < n; i++) {
  let temp = prompt();
  /*    while(isNaN(temp=prompt(' give me the element!...:'))){
      alert('мне нужны только числа!')
   } */

  arr.push(temp);
}
console.log(arr);
let rez = arr.every(function (element) {

   return !isNaN(element);
});

console.log(rez);

console.log('== способ через forEach ==');
let c=0;
arr.forEach(function (el) {
   c += Boolean(!isNaN(el));
})
 if(c!==n){
   console.log(false);
 } else{
 console.log(true);
 }
