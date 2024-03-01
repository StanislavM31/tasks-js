/* === */

const time = {
  hour: 2,
  seconds: () => 3600 * this.hour,
  test: () => console.log(`обращение к time.hour ${this.hour} ` ),
  minutes() {
    return 60 * this.hour;
  },
  sec: {
    multiply: () => console.log(`в ${time.hour} примерно ${Math.floor(time.hour * 60 * 60)} секунд` )
  },
};

console.log(time.seconds()); // Выводит результат функции из первого `seconds`
console.log(time.minutes()); // Выводит результат функции `minutes`
console.log(time.test()); // Выводит результат функции `minutes`
time.sec.multiply(); // Выводит результат функции `multiply` из вложенного `seconds`


/* === */

const deepObject = {
  level1: {
    value: 42,
    level2: {
      multiply: () => deepObject.level1.value * 2,
    },
  },
};

console.log(deepObject.level1.value); // 42
console.log(deepObject.level1.level2.multiply()); // 84

/* === */
/* плохой вариант */
function * badfn(num){
  for (let i = 0; i < num; i+= 1) {
    yield console.log(i);
  }
  const loop = badfn(5);
  loop.next();
  loop.next();
}

/* хороший вариант */
console.log("начало yield")
function * fn(num){
  for (let i = 0; i < num; i = i+1) {
    yield console.log(i);
  }
}
const loop = fn(10);
loop.next();
loop.next();

console.log("конец yield")
/* === */

function * generator(num){
  for (let i = 0; i < num; i++) {
    yield console.log("iteration №", i);
  }
}

let a = generator(5);
a.next();
a.next();
a.next();
a.next();
/* start === var */

var foo = function bar(){
  console.log("Hello");
}
console.log("typeof bar", typeof bar); // Выведет "typeof bar undefined"
console.log("typeof foo", typeof foo); // Выведет "typeof foo function"

/* вот настоящая анонимная функция */
var add = function(x, y) {
  return x + y;
};
//а не эта ваша named function expression

function superFoo(){
  console.log("this is superFoo!");
}
console.log("!!! а теперь на func expression"); // Выведет "typeof foo function"
var fuExpression = superFoo();
/* fuExpression() // is not a function  */
console.log("typeof superFoo", typeof superFoo); // Выведет "typeof bar undefined"
console.log("typeof fuExpression", typeof fuExpression); // Выведет "typeof foo function"
/* fuExpression(); */
/* end === var */

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

function* gen(num){
  for (let i = 0; i < num; i++) {
    yield console.log("i=",i);
  }
}

const looping = gen(5);
looping.next();
looping.next();
looping.next();

function close(){
  const a = "hello"
  return function (){
    return a + " John"
  };
}
const abc = close();

console.log(abc());

function wrapper(){
  let rand = Math.floor(Math.rand()*100);
  return null
}

console.log("============ var vs let ===========");


console.log("var", a_var);
let a_let;
if(true){

  console.log("var из блока", a_var);
}
var a_var=5;
console.log("var", a_var);

console.log("&&", 10 && null || 2);