/*
4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
Инициализация свойств name, age происходит в getter, setter класса. Создайте
экземпляр класса Student и выведите свойства.
*/

class Student4 {
    name:string;
    age:number;
    setName(name:string):void{
        this.name = name;
    }
    setAge(age):void{
        this.age = age;
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;;
    }
}

let student4 = new Student4();

student4.setName("Hanna");
student4.setAge(25);

console.log(student4.getName());
console.log(student4.getAge());
