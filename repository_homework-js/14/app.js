
/*
14. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где 
каждый элемент является квадратом исходного элемента.

*/
const array = [1,2,3,4,5]

function foo(array) {
    const sqrt_array = array.map((el)=> el*el);
    return sqrt_array;
}

const result = foo(array);
console.log(result);
