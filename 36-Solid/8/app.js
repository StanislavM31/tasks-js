/*
8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
происходит проверка на uuid, введенный в input. Вывести true, если провека
успешна.
*/
class DomHtml{
    middleware(uuid){
        try{
            if(!/^[0-9]{3}\w[0-9]{4}-\w\d\d\w-\d\d\w\d-\w\d\d\d-\d{12}$/gm.test(uuid)) throw new Error ('не валидный UUID');

                return true;

        }catch(err){
            return err.message;
        }
    }
}

let domHtml = new DomHtml();
let u = "123e4567-e89b-12d3-a456-426655440000";
let btnPut = document.querySelector('.uuid');
let btnCheck = document.querySelector('.check-uuid');
const uuid = document.querySelector('span').innerHTML;
let inputTag = document.querySelector('input');
let btnClear = document.querySelector('div>button:last-child')

btnPut.addEventListener('click', ()=>{
    inputTag.value = uuid;
})
btnCheck.addEventListener('click', ()=>{
    console.log(domHtml.middleware(u));
})

btnClear.addEventListener("click",()=>{
    inputTag.value = '';
})