/*
5. Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
компонент React, который при первичном рендеринге отправляет запрос к APIс
рандомно сгенерированным числом и отображает результат в консоль.
*/

import { useState, useEffect } from "react";
import axios from "axios";

export default function Task5() {
  const [obj, setObj] = useState("");
  /*   useEffect(() =>(

    async function request(){
      const num = Math.floor(Math.random() * 100);
      const info = await axios.get(`http://numbersapi.com/${num}`);
      console.log(info.data);
      setObj(info.data);
    }
  ),[]); */

  useEffect(() => {
    sendReq();
  }, []);

  async function sendReq() {
    const info = await axios.get(`http://numbersapi.com/${Math.floor(Math.random() * 100)}`);
    setObj(info.data)
  }

  return (
    <>
      <p>
        5. Факты с использованием useState и useEffect:
        http://numbersapi.com/:id. Создайте компонент React, который при
        первичном рендеринге отправляет запрос к APIс рандомно сгенерированным
        числом и отображает результат в консоль.
      </p>
      <h3>{obj}</h3>
    </>
  );
}
