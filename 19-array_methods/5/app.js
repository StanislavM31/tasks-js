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

a.forEach(function (elem,i) {
/*     console.log(`${a[elem]}==${b[elem]}:${Boolean(a[elem]==b[elem])}`);
    if(Boolean(a[elem]===b[elem])){
        rez++;
    } */
    console.log(`${a[i]}===${b[i]}:${Boolean(a[i]===b[i])}`);
    rez += Boolean(a[i]===b[i]);
})



/* for (const i of a) {
    console.log(i);
    rez += Boolean(a[i]===b[i]);
    console.log(`${a[i]}===${b[i]}:${Boolean(a[i]===b[i])}`);
} */
console.log('finalREZ:', rez);

if(rez==5){
    console.log(true);
} else {
    console.log(false);
}