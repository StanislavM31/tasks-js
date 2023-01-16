/*
8. Напишите функцию, принимающую в качестве параметра строку. Необходимо
оставить в строке только униакльные символы. IIFE
Позволяеткопироватьтекстиз -> позвляеткираьс
*/

let string = "Позволяеткопироватьтекстиз";
let arr = [1,1,2,2,3,4,5,5,5];

(function (arrLikeParam) {
    let unique = [];
    for (const iterator of arrLikeParam) {
        if(!unique.includes(iterator)){
            unique.push(iterator);
        }
        console.log(unique);
    }
}(arr));