/*
5. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
сервер» для последующей записи в массив репозитория класса Server
 */

class Client{
    doRegistration(){
        let inputMail = document.querySelector('.input_mail');
        let inputPwd = document.querySelector('.pwd');
        return `${inputMail.value} ${inputPwd.value}`;
    }
}
class Server{
    doServer(){
        let s = [];
        return s;
    }
}

let inputmail = new Client;
let date = inputmail.doRegistration();
console.log(date);
let storage = new Server();
let keep = storage.doServer();
keep.push(date);
console.log(keep);


