/*
7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
последующем вызове функции
*/

function concat(param){
    return (str)=> param+=str;
}

let foo = concat('');
console.log(foo('coca'));
console.log(foo('cola'));
console.log(foo(' is good'));

