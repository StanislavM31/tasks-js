const express = require("express");
const{getNumbers} = require("./service");

let app = express();

app.get('/router',(req,res)=>{
    let a = [1,2,3];
    console.log('некоторые параметры');
    res.send(getNumbers());
})

app.listen(5000, ()=>{
    console.log('запустился');
})