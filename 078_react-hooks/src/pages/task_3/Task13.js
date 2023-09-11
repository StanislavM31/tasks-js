/*
у тебя есть кнопка с названием ,,добавить цвет,,.
по клику на кнопку твоя задача поменять цвет кнопки.
при повторном клике цвет вернуть в первоначальное состояние
*/
import { useState } from "react"

export default function Task13(){
    const [flag, setFlag] = useState(true);

    function change(e){
        if(flag===true){
            e.target.style = `background-color: green`;
            setFlag(false)
        } else {
            e.target.style = `background-color: none`;
            setFlag(true)
        }
    }
    return(
        <button onClick={change}> Change</button>
    )
}