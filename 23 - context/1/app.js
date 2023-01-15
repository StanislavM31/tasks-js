/*
1. На входе число n. Напишите функцию, которая переворачивает число.
 */

let x = prompt('Введите число...');

let reverse = element => {
    return element.split("").reverse().join('');
}

function rev(element) {

    return element.split(' ').reverse().join('');
}

console.log(reverse(x));
console.log(rev(x));

