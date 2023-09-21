import { useState, useMemo, useRef } from "react";

export default function Task_2() {
  const [value, setValue] = useState(" ");
  const [result, setResult] = useState();

  function changeInp(event){
      setValue(+event.target.value);
      doFactorial()
    }

    function doFactorial() {
    let num = 1;
    for (let i = 1; i <= value; i++) {
        num *= i;
    }
    setResult(num);
  }
  const factorial = useRef();
  useMemo(doFactorial, [value])
  function showFactorial(){
    factorial.current.innerText = `результат: ${result}`;
  }

  return (
    <>
      <p>
        2. Разработайте компонент, который выполняет факториал числа при вводе
        значения в текстовое поле. Используйте useMemo, чтобы кэшировать
        результаты вычислений для разных введенных значений и отображать их без
        повторных вычислений.
      </p>
      <h3 ref={factorial}>результат...</h3>
      <input type="text" placeholder="число..." onChange={changeInp}></input>
      <button onClick={showFactorial}>Factorial it</button>
    </>
  );
}

/*

const [value, setValue] = useState(null);
    const [result, setResult] = useState(null);
    function changeInp(event){
        setValue(+event.target.value)
    }

    useMemo(doFactorial,[value]);

    function doFactorial(){
        let num = 1;
        for( let i =0; i<=value; i++){
            num *=1;
        }
        setResult(num)
    }

    return(
        <>
        <p></p>
        <h3>{result}</h3>
        <input onChange={changeInp} type='text'/>
        <button onClick={doFactorial}>CLICK</button>
        </>
    )
*/
