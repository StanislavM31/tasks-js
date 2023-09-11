/*
Текст кнопки ,,открыто,, меняется на ,,закрыто,, по нажатию на себя
*/

import { useState } from "react";

export default function Task14(){

    const[flag, setFlag] = useState(true)

    function change(e){
        if(flag){
            setFlag(false)
            e.target.textContent = "открыто"
        } else{
            setFlag(true)
            e.target.textContent = "зыкрыто"
        }
    }
/* flag?('открыто'):('закрыто') */
    return(
        <div>
            <button onClick={change}>зыкрыто</button>
        </div>
    )
}