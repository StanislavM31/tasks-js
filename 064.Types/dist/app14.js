/*
14. Напишите программу, которая находит и выводит наиболее часто встречающийся
символ в заданной строке.
*/
let string14 = 'aabbccssssssssssssssabc';
;
let array14 = string14.split('');
let a14;
let final = [];
for (let i = 0; i < array14.length; i++) {
    const element = array14[i];
    let count = 0;
    let temp = array14.filter(el => {
        if (el == element) {
            count++;
        }
        return el;
    });
    let result14 = {
        symbol: element,
        amount: count
    };
    final.push(result14);
}
/* a14 = array14.map(el=>{
    let count:number = 0
    let elementOfarray14:string = el;
    array14.forEach(element => {
        if(element==elementOfarray14){
            count++
        }
    });
    return ({el:count});
}) */
console.log(final);
