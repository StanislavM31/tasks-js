/*
Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.
*/
const value = prompt();

if(isNaN(value)){
    console.log('errror');
} else{
    let n = Math.sqrt(value);
    console.log(n.toFixed());
    console.log(n.toFixed(1));
    console.log(n.toFixed(2));
}

console.log(value ** subvalue);
