/*
15. На входе динамичный массив строк. Используя forEach создайте новый массив из
элементов, каждое значение которого имеет вид !name
[“hschool”, “company”] -> [“!hschool”, “!company”]
*/

let arr15:string[] = [];
let element15:string;

let arr15_:string[] = [];

while(element15 !==''){
    element15 = prompt();
    if(!element15){
        break;
    }
    /* arr15.push(`!${element15}`) */
    arr15.push(element15);
}

arr15.forEach(el=>{
    arr15_.push(`!${el}`)
})
console.log(arr15_);
