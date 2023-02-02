/*
1. Реализуйте функцию, которая принимает динамичный массив и находит сумму
всех положительных чисел. Добавить проверки
*/


function doArray(){
    let size = prompt('введите массив');
let array = [];
    for (let i = 0; i < size; i++) {
        const element = +prompt('Элемент...');
        array.push(element);
    }
    return array;
}


function count(array) {
    let sum = 0;
    try {
        for (let i = 0; i < array.length; i++) {
            if(array.length<1){
                throw new Error('Массив пуст')
            }
            if(Number.isNaN(array[i])){
                throw new Error('В массиве буква!')
            }
            if(array[i]>0){
                sum+=array[i];
            }
        }
        return sum;

    } catch (error) {
        return error.message;
    }
}

let r = doArray();
console.log(count(r));