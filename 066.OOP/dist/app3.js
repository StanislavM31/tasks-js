/*
3. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
Инициализация свойств name, age происходит в конструкторе класса. Создайте
несколько экземпляров класса Student и выведите свойства.
*/
class Student3 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let student3_1 = new Student3("Hanna", 25);
let student3_2 = new Student3("Stas", 18);
console.log(student3_1, student3_2);
