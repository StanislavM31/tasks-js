/*
9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
регулярное выражение для данной строки. Если же строка подходит под
регулярное выражение, то вывести булевое true, в противном случае бросить
исключение и обработать
"1234“ -> true
"12345“ -> false
"a234“ -> false
*/

let str = 'a234';

function isValid(params) {
    try {
        if(!/^([0-9]{4}|[0-9]{6})$/gm.test(params)){
            throw new Error('is not valid');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

let r = isValid(str);
console.log(r);