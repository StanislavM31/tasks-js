/*
2. Создайте абстрактный класс Animal, содержащий абстрактный метод
makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
реализуют метод makeSound() для издания соответствующего звука. Создайте
объекты классов Dog и Cat и вызовите их методы makeSound().
*/
class Animal2 {
}
class Dog extends Animal2 {
    makesound() {
        console.log('гав');
    }
}
class Cat extends Animal2 {
    makesound() {
        console.log("мяу");
    }
}
let dog = new Dog();
dog.makesound();
let cat = new Cat();
cat.makesound();
