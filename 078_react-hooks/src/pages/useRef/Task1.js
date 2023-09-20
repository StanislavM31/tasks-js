
import { useRef } from "react";

export default function Task1(){
    const data = useRef();

    function makeBigger(){
        data.current.style.fontSize = parseInt(data.current.style.fontSize) + 1 + 'px';
    }
    function makeSmaller(){
        data.current.style.fontSize = parseInt(data.current.style.fontSize) - 1 + 'px';
    }

    return (
        <>
        <p>1. Создайте компонент, который при каждом клике на кнопку увеличивает размер
шрифта текста в элементе на странице.</p>
        <div style={{fontSize: "10px"}} ref = {data}>Good morning</div>
        <button onClick={makeBigger}>Click++</button>
        <button onClick={makeSmaller}>Click--</button>
        </>
    )
}