/*
Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
(for)
fullstack => ua

*/

let a = prompt('введите строку на русском');
let c = 'бвгджзклмнпрстфхцчшщ';
let arr1 = [
    "а", "е", "и", "й", "о", "у", "э", "ю", "я"
];
let arr = arr1.join('');
let rez='';
if(isNaN(a)){
    for(let i =0; i<arr.length; i++){
        if(arr.includes(a[i])){
            rez+=a[i];
            console.log(a[i]);
        }
    }
} else{
    console.log('error');
}
console.log(`согласные в этой строке: ${rez}`);


