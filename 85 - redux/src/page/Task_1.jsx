import { increment } from "../slice/Counter"
import { useDispatch, useSelector } from "react-redux"

function Task_1(){
    const count = useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    function callReducer(){
        dispatch(increment());
    }


    return(
        <>
        <p>{count}</p>
        <button onClick={callReducer}>+1</button>
        </>
    )
}

export default Task_1