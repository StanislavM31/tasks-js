/*
14. Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
  {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
}`
Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
обновление значений для соответствующих ключей.
Если совпадения по id нет – ошибка. Добавить проверки
*/

class ServerPut {
  middleware(object) {
    return this.controller(object);
  }
  controller(obj) {
    let object = JSON.parse(obj);
    try {
      let data = this.service(object);
      return data;
    } catch (error) {
      error.message;
    }
  }
  service(object) {
    return this.repository(object);
  }
  repository(object) {
    let arr = [
      { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
      { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
      { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ];
    let find = arr.filter(function (elOfArr) {
      if (elOfArr.id == object.id) {
        return true;
      }
    });
    console.log(find);
    if (!find.length) {
      /* arr = [{id:object.label.toLowerCase(), ...object}, ...arr] */
      throw new Error("ошибка: Cовпадений нет");
    } else{
      let finalArr = arr.filter(el=>{
        if(el.id !== object.id){
          return true;
        }

      })
      return [object, ...finalArr];

    }

  }
}

let elem =`{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 999}`;

let serverPut = new ServerPut();
let m = serverPut.middleware(elem);
console.log(m);
