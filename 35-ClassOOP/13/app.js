/*
13. Реализуйте класс ServerPost. Обязательными функциями считаются функции
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
"label": "JavaScript", "category": "programmingLanguages", "priority": 1
}`
Неоходимо добавить в массив БД объект только в том случае, если нет совпадений
по label. Если совпадения нет, то в объект клиента добавить ключ id со значением
label в toLowerCase таким образом, чтобы в БД был запушен объект вида
{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}
Если совпадение есть – ошибка. Добавить проверки
*/

class ServerPost {
  middleware() {}
  controller(object) {
    try {
      let resultOfService = this.service(object);
      return resultOfService;
    } catch (err) {
      return err.message;
    }
  }
  service(object) {
    let result = this.repository(object);
    return result;
  }

  repository(object) {
    let arr = [
      {
        id: "javascript",
        label: "JavaScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "typescript",
        label: "TypeScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "sql",
        label: "SQL",
        category: "programmingLanguages",
        priority: 2,
      },
      {
        id: "java",
        label: "Java",
        category: "programmingLanguages",
        priority: 3,
      },
      { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
    ];

    let filtered = arr.filter((el) =>
      el.label == object.label ? true : false
    );

    /*  */
    if (filtered.length) {
      throw new Error("такой label уже есть");
    }
    arr.push({ id: object.label.toLowerCase(), ...object  });
    return arr;
  }
}

let obj = JSON.parse(`{
  "label": "COBOL", "category": "programmingLanguages", "priority": 1
  }`);
let serverPost = new ServerPost();
let controller = serverPost.controller(obj);
console.log(controller);
