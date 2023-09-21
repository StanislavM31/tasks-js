
import { useReducer} from "react";

function reducer(count, action){
    switch(action){
        case "Increment":
            return count+1
        case "Decrement":
            return count-1
            default: break;
    }
}

export default function Task1() {
    const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>
        1. Создайте компонент счетчика, который может увеличивать или уменьшать
        значение при нажатии на соответствующие кнопки.
      </p>
      <h1>{count}</h1>
      <button onClick={()=>{ dispatch("Increment")}}>Plus</button>
      <button onClick={()=>{ dispatch("Decrement")}}>Minus</button>
    </>
  );
}