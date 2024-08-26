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
    data;

    controller(d){
        
        return this.service(d)
        
    }
    service(d){
        return this.repository(d)
    }
    repository(d){
      this.data = d;
        return this.data + " на сервере";
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

data = serverGetAll.controller("данные");
console.log(data);
