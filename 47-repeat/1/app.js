
/*
1. Посчитать количество гласных и согласных в строке
*/

let string = 'hello';

function counter(str){
    let i =0;
    for (const iterator of str) {

        if(('aeiuo').includes(iterator)){
            i++;
        }
    }
    console.log('гласные:', i);
    console.log('согласные:', string.length-i);
}

counter(str);