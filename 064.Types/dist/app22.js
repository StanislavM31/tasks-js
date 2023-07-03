/*
22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
"зарплата". Найдите среднюю зарплату всех сотрудников.
*/
let company = [
    { name: "Antony", salary: 1000 },
    { name: "Sam", salary: 2000 },
    { name: "John", salary: 7000 },
    { name: "Hanna", salary: 6000 },
    { name: "Bill", salary: 4000 },
    { name: "Jack", salary: 5000 },
];
let fullSalary = company.reduce((acc, object) => {
    return acc + object.salary;
}, 0);
console.log(Math.round(fullSalary / company.length));
