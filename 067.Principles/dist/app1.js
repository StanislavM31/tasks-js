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
