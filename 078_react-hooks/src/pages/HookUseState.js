import { useState } from "react";

export default function HookUseState() {
  const [value, setValue] = useState({name:"", surname:""});

  function collectData() {
    console.log(value);
  }

  function changeValue(event){
    setValue({...value, [event.target.name]: event.target.value})
  }


  return (
    <>
      <div>
        <input type="text" name="name" onChange={changeValue} />
        <input type="text" name="surname" onChange={changeValue} />
      </div>
      <button onClick={collectData}>FetchData</button>
    </>
  );
}
