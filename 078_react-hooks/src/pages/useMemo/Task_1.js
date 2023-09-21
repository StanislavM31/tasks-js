import { useMemo, useState } from "react";

export default function Task_1() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  function ch1(e) {
    setNumber1(+e.target.value);
  }
  function ch2(e) {
    setNumber2(+e.target.value);
  }
  function makeSum() {
    setSum(number1 + number2);
  }

  useMemo(makeSum, [number1,number2]);

  return (
    <div>
      <p>
        1. Создайте компонент React, который отображает сумму двух чисел.
        Используй хук useState для хранения значений чисел и хук useMemo для
        кэширования результата суммы. При изменении значений чисел, сумма должна
        пересчитываться только тогда, когда необходимо.
      </p>
      <input type="text" onChange={ch1} />
      <input type="text" onChange={ch2} />
      <div>{sum}</div>
    </div>
  );
}
