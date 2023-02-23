/*
11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
телефона.
*/

class Validator {
  isPhone(d) {
    let reg = new RegExp("/^/(+375)$/gm");

    return reg.test(d);
  }
}

let phone = "+375";
let validator = new Validator();
console.log(validator.isPhone(phone));


