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
import Task23 from "./pages/task_7/Task_2";
import Task24 from "./pages/task_7/Task_3";
import Task25 from "./pages/task_7/Task_4";
import Task26 from "./pages/task_7/Task_5";
import Task31 from "./pages/useEffect/Task_1";
import Task32 from "./pages/useEffect/Task_2";
import Task33 from "./pages/useEffect/Task_3";
function App() {
  return (
    <>
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
      <HookUseState/>
      <div>
        <Counter/>
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
        <Task25 />
        <hr />
        <Task26 />
        <p>useEffect</p>
        <Task31/>
        <hr />
        <Task32/>
        <hr />
        <Task33/>
    </>
  );
}

export default App;
