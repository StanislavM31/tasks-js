/* 15. *Вычислить факториал числа используя рекурсию  */

function doFactorial(n){
    if(n<=1){
        return 1;
    }
    return n*doFactorial(n-1);
}
console.log(doFactorial(5));