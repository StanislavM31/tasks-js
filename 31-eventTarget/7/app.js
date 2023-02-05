/*
Вы вводите строку. Проверить является ли это слово палиндром.
Добавить проверки
*/

const element = document.querySelector('.btn');

element.addEventListener('click', function(){
    const tag_input = document.querySelector('input');
    let result = document.querySelector('.res');
    if(tag_input.value%2==0){
        result.innerHTML = `${tag_input.value} четное`;
    } else{
        result.innerHTML = `${tag_input.value} НЕчетное`
    }
    tag_input.value = '';
})