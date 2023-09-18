/*
3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
Используйте useCallback, чтобы оптимизировать функцию изменения статуса.
*/
import { useState, useEffect } from "react";

export default function Task3() {
  const [state, setState] = useState();
useEffect(()=> setState(true),[])
  function changeStatus(e) {
    if (state === false) {
      setState(true);

    }
    if (state === true) {
      setState(false);
    }
  }

  return (
    <>
    {state===true}?<div>Status:Active</div>:<div>Status:NONActive</div>
      <button onClick={changeStatus}>ChangeStatus</button>
    </>
  );
}
