/*
7. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
возвращает 2 кнопки и параграф, в котором отображается значение состояния
number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
на кнопку +1 автоматически прибавлялась +1 к стейту numberю При клике на -1
вычиталось 1 числовое значение
*/

import { useState } from "react";

export default function Task7(){
    let [number, setNumber] = useState(1);

    function changeValue(e){
        console.log(e.target.value);
        if(e.target.value==="plus"){
            setNumber(number+1)
        } else{
            setNumber(number-1)
        }
    }
    return(
        <>
        <div>
            <p>{number}</p>
            <div>
            <button value="plus" onClick={changeValue}>+</button>
            <button value="minus" onClick={changeValue}>-</button>
            </div>
        </div>
        </>
    )
}