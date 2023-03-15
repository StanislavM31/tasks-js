/*
10. Продемонстрируйте пример каррирования
*/

function car(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}

console.log(car(5)(4)(10));;