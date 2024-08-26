/*
6. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
controller, service, repository. Цепочка взаимодействия между методами
следующая:
controller -> service -> repository, где:
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
Задание:
Необходимо вывести в консоль весь массив
*/

class ServerGetAll{
    data = ['data'];

    controller(){
        
        return this.service()
        
    }
    service(){
        return this.repository()
    }
    repository(){
        return this.data;
    }

    /*     controller(json){
        if(!json.length) throw new Error('нет вводных данных');
        this.service(json)
    }
    service(json){
        this.repository(json)
    }
    repository(){
        this.data = json;
        return this.data;
    } */
}

let serverGetAll = new ServerGetAll();

data = serverGetAll.controller("данные на сервере");
console.log(data);
