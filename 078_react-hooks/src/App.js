import style from "./style.module.css";

import Task1 from "./pages/task_1/Task1";
import Task2 from "./pages/task_1/Task2";
import Task3 from "./pages/task_1/Task3";
import Task4 from "./pages/task_1/Task4";
import Task5 from "./pages/task_2/Task1";
import Task6 from "./pages/task_2/Task2";
import Task7 from "./pages/task_2/Task3";

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
      </div>
    </>
  );
}

export default App;
