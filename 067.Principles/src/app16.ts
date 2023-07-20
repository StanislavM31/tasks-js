/*
16. Создайте базовый класс Person, представляющий человека. У класса Person
должны быть свойства name и age. Создайте класс Student, наследующийся от
Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
Student и выведите их данные.
*/

class Person {
    name:string;
    age:number;
}
class Student extends Person {
    averageGrade:number;
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
    getAverage():number{
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
