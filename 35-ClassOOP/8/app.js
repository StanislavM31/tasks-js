/*
8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
строку и проверяет, является ли она корректным емейлом или нет. Если является
- возвращает true, если не является - то false
*/
let m = 'aaa@gmail.com';
let r = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm;
class Validator{
    isEmail(mail){
        this.mail = mail;
        if(r.test(mail)){
            return true;
        } else {
            return false;
        }
    }
}
class MegaValidator{
    constructor(mail){
        this.mail = mail;
    }

    isEmail(){
        return r.test(this.mail)? true:false;
    }
}
const validator = new Validator();
console.log(validator.isEmail(m));

const megavalidator = new MegaValidator(m);
console.log(megavalidator.isEmail());
