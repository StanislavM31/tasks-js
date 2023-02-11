/*
Вывести в строчку все вводимые значения через инпут в виде массива.
Добавить проверку, что поле не пустое. После каждого клика очищать значение input.
Если вводимое значение не проходит валидацию,
то на месте массива вывести сообщение об ошибке красным цветом
*/

let iv = document.querySelector('input');
let btn = document.querySelector('button');
let res = document.querySelector('span');
let r = res.textContent;
let arr = [];

console.log(r);

btn.addEventListener('click', function(){

    try{
        let temp = iv.value;
        if(!temp){
            throw new Error('Input is Empty')
        } else {
            arr.push(iv.value);
            iv.value = '';
            res.textContent = `Result: ${arr}`;
        }
    } catch(error){
        iv.value = error.message;
    }

})

iv.addEventListener('', function(event){
    /* event.target.value = event.target.textContent; */
})

