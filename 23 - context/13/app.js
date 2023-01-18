/*
13. Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает количество пар ключ / значение. IIFE
 */

let o = {
    'a': 10,
    'b': 'string0',
    'c': 50,
    'd': 'string1',
    'e': 100,
    'f': 'string2',
};

/* function doCount(object){
    let count = 0;
    for (let el in object){
        count++;
    }
    return count;
}

let temp = doCount(o);
console.log(temp); */

let temp = (function(object){
    let count = 0;
    for (let el in object){
        count++;
    }
    return count;
}(o));

console.log(temp);