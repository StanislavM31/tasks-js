/*
Пользователь вводит строку. Необходимо посчитать количество согласных (for)
*/

let a = prompt('введите строку');

let c = 'бвгджзклмнпрстфхцчшщ';
console.log(a);
let count = 0;

for( let i=0; i<a.length; i++){

/*     for(let j=0; j<c.length; j++){

        if(c[j]===a[i]){
            count++;
        }
    } */
    ///либо...
    if(c.includes(a[i])){
        count++;
        console.log('');
    }
}
console.log(count);
