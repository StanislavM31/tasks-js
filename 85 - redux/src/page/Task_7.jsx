import { useSelector, useDispatch } from "react-redux";
import { sum,  stateValue1, stateValue2} from "../slice/SumInputs";

export default function Task_7() {
  const data = useSelector((state) => {
    return state.inputCounter;
  });
  const dispatch = useDispatch();

  function makeSum() {
    dispatch(sum());
  }

  return (
    <>
      <p>
        7. Создайте компонент, который отображает сумму значений input.
        Компонент состоит из Input для ввода математического значения и кнопки
        сложения для высчитывания результата внутри строки.
      </p>
      <p>число1</p>
      <input type="text" onChange={(e)=>{dispatch(stateValue1(e.target.value))}} placeholder="число1..." />
      <p>число2</p>
      <input type="text" onChange={(e)=>{dispatch(stateValue2(e.target.value))}} placeholder="число2..."/>
      <button onClick={makeSum}> посчитать </button>

      <h4>сумма 2х инпутов</h4>
      <h1>{data.result}</h1>
    </>
  );
}
