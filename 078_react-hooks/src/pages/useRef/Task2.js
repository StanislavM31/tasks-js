/*
2. Создайте компонент, который при фокусе на текстовом поле добавляет
background (onFocus, onBlur)
*/

import { useRef } from "react";

export default function Task2(){
    const input = useRef(null);
    const focus = () => {
        input.current.style.backgroundColor = "grey";
    }

    return (
        <>
        <p>2. Создайте компонент, который при фокусе на текстовом поле добавляет
background (onFocus, onBlur)</p>
        <input type="text" ref={input} onFocus={focus} placeholder="focusMe"/>
        </>
    )
}