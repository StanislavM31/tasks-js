// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

let btn = document.querySelector('button');
let inp = document.querySelector('input');

btn.addEventListener('click', function(){
    if(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/gm.test(inp.value)){
        alert('ок');
    } else {
        alert('не ок');
    }
});