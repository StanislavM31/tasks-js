/*
5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
необходимо получить значение из инпута. Проверить, что это число > 0, а также,
добавить проверку на ввод только чисел. Если проверка true, то вывести в div
удвоенное значение инпута
*/
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let divTag = document.querySelector('.res')


btn.addEventListener('click', ()=>{
    try {
        if(!inp.value) throw new Error('пустое значение');
        
    } catch (error) {
        divTag.innerHTML = error.message;
    }
})