/* паттерн Адаптер */

class Client{

    request(json){

        let tempRequest = new Middleware;
        /* console.log(tempRequest.adapter(json)); */
        return tempRequest.adapter(json);
    }
}
class Middleware{
    adapter(json){
        let object = JSON.parse(json);
        console.log(object);

        let server = new Server();
        console.log(server);

        this.addToRepo(server, object);

    }
    addToRepo(array, data){
        array.push(data);
        return array;
    }
}

class Server{
    constructor(){
        this.arr = [
            {хлеб: 10,  },
            {молоко: 5 },
            {яблоки: 2 },

        ]
        return this.arr;
    }

}


let obj = `{
    "апельсины": 2
    }`;

let client = new Client;
client.request(obj);


