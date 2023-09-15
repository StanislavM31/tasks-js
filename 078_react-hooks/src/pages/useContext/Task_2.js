/*
2. Разработайте приложение, в котором пользователь может выбирать язык
интерфейса (например, английский и испанский). Используйте useContext, чтобы
хранить текущий выбранный язык и переводить текст на выбранный язык в
компонентах.
*/
import { useState } from "react";
import { useContext } from "react";
import MyContext from "../../context";

export default function Task_2() {

    const data = useContext(MyContext)
  console.log(data);
const translate = {
    ru:"привет",
    en: "hi"
}

  return (
    <>
      <button onClick={data.sayHello}>{data.sayHello}</button>
      <button onClick={data.sayHello}></button>
      <p>{translate[data.value]}</p>
    </>
  );
}
