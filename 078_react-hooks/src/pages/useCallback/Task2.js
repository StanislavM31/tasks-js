/*
2. Создайте компонент, который отображает список элементов с кнопками
"Удалить". При нажатии на кнопку элемент должен быть удален из списка.
Используйте useCallback, чтобы оптимизировать функцию удаления элемента.
*/
import {useState, useCallback} from "react"

export default function Task2() {

  const [ array, setArray] = useState(["a", "b", "c", "10", "20"]);
  const deleteCallback = useCallback(deleteElement,[array]);

  function deleteElement(e) {
    const filtered = array.filter((el) => {
      return el !== e.target.id;
    });
    setArray(filtered);
  }

  return (
    <div>
      {array.map((el, index) => {
        return (
          <div key={index}>
            {el}
            <button onClick={deleteCallback} id={el}>
              Удалить
            </button>
          </div>
        );
      })}
    </div>
  );
}
