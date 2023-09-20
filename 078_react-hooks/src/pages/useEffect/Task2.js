/*
2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
который увеличивает значение счетчика на 1 каждую секунду с использованием
useEffect.
 */
import { useState, useEffect } from "react";

export default function Task_2(){
    const[time, setTime] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(time + 1)
        }, 1000)
        return ()=>clearInterval(interval);
    })
    return(
        <>
        <p>
        2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
        который увеличивает значение счетчика на 1 каждую секунду с использованием
        useEffect.
        </p>
        <div>{time}</div>
        </>
    )
}