/*
1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
который содержит форму с полем ввода. Используйте хук useState для хранения
значения введенного текста и хук useEffect для отслеживания изменений этого
значения. При каждом изменении значения в поле ввода, выводить его в консоль
с помощью useEffect.
*/

import { useState } from "react";
import { useEffect } from "react";

export default function Task1(){
    const [value, setValue] = useState('');
    function show(e){
        setValue(e.target.value);
    }
    useEffect(()=>{
        console.log(value);
    }, [value])
    return (
        <div> <h1>{value}</h1>
            <input type="text" onChange={show}/>
        </div>
    )
}