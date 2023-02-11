/*
На странице контейнер из 5 инпутов.
Необходимо по изменению кнопки получить значение соответствующего инпута и отобразить в alert
*/

let el = document.querySelector('.container');

el.addEventListener('click', function(){
    console.log(event.target.value);
})

