/*
3. Вы вводите числа в поле для ввода формируя и отображая массив.
Необходимо также отображать только уникальные значения массива
[1, 1, 4, 2, 3, 3] -> [4, 2];
*/

let input = document.querySelector('.input11');
let btn = document.querySelector('button');
let array = document.querySelector('.array');
let uniq = document.querySelector('.uniq');
let arr = [];

btn.addEventListener('click', function(){
    let arrUniq = [];
    arr.push(input.value);

    for(let i =0; i<arr.length; i++){
        if(arr[i-1] != arr[i] && arr[i+1] != arr[i] ){
                arrUniq.push(arr[i]);
        }
    }
    array.innerHTML = `#[ ${arr} ] -> [ ${arrUniq} ]`;
});





