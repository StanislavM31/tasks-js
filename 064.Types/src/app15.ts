
/*
15. На входе динамичный массив строк. Используя forEach создайте новый массив из
элементов, каждое значение которого имеет вид !name
[“hschool”, “company”] -> [“!hschool”, “!company”]
*/

let array15:string[] = ['hschool', 'company'];


let result15:string[] = array15.map((el:string)=> `!${el}`)

let result15_:string[] = [];

array15.forEach((el:string)=>{
    result15_.push(`!${el}`)
})

console.log(result15_);
