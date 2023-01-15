/*
4. Напишите функцию, которая принимает массив чисел и находит минимальное и
максимальное числа соответственно. Добавить проверки на ввод и если значения
массива не соответствуют условию задания, вывести сообщение об ошибке.
*/

let arr = [100,-2,3,100,5,6,7, -50];
let arr1 = [100,-2,3,100,5,6,7, -50, 'str'];

let check = array =>{
    let flag = array.every(el=>{
        if(!isNaN(el)){
            return true
        }
    })
    console.log(flag);
    if(flag==true){
        return getMaxMin(array);
    } else {
        return 'ERROR!в массиве есть числа';
    }
}
function getMaxMin(array){
    let max = array[0];
    let min = array[0];

    array.forEach(element => {
        if(element>max){
            max= element;
        } else {
            min = element;
        }
    });

    return [max, min];
}

console.log(check(arr1));