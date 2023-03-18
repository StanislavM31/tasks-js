/*
9. Продемонстрируйте пример рекурсии
*/



function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(6));

/* количество вызовов */

function foo(n){
    if(n<1){
        console.log(0);
    } else{
        n--;
        console.log(n);
        foo(n);
    }
}


console.log(foo(10));