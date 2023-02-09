/*
8. У вас есть кнопка.
После нажатия поменять background.
+менять background по клику
*/

let btn = document.querySelector('button');
let bool = true;

btn.addEventListener('click',function(){
    if(bool==true){
        btn.style.background = `red`;
        bool = false;
    } else{
        btn.style.background = `green`;
        bool = true;
    }
})