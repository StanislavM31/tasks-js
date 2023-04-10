/*
5. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
сервер» для последующей записи в массив репозитория класса Server
 */

class Client{
    doRegistration(){
        let inputMail = document.querySelector('.input_mail');
        let inputPwd = document.querySelector('.pwd');
        /* return `${inputMail.value} ${inputPwd.value}`; */
        let storage = new Server();
        storage.controller({
            email: inputMail.value,
            pwd: inputPwd.value
        })
    }
}
class Server{
    controller(obj){
        let s = [];
        s.push(obj)
        return s;
    }
    //midleware
    // controller
    //repo
}

let inputmail = new Client;
let date = inputmail.doRegistration();
console.log(date);
let storage = new Server();
let keep = storage.doServer();
keep.push(date);
console.log(keep);


