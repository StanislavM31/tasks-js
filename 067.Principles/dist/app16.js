/*
16. Создайте базовый класс Person, представляющий человека. У класса Person
должны быть свойства name и age. Создайте класс Student, наследующийся от
Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
Student и выведите их данные.
*/
class Person {
    name;
    age;
}
class Student extends Person {
    averageGrade;
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getAverage() {
        return this.averageGrade;
    }
}
let student = new Student();
student.name = "Sam";
student.age = 22;
student.averageGrade = 4.5;
console.log(student.getName());
console.log(student.getAge());
console.log(student.getAverage());
