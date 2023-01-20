/*
7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
последующем вызове функции
*/

/* function wraper(){
    let s ='';
    let str = prompt('ENter string');
    return function(){
        return s+=str;
    }
} */
function wraper(){
    let s ='';
    console.log(s);
    return function(str){
        let tt = 0;
        console.log(tt++);
        console.log(s+=str);
        return s;
    }
}
function wraper1(){
    let s="";
    return function(str){
        let t = 0;
        return s;
    }
}
let wrap = wraper();
console.log(wrap);//тело функции
wrap('1111');
wrap('2222');
wrap('3333');
wrap('4444');
wrap('5555');
console.log(wraper1());
console.log(wraper1());

/* wraper(); /SHIT!!
console.log(wrap); */
//30.06