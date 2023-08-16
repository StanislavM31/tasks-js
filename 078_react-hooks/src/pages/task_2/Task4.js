/*
4. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
значения 2 input
*/
import { useState } from "react";
export default function Task5() {
  const [inp1, SetValue1] = useState("");
  const [inp2, SetValue2] = useState("");

  function setValueFromInp1(e){
    SetValue1(e.target.value);
  }
  function setValueFromInp2(e){
    SetValue2(e.target.value);
  }


  function compare(){

    if(inp1===inp2){
        alert( 'равны')
    } else {
        alert("не равны")
    }
  }
  return (
    <>
    <p> Сравнить Input'ы</p>
      <input type="text" placeholder="data1..." onChange={setValueFromInp1}/>
      <p></p>
      <input type="text" placeholder="data2..." onChange={setValueFromInp2}/>
    
      <div>
        <button onClick={compare}>compare</button>
      </div>
    </>
  );
}
