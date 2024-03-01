/* function rand() {
  console.log("(Math.random()", Math.random());
  try {
    if (Math.floor(Math.random() * 10) > 10) {
      throw new Error("superError");
    }
    return 1;
  } catch (error) {
    console.log("error is:", error);
    return 2;
  } finally {
    console.log("its a finally");
    return 3;
  }
}
//its a finally
let t = rand();
console.log(t);

let string = "(()";

function check(str) {
  str = str.split("").sort().join("");
  console.log(str);
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (el === "(") {
      stack.push(el);
      console.log(stack);
    } else if (el === ")") {
      const lastEl = stack.pop();
      console.log(stack);
      if (lastEl) {
        console.log("Не все скобки закрыты! пока еще", stack);
        return false;
      }
    }
  }
  if (stack.length === 0) {
    console.log("Все скобки закрыты правильно.");
  } else {
    console.log("Не все скобки закрыты!");
  }
}

check(string);

 */



let arr = ["adda", "nre", 'ubo', "ttto", "dd"];

let res = "";
let vowels = "aeuio";

/* for(let i = 0; i<arr.length; i++){
  let letter = arr[i][0];
  console.log(letter);

  if(vowels.includes(letter)){
    res= res+(arr[i]+"")
  }
} */
let a ;
a = arr.reduce((acc, item)=>{
  if(vowels.includes(item[0])){
    return acc + item
 }
}, "")


console.log(a);


let digit = [1,2,3,4,5];

function foo(a){
  let x = 0;
  return function inner(){
    return x+=a;
  }
}
console.log(foo(10));
console.log(foo(10));
console.log(foo(10));

