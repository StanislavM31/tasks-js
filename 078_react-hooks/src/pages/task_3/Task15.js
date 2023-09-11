/*
Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку ,,открыть,, отображаешь меню.
*/

import { useEffect, useState } from "react";

export default function Task15() {
  const [flag, setFlag] = useState(true);
  
  function change(e) {
    if (flag) {
      setFlag(false);
      e.target.textContent = "открыть";
    } else {
      setFlag(true);
      e.target.textContent = "зыкрыть";
    }
  }
  /* flag?('открыто'):('закрыто') */
  return (
    <div>
      {flag ? (
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      ) : (
        <div></div>
      )}
      <button onClick={change}>зыкрыто</button>
    </div>
  );
}
