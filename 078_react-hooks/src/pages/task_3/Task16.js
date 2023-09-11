/*
Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку ,,открыть,, отображаешь меню.
*/

import { useEffect, useState } from "react";

export default function Task16() {
  const [value, setValue] = useState('');
  useEffect(()=>{setValue("noValue")},[])
  function change(e) {
    setValue(e.target.textContent);
    console.log(value);
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={change}>About</button>
      <button onClick={change}>blog</button>
      <button onClick={change}>home</button>
    </div>
  );
}
