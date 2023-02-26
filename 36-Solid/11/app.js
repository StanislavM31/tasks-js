/*
11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
телефона.
*/

class Validator {
  isPhone(d) {
    let reg = new RegExp("/^phone$/gm");

    return reg.test(d);
  }
}

let phone = "phone";
let validator = new Validator();
console.log(validator.isPhone(phone));


