/*
6. Напишите функцию которая принимает массив чисел и возвращает
произведение всех элементов массива.
*/

function foo(array){
    for (let i = 0; i < 5; i++) {
        const element = Math.floor(Math.random()*100);
        array.push(element);
    }
    console.log(array);
    return array;
}

function foo1(array){
    return array.reduce((a,b)=>a+b,0);
}

let a = [];
let t = foo(a);
console.log(foo1(t));

