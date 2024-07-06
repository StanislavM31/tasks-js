/* 
11. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.
*/

const array = [1,2,3,4,5,6,7,8,9]

function foo(array){
    let sum = array.reduce((a,b)=>a+b,0);
    console.log(sum);
}

foo(array)