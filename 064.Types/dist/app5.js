/*
5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
делятся на 2.
*/
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
/* let result5:number[] = arr5.map((el)=>{
    if(el%3==0 && el%2 !==0) return el;
})

console.log(result5); */
let result5 = arr5.filter(el => el % 3 == 0 && el % 2 !== 0);
console.log(result5);
