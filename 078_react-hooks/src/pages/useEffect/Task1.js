/*
useEffect:
1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
useState для хранения значения введенного текста и хук useEffect для
отслеживания изменений этого значения. При каждом изменении значения в
поле ввода, выводить его в консоль с помощью useEffect.
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