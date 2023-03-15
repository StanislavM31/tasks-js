/*
Продемонстрируйте пример замыкания;
*/

function cloasure(){
    let myltiply = 1;
    return (a)=>{
        myltiply*=a;
        console.log(myltiply);
    }
}

let foo = cloasure();

foo(10);