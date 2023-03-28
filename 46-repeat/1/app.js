/*
1. Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
события. Задача:
• По клику на кнопку необходимо получить значение input и отобразить в пустой div
(в созданной html разметке) посредством InnerHTML.
• Добавить стили для отображения текста input: например, изменить цвет букв.
• Добавить проверки на получение значения input

*/

class HTML {
    bindoption(){
        const buttonTag = document.querySelector('button');
        const inputTag = document.querySelector('input');
        const outputTag = document.querySelector('.output');
        buttonTag.addEventListener('click', ()=>{
            outputTag.innerHTML = inputTag.value;
        })
    }
}

const html = new HTML();
html.bindoption();