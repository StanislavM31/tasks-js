import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slice/Counter_2";

export default function Task_2() {
  const count = useSelector((state) => state.counter_2);
  const dispatch = useDispatch();

  function callReducer1() {
    dispatch(increment());
  }
  function callReducer2() {
    dispatch(decrement());
  }

  return (
    <>
      <p>
        2. Создайте компонент, который будет отображать числовое значение и
        кнопки +1 и -1. При нажатии на кнопку увеличивать и уменьшать
        значения счетчика.
      </p>
      <p>{count}</p>
      <button onClick={callReducer1}>+1</button>
      <button onClick={callReducer2}>-1</button>
    </>
  );
}
