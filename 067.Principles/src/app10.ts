/*
10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
Класс Validation является производным по отношению к базовому, родительскому
Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
базового класса и записать в переменную используя метод super. Далее
дополняем переопределенный метод отображением результата в console
 */
interface iPwd {
    showPwd():string;
}
class Pwd {
    showPwd():string{
        let pwdRandom = "";
        for (let i = 0; i <= 8; i++) {
            pwdRandom+=Math.floor(Math.random()*9);
        }
        return pwdRandom;
    };
}

class Validation10 extends Pwd implements iPwd{
    override showPwd():string {
        /* console.log(super.showPwd()); */
        return super.showPwd();
    }
}

let pwd = new Pwd();
let validation10 = new Validation10();
console.log(pwd.showPwd());
console.log(validation10.showPwd());

