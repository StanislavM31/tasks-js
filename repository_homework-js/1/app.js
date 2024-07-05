/* 1. Напишите функцию, которая принимает массив чисел и возвращает новый массив с
удвоенными значениями элементов исходного массива.
*/
function makeDoubled(arr) {
    return arr.map(function(x) {
        return x * 2;
    });
}

const array = [1, 2, 3, 4, 5];
const new_array = makeDoubled(array);


console.log(new_array); 
