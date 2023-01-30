/*
8. Реализуйте функцию, которая принимает массив последовательных
(возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function doArray(){
    for (let i = 'a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++) {
        let temp1 = String.fromCharCode(i);
        let temp2 = String.fromCharCode(i).toUpperCase();
    }
}

function fixArray(array){
    try {
        for (let i = 0; i < array.length; i++) {
            if(array[i+1]!== undefined){
                const element = array[i+1].charCodeAt(0);
                const prev = array[i].charCodeAt(0);
                let dif = element-prev;
                if(dif>0){
                    console.log(String.fromCharCode(prev+1));
                    throw new Error(`'массив непоследовательный' ${array[i+1]}`);
                }
            }
            break;
        }
        throw new Error(`массив последовательный`);
    } catch (error) {
        error.message;
    }
}

console.log(fixArray(["a","b","c","d","f"]));