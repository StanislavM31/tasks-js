/*
useReducer:
1. Создайте компонент счетчика, который может увеличивать или уменьшать
значение при нажатии на соответствующие кнопки.
*/

import {useCallback, useState, useReducer} from 'react';

function reducer(state, action){
    switch(action){
        case 'INCREMENT': return state+1;
        case 'DECREMENT': return state-1;
        default: break;
    }
}

export default function Task1(){
    const [ value, dispatch] = useReducer(reducer, 0);


    return(
        <>
        <h1>{value}</h1>
        <button onClick={()=> dispatch("INCREMENT")}>+</button>
        <button onClick={()=> dispatch("DECREMENT")}>+</button>        </>
    )

}

