/*
3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
данные в заголовок с использованием useEffect.
*/

import { useState, useEffect } from "react";
import axios from "axios";

export default function Task3(){
    const[ip, setIp] = useState("");

    useEffect(()=>{
         sendRequest()
        },[ip]);

    async function sendRequest(){

        const data = await axios.get("https://api.ipify.org/?format=json");
        setIp(data.data.ip);
    }

    return(
        <div>
            <h2>=== IP ===</h2>
            <p>{ip}</p>
        </div>
    )
}