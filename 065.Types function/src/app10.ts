/*
10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
вернет 5. Использовать каррирование
*/


function car(a:number, b?:number){ //?number
    if( a && b)
    return (b:number)=>{
        return (a+b);
    }
}


console.log(car(2)(3));
