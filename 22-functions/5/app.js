function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = generateSequence(); // возвращает объект-итератор

console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3

let arr = '1,2,3,4,5';
let temp = arr.split(",");
console.log(temp);
console.log(temp.join('-'));

function test(x){
  let count = 0;
  while (count<=x) {
    console.log(`count: ${count}`);
    count++;
    test();
  }
}

test(8);