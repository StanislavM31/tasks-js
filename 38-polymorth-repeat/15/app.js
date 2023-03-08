/*
5. Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
multArr, которая заполняет и возвращает массив из 5 рандомных элементов.
Класс ConsoleArray является производным по отношению к базовому,
родительскому NumberArray и содержит функцию multArr. Необходимо
переопределить multArr из базового класса записав в переменную используя
метод super. Далее посчитать произведение всех элементов массива используя
reduce
*/

class NumberArray{
    multArr(){
        let array = [];
        for (let i = 0; i < 5; i++) {
            const element = Math.round(Math.random()*100);
            array.push(element);
        }
        console.log(array);
        return array;
    }
}

class ConsoleArray extends NumberArray{
    multArr(){
        let arr=super.multArr();
        return arr.reduce((cur,next)=>{
            return cur*next;
        },1)
    }
}

let consoleArray = new ConsoleArray();
console.log(consoleArray.multArr());