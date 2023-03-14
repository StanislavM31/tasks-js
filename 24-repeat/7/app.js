/*
7. Продемонстрируйте пример замены контекста одного объекта на другой
*/

//bind, call, apply ??

let obj = {
    'a': 1,
    'b': 2,
    'c': 100
}
let object = {
    value1: 'hi',
    value2: 'Johny',
    value3: 'D',
}
function foo(a){
    console.log(`${this.c} and ${a}`);

}
function foo1(a){
    console.log(`${a} and ${this.c}`);
}
function printValue(a,b,c){
    console.log(`${a} - ${b} - ${c} - ${this.value1} - ${this.value2} - ${this.value3}`);
}
foo1.call( obj, 5);
foo.call(obj, 5);
printValue.call(object, 1, 2, 3);
