/*
Напишите функцию, которая принимает два параметра: строку и букву. Функция
должна подсчитывать количество вхождений указанной буквы в строке. Добавить
проверки
*/

let a = 'hanna';
let b = 'a';

function find (params, symb) {
    let rez = 0;
    for (let i = 0; i < params.length; i++) {
        if(params[i]==symb){
            rez++;
        }
    }
    return rez;
}
let per = find(a,b);

console.log('count: ', per);