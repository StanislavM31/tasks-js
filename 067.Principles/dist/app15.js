/*
15. Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
свойства name, age и color. Реализуйте методы getName, getAge и getColor,
которые будут возвращать соответствующие свойства. Создайте несколько
объектов класса Cat и выведите их данные.
*/
class Cat15 {
    name;
    age;
    color;
    getName(name) {
        return name;
    }
    ;
    getAge(age) {
        return age;
    }
    ;
    getColor(color) {
        return color;
    }
    ;
}
function createObject(obj, name, age, color) {
    return 1;
}
let cat1 = new Cat15();
let cat2 = new Cat15();
let cat3 = new Cat15();
console.log(cat1.getName("кошка1"), cat1.getAge(1), cat1.getColor("черная"));
console.log(cat1.getName("кошка2"), cat1.getAge(2), cat1.getColor("белая"));
console.log(cat1.getName("кот3"), cat1.getAge(3), cat1.getColor("рыжий"));
