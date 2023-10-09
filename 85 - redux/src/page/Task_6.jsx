import { useSelector, useDispatch } from "react-redux";
import { fillInput, isValid } from "../slice/Validation";

export default function Task_6() {
  const data = useSelector((state) => state.validation); //парамаетром принимает функцию которая принимает состояние (state)
  const dispatch = useDispatch();

  function callFillInput(event) {
    dispatch(fillInput(event.target.value));
  }

  function callValidation() {
    dispatch(isValid());
  }
  return (
    <>
      <p>
        6. Создайте компонент, который отображает проверку почты (true, false)
        на валидность регулярному выражению. Валидатор состоит из Input для
        ввода почты и кнопки для запуска валидатора.
      </p>
      <input type="text" onChange={callFillInput}/>
      <button onClick={callValidation}>CheckValidation</button>
      <h2>{String(data.result)}</h2>
    </>
  );
}
