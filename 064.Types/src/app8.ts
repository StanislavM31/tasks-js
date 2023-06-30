/*
8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
*/

let arr8:string[] = ['abba', 'err', 'not', 'sys'];

let filtered8:string[] = arr8.filter(el=>{
    if(el == el.split('').reverse().join('')) return el;
})

console.log(` массив содержит палиндром: ${!!filtered8.length}`);
