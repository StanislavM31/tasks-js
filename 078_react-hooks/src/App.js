import style from "./style.module.css";

import Task1 from "./pages/task_1/Task1";
import Task2 from "./pages/task_1/Task2";
import Task3 from "./pages/task_1/Task3";
import Task4 from "./pages/task_1/Task4";
import Task5 from "./pages/task_2/Task1";
import Task6 from "./pages/task_2/Task2";
import Task7 from "./pages/task_2/Task3";
import Task8 from "./pages/task_2/Task4";
import Task9 from "./pages/task_2/Task7";
import Task10 from "./pages/task_3/Task10";
import Task11 from "./pages/task_3/Task11";
import Task13 from "./pages/task_3/Task13";
import Task14 from "./pages/task_3/Task14";
import Task15 from "./pages/task_3/Task15";
import HookUseState from "./pages/HookUseState";
import Counter from "./pages/Counter";
import Task16 from "./pages/task_3/Task16";
import Task18 from "./pages/task_5/Task4";
import Task20 from "./pages/task_5/Task6";
import Task21 from "./pages/task_6/task_1";
import Task23 from "./pages/useRef/Task1";
import Task24 from "./pages/task_7/Task_3";


import UseState1 from "./pages/useState/Task1";
import Task31 from "./pages/useEffect/Task1";
import Task32 from "./pages/useEffect/Task2";
import Task33 from "./pages/useEffect/Task3";
import Task34 from "./pages/useEffect/Task4";
import Task35 from "./pages/useEffect/Task5";


import UseRef1 from "./pages/useRef/Task1"
import UseRef2 from "./pages/useRef/Task2"
import UseRef3 from "./pages/useRef/Task3"
import UseRef4 from "./pages/useRef/Task4"
import UseRef5 from "./pages/useRef/Task5"

import UseMemo1 from "./pages/useMemo/Task_1";
import UseMemo2 from "./pages/useMemo/Task_2";

import MyContext from "../src/context";
import ContextAuth from "./pages/useContext/Task_1";
import Task52 from "./pages/useContext/Task_2";
import Task53 from "./pages/useContext/Task_3";

import ExampleUseRef from "./pages/useRef/ExampleUseRef";
import Callback1 from "./pages/useCallback/Task_1";
import Callback2 from "./pages/useCallback/Task2";
import Callback3 from "./pages/useCallback/Task3";
import UseReducer1 from "./pages/useReducer/Task1";

import { useState } from "react";

function App() {
  const [value, setValue] = useState("ru");
  const [role, makeRole] = useState();

  function sayHello(event) {
    setValue(event.target.textContent);
  }
  function setRole(event){
    makeRole(event.target.textContent);
  }
  return (
    <>
      <MyContext.Provider
        value={{
          name: "Albert",
          surname: "Surimov",
          value: value,
          sayHello: sayHello,
          role: role,
          setRole: setRole,
        }}
      >
        <div className={style.task1}>
          <Task1 />
          <hr />
          <Task2 />
          <hr />
          <Task3 />
          <hr />
          <Task4 />
          <hr />
        </div>
        <div className={style.task2}>
          <Task5 />
          <hr />
          <Task6 />
          <hr />
          <Task7 />
          <hr />
          <Task8 />
          <hr />
          <Task9 />
          <hr />
          <Task10 />
          <hr />
          <Task11 />
          <hr />
          <Task13 />
          <hr />
          <Task14 />
          <hr />
          <Task15 />
          <hr />
        </div>
        <HookUseState />
        <div>
          <Counter />
        </div>
        <hr />
        <Task16 />
        <Task18 />
        <Task20 />
        <hr />
        <Task21 />
        <hr />
        <Task23 />
        <hr />
        <Task24 />
        <hr />
        <div className={style.useStateHook}>
          <p>useState(название компонента в коде всегда с большой буквы)</p>
          <UseState1 />
        </div>
        <div className={style.useEffectHook}>
        <h2>useEffect</h2>
          <Task31 />
          <hr />
          <Task32 />
          <hr />
          <Task33 />
          <hr />
          <Task34 />
          <hr />
          <Task35 />
          <hr />
        </div>
        <p>.</p>
        <div className={style.useRefHook}>
        <h2>useRef</h2>
          <ExampleUseRef/>
          <UseRef1/>
          <UseRef2/>
          <UseRef3/>
          <UseRef4/>
          <UseRef5/>
        </div>
        <div className={style.useMemoHook}>
        <UseMemo1/>
        <UseMemo2/>
        </div>
        <hr />
        <h2>context</h2>
        <ContextAuth />
        <hr />
        <Task52 />
        <hr />
        <Task53 />
        <hr />
        <h2>useCallback</h2>
        <Callback1 />
        <hr />
        <Callback2 />
        <hr />
        <Callback3 />
        <hr />
        <UseReducer1 />
      </MyContext.Provider>
    </>
  );
}

export default App;
