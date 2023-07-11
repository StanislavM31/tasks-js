class University {
}
class AnotherUnivercity extends University {
    student = [{ id: 10, name: "Sam" }, { id: 11, name: "John" }, { id: 12, name: "Bill" }];
    getStudentById(id) {
        return this.student.filter((el) => el.id == id)[0];
    }
}
let uni = new AnotherUnivercity();
console.log(uni.getStudentById(12));
