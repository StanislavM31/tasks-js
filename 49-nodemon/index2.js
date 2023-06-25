let express = require('express');
const { getAllData, getDataByID, insertData} = require("./service2.js");
let app = express();

console.log(app);

app.get('/',(req,res)=>{
    res.send('маршурут /');
})

app.get('/getAllData', (req,res)=>{
    res.send(getAllData());
})

app.get('/:number', (req,res)=>{
    const {number} = req.params;
    let element = getDataByID(number);
    res.send(element);
})

app.post('/:name/:surname', (req,res)=>{
    let temp = req.params;
    res.send(insertData(temp));
})

app.listen(8000, ()=>{
    console.log('сервер на 8000 порту');
})