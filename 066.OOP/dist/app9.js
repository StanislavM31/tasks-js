/*
9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
getCircumference() (вычисление длины окружности). Создайте экземпляр класса
CircleC и выведите длину окружности. Длина окружности: 2 * π * r
*/
class CircleC9_1 {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    PI = 3.14;
    getCircumference() {
        return 2 * this.PI * this.radius;
    }
}
let circleC9_1 = new CircleC9_1(12);
console.log(circleC9_1.getCircumference());
//
class CircleC9_2 {
    radius;
    PI = 3.14;
    setRadius(x) {
        this.radius = x;
    }
    getCircumference() {
        return 2 * this.PI * this.radius;
    }
}
let circleC9_2 = new CircleC9_2();
circleC9_2.setRadius(5);
console.log(circleC9_2.getCircumference());
//
class CircleC9_3 {
    getCircumference(radius, pi) {
        if (typeof radius == 'number' && typeof pi == "number") {
            return `Длина окружности: ${2 * pi * radius}`;
        }
        else {
            return `typeof radius: ${typeof radius}, typeof pi: ${typeof pi}`;
        }
    }
}
let circleC9_3 = new CircleC9_3();
console.log(circleC9_3.getCircumference(10, 3.14));
console.log(circleC9_3.getCircumference("Это радиус", 3.14));
console.log(circleC9_3.getCircumference("Это радиус", "Это число Пи"));
