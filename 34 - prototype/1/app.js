/*
1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
этого массива
*/

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let avg = document.querySelector('.avg');
let array = document.querySelector('.array');
const arr = [];

btn.addEventListener('click', function(){


    try{
        if(!inp.value){
            throw new Error('пустое значение');
        }
        arr.push(inp.value);
        array.innerHTML = arr;

        let sum = arr.reduce((prev,cur)=>{
            return prev+ +cur;
        },0)
        avg.innerHTML = 'average: ' + sum/arr.length;
        inp.innerHTML="";

    } catch(error){
        return error.message;
    }
});

