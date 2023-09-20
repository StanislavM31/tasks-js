import React, {useRef} from 'react';

function ExampleUseRef(){
    const inputRef = useRef(null);

    const focusInput = () =>{
        console.log(inputRef.current);
        inputRef.current.focus();
    }
    return(
        <div>
            <p>Пример использования useRef:
Сохранение ссылки на DOM-элемент
useRef возвращает изменяемый ref-объект,
свойство .current которого инициализируется
переданным аргументом (initialValue).
Возвращённый объект будет сохраняться в
течение всего времени жизни компонента</p>
            <input ref={inputRef} type="text" placeholder='enter...'/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}
export default ExampleUseRef;