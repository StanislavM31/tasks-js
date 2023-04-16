const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    let filtered = [];
    const array = [1,2,3,4,5,5,6,7,8,8,9,9,9,9,9,9,9,10];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!filtered.includes(element)){
            filtered.push(element);
        }
    }
    response.send(`filtered [ ${filtered} ]`);
});
app.get("/about", (request, response) => {
    response.send('/about')
});
app.get("/contact", (request, response) => {
    response.send('/contact');
});
/*
7. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и
отправить клиенту. (Для того чтобы получить значение из url необходимо
воспользоваться деструктуризацией из request.params)
*/

/* app.get(`/test/:id/:name/hi`, (request, response)=>{
    const{
        id,
        name
    }  = request.params;
    response.send([id,name]);
}) */

/* app.get(`/:id`, (request, response)=>{
    const {
        id
    } = request.params;
    const arr = [1,2,3,4,5,6];
    let wraper = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if(temp.length == id){
            wraper.push(temp);
            temp = [];
        }

    }
    response.send(wraper);
}) */

/* 8. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id.
На сервере хранится массив из чисел. Напишите функцию, которая разделяет
массив на части заданного размера. Необходимо вернуть клиенту массив */
/* app.get(`/:id`, (request, response)=>{
    const {
        id
    } = request.params;
    const arr = [1,2,3,4,5,6];
    let wraper = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if(temp.length == id){
            wraper.push(temp);
            temp = [];
        }

    }
    response.send(wraper);
}) */
/*
9. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id.
На сервере хранится массив объектов, в каждом из которых есть поле id int.
Напишите функцию, которая находит по id объект. Необходимо вернуть клиенту
объект
*/
 app.get('/:id', (request, response)=>{
    const {
        id
    } = request.params;
    console.log('id', id);

    let arrObj = [
        {id: 'яблоки'},
        {id: 'груши'},
        {id: 'малина'},
        {id: "черника"},
        {id: 'арбуз'},
    ];
/*     let count = 0;
    let filtered = arrObj.filter(el=>{
        if(el.count==id){
            return el.count;
        }
    }
    ) */
    let temp = [];
    for(let i = 0; i<arrObj.length; i++){
        if(i == id){
            temp.push(arrObj.i); //работает в консоли VScode
        }
    }
    let filtered = arrObj.filter(el=>{
        if(el.id == id){
            return el;
        }
    })

    console.log('temp:', temp);
    console.log('filtered', filtered);
    console.log('arrObj[id]:', arrObj[id]);
    let {id:фрукт} = arrObj[id];
    response.send(`вернулось значение ${фрукт}`); //деструктуризация
    /* response.send(`вернулось значение ${arrObj[id].id}`); работает */
    /* response.send(`вернулось значение ${arrObj[id]}`); // [object Object] ??*/
})

app.listen(port, ()=>{
    console.log(`  ---------------------------------`);
    console.log(` |- server is running on port ${port} -|` );
    console.log(`  ---------------------------------`);
});




