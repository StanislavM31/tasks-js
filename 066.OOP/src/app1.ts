/*
1. Создайте класс Student, который содержит проинициализированные свойства
name (имя) и age (возраст). Создайте экземпляр класса Student и выведите
свойства.
*/

class Student {
    name:string = "Hanna";
    age:number = 25;
}

const student = new Student();

console.log(student.name, student.age);
