import { useRef } from "react";

export default function Task4(){
    const input = useRef(null);
    const focus = () => {
        input.current.style.backgroundColor = "grey";
    }

    return (
        <>
        <input type="text" ref={input} onFocus={focus} placeholder="focusMe"/>
        </>
    )
}