
// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', function(){
    if(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/gm.test(input.value)){
        alert('ок');
    } else {
        alert('не ок');
    }
});