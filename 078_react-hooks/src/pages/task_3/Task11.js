/*
у тебя есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя задача
 отобразить в h1 ,,привет,,.
 при повторном клике на кнопку ,,поздороваться,, убирать ,,привет,, из h1
*/

import { useState } from "react";

export default function Task11(){
    const [value, setValueOnButton] = useState("");
    const [flag, setFlag] = useState(false);

    function changeOnClick(){
        if(flag===true){
            setFlag(false);
            setValueOnButton('')
        } else {
            setFlag(true);
            setValueOnButton("hello")
        }
    }

    return(
        <>
        <h1 >{value}</h1>
        <button onClick={changeOnClick}>=поздороваться=</button>
        </>
    )
}