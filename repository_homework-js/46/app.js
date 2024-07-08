/* 
6. Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех 
элементов.

*/

const arr = [1,2,3,4,5,6,7,8,9,10];

function foo(array){
    let result;
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum+=element;

    }
    console.log(sum/array.length); 
}

foo(arr);