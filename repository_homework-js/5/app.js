/*
5. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
строки отсортированы по длине.
*/
function foo(arr) {
    return arr.slice().sort((a, b) => a.length - b.length);
}

const string = ["НАПИШИТЕ", "ФУНКЦИЮ,", "КОТОРАЯ", "ПРИНИМАЕТ", "СТРОКУ", "И", "ВОЗВРАЩАЕТ", "ЕЕ,", "НО", "ВСЕ", "БУКВЫ", "ПЕРЕВЕДЕНЫ", "В", "нижний", "РЕГИСТР"];


const result = foo(string);
console.log(result);