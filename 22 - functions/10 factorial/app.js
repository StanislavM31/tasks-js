/*
10. На вход программе подается число n. Составить массив элементов от 1 до n. Найти
факториал числа. reduce
 */

let x = prompt('Будем делать факториал числа...');

const doFactorial = f =>{
    let arr = [];
    let str = "";
    for (let i = 1; i <=f; i++) {
        str += "*" + i;
        arr.push(i);
    }
    console.log(`факториал !${f} = ${str}`);
    return arr.reduce(function (acc, elem) {
        return acc*elem;
    },1);

}

console.log(doFactorial(x));