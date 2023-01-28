/*
1. На входе значение. Необходимо его обработать. Если это число и оно не является
четным, бросить исключение
*/

let value = prompt('Введите значение');

function isValid(value_) {
    try {
        if(isNaN(value_)){
            throw new Error('это буква!');
        }
        if(value_%2 !==0){
            throw new Error('это нечётное число');
        }
        if(value_%2==1){
            throw new Error('это нечётное число');
        }
        return true;

    } catch (error) {
        return error.message
    }
}

let result = isValid(value);
console.log(result);