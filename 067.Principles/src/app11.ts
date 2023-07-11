/*
11. Создайте абстрактный класс University, который содержит абстрактный метод
getStudentById и поле students – массив объектов. Student – класс наследник,
реализующий абстрактный метод getStudentById.
*/
interface iStudent{
    id:number;
    name:string;
}
abstract class University {
    abstract student:iStudent[];
    abstract getStudentById(id:number);
}

class AnotherUnivercity extends University {
    student: iStudent[] = [{id:10, name: "Sam"}, {id:11, name: "John"}, {id:12, name: "Bill"}];
    getStudentById(id:number){
        return this.student.filter((el:iStudent)=> el.id == id)[0];
    }
}

let uni = new AnotherUnivercity();
console.log(uni.getStudentById(12));
