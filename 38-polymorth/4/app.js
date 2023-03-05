/*
4. Реализуйте класс Pwd. Pwd хранит функцию showPwd, которая формирует и
возвращает рандомно сгенерированный пароль из 8 чисел. Класс Validation
является производным по отношению к базовому, родительскому Pwd и
содержит функцию showPwd. Необходимо переопределить showPwd из базового
класса и записать в переменную используя метод super. Далее дополняем
переопределенный метод отображением результата в console.
*/

class Pwd{
    showPwd(){
        let pwd = '';
        for (let i = 0; i < 8; i++) {
            const element = Math.floor(Math.random()*9);
            pwd += element;
        }
        return pwd;
    }
}

class Validation extends Pwd{
    showPwd(){
        let password = super.showPwd();
        try {
            if(!password) throw new Error('пустая строка');
            if(!/^[0-9]{8}$/g.test(password)) throw new Error('не валидный pwd');
            return password;
        } catch (error) {
            return error.message;
        }
    }
}

let validation = new Validation();
console.log(validation.showPwd());