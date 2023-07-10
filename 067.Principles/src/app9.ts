/*
9. Создать интерфейс iValidation. Создайте класс Validation с приватными методами
isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
Validation. Конструктор принимает поля email, date, path и инициализирует их как
поля класса. В каждом методе напишите соответствующую проверку
*/

interface iValidation {
    email: void|string;
    date: void|string;
    path: void|string;
}

class Validation implements iValidation {
    email: void|string;
    date: void|string;
    path: void|string;

    constructor(email:string, date:string, path:string) {
        this.isValidEmail(email);
        this.isValidDate(date);
        this.isValidPath(path);
    }
    private isValidEmail(email:string):void|string {
        if (/^[a-z\._\-]+@[a-z]+\.[a-z]{1,5}/gm.test(email)) {
            this.email = email;
        } else {
            return `неверный формат почты`
        }
    }
    private isValidDate(date:string):void|string {
        if (/^[1-31]+.+[1-12]+.+[1-2]+[0,9]+[0||5-9]+[0-9]/gm.test(date)) {
            this.date = date;
        } else {
            return `неверный формат даты`
        }
    }
    private isValidPath(path:string):void|string {
        if (/^www+\.+[a-z]+\.[a-z]{2,3}/gm.test(path)) {
            this.path = path;
        } else {
            return `неверный формат path`
        }
    }
}

let validation = new Validation("weeeareproject@gmail.com", "20.01.1992", "www.leningrad.ru");
console.log(
    validation.email,
    validation.date,
    validation.path
);
