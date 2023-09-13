/*
3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
данные в заголовок с использованием useEffect.
*/

import {useState, useEffect} from "react"
import axios from "axios";

export default function Task_3(){
    const[info, setInfo] = useState();
    useEffect(()=> (async function sendRequest(){
        const response = await axios.get("https://api.ipify.org/?format=json");
        setInfo(response.data.ip);
    }),[info])

    return(
        <>
        <p>3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
данные в заголовок с использованием useEffect.</p>
        <h1>{info}</h1>
        </>
    )
}