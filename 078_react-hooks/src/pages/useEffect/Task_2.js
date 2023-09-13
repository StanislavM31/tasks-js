/*
2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
который увеличивает значение счетчика на 1 каждую секунду с использованием
useEffect.
3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
данные в заголовок с использованием useEffect.
4. Таймер с использованием useState и useEffect: Создайте компонент, который
отображает текущее время и обновляет его каждую секунду.
5. Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
компонент React, который при первичном рендеринге отправляет запрос к APIс
рандомно сгенерированным числом и отображает результат в консоль.
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