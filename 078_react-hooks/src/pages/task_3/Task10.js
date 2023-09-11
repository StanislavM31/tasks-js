/*
у тебя есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя задача отобразить в h1 ,,привет,,.
*/
import { useState } from "react";

export default function Task10() {
  const [value, setValue] = useState("hi");
  
  function sayHi(){
    setValue('Hello, Friend')
  }
  return (
    <>
      <h1>{value}</h1>
      <button onClick={sayHi}>Поздороваться</button>
    </>
  );
}
