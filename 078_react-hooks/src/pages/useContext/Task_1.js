
import { useContext } from "react";
import MyContext from '../../context';

export default function ContextAuth(){
    const auth = useContext(MyContext)
    return(
        <div>
            <h2>{auth.name}</h2>
            <p>{auth.surname}</p>
        </div>
    )
};