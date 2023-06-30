/*
10. Создайте массив строк и преобразуйте каждую строку в новую строку,
содержащую только гласные буквы.
*/

let array10:string[] = ['привет', 'студент', 'любитель', 'джаваскрипт'];
let str10:string = 'йуеыаоэяию';

array10 = array10.map(el=>{
    let tempString10:string = '';

    for(let symbol of el){

        if(str10.includes(symbol)){
            tempString10+='';
        } else{
            tempString10+=symbol;
        }

    }
    return tempString10;
})


console.log(array10);
