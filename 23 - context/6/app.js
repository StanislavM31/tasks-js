/*
6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
своих вызовов
*/

function test(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

const foo = test();
foo();
foo();
foo();
foo();
foo();