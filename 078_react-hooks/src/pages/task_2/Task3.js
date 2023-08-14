/*
3. По клику на кнопку собрать данные из input и проверить вводимую строку на
почту
*/

import { useState } from "react";

export default function Task3() {
    const [inp, setInp] = useState("");

    function setEmail(e){
        setInp(e.target.value)
    }
    function checkEmail(){
        try {
            if (!/^[a-zA-Z0-9]+@+[a-z]+\.[a-z]{2,3}/gm.test(inp)) throw new Error('wrongemail');
            alert("good email")
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div>
      <input type="text" placeholder="enter email..." onChange={setEmail}/>
      <button onClick={checkEmail}>- click -</button>
    </div>
  );
}
