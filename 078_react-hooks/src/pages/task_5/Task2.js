/*
2. По клику на кнопку собрать данные из input и проверить вводимую строку на
палиндром
*/
import { useState } from "react";

export default function Task2(){
    const[inp, setInput] = useState("");
    function setNewValueInp(e){
        setInput(e.target.value);
    }
    function isPolyndrom(){
        if(inp===inp.split("").reverse().join("")){
            alert('POLYNDROM')
        } else {
            alert('NOT POLYNDROM')
        }
    }
    return(
        <>
        <p>Task#1.2</p>
        <input type="text" placeholder="->..." onChange={setNewValueInp}/>
        <button onClick={isPolyndrom}>check</button>
        </>
    )
}