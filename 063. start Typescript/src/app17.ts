/*
17. *Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. Проверьте есть ли в массиве элемент
со значением, равным 4. Посчитать количество повторений числа 4 в массиве
*/

let arr17:number[] = [1, 2, 5, 9, 4, 13, 4, 10];

let count17:number = 0;
let result17:number[] = [];
 result17 = arr17.filter(el=>{
    if(el===4){
        return el;
    }
});

if(result17.length==0){
    console.log('совпадений нет');
} else {
    console.log(`${result17.length} совпадений`);
}
