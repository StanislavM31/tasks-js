/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо вывести trur, если хотя бы 1 элемент массива –
число. Somr, forEach */


let arr = [];
let l = prompt('length of arr');


for (let i = 0; i < l; i++) {

    arr.push(+prompt('введите элемент массива'));

}

console.log(
    arr.some(function(elem) {
        if( typeof elem === 'number'){
            return true;
        } else {
            return false
        };
    })
);