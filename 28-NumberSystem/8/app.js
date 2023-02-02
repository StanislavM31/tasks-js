/*
8. Реализуйте функцию, принимающую число. Ваша задача – выяснить является ли
число идеальным квадратом. В математике квадратное число или идеальный
квадрат – это целое число, являющееся квадратом целого числа; другими
словами, это произведение некоторого целого числа на самого себя. Если
является, вывести true, в противном случае false. Добавить проверки
3 –> false
25 –> true
49 –> true
*/

let d = prompt('...enter the digit');
function validator(a){
    return isNaN(a);
}
function foo(x){
    try{
        if(validator(x))throw new Error('НЕ ЧИСЛО. *Does NOT fit!');
        
        return Number.isInteger(Math.sqrt(x));
    }
    catch(e){
        return e.message;
    }
}
console.log(foo(d));