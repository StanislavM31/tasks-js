/*
На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
проверку вводимого значения, если это текст –> сообщение об ошибке

 */

let a = 42;

if(isNaN(42)){
    console.log('error')
}else{
    for (let i =0; i<=a; i++){
        console.log(i);
    }
}