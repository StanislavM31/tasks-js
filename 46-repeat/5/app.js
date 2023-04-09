/*
5. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
сервер» для последующей записи в массив репозитория класса Server
 */

class Client{
    doRegistration(array, mail, pwd){

        this.array[0] = this.mail;
        this.array.push(this.pwd);
        return this.array;
    }
}
class Server{
    constructor(){
        let arr = [];
    }
}

let inputmail = document.querySelector('.input_mail');
let inputpwd = document.querySelector('.pwd');
let storage = new Server();
console.log(storage);
let client = new Client();
client.doRegistration(inputmail.value, inputpwd.value, storage);

