/*
3. Создайте приложение, которое отображает информацию о текущей роли
пользователя (например, "Администратор" или "Пользователь"). Используйте
useContext, чтобы хранить текущую роль и отображать ее на экране.
*/

import { useContext } from "react";
import MyContext from "../../context";

export default function Task_2() {
    const data = useContext(MyContext);

  const role = {
    0: "no role",
    1: "admin",
    2: "user",
    3: "other",
  };

  return (
    <>
      <p>
        3. Создайте приложение, которое отображает информацию о текущей роли
        пользователя (например, "Администратор" или "Пользователь"). Используйте
        useContext, чтобы хранить текущую роль и отображать
      </p>
      <button onClick={data.setRole}>0</button>
      <button onClick={data.setRole}>1</button>
      <button onClick={data.setRole}>2</button>
      <button onClick={data.setRole}>3</button>
      <p>роль {role[data.role]}</p>
    </>
  );
}
