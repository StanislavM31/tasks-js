/*
6. Форма с использованием useState: Создайте компонент текстового поля, который
позволяет пользователю вводить текст и проверять введенный текст регулярным
выражением на почту. В заголовок отобразить true если введенная строка
удовлетворяет регулярному выражению и false в противном случае.
*/
import {useState, useEffect} from 'react'

export default function Task5(){
    const[value, setValue] = useState('');
    const[flag, setFlag] = useState('');
    useEffect(()=>{
        if(/^[a-z0-9]+@[a-z]+\.+[a-z]{2,}$/g.test(value)){
            console.log(value);
            setFlag("true")
        } else if(value===""){
            setFlag('')
        } else {
            console.log(value);
            setFlag("false")
        }
    },[value])

    function check(event){
        setValue(event.target.value);
    }
    return (
        <div>
            <h1 >{flag}</h1>
            <input type="text" onChange={check}/>
        </div>
    )
}