import {useState, useMemo} from 'react'

export default function Task_2(){
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
        <h3>{result}</h3>
        <input onChange={changeInp} type='text'/>
        <button onClick={doFactorial}>CLICK</button>
        </>
    )
}