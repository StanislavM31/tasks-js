/*
13. Напишите функцию, которая принимает строку и возвращает true, если строка является 
палиндромом, и false в противном случае.
*/
function foo(str) {

    return str == str.split('').reverse().join('');
}

const string1 = "сделать дз";
const string2 = "anna";

const result = foo(string2);
console.log(result);
