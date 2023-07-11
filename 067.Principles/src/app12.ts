/*
12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
controller, service, repository. Цепочка взаимодействия между методами
следующая: controller -> service -> repository, где:
Задание:
Необходимо вывести в консоль массив из репозитория
*/
interface iServerGetAll {
    controller():number[];
    service():number[];
    repository():number[];
}
class ServerGetAll implements iServerGetAll{
    controller():number[]{
        const dataController:number[] = this.service();
        return dataController;
    }
    service(){
        const data:number[] = this.repository();
        return data;
    }
    repository():number[]{
        const arr:number[] = [1,2,3,4,5,6,7,8,9,0];
        return arr;
    }
}
let serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
