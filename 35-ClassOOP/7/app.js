/*
7. Реализуйте класс ServerById. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
Задание:
на вход подается JSON вида:
`{
"id": "javascript"
}`
Необходимо вывести в консоль найденный элемент массива по id если таковой
имеется. В противном случае бросить исключение. Добавить проверки
*/

class ServerById {
  repo = [
    {
      id: "typescript",
      label: "TypeScript",
      category: "programmingLanguages",
      priority: 1,
    },
    { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
    {
      id: "java",
      label: "Java",
      category: "programmingLanguages",
      priority: 3,
    },
    { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  ];
  middleware = (data) => {
    try {
      if (!data) throw new Error("Не ввели данные");
      if (typeof data !== "object") throw new Error("не обьект");
      return this.controller(data);
    } catch (e) {
      return e.message;
    }
  };
  controller = (json) => {
    console.log("+controller");
    return this.service(json);
  };
  service = (json) => {
    console.log("+service");

    let result = this.repository(json);

    if (result) {
      return true;
    } else return false;
  };
  repository = (json) => {
    console.log("+repository");
    for (let i = 0; i < this.repo.length; i++) {
      const element = this.repo[i];
      console.log(element);
      if (element.id === json.id) {
        return true;
      }
    }
    return false;
  };
}

let d = {
  id: "typescript",
};
let server = new ServerById();

console.log(server.middleware(d));
