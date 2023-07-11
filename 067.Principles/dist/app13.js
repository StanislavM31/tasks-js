/*
13. Реализуйте класс ServerPost. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая: middleware -> controller -> service -> repository, где:
Задание:
на вход подается JSON вида: `{ "email": "Test", "pws": "test" }`
Необходимо добавить в массив БД объект только в том случае, если нет
совпадений по email.
*/
class ServerPost {
    middleware(obj) {
        if (!Object.hasOwnProperty("email"))
            throw new Error('нет ключа Email');
        if (!Object.hasOwnProperty("pwd"))
            throw new Error('нет ключа pwd');
    }
    controller(obj) {
        //тут ничего не пишем (за редким исключением)
        try {
            this.middleware(obj);
            const data = this.service(obj);
            return data;
        }
        catch (error) {
            return error.message;
        }
    }
    service(obj) {
        return this.repository(obj);
    }
    repository(obj) {
        let filtered = [];
        const array = [{ "email": "Test1", "pwd": "test1" }, { "email": "Test2", "pwd2": "test" }, { "email": "Test3", "pwd": "test3" }];
        filtered = array.filter((el) => el.email == obj.email);
        if (filtered.length > 0) {
            throw new Error(`email ${obj.email} уже есть в БД`);
        }
        else {
            array.push(obj);
        }
        return array;
    }
}
const object = JSON.parse(`{ "email": "Test1", "pwd": "test" }`);
let serverPost = new ServerPost();
console.log(serverPost.controller(object));
