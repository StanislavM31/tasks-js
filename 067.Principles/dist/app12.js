class ServerGetAll {
    controller() {
        const dataController = this.service();
        return dataController;
    }
    service() {
        const data = this.repository();
        return data;
    }
    repository() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        return arr;
    }
}
let serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
