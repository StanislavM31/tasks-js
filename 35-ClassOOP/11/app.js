/*
11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
телефона.
*/

class Validator{
  isPhone(d){
    return /\+(375)[2-9]{2}[1-9]{7}$/gm.test(d);
  }
}

let validator = new Validator();
console.log(validator.isPhone('+375447756871'));