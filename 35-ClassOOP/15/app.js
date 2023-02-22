/*
15. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
"id": "javascript"
}`
Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
проверки
*/

class ServerDelete{
  middleware(object){
    if(!object){
      return `нет обьекта`;
    }
    return this.controller(object);
  }
  controller(json){
    try{
      let object = JSON.parse(json);
      return this.service(object);

    } catch(err){
      return err.message;
    }
  }
  service(object){
    return this.repository(object);
  }
  repository(object){
    let database = [
      { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
      { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
      { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
      ]

      let filtered = database.filter(el=>el.id!==object.id?true:false)
      return filtered;
  }
}

let obj = `{
  "id": "javascript"
  }`

const serverDelete = new ServerDelete();
console.log(serverDelete.middleware(obj));