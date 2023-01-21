/* 12. Работа с замыканием. Напишите функцию, каждый вызов который будет
генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
не будут перебраны все числа из этого промежутка.
 */

let array = Array();

function doArray(){

    return a=> {
        let temp = Math.random()*100;
        return Math.floor(temp)};
}

let a = doArray();

console.log(a());
console.log(a());
console.log(a());