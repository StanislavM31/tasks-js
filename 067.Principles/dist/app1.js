/*
1. Создайте абстрактный класс Shape, содержащий абстрактный метод
calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
реализует метод calculateArea() для расчета площади прямоугольника. Затем
создайте объект класса Rectangle и выведите его площадь на экран. (для
вычисления площади прямоугольника S = height * wigth)

*/
class Shape1 {
}
class Rectangle1 extends Shape1 {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
let rectangle1 = new Rectangle1(10, 20);
console.log(rectangle1.calculateArea());

let a = {
    a:1
}
let b = {
    b:2
}
b.__proto__ = a;
console.log("_proto", b.a);

class Instrument{
    constructor(ch){
        this.ch = ch
    }
    play(){
        console.log(this.ch);
    }
}

let i = new Instrument("am");
i.play();

class Guitar extends Instrument{
    constructor(ch, type){
        super(ch);
        this.type = type;
    }
    playOnGuitar(){
        console.log(`play ${this.ch} on ${this.type} of guitar`);
    }
}

const guitar = new Guitar("Dm", "Electro");
guitar.play();
guitar.playOnGuitar();


let arr = [10, 10, 10];
let mapped = arr.map((el)=> el*10);
console.log(mapped.reduce((acc, el)=> acc+el,0));