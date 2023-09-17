/*
1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
оптимизировать обработчик клика на кнопке.
 */

import {useCallback, useState} from 'react';

export default function Counter(){
    const [value, setValue] = useState(0);
    const plusCallback = useCallback(plus,[value])
    const minusCallback = useCallback(minus,[value])

    function plus(){
        setValue(value+1);
    }
    function minus(){
        setValue(value-1);
    }
    return(
        <>
        <h1>{value}</h1>
        <button onClick={plusCallback}>+</button>
        <button onClick={minusCallback}>-</button>
        </>
    )
}

