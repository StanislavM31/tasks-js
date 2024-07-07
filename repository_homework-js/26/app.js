/* 
26. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
содержащий только положительные числа.
*/

function findPosNum(arr) {
    const posNum = [];
  
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
  
      if (number > 0) {
        posNum.push(number);
      }
    }
  
    return posNum;
  }
  
  const numbers = [1, -2, 3, -4, 5];
  const result = findPosNum(numbers);
  console.log(result);