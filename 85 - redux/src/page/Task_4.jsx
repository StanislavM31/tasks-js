import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isPolyndrom } from "../slice/Polyndrom";

export default function Task_4() {
  const data = useSelector((state) => state.polyndrom);
  const dispatch = useDispatch();
  const [poly, setPoly] = useState("");

  function checkPoly() {
    const sanitizedInput = poly.toLowerCase().replace(/\s/g, ""); // Убираем пробелы и приводим к нижнему регистру
    const reversedInput = sanitizedInput.split("").reverse().join(""); // Разворачиваем строку
    const isPalindrome = sanitizedInput === reversedInput; // Проверяем на палиндром

    // Выводим результат проверки в Redux
    dispatch(isPolyndrom(isPalindrome ? "Палиндром" : "Не палиндром"));
  }

  function changeData(e) {
    const temp = e.target.value;
    setPoly(temp);
  }

  return (
    <div id="1">
      <p>
        4. Создайте компонент формы. По клику на кнопку собрать данные из input
        и проверить вводимую строку на палиндром
      </p>
      <input type="text" onChange={changeData} placeholder="..." />
      <p>{data}</p>
      <button onClick={checkPoly}>isPolyndrom??</button>
    </div>
  );
}