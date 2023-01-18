/*
10. Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает новый объект, где значения – исключительно числа
первоначального объекта. IIFE
*/

let o = {
    'a': 10,
    'b': 'string0',
    'c': 50,
    'd': 'string1',
    'e': +100,
    'f': 'string2',
};


let res = (function (object) {
    let numbers = {};
    for (const key in object) {
        if(typeof object[key] == 'number'){
            numbers[key] = object[key];
        }
    }
    return numbers;
}(o));

console.log(res);