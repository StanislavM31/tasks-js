/*
На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
необходимо сравнить массивы. Если они идентичны, то вывести булевое trur, в
противном случае falsr. forEach
 */
let i = 0;
let a=[],b=[];
let rez=0;
while (i<10) {
    if(i<5){

        a.push(prompt('введите элемент массива 1'));
    } else{
        b.push(prompt('введите элемент массива 2'));
    }
    i++;
}
console.log(a,b);
console.log(i);
i=0;

a.forEach(function (elem) {
    console.log(`${a[elem]}==${b[elem]}:${Boolean(a[elem]==b[elem])}`);
    rez+= Boolean(a[elem]==b[elem])
})



/* for (const i of a) {
    console.log(i);
    rez += Boolean(a[i]===b[i]);
    console.log(`${a[i]}===${b[i]}:${Boolean(a[i]===b[i])}`);
} */

if(rez==5){
    console.log(true);
} else {
    console.log(false);
}
console.log('finalREZ:', rez);