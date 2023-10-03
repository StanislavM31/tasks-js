import { useSelector, useDispatch } from "react-redux";
import { isPolyndrom, fillInput } from "../slice/Polyndrom";

export default function Task_4() {
  const data = useSelector((state)=>state.polyndrom);
  const dispatch = useDispatch();

  function callIsPoly(){
    dispatch(isPolyndrom())
  }
  function changePoly(e){
    dispatch(fillInput(e.target.value));
  }

  return (
    <>

    <input type="text" onChange={changePoly}/>
    <button onClick={callIsPoly}>isPoly??</button>
    <h1>{String(data.result)}</h1>
    </>
  );
  }
