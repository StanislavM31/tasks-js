/*
7. Продемонстрируйте пример замены контекста одного объекта на другой
*/

//bind, call, apply ??

let obj = {
    'a': 1,
    'b': 2,
    'c': 100
}
function foo(a){
    console.log(`${this.c} and ${a}`);

}
function foo1(a){
    console.log(`${a} and ${this.c}`);
}

foo.call(obj, 5);
foo1.call(5, obj);
