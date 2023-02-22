/*
6. Реализуйте класс ServerPut. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между методами
следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в приложении
Задание:
на вход подается JSON вида:
`{
"id": 1, "name": "Test", "age": 1
}`
Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
обновление значений для соответствующих ключей.
Если совпадения по id нет – ошибка. Добавить проверки
*/

class ServerPut {
  middleware() {

  }
  controller(json) {
    try {
      let object = JSON.parse(json);
      let service = this.service(object);
      return service;
    } catch (error) {
      return error.message;
    }
  }
  service(object) {
    let repository = this.repository(object);
    return repository;
  }
  repository(object) {
    let arr = [
      { "id": 1, "name": "Yesenia", "age": 22 },
      { "id": 2, "name": "Hanna", "age": 22 },
      { "id": 3, "name": "Stanislau", "age": 25 },
      { "id": 4, "name": "German", "age": 18 },
      { "id": 5, "name": "Maria", "age": 27 }
      ]
      let filter = arr.filter(elOfArr=>elOfArr.id!==object.id?true:false);
      if(filter.length == arr.length){
        throw new Error('ошибка: такого id нет')
      } else{
        filter.push(object);
      }

      return filter;
  }
}

let obj = `{
  "id": 1, "name": "Test", "age": 1
  }`;

let serverPut = new ServerPut();
console.log(serverPut.controller(obj));
