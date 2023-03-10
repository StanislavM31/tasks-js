/*
5. Напишите функцию, которая принимает массив чисел и возвращает новый
массив, состоящий из четных чисел. Добавьте функцию проверки
*/
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function foo(array){
    let i=0;
    let res = [];
    while(i<=array.length){
        if(array[i]%2==0){
            res.push(array[i]);
        }
        i++;
    }
    console.log(res);
}

foo(arr);

