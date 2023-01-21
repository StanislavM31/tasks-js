/*
7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
последующем вызове функции
*/

function concat(param){
    return (str)=> param+=str;
}

let foo = concat('');
console.log(foo('coca'));
console.log(foo('cola'));
console.log(foo(' is good'));

const obj = {
    test: function(){
        console.log(this);
        console.log(obj.id);
        console.log(this.id);
        console.log(this.exist);
    },
    id: 777,
    exist: true,
    func: ()=>{
        console.log(this);
    }
}

obj.func();//window
obj.test();

function test(){
    console.log('---');
    return function(){
        console.log('+++++');
        console.log('+++++');
        console.log('+++++');

    }
}

let x = test();