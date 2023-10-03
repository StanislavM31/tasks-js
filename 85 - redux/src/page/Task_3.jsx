import { useSelector, useDispatch } from "react-redux";
import { showInRealTime } from "../slice/DisplayData";
import { useState } from "react";

export default function Task_3() {
  const data = useSelector((state) => state.display);
  const dispatch = useDispatch();
  const [currentInputInfo, setCurrentInputInfo] = useState('');

  function showData() {
    dispatch(showInRealTime(currentInputInfo));
  }
  function changeData(e) {
    const temp = e.target.value;
    setCurrentInputInfo(temp);
    console.log(currentInputInfo);
    showData();
  }

  return (
    <div id="1">
      <p>
        3. Создайте компонент текстового поля, который позволяет пользователю
        вводить текст и отображает его в реальном времени.
      </p>
      <input type="text" onChange={changeData} placeholder="..." />
      <p>{data}</p>
      <button>CLEAR</button>
    </div>
  );
}
