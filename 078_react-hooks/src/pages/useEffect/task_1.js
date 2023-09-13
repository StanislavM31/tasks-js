/*
useEffect:
1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
useState для хранения значения введенного текста и хук useEffect для
отслеживания изменений этого значения. При каждом изменении значения в
поле ввода, выводить его в консоль с помощью useEffect.
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
export default function Task_1(){
    const [state, setState] = useState('');
    const [text, setText] = useState('');
    useEffect(()=>{
        console.log(`state is: ${state}`)
    },[state])
    function changeValueInput(e){
        setState(e.target.value);
    }
    function showState(){
        setText(state);
    }
    return (
        <>
        <p>1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
        который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
        useState для хранения значения введенного текста и хук useEffect для
        отслеживания изменений этого значения. При каждом изменении значения в
        поле ввода, выводить его в консоль с помощью useEffect.</p>
        <h2>{text}</h2>
        <input type="text" onChange={changeValueInput}placeholder="..."/>
        <button onClick={showState}>ShowInputValue</button>
        </>
    )
}