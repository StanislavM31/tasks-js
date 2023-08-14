/*
2. По клику на кнопку собрать данные из input и проверить вводимую строку на
палиндром

 */
import { useState } from "react";

export default function Task11(){
    const [inp, setInp] = useState('');

    function setInputValue(event){
        setInp(event.target.value)
    }
    function showPolyndrom(){
        if(inp === inp.split("").reverse().join("")){
            alert (`true polyndrom`)
        } else {
            alert (`NOT polyndrom`)
        }
    }
    return (
        <>
        <input type="text" onChange={setInputValue}/>
        <button onClick={showPolyndrom}>Click</button>
        </>
    )
}