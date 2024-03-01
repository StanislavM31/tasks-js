/* Создать функцию groupStudentsByAge, которая сгруппирует студентов по
возрасту. На выходе получить объект, где ключ – возраст, а значение – массив
студентов */

/* function groupStudentsByAge(students) {
    const resultObj = {};

    for (const student of students) {
        const age = student.age;
        if (!resultObj[age]) {
            resultObj[age] = [];
        }
        resultObj[age].push(student);
    }

    return resultObj;
}



console.log(groupStudentsByAge(students)); */


const students = [
    { name: 'alex', age: 20 },
    { name: 'bob', age: 22 },
    { name: 'charlie', age: 20 },
    { name: 'david', age: 22 }
];

/* const res ={}

for (const el of students){
if(res[el.age]){
    res[el.age].push(el)
}else{
    res[el.age] = [el]
}
}

console.log(res) */


//3-ий способ

/* const groupStudentsByAge = (arr) => {
    let resultObj = {}
    arr.forEach(el => {
        if (!resultObj[el.age]) {
            resultObj[el.age] = [el]
        } else {
            resultObj[el.age].push(el)
        }
    })
}


return resultObj */