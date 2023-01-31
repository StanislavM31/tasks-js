
/*
4. Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
Реализуйте функцию на поиск числа n в данной последовательности используя
рекурсию
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
5 -> 3
10 -> 34
7 -> 8
*/
/* let n_ = +prompt('Введите число для ряда Фибоначчи'); */
let n_ = 5;
let x_ = 1;
/* let y_ =1; */
let i_ = 0;
/* function fibo(n,x,i) {
    x+=x;
    if(i<=n){
        i++;
        console.log(x);
        return fibo(n);
    }
    return x;
}
console.log(fibo(n_, x_, i_)); */
let pro = +prompt('Введите число для ряда Фибоначчи');
function fib(x) {
    let res = (x-2)+(x-1);
    console.log(res);
    return res;
}

fib(pro);
