/*
1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide
*/

class DomHtml{
    constructor(inp1,inp2){
        this.inp1=inp1;
        this.inp2=inp2;
        this.generateEvent();
    }

    doPlus(){
        const plus = document.querySelector('.plus');
        plus.innerHTML = this.inp1.value + this.inp2.value;
    }
    doMinus(){
        const minus = document.querySelector('.minus');
        minus.innerHTML = this.inp1 - this.inp2;
    }
    doMyltiply(){

    }
    doDevide(){

    }
    generateEvent(){
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', ()=>{
            this.doPlus();
        })
    }
}

let inp1 = document.querySelector('.input1')
let inp2 = document.querySelector('.input2')