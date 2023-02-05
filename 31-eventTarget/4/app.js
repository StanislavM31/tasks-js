/*
По двойному клику на кнопку изменить цвет кнопки

*/
let element = document.querySelector('.btn');
let flag = false ;
element.addEventListener('dblclick', function(){

    if(flag == false){
        this.style = ' background-color: red';
        flag = true;
    } else {
        this.style = ' background-color: white';
        flag = false;
    }
})

