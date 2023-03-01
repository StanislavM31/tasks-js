/*
3. Реализовать следующие классы Круг, Треугольник и Квадрат. Каждый экземпляр
класса должен содержать свойства Площадь, Периметр и Имя (свойства
родительского класса). Создвать массив из фигур и вывести всю информацию о
фигурах в консоль. Площадь и периметр должны рассчитываться по
математическим формулам. Класс Figure содержит поля:
p = 3.14
r = radius
a - side
h - height
Дочерние классы содержаь геттеры на получение площади
*/

class Figure{
  name;
  P = 3.14;
  r;
  a;
  h;

  setName = (n) => this.name = n;
  setRadius = (radius) => this.r = radius;
  setA = (side) => this.a = side;
  setH = (height) => this.h = height;
  /* getName = () => this.name;
  getArea = () => this.area;
  getPerimeter = () => this.perimeter; */
}

class Circle extends Figure{
  getSquare = () => `${this.name}: ${this.P * this.r**2}`;
}
class Triangle extends Figure{
  getSquare = () => `${this.name}: ${1/2 * this.h * this.a}`;
}
class Square extends Figure{
  getSquare = () => `${this.name}: ${this.a **2}`;
}

let circle = new Circle();
circle.setName('круг');
circle.setRadius(3);
console.log(circle.getSquare());
console.log('-----');
let triangle = new Triangle ();
triangle.setName('треугольник');
triangle.setA(3);
triangle.setH(2);
console.log(triangle.getSquare());
console.log('-----');
let square = new Square();
square.setName('квадрат');
square.setA(10);
console.log(square.getSquare());
console.log('-----');

