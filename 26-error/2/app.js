/*
2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
бы 1 строка, бросить исключение.
 */
let array = [1,2,3,4,5,'string'];
function isValid(array_) {
    try {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(!isNaN(element)){
                throw new Error('В массиве есть строка');
            }

        }
        return true;
    } catch (error) {
        return error.message;
    }
}

let a = isValid(array);
console.log(a);