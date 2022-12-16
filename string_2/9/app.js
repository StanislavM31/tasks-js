/* На вход программе подается переменная date, в котрой лежит дата в формате
'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)
 */
let str = prompt('enter date 2022-11-11');

/* 2022-11-11 */


let a = str.split('-').reverse().join('/');

console.log(a);