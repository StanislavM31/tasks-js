/*
10. На вход подается строка в виде электронной почты пользователя. Необходимо
найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
случае бросить исключение и его обработать
*/

let m = 'hello@mail.ru';

function isValid(mail){
    try{
        if(!mail.includes("@")){
            throw new Error('email is not valid')
        }
        return true;
    } catch(error){
        return error.message;
    }
}

console.log(isValid(m));