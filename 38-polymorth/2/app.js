/*
2. Реализуйте класс NumberArray. NumberArray хранит функцию showArr, которая
заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
является производным по отношению к базовому, родительскому NumberArray и
содержит функцию showArr. Необходимо переопределить showArr из базового
класса и записать в переменную используя метод super. Далее дополняем
переопределенный метод отображением результата в console.
*/

class NumberArray(){
    constructor(){
        let arr = [];
        for (let i = 0; i < 5; i++) {
            const element = Math.floor(Math.random()*100);
            arr.push(element);
        }
        return arr;
    }
    showArr
}
