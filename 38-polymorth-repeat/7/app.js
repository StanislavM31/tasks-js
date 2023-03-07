/*
1. Вывести в строчку все вводимые значения через инпут в виде массива, а также
все удвоенные значения данного массива в div ниже. Добавить проверку, что
поле не пустое
*/

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let res = document.querySelector('.res');
let d = document.querySelector('.doubled');
let arr = [];

btn.addEventListener('click', function(){
    try {
        let elem = inp.value;
        if(!elem) throw new Error('пустое значение');
        if(isNaN(elem)){
            throw new Error('это буква!');
        }

        arr.push(elem);
        res.innerHTML = arr;
        d.innerHTML = arr.map(function(el){
            return el*2;
        })
        inp.value = '';
    } catch (error) {
        if(error.message == 'это буква!'){
            alert(error.message);
            inp.value = '';
        }else{
            alert(error.message);
        }
    }
})
