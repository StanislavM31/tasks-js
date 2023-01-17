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
    'e': 100,
    'f': 'string2',
}

function doValues(obj) {
    let arr = [];
    for (const key in obj) {
        if(typeof obj[key] == 'number'){
            arr.push(obj[key]);
        }
    }

    return arr;
};

console.log(doValues(o));;