/*
3. Отображение текста с использованием useState: Создайте компонент, который
предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
отображается текст, а при нажатии на "Скрыть" текст скрывается.
*/

import {useState} from 'react'

export default function useState3(){
  const [flag, setValue] = useState('true')
  function show(event){
    if(flag === true){
      setValue(false)
    }
  }
  return(
    <div>
      <h1 onChange={show}>ТЕКСТ</h1>
      <button onClick={show}>Показать</button>
      <button onClick={show}>Скрыть</button>
    </div>
  )
}