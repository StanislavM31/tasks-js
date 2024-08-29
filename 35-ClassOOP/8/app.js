/*
8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
строку и проверяет, является ли она корректным емейлом или нет. Если является
- возвращает true, если не является - то false
*/
/* 
8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
строку и проверяет, является ли она корректным емейлом или нет. Если яв
*/
/* { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
{ "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
{ "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }, */
let r = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm;

class Validator {
    isMail(string){
        return RegExp((string)./^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm);
    }
}
let valid = new Validator("mail@mail.ru");

console.log(valid);
