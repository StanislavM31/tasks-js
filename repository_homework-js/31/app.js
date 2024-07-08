/*
31. Напишите функцию, которая принимает массив строк и возвращает строку, которая 
встречается чаще всего.

*/
const strings = ["яна", "марина", "света", "лолита", "света", "настя"];


function mostRepeated(arr) {
  const object = {}; // {name: count}
  let mostRepeated = arr[0];
  let maxFrequency = 1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (object[element] === undefined) {
      object[element] = 1;
    } else {
      object[element]++;
    }

    if (object[element] > maxFrequency) {
      mostRepeated = element;
      maxFrequency = object[element];
    }
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        console.log(key + ": " + value);
      }
    }
  }

  return mostRepeated;
}

const result = mostRepeated(strings);
console.log(result);
