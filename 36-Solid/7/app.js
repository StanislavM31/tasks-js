/*
7. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
"id": 1
}`
Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
проверки
*/

class ServerPut{
  middleware(object){
    if(!object.hasOwnProperty('id')){
      throw new Error('нет такого ключа (id)')
    }
    if(typeof object.id == 'string'){
      throw new Error('id это строка. Данные не валидны')
    }
  }
  controller(json){
    try {
      let object = JSON.parse(json);
      this.middleware(object);
      return this.service(object)
    } catch (error) {
      return error.message;
    }
  }
  service(object){
    return this.repository(object)
  }
  repository(object){
    let arr = [
      { "id": 1, "name": "Yesenia", "age": 22 },
      { "id": 2, "name": "Hanna", "age": 22 },
      { "id": 3, "name": "Stanislau", "age": 25 },
      { "id": 4, "name": "German", "age": 18 },
      { "id": 5, "name": "Maria", "age": 27 }
    ]
    let filter = arr.filter(el=>el.id !== object.id?true:false);
    if(filter.length == arr.length){
      throw new Error('нет такого  id');
    }
    return filter;
  }
}

let obj = `{
  "id": 10
  }`;

let serverPut = new ServerPut()
console.log(serverPut.controller(obj));