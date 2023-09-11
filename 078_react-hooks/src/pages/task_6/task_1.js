/*
useState:
1. Изменение размера шрифта с использованием useState: Создайте компонент,
который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.
*/

import { useState } from "react";

export default function Task1(){
    const[px, setPx] = useState(10);
    function toBig(){
        setPx(px+1);
    }
    function toSmall(){
        setPx(px-1);
    }

    return(
        <div>
            <h1 style={{fontSize: px}}>TEXT</h1>
            <button onClick={toBig}>"Увеличить"</button>
            <button onClick={toSmall}>"Уменьшить"</button>
        </div>
    )
}