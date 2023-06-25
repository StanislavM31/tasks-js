const express = require('express');
const {getAll, getById, create, getNumbers} = require('./service.js');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());


app.get('/', function(req,res){
    const data = getAll();
    res.send(data);
})
app.post('/', function(req, res){
    const{name, age}= req.body;
    const arr = create( name, age);
    res.send(arr);
})

app.get('/array', function(req,res){
    res.send(getNumbers());
})

app.get('/:id', function(req, res){
    const{id}= req.params;
    const element = getById(id);
    res.send(element);
})


app.listen(3000, ()=>{
    console.log(' Сервер Запущен');
})