/* 
19. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где 
каждый элемент увеличен на один.
*/
const numbers = [1, 2, 3, 4, 5];

function foo(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + 1);
  }

  return newArray;
}

const new_array = foo(numbers);

console.log(` ${numbers}`);
console.log(`массив +1 ${new_array}`);
