/*
5. Создать массив гласных из динамичного массива. Filter
 */
let l = +prompt("Enter array length array");
let arr = [];
let vowels = 'аеийоуэюя';
let rez=[];
for (let i = 0; i < l; i++) {
  arr.push(prompt("Enter elem of arr (БУКВА)"));
}
vowels = vowels.split('');
arr.forEach(function(element, i){
  rez = vowels.filter(function (el) {
    if (element==el) {
      return el;
    }
});
});
console.log(rez, arr);