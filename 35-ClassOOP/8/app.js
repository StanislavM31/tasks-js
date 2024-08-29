/*
8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
строку и проверяет, является ли она корректным емейлом или нет. Если является
- возвращает true, если не является - то false
*/
let r = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm;

class Validator {
    isMail(string){
        return RegExp((string)./^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm);
    }
}
let valid = new Validator("mail@mail.ru");

console.log(valid);
