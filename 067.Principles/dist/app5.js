/*
5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
особенностями каждого транспортного средства. (седержимое методов:
console.log)
 */
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log('start Car');
    }
    stop() {
        console.log('stop Car');
    }
}
class Motorcycle extends Vehicle {
    start() {
        console.log('start Motorcycle');
    }
    stop() {
        console.log('stop Motorcycle');
    }
}
let car = new Car();
let motorcycle = new Motorcycle();
car.start();
car.stop();
motorcycle.start();
motorcycle.stop();
