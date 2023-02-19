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

class ServerGetAll {
  controller() {
    let controller = this.service();
    return controller;
  }
  service() {
    let srv = this.repository();
    srv = JSON.parse(srv);
    return srv;
  }
  repository() {
    let repo = `{"id":"javascript", "label":"JavaScript", "category": "programmingLanguages","priority": 1}`;
    return repo;
  }
}

let serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
