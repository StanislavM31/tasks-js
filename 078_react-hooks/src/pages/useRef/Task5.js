import { useRef } from "react";

export default function Task5() {
  const ref = useRef();

  function tooltip() {
    console.log(ref.current.innerText);
    ref.current.innerText = "надо было покупать Bitcoin в 2010";
  }
  function tooltipDisaper() {
    ref.current.innerText = "наведи еще раз";
  }
  return (
    <>
      <p>
        5. Разработайте компонент для реализации "подсказок" (tooltips). При
        наведении на элемент интерфейса (например, кнопку), компонент отображает
        подсказку с текстом. Подсказку можно закрыть, кликнув по ней, используя
        useRef. (onMouseEnter, onMouseLeave)
      </p>
      <h3 ref={ref}>подсказка</h3>
      <div onMouseEnter={tooltip} onMouseLeave={tooltipDisaper}>
        наведиКурсор
      </div>
    </>
  );
}
