/*
На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
поиска и замены (2 способа)
*/

let str = prompt('enter string');

if(isNaN(str)){
    console.log(str.split(`@`).join(' '));
    console.log(str.replaceAll(`@`, `!`));
} else {
    console.log(`error`);
}

let str1 = prompt('enter another string');

