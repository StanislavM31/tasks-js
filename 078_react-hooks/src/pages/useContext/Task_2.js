/*
2. Разработайте приложение, в котором пользователь может выбирать язык
интерфейса (например, английский и испанский). Используйте useContext, чтобы
хранить текущий выбранный язык и переводить текст на выбранный язык в
компонентах.
*/
import { useContext } from "react";
import MyContext from "../../context";

export default function Task_2() {
  const data = useContext(MyContext);

  console.log(data);

  const translate = {
    ru: "привет",
    en: "hi",
    esp: "holla",
  };

  return (
    <>
      <p>
        2. Разработайте приложение, в котором пользователь может выбирать язык
        интерфейса (например, английский и испанский). Используйте useContext,
        чтобы хранить текущий выбранный язык и переводить текст на выбранный
        язык в компонентах.
      </p>
      <button onClick={data.sayHello}>ru</button>
      <button onClick={data.sayHello}>en</button>
      <button onClick={data.sayHello}>esp</button>
      <p>{translate[data.value]}</p>
    </>
  );
}
