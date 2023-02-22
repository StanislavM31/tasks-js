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

class ServerPut{
  middleware(){
    return this.controller();
  }
  controller(){
    try {
      let data = this.service();
      if ( !data.length){
        throw new Error('ошибка: совпадения по id нет')
      }
    } catch (error) {

    }
    return
  }
  service(){
    return this.repository()
  }
  repository(){
    let arr = [
      { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
      { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
      { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
      ]
      let obj = JSON.parse(`{
        {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
        }`)
let find = arr.filter((elOfArr)=>{
  if(elOfArr.id == obj.id){
    return elOfArr;
  }

})

      return arr;
  }
}

let serverPut = new ServerPut();

