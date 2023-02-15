
/*
Необходимо отобразить кнопку и инпут со значением по умолчанию.
По клику на кнопку заменить значение инпута
*/

const inp = document.querySelector('input');
console.log(inp);


inp.addEventListener('click', ()=>{
    inp.value="значение НЕ по умолчанию";
})