import { useMemo, useState } from "react";

export default function Task_1() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [sum, setSum] = useState(null);

  function change1(e) {
    setValue1(+e.target.value);
  }
  function change2(e) {
    setValue2(+e.target.value);
  }
  useMemo(makeSum, [value1, value2]);

  function makeSum() {
    setSum(value1 + value2);
  }
  return (
    <div>
      <input type="text" onChange={change1} />
      <input type="text" onChange={change2} />
      <div>{sum}</div>
    </div>
  );
}
