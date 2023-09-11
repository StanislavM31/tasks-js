import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incrementCounter() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log(`Счетчик: ${count}`);
  }, [count]);
  return (
    <>
      <div>
        <p>количество кликов:{count}</p>
      </div>
      <button onClick={incrementCounter}>Увеличить счетчик</button>
    </>
  );
}
