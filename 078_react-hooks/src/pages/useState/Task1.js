/*
1. Счетчик с использованием useState: Создай компонент React, который отображает
числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
состоянием счетчика. При нажатии на кнопки, значение счетчика должно
увеличиваться или уменьшаться.
*/

import { useRef, useState, useEffect } from "react";

export default function useState1(){
    const [ val, setVal] = useState(0)
    const myRef = useRef();
        const changeValue = (e) =>{
        console.log(e.target.innerText);
        e.target.innerText==="-"?setVal(val-1):setVal(val+1);
    }
    useEffect(()=>{
        if(val===1){
            myRef.current.textContent = "Плюсани еще!++"
        }
    },[val])
    return(
        <>
        <h2>{val}</h2>
        <button onClick={changeValue} ref={myRef}>+</button>
        <button onClick={changeValue}>-</button>
        </>
    )
}