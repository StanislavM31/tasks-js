/*
3. Создайте компонент, который по клику на кнопку добавляет рандомный color к
заголовку
*/

import { useRef } from "react";

export default function Task5(){
    const tag = useRef();
    const array = ['red', 'blue', "green", "yellow", "purple"];

    function changeColor(){
        console.log(tag);
        console.log(tag.current);
        console.log(tag.current.style);
        tag.current.style.color = array[Math.floor(Math.random()*6)];
    }
    return(
        <div>
            <p ref={tag}>Paragraph</p>
            <button onClick={changeColor}>anotherColor, please</button>
        </div>
    )
}