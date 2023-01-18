/* 12. Работа с замыканием. Напишите функцию, каждый вызов который будет
генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
не будут перебраны все числа из этого промежутка.
 */


function wrapper() {
    return function () {
        let rand = Math.random()*100;

        return Math.floor(rand);
    }
}
/* let foo = cloasure();

let arr = [];
while (arr.length!==100) {
    let temp = foo();
    if(!arr.includes(temp)){
        arr.push(foo());
    }
} */
let wrap = wrapper();

wrap();
wrap();
wrap();