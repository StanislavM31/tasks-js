/*
.На вход программе подается строка, где каждое слово заканчивается “_”.
Программа должна убрать “_” и первую букву каждого слова (помимо первого),
преобразовать в верхний регистр (for)
*/

const str = 'hello_ my_ little_ js-lover_';
console.log(str);

let finalString = "";
let t = str.split(' ');
let temp = ' ';

for( let i=0; i<t.length; i++){
    
    for (let j = 0; j <t[i].length; j++){
        if(t[i]==='_');

    }
}

