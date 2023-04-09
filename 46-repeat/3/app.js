/*
3. Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
содержащие по 1 обработчику события в каждом из методов. HTML разметка
содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
кнопку button с текстом -1. Задача:
• По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
• По клику с текстом на кнопку -1 необходимо отнять из счетчика -1.
*/

class HTML{
    bindOptionPlus(){
        let monitor = document.querySelector('.monitor');
        let btnPlus = document.querySelector('.plus');
        btnPlus.addEventListener('click', ()=>{
            monitor.innerHTML = +monitor.textContent+1;
        })
    }

    bindOptionMinus(){
        let monitor = document.querySelector('.monitor');
        let btnMinus = document.querySelector('.minus');
        btnMinus.addEventListener('click', ()=>{
            monitor.innerHTML = +monitor.textContent-1;
        })
    }
}

let html = new HTML();
html.bindOptionPlus();
html.bindOptionMinus();