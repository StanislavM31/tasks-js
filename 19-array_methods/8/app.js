
/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
trur, в противном случае falsr. Evrry, forEach */

let arr = [];

let n = prompt('count of elements...');

for (let i =0; i<n; i++){
    arr.push(+prompt('enter the element'));
}




let rez = arr.every(function (el) {
     if(typeof el == 'number'){
        return true;
     } else {
        return false;
     }
});

console.log(rez);