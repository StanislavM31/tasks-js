/*
11. Напишите функцию, которая при каждом вызове своего возвращаемого значения
будет генерировать и возвращать рандомное число
*/

let i = 0;

function foo(x){
    while(i<x){
        i++;
        console.log(Math.floor(Math.random()*100));
        return foo(x);
    }
}

foo(5);