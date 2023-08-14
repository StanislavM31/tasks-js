/*
1. При вводе данных в input отображать вводимое значение в параграф текущей
страницы
 */
import { useState } from "react"

export default function Task10(){
    const [inp, setInp] = useState('')

    function changeValue(event){
        setInp(event.target.value)
    }
    return (
        <>
        <p > {inp}</p>
        <input type="text" onChange={changeValue}/>
        </>
    )
}