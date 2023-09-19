/*
3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
Используйте useCallback, чтобы оптимизировать функцию изменения статуса.
*/
import { useState, useEffect, useCallback } from "react";

export default function Task3() {
  const [state, setState] = useState(true);

/* useEffect(()=> setState(true),[]) */

 const status = useCallback(changeStatus,[state]);

  function changeStatus() {
    if (state === false) {
      setState(true);

    }
    if (state === true) {
      setState(false);
    }
  }

  return (
    <>
    {state===true?<div>Status:Active</div>:<div>Status:NONActive</div>}
      <button onClick={status}>ChangeStatus</button>
    </>
  );
}
