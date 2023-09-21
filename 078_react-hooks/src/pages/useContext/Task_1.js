
import { useContext } from 'react';
import MyContext from '../../context';

export default function ContextAuth(){
    const auth = useContext(MyContext)
    return(
        <div>
            <p>1. Создайте простое приложение для аутентификации пользователя. Используйте
useContext, чтобы хранить информацию о текущем пользователе.</p>
            <p>{auth.name}</p>
            <p>{auth.surname}</p>
        </div>
    )
};