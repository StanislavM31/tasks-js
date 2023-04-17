/*
5. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
сервер» для последующей записи в массив репозитория класса Server
 */


class Client{
    doRegistration(){
        let inputMail = document.querySelector('.input_mail');
        let inputPwd = document.querySelector('.pwd');
        let btn = document.querySelector('button');
        let server = new Server();
        btn.addEventListener('click', function() {
            server.midleware({
                email: inputMail.value,
                pwd: inputPwd.value
            })
        })
        /* return `${inputMail.value} ${inputPwd.value}`; */
    }
}
class Server{
    midleware(object){
    if (!object){
            alert('пусто');
        } else {
            return this.controller(object);
        }
    }
    controller(object){
/*         let s = [];
        s.push(obj) */
// let object = JSON.parse(json);
        return this.service(object);
    }
    service(object){
        return this.repository(object);
    }
    repository(object){
        let database = [

        ];
        let filtered = database.filter(el=>{
            el.id !==object.id;
        })
        if(filtered.length<1){
            database.push(object);
        }
        alert({object});
        console.log(object);
        console.log(database);
    }
}

let inputmail = new Client;
let date = inputmail.doRegistration();



