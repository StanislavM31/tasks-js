/*
6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
выражение для данной строки. Если же строка подходит под регулярное
выражение, то вывести булевое true, в противном случае бросить исключение и
обработать
C:\Users\Admin\Desktop\test.txt -> true
C:/Users/Admin/Desktop/test.txt -> true
*/

const path = 'C:/Users/Admin/Desktop/test.txt';

function isValid(params) {
    try {
        if(!(/^[A-Z]:(\\|\/)[a-zA-Z(\\|\/)]+\.[a-z])+$/gm.test(params)){
            throw new Error('path is not valid');
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

let r = isValid(path);

console.log(r);