/*
10. Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает новый объект, где значения – исключительно числа
первоначального объекта. IIFE
 */
let obj = {
    'value': 17,
    'valueq': 100,
    'key': 'string',
    'keyq': 'qwerty',
}

(function (object) {
    let arr = [];
    for (const key in object) {
        if(typeof object[key] == 'number'){
            arr.push(key);
        }
    }
    console.log(arr);

}(obj))
