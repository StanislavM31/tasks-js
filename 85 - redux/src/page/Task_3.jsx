import { useSelector, useDispatch } from "react-redux";
import { fillInput } from "../slice/inputValue";

export default function Task_3() {

  const data = useSelector((state)=>state.inputValue);
  const dispatch = useDispatch();

  function showData(event) {
    dispatch(fillInput(event.target.value))
  }

  return (
    <>
      <p>
        3. Создайте компонент текстового поля, который позволяет пользователю
        вводить текст и отображает его в реальном времени.
      </p>
      <input type="text" onChange={showData}/>
      <h1>{data}</h1>
    </>
  );
}
