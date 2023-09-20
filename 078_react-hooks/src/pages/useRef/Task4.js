import { useRef} from "react";

export default function Task4() {

  const myRef = useRef();
  function increaseCount(){
    myRef.current.innerText = parseInt(myRef.current.innerText) + 1;
  }
  return (
    <>
      <p>
        4. Реализуйте компонент, который отслеживает количество кликов на кнопку
        с помощью useRef и выводит это число при каждом клике.
      </p>
      <h3 ref={myRef}>0</h3>
      <button onClick={increaseCount} >CLICK-&-COUNT</button>
    </>
  );
}
