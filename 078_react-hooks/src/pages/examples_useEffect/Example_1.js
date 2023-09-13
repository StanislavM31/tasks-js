import { useState, useEffect } from "react";

export default function Task_2(){
    const[checked, setCheked] = useState(false);
    useEffect(()=>{
        alert(checked?"YES":"NO")
    })
    return(
        <>
        <p>
        Мы можем использовать хук useEffect, чтобы
        дождаться рендеринга, а затем передать
        значения в console.log
        </p>
        <input type="checkbox" value={checked} onChange={()=>setCheked(check=>!check)}/>
        {checked?"cheked":"not checked"}
        </>
    )
}