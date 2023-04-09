/*
1. Посчитать количество гласных и согласных в строке
*/
let str = 'hello';

function counter(string){
    let i =0;
    for (const iterator of string) {

        if(('aeiuo').includes(iterator)){
            i++;
        }
    }
    console.log('гласные:', i);
    console.log('согласные:', str.length-i);
}

counter(str);