/*
1. Счетчик с использованием useState: Создай компонент React, который отображает
числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
состоянием счетчика. При нажатии на кнопки, значение счетчика должно
увеличиваться или уменьшаться.
*/

import { useState } from "react";

export default function useState1(){
    const [ val, setVal] = useState(0)
    const changeValue = (e) =>{
        console.log(e.target.innerText);
        e.target.innerText==="-"?setVal(val-1):setVal(val+1)

    }
    return(
        <>
        <h2>{val}</h2>
        <button onClick={changeValue}>+</button>
        <button onClick={changeValue}>-</button>
        </>
    )
}