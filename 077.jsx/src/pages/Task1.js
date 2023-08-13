/*
1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
квадрат и отобразить на странице
*/

import React from "react";

export default function Task1() {
  const arr = [1, 2, 3, 4, 5];
  const result = arr.map((el) => <p>{el ** 2}</p>);
  return <div>{result}</div>;
}
