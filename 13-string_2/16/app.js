/*
16. Пользователь вводит строку. Необходимо посчитать количество гласных (for)
*/

let a = prompt('введите строку');

let arr = [
    "а", "е", "и", "й", "о", "у", "э", "ю", "я"
];

let str = a.split('');
let count = 0;
for(let i=0; i<arr.length; i++){
    for(let j = 0; j<str.length; j++){
        if( arr[i]==str[j]){
            count++;
        }
    }
}
console.log(`кол-во согласных: ${count}`);
