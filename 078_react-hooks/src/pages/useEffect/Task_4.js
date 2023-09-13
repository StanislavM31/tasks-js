/*
4. Таймер с использованием useState и useEffect: Создайте компонент, который
отображает текущее время и обновляет его каждую секунду.
var today = new Date();

// получаем дату и время
var now = today.toLocaleString();
console.log(now);
*/

import { useEffect, useState } from "react";

export default function Task_4() {
  const [date, setData] = useState("");
  useEffect(() => {
    setData(requestDate());
  },[]);
  const requestDate = () => {
    const time = new Date()
    return time.toLocaleString();
  };
  return (
    <>
      <p>
        4. Таймер с использованием useState и useEffect: Создайте компонент,
        который отображает текущее время и обновляет его каждую секунду. var
        today = new Date();
      </p>
      <h2>{date}</h2>
    </>
  );
}
